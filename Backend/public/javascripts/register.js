document.addEventListener('DOMContentLoaded', function() {
            // Form submission
            const form = document.getElementById('registrationForm');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const username = document.getElementById('username').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                
                // Here you would typically send the data to a server
                console.log('Registration submitted:', { username, email, password });
                
                // Animation for successful submission
                const container = document.querySelector('.container');
                container.style.transform = 'translateY(-20px)';
                container.style.opacity = '0';
                
                setTimeout(() => {
                    alert('Registration successful!');
                    form.reset();
                    container.style.transform = 'translateY(0)';
                    container.style.opacity = '1';
                }, 500);
            });
            
            // Add more bubbles dynamically
            const bubblesContainer = document.querySelector('.bubbles');
            for (let i = 0; i < 5; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'bubble';
                
                // Random properties
                const size = Math.random() * 60 + 20;
                const left = Math.random() * 100;
                const duration = Math.random() * 10 + 5;
                const delay = Math.random() * 5;
                
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.left = `${left}%`;
                bubble.style.animationDuration = `${duration}s`;
                bubble.style.animationDelay = `${delay}s`;
                
                bubblesContainer.appendChild(bubble);
            }
        });