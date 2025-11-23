// ============================================
// NAVIGATION & MOBILE MENU
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ============================================
    // SMOOTH SCROLLING
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ============================================
    // BOOKING FORM HANDLING
    // ============================================
    const bookingForm = document.getElementById('bookingForm');
    const formMessage = document.getElementById('formMessage');

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('date').value,
            tour: document.getElementById('tour').value,
            guests: document.getElementById('guests').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!formData.name || !formData.email || !formData.phone || 
            !formData.date || !formData.tour || !formData.guests) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Date validation (must be in the future)
        const selectedDate = new Date(formData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
            showMessage('Please select a future date.', 'error');
            return;
        }

        // Since this is a static website, we'll handle the form submission
        // by opening the default email client with pre-filled information
        handleStaticFormSubmission(formData);
    });

    function handleStaticFormSubmission(data) {
        // Create email body
        const emailBody = `
New Tour Booking Request

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Preferred Date: ${data.date}
Selected Tour/Package: ${data.tour}
Number of Guests: ${data.guests}
Special Requests: ${data.message || 'None'}

Please respond to this inquiry as soon as possible.
        `.trim();

        // Create mailto link
        const mailtoLink = `mailto:bookings@zanzibartours.com?subject=Tour Booking Request - ${data.name}&body=${encodeURIComponent(emailBody)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success message
        showMessage('Your booking request has been prepared. Your email client will open shortly. If it doesn\'t open automatically, please contact us at bookings@zanzibartours.com', 'success');

        // Reset form
        bookingForm.reset();

        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        // Hide message after 10 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 10000);
    }

    // ============================================
    // ANIMATION ON SCROLL
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.tour-card, .package-card, .gallery-item, .about-content, .contact-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ============================================
    // NEWSLETTER FORM
    // ============================================
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

            if (email) {
                // For static site, we'll show a simple alert
                alert('Thank you for subscribing! We\'ll keep you updated with our latest offers and tours.');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // ============================================
    // TOUR CARDS - CLICK TO SCROLL TO BOOKING
    // ============================================
    const tourButtons = document.querySelectorAll('.btn-tour, .btn-package');
    tourButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const tourName = this.closest('.tour-card, .package-card')?.querySelector('h3')?.textContent;
            if (tourName) {
                // Store selected tour in sessionStorage
                sessionStorage.setItem('selectedTour', tourName);
                
                // Pre-select in the form if we're on the booking section
                setTimeout(() => {
                    prefillBookingForm();
                }, 500);
            }
        });
    });

    function prefillBookingForm() {
        const selectedTour = sessionStorage.getItem('selectedTour');
        if (selectedTour) {
            const tourSelect = document.getElementById('tour');
            if (tourSelect) {
                // Try to find and select the matching option
                const options = tourSelect.querySelectorAll('option');
                options.forEach(option => {
                    if (option.textContent.includes(selectedTour) || selectedTour.includes(option.textContent)) {
                        option.selected = true;
                    }
                });
                // Clear the stored value
                sessionStorage.removeItem('selectedTour');
            }
        }
    }

    // Check if we need to prefill on page load
    prefillBookingForm();

    // ============================================
    // GALLERY LIGHTBOX EFFECT
    // ============================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                // For a static site, we'll open the image in a new tab
                const imgSrc = img.getAttribute('src');
                window.open(imgSrc, '_blank');
            }
        });
    });

    // ============================================
    // SET MINIMUM DATE FOR BOOKING
    // ============================================
    const dateInput = document.getElementById('date');
    if (dateInput) {
        // Set minimum date to tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const minDate = tomorrow.toISOString().split('T')[0];
        dateInput.setAttribute('min', minDate);
    }

    // ============================================
    // ACTIVE NAVIGATION LINK HIGHLIGHTING
    // ============================================
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - header.offsetHeight - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ============================================
    // LAZY LOADING FOR IMAGES
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ============================================
    // CONSOLE WELCOME MESSAGE
    // ============================================
    console.log('%c Welcome to Zanzibar Tours! ', 'background: #00a8cc; color: white; font-size: 20px; padding: 10px;');
    console.log('%c Discover the beauty of Zanzibar with our amazing tours! ', 'color: #00a8cc; font-size: 14px;');
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Defer non-critical CSS loading
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Add any non-critical styles here
    });
}

// ============================================
// ERROR HANDLING FOR IMAGES
// ============================================
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        // Set a placeholder image if image fails to load
        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23ecf0f1"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%237f8c8d"%3EImage Not Available%3C/text%3E%3C/svg%3E';
        e.target.alt = 'Image not available';
    }
}, true);
