// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = menuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    const spans = menuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for internal anchors
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Modal Functionality
    const bookingModal = document.getElementById('bookingModal');
    const showFormBtn = document.getElementById('showFormBtn');
    const closeModal = document.getElementById('closeModal');
    const bookingForm = document.getElementById('bookingForm');
    const formSuccess = document.getElementById('formSuccess');

    if (showFormBtn && bookingModal) {
        showFormBtn.addEventListener('click', function() {
            bookingModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeModal && bookingModal) {
        closeModal.addEventListener('click', function() {
            closeModalFunction();
        });

        // Close modal when clicking outside
        bookingModal.addEventListener('click', function(e) {
            if (e.target === bookingModal) {
                closeModalFunction();
            }
        });
    }

    function closeModalFunction() {
        bookingModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Reset form after closing
        setTimeout(function() {
            if (bookingForm) {
                bookingForm.classList.remove('hidden');
                bookingForm.reset();
            }
            if (formSuccess) {
                formSuccess.classList.remove('active');
            }
        }, 300);
    }

    // Form Submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Clear any previous errors
            const errorElements = bookingForm.querySelectorAll('.error-message');
            errorElements.forEach(el => el.remove());

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                tour: document.getElementById('tour').value,
                date: document.getElementById('date').value,
                guests: document.getElementById('guests').value,
                message: document.getElementById('message').value
            };

            // Validate form
            let isValid = true;

            if (!formData.name || !formData.email || !formData.phone || !formData.tour || !formData.date || !formData.guests) {
                showFormError(bookingForm, 'Please fill in all required fields.');
                isValid = false;
            }

            // Email validation
            if (isValid && formData.email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(formData.email)) {
                    showFormError(document.getElementById('email').parentElement, 'Please enter a valid email address.');
                    isValid = false;
                }
            }

            // Phone validation (basic)
            if (isValid && formData.phone) {
                const phoneRegex = /^[\d\s\-\+\(\)]+$/;
                if (!phoneRegex.test(formData.phone)) {
                    showFormError(document.getElementById('phone').parentElement, 'Please enter a valid phone number.');
                    isValid = false;
                }
            }

            if (!isValid) {
                return;
            }

            // Create mailto link with form data
            const subject = encodeURIComponent('Tour Booking Request - ' + formData.tour);
            const body = encodeURIComponent(
                `Name: ${formData.name}\n` +
                `Email: ${formData.email}\n` +
                `Phone: ${formData.phone}\n` +
                `Tour/Package: ${formData.tour}\n` +
                `Date: ${formData.date}\n` +
                `Number of Guests: ${formData.guests}\n` +
                `Message: ${formData.message || 'None'}`
            );
            
            // Open default email client
            window.location.href = `mailto:info@zanzibar-tours.com?subject=${subject}&body=${body}`;

            // Show success message
            bookingForm.classList.add('hidden');
            formSuccess.classList.add('active');

            // Close modal after 3 seconds
            setTimeout(function() {
                closeModalFunction();
            }, 3000);
        });
    }

    function showFormError(element, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        element.appendChild(errorDiv);
    }

    // Set minimum date for date picker to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // Add loading animation for tour cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe tour cards, package cards, and features
    const animatedElements = document.querySelectorAll('.tour-card, .package-card, .feature, .booking-method');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && bookingModal && bookingModal.classList.contains('active')) {
            closeModalFunction();
        }
    });

    // Prevent form submission on Enter key (except in textarea)
    if (bookingForm) {
        bookingForm.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
            }
        });
    }

    // Add active state to navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    function highlightNavigation() {
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Performance monitoring (development only)
    // Uncomment in development to monitor performance
    // console.log('%c🏝️ Zanzibar Tours Website', 'color: #00a8cc; font-size: 20px; font-weight: bold;');
    // console.log('%cThis is a static website built with HTML, CSS, and vanilla JavaScript.', 'color: #666; font-size: 14px;');
    // console.log('%cNo backend required! Fast, secure, and SEO-friendly.', 'color: #666; font-size: 14px;');
});

// Service Worker Registration for PWA capabilities (optional enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js').then(function(registration) {
        //     console.log('ServiceWorker registration successful');
        // }, function(err) {
        //     console.log('ServiceWorker registration failed: ', err);
        // });
    });
}

// Performance monitoring
window.addEventListener('load', function() {
    // Development only - uncomment to monitor performance
    // if ('performance' in window) {
    //     const perfData = window.performance.timing;
    //     const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    //     console.log('Page load time:', pageLoadTime + 'ms');
    // }
});
