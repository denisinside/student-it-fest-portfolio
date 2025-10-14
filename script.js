// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Animated counter for stats
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // Animation duration in milliseconds
            const steps = 50;
            const increment = target / steps;
            const stepDuration = duration / steps;
            
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, stepDuration);
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stats-section')) {
                    animateCounters();
                }
                
                // Add animation class to member cards
                if (entry.target.classList.contains('member-card')) {
                    entry.target.style.animationPlayState = 'running';
                }
            }
        });
    }, observerOptions);
    
    // Observe stats section
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
    
    // Observe member cards
    const memberCards = document.querySelectorAll('.member-card');
    memberCards.forEach(card => {
        observer.observe(card);
    });
    
    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const teamSection = document.querySelector('.team-section');
            if (teamSection) {
                teamSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Add hover effects to member cards
    memberCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add subtle scale effect to skills
            const skills = this.querySelectorAll('.skill-tag');
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    skill.style.transform = 'scale(1.05)';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset skills scale
            const skills = this.querySelectorAll('.skill-tag');
            skills.forEach(skill => {
                skill.style.transform = 'scale(1)';
            });
        });
    });
    
    // Add typing effect to team tagline
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Start typing effect after page load
    setTimeout(() => {
        const tagline = document.querySelector('.team-tagline');
        if (tagline) {
            const originalText = tagline.textContent;
            typeWriter(tagline, originalText, 80);
        }
    }, 1000);
    
    // Parallax effect for floating shapes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = scrolled * speed;
            shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
    
    // Add click effect to skill tags
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('skill-tag')) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = e.target.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            e.target.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
    
    // Add dynamic greeting based on time
    function updateGreeting() {
        const now = new Date();
        const hour = now.getHours();
        const heroDescription = document.querySelector('.hero-description p');
        
        let greeting = '';
        if (hour < 12) {
            greeting = '🌅 Доброго ранку! ';
        } else if (hour < 18) {
            greeting = '☀️ Доброго дня! ';
        } else {
            greeting = '🌙 Доброго вечора! ';
        }
        
        if (heroDescription) {
            const originalText = heroDescription.textContent;
            heroDescription.textContent = greeting + originalText;
        }
    }
    
    updateGreeting();
    
    // Handle image loading errors
    handleImageErrors();
    
    // Function to handle member image loading
    function handleImageErrors() {
        const memberImages = document.querySelectorAll('.member-img');
        
        memberImages.forEach(img => {
            // Show fallback if image fails to load
            img.addEventListener('error', function() {
                const fallback = this.nextElementSibling;
                if (fallback && fallback.classList.contains('photo-fallback')) {
                    this.style.opacity = '0';
                    fallback.style.opacity = '1';
                }
            });
            
            // Hide fallback when image loads successfully
            img.addEventListener('load', function() {
                const fallback = this.nextElementSibling;
                if (fallback && fallback.classList.contains('photo-fallback')) {
                    this.style.opacity = '1';
                    fallback.style.opacity = '0';
                }
            });
            
            // Add loading animation
            if (img.complete && img.naturalWidth === 0) {
                // Image failed to load
                const fallback = img.nextElementSibling;
                if (fallback && fallback.classList.contains('photo-fallback')) {
                    img.style.opacity = '0';
                    fallback.style.opacity = '1';
                }
            }
        });
    }
    
    // Easter egg: Konami code
    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Activate party mode
                document.body.style.animation = 'partyMode 2s infinite';
                
                // Show secret message
                const secretMessage = document.createElement('div');
                secretMessage.innerHTML = '🎉 Вітаємо! Ви знайшли секретний код AbsurdCode! 🎉';
                secretMessage.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 20px 40px;
                    border-radius: 15px;
                    font-size: 1.2rem;
                    z-index: 9999;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                    animation: bounce 1s infinite;
                `;
                
                document.body.appendChild(secretMessage);
                
                setTimeout(() => {
                    secretMessage.remove();
                    document.body.style.animation = '';
                }, 5000);
                
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Debounced scroll handler
    const debouncedScrollHandler = debounce(() => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = scrolled * speed;
            shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        });
    }, 16); // ~60fps
    
    window.addEventListener('scroll', debouncedScrollHandler);
});

// Add CSS for ripple effect and party mode
const style = document.createElement('style');
style.textContent = `
    .skill-tag {
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes partyMode {
        0%, 100% { 
            filter: hue-rotate(0deg); 
        }
        50% { 
            filter: hue-rotate(180deg); 
        }
    }
`;
document.head.appendChild(style);
