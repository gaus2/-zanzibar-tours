# Zanzibar Tours & Excursions Website

A modern, fast, secure, SEO-friendly, and mobile-responsive static website for showcasing Zanzibar tours and excursions.

## Features

- **Static Website**: No backend required - fast, secure, and easy to deploy
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Card support
- **Multiple Booking Options**:
  - WhatsApp direct messaging
  - Email booking
  - Online booking form
- **Tour Showcase**: Display various tours and packages with detailed information
- **Photo Gallery**: Showcase beautiful images of Zanzibar
- **Contact Information**: Easy-to-find contact details with Google Maps integration
- **Modern UI/UX**: Smooth scrolling, animations, and intuitive navigation
- **Performance**: Lightweight and fast-loading

## Structure

```
-zanzibar-tours/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   └── script.js       # Interactive features
├── assets/
│   └── images/         # Images and graphics
├── favicon.png         # Website favicon
└── README.md          # This file
```

## Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/gaus2/-zanzibar-tours.git
   cd -zanzibar-tours
   ```

2. Open `index.html` in your web browser:
   - Double-click `index.html`, or
   - Right-click and select "Open with" your preferred browser, or
   - Use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (with http-server)
     npx http-server
     ```

3. Visit `http://localhost:8000` in your browser

### Deployment

This is a static website and can be deployed to any static hosting service:

- **GitHub Pages**: Enable in repository settings
- **Netlify**: Drag and drop the folder or connect your repository
- **Vercel**: Import the repository
- **AWS S3**: Upload files to an S3 bucket with static website hosting
- **Azure Static Web Apps**: Deploy directly from GitHub
- **Traditional Web Hosting**: Upload via FTP to your hosting provider

## Customization

### Update Contact Information

Edit `index.html` and update:
- Phone numbers (search for `+255 123 456 789`)
- Email addresses (search for `@zanzibartours.com`)
- WhatsApp number (search for `wa.me/255123456789`)
- Physical address
- Social media links

### Add Your Images

Replace placeholder images in `assets/images/` with your actual photos:
- `hero-bg.jpg` (1920x1080) - Hero section background
- `zanzibar-beach.jpg` (800x600) - About section
- Tour images (400x300 each)
- Gallery images (400x300 each)
- `og-image.jpg` (1200x630) - Social media preview

### Customize Colors

Edit `css/styles.css` and modify the CSS variables in `:root`:
```css
:root {
    --primary-color: #00a8cc;    /* Main brand color */
    --secondary-color: #ff6b6b;  /* Accent color */
    --dark-color: #2c3e50;       /* Dark text/backgrounds */
    /* ... more colors */
}
```

### Update Tour Information

Edit the tours and packages in `index.html`:
- Tour titles, descriptions, durations, and prices
- Package features and pricing
- Add or remove tours as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Lazy loading for images
- Smooth scroll behavior
- Optimized animations
- Minimal dependencies (only Font Awesome for icons)
- Efficient CSS with modern techniques
- Fast page load times

## Security

- No backend to compromise
- HTTPS recommended (provided by most static hosts)
- No data storage
- External resources loaded via CDN with integrity checks
- Content Security Policy headers (configure on hosting platform)

## License

© 2024 Zanzibar Tours. All rights reserved.

## Support

For questions or issues:
- Email: info@zanzibartours.com
- Phone: +255 123 456 789
- WhatsApp: [Contact Us](https://wa.me/255123456789)

---

Built with ❤️ for travelers exploring Zanzibar
