# Zanzibar Tours Website

A fast, secure, SEO-friendly, mobile-responsive static website for showcasing Zanzibar tours & excursions and enabling customers to conveniently book tours through WhatsApp, email, or a booking form.

## Features

### 🌟 Core Features
- **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices
- **SEO Optimized** - Comprehensive meta tags for search engines and social media sharing
- **No Backend Required** - Completely static website with fast loading times
- **Multiple Booking Options** - WhatsApp, Email, and Online Booking Form
- **Secure** - Implements security headers (CSP, X-Frame-Options, X-Content-Type-Options)

### 📱 Website Sections
1. **Hero Section** - Eye-catching landing area with call-to-action buttons
2. **Tours Section** - 6 featured tours with descriptions, durations, and pricing
   - Spice Plantation Tour
   - Prison Island & Snorkeling
   - Stone Town Walking Tour
   - Dolphin Watching Tour
   - Sunset Dhow Cruise
   - Jozani Forest Tour
3. **Packages Section** - 3 tour packages at different price points
   - Explorer Package ($299)
   - Adventure Package ($499) - Most Popular
   - Luxury Package ($799)
4. **About Section** - Company benefits and value propositions
5. **Booking Section** - Multiple contact methods with interactive form
6. **Footer** - Contact information, quick links, and social media

### ✨ Interactive Features
- Mobile-friendly hamburger menu
- Smooth scrolling navigation
- Interactive booking form modal with validation
- Back-to-top button
- Scroll-triggered animations
- Active navigation highlighting

## Technology Stack

- **HTML5** - Semantic markup for accessibility
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No dependencies, lightweight and fast
- **SVG** - Scalable favicon and placeholder images

## Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/gaus2/-zanzibar-tours.git
cd -zanzibar-tours
```

2. Serve the website using any static server:

**Using Python:**
```bash
python3 -m http.server 8000
```

**Using Node.js:**
```bash
npx http-server
```

**Using PHP:**
```bash
php -S localhost:8000
```

3. Open your browser and navigate to `http://localhost:8000`

### Deployment

This is a static website and can be deployed to any static hosting service:

- **GitHub Pages** - Free hosting for GitHub repositories
- **Netlify** - Drag and drop deployment
- **Vercel** - Git-based deployment
- **AWS S3** - Scalable cloud hosting
- **Any web server** - Apache, Nginx, etc.

Simply upload the files to your hosting service's root directory.

## File Structure

```
-zanzibar-tours/
├── index.html      # Main HTML file with all content
├── styles.css      # Responsive styles and animations
├── script.js       # JavaScript for interactivity
├── favicon.svg     # Website favicon
├── .gitignore      # Git ignore file
└── README.md       # This file
```

## Customization

### Updating Contact Information

Edit `index.html` and update:
- WhatsApp number: Search for `255123456789` and replace
- Email address: Search for `info@zanzibar-tours.com` and replace
- Physical address: Update in the footer section

### Modifying Tours

Tours are defined in the HTML within the `tours-grid` section. Each tour card contains:
- Tour name
- Description
- Duration
- Price

### Changing Colors

Colors are defined as CSS variables in `styles.css`:
```css
:root {
    --primary-color: #00a8cc;
    --secondary-color: #ff6b6b;
    --dark-color: #2c3e50;
    --light-color: #ecf0f1;
}
```

### Adding Images

Replace the SVG placeholders with actual images:
1. Add your images to an `images/` folder
2. Update the `background-image` URLs in the tour cards
3. Update social media meta tag images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies
- Minimal CSS and JavaScript
- Optimized for fast loading
- Mobile-first responsive design

## Security

The website implements several security best practices:
- Content Security Policy (CSP) headers
- X-Frame-Options for clickjacking protection
- X-Content-Type-Options to prevent MIME sniffing
- No inline scripts (except for event handlers)
- Secure external links with `rel="noopener noreferrer"`

## SEO

- Semantic HTML5 elements
- Proper heading hierarchy
- Meta descriptions and keywords
- Open Graph tags for social media
- Twitter Card tags
- Mobile-responsive (Google mobile-first indexing)
- Fast loading times

## Accessibility

- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Semantic HTML structure
- Alt text for images (when added)

## License

This website is created for Zanzibar Tours. All rights reserved.

## Support

For questions or support, contact:
- Email: info@zanzibar-tours.com
- Phone: +255 123 456 789
- WhatsApp: [Chat with us](https://wa.me/255123456789)

## Screenshots

### Desktop View
![Desktop View](https://github.com/user-attachments/assets/234240bf-d8a4-42f2-b8e1-e71a9c057f74)

### Mobile View
![Mobile View](https://github.com/user-attachments/assets/4f537d7d-da27-4875-aa4e-374a2c281aa6)

### Mobile Menu
![Mobile Menu](https://github.com/user-attachments/assets/6e0bfd28-4e04-4540-8ec4-01703749021f)

### Booking Form
![Booking Form](https://github.com/user-attachments/assets/f9ad60c6-ab41-4c10-9e00-e66e455fa627)
