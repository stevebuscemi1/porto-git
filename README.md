# AI-Assisted Developer Portfolio

A modern, responsive portfolio website showcasing AI-assisted projects, built with vanilla JavaScript, HTML5, and CSS3. This portfolio features a clean, interactive design with smooth animations and a focus on performance and accessibility.

## 🚀 Features

- **Responsive Design**: Looks great on all devices
- **Dark/Light Mode**: Toggle between themes with a keyboard shortcut (Ctrl+D)
- **Project Showcase**: Filterable and searchable project gallery
- **Interactive Stats**: Tracks project views and user interactions
- **Keyboard Navigation**: Full keyboard accessibility and shortcuts
- **Progressive Web App**: Works offline with service worker
- **Performance Optimized**: Fast loading with lazy loading images and efficient animations
- **Contact Form**: Easy way for visitors to get in touch

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Icons**: Font Awesome 6
- **Animations**: CSS Transitions & Keyframes
- **Performance**: Lazy loading, requestAnimationFrame, Intersection Observer
- **PWA**: Service Worker for offline functionality
- **Hosting**: GitHub Pages compatible

## 🏗️ Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── js/
│   └── projects.js     # Project data and functionality
├── css/
│   └── styles.css      # All styles (embedded in HTML in this case)
├── project-template.json # Project data
├── sw.js              # Service Worker
├── .gitignore
└── README.md
```

## 🎨 Design System

### Color Scheme
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)
- **Background**: Dark/Light theme support
- **Text**: High contrast for readability
- **Accents**: Used for interactive elements and highlights

### Typography
- **Primary Font**: Roboto (Clean and modern)
- **Code Font**: Source Code Pro (For technical elements)
- **Base Size**: 16px with responsive scaling

### Components
- **Project Cards**: Hover effects with smooth transitions
- **Modal System**: For detailed project views
- **Navigation**: Sticky header with smooth scrolling
- **Form Elements**: Accessible and styled inputs/buttons
- **Notifications**: Non-intrusive system messages

## 🎯 Key Features in Detail

### Project Gallery
- Filter projects by category (Apps, Games, Tools)
- Search functionality with instant results
- Smooth hover and focus states
- Lazy-loaded images for better performance

### Interactive Elements
- Theme toggle with system preference detection
- Keyboard shortcuts (press `?` to view)
- View counters for projects
- Smooth scroll behavior

### Performance Optimizations
- Critical CSS inlined
- JavaScript modules and deferred loading
- Image optimization and lazy loading
- Efficient DOM updates with requestAnimationFrame
- Service Worker for offline support

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for development)
- GitHub account (for deployment)

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/stevebuscemi1/porto-git.git
   cd your-repo
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python's built-in server
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Repository Settings > Pages
3. Select the `main` branch and `/ (root)` folder
4. Your site will be live at `https://stevebuscemi1.github.io/porto-git`

### Custom Domain (Optional)
1. Add a `CNAME` file with your domain
2. Configure DNS settings with your domain registrar
3. Update GitHub Pages settings with your custom domain

## 🛡️ License

This project is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0).

This means you are free to:
- **Share** — copy and redistribute the material in any medium or format.
- **Adapt** — remix, transform, and build upon the material.

Under the following terms:
- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- **Non-Commercial** — You may not use the material for commercial purposes.
- **ShareAlike** — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

For a full summary of the license, please visit [https://creativecommons.org/licenses/by-nc-sa/4.0/](https://creativecommons.org/licenses/by-nc-sa/4.0/).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Changelog

### [1.0.0] - 2025-12-04
- Initial release
- Complete portfolio with dark/light theme
- Project showcase with filtering and search
- Contact form with validation
- Performance optimizations
- PWA support

## 📧 Contact

E-mail: minequest.subsystem972@passinbox.com

Project Link: [https://github.com/stevebuscemi1/porto-git](https://github.com/stevebuscemi1/porto-git)