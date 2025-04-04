script>
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('skills-container')) {
                animateSkillBars();
            }
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        
        // Here you would typically send the form data to a server
        // For demo purposes, we'll just show an alert
        alert('Thank you for your message, Sharon will get back to you soon!');
        this.reset();
        
        // In a real implementation, you might use fetch():
        /*
        fetch('your-server-endpoint', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
            this.reset();
        })
        .catch(error => {
            alert('Error sending message. Please try again later.');
        });
        */
    });
}

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Simple validation
        if (email.includes('@') && email.includes('.')) {
            alert('Thank you for subscribing to Sharon\'s newsletter!');
            this.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Dark/light mode toggle (optional)
const modeToggle = document.createElement('div');
modeToggle.innerHTML = '<button id="theme-toggle" class="btn"><i class="fas fa-moon"></i></button>';
modeToggle.style.position = 'fixed';
modeToggle.style.bottom = '20px';
modeToggle.style.right = '20px';
modeToggle.style.zIndex = '1000';
document.body.appendChild(modeToggle);

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        this.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        this.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Add light mode styles if you want this feature
const style = document.createElement('style');
style.textContent = `
    body.light-mode {
        background-color: #f5f5f5;
        color: #333;
    }
    body.light-mode .skill-category,
    body.light-mode .project-card,
    body.light-mode .about-info,
    body.light-mode .timeline-content,
    body.light-mode .service-card,
    body.light-mode .form-group input,
    body.light-mode .form-group textarea {
        background-color: #fff;
        color: #333;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    body.light-mode .section-title,
    body.light-mode .project-title,
    body.light-mode table tr td:first-child {
        color: var(--primary);
    }
    body.light-mode .project-desc {
        color: #666;
    }
`;
document.head.appendChild(style);

