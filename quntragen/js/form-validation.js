function initFormValidation() {
    const contactForms = document.querySelectorAll('.contact-form');
    
    if (contactForms.length > 0) {
        contactForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form elements
                const name = this.querySelector('input[type="text"]')?.value.trim();
                const email = this.querySelector('input[type="email"]')?.value.trim();
                const subject = this.querySelectorAll('input[type="text"]')[1]?.value.trim();
                const message = this.querySelector('textarea')?.value.trim();
                
                // Simple validation
                let isValid = true;
                
                if (!name) {
                    isValid = false;
                    alert('Please enter your name');
                    return;
                }
                
                if (!email) {
                    isValid = false;
                    alert('Please enter your email');
                    return;
                } else if (!validateEmail(email)) {
                    isValid = false;
                    alert('Please enter a valid email address');
                    return;
                }
                
                if (!message) {
                    isValid = false;
                    alert('Please enter your message');
                    return;
                }
                
                if (isValid) {
                    // Here you would typically send the data to a server
                    console.log('Form submitted:', { name, email, subject, message });
                    
                    // Show success message
                    alert('Thank you for your message! We will get back to you soon.');
                    
                    // Reset form
                    this.reset();
                }
            });
        });
    }
    
    // Email validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}

// Export for main.js
function initFormValidation() {
    initFormValidation();
}