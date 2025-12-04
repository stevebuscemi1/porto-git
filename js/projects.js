class ProjectManager {
    constructor() {
        this.projectsContainer = document.querySelector('.projects-grid');
        this.projectsData = [];
    }

    async loadProjects() {
        try {
            const response = await fetch('project-template.json');
            const data = await response.json();
            this.projectsData = data.projects;
            this.renderProjects();
        } catch (error) {
            console.error('Error loading projects:', error);
            // Fallback to default projects if template loading fails
            this.projectsData = [];
        }
    }

    renderProjects() {
        if (!this.projectsContainer) return;
        
        // Clear existing projects
        this.projectsContainer.innerHTML = '';
        
        // Render each project
        this.projectsData.forEach((project, index) => {
            const projectElement = this.createProjectElement(project);
            this.projectsContainer.appendChild(projectElement);
            
            // Update view count from localStorage if exists
            this.updateViewCount(project.id);
            
            // Trigger fade-in animation with staggered delay
            setTimeout(() => {
                projectElement.classList.add('visible');
            }, index * 100);
        });
        
        // Initialize any event listeners or other functionality
        this.initializeProjectInteractions();
        
        // Dispatch event to let other systems know projects are loaded
        document.dispatchEvent(new CustomEvent('projectsLoaded', {
            detail: { projects: this.projectsData }
        }));
    }

    createProjectElement(project) {
        const projectElement = document.createElement('article');
        projectElement.className = `project-card fade-in`;
        projectElement.dataset.category = project.category;
        projectElement.dataset.projectId = project.id;
        
        projectElement.innerHTML = `
            <div class="view-count">
                <i class="fas fa-eye"></i>
                <span class="view-number">0</span>
            </div>
            <div class="project-thumbnail">
                <img 
                    src="${project.image}" 
                    alt="${project.title}" 
                    loading="lazy"
                    onerror="this.src='https://picsum.photos/seed/project${project.id}/900/500.jpg'"
                >
                <span class="project-type">${project.type}</span>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.githubUrl && project.githubUrl !== '#' ? `
                        <a href="${project.githubUrl}" class="project-link" aria-label="View ${project.title} source code" target="_blank">
                            <i class="fab fa-github"></i> Code
                        </a>
                    ` : ''}
                    ${project.liveDemoUrl && project.liveDemoUrl !== '#' ? `
                        <a href="${project.liveDemoUrl}" class="project-link" aria-label="View ${project.title} demo" target="_blank">
                            <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
        
        return projectElement;
    }

    updateViewCount(projectId) {
        const viewElement = document.querySelector(`.project-card[data-project-id="${projectId}"] .view-number`);
        if (viewElement) {
            const stats = JSON.parse(localStorage.getItem('portfolioStats') || '{}');
            const projectViews = stats[`project_${projectId}_views`] || 0;
            viewElement.textContent = projectViews.toLocaleString();
        }
    }

    initializeProjectInteractions() {
        // Initialize modal interactions - click on card to open modal
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Don't open modal if clicking on links
                if (e.target.closest('.project-links')) {
                    return;
                }
                
                const projectId = parseInt(card.dataset.projectId);
                const project = this.projectsData.find(p => p.id === projectId);
                if (project) {
                    this.openProjectModal(project);
                }
            });
        });
    }

    openProjectModal(project) {
        // Track the view - check if StatisticsTracker exists
        if (typeof StatisticsTracker !== 'undefined') {
            StatisticsTracker.trackProjectView(project.id);
        }
        
        // Create or update modal content
        const modal = document.getElementById('project-modal');
        if (!modal) {
            console.error('Modal not found');
            return;
        }
        
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <img 
                        src="${project.image}" 
                        alt="${project.title}"
                        onerror="this.src='https://picsum.photos/seed/project${project.id}/900/500.jpg'"
                    >
                    <button class="modal-close" aria-label="Close modal">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <h2 class="modal-title">${project.title}</h2>
                    <span class="modal-type">${project.type}</span>
                    <p class="modal-description">${project.description}</p>
                    
                    <h3 style="margin-bottom: 15px; color: var(--text-primary);">Technology Stack</h3>
                    <div class="modal-tech-grid">
                        ${project.technologies.map(tech => `
                            <div class="modal-tech-item">
                                <div class="modal-tech-name">${tech}</div>
                                <div class="modal-tech-desc">Core technology</div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="modal-links">
                        ${project.githubUrl && project.githubUrl !== '#' ? `
                            <a href="${project.githubUrl}" class="modal-link secondary" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github"></i>
                                View Code
                            </a>
                        ` : ''}
                        ${project.liveDemoUrl && project.liveDemoUrl !== '#' ? `
                            <a href="${project.liveDemoUrl}" class="modal-link" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-external-link-alt"></i>
                                Live Demo
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
        
        // Show the modal
        modal.style.display = 'flex';
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Add event listener for the close button
        const closeButton = modal.querySelector('.modal-close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                modal.style.display = 'none';
                modal.classList.remove('show');
                document.body.style.overflow = 'auto';
            });
        }
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                modal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Close modal with Escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                modal.style.display = 'none';
                modal.classList.remove('show');
                document.body.style.overflow = 'auto';
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }
}

// Initialize the project manager when the DOM is loaded
let projectManager;

document.addEventListener('DOMContentLoaded', () => {
    projectManager = new ProjectManager();
    projectManager.loadProjects();
});

// Export for global access
window.ProjectManager = ProjectManager;
window.projectManager = projectManager;
