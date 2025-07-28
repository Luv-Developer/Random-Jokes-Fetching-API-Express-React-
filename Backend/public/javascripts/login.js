document.addEventListener('DOMContentLoaded', function() {
            // Create particles
            const particlesContainer = document.getElementById('particles');
            const particleCount = window.innerWidth < 600 ? 20 : 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random properties
                const size = Math.random() * 10 + 2;
                const posX = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = Math.random() * 10 + 10;
                const opacity = Math.random() * 0.5 + 0.3;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.animationDelay = `${delay}s`;
                particle.style.animationDuration = `${duration}s`;
                particle.style.opacity = opacity;
                
                // Random shape (circle or square)
                if (Math.random() > 0.7) {
                    particle.style.borderRadius = '0';
                }
                
                particlesContainer.appendChild(particle);
            }
            
            // Form submission
            const form = document.getElementById('loginForm');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                
                // Here you would typically send the data to a server
                console.log('Login submitted:', { email, password });
                
                // Animation for submission
                const container = document.querySelector('.login-container');
                container.style.transform = 'scale(0.9)';
                container.style.opacity = '0';
                
                setTimeout(() => {
                    // Simulate login success
                    container.innerHTML = `
                        <div style="text-align: center; padding: 20px;">
                            <i class="fas fa-check-circle" style="font-size: 50px; color: #4CAF50; margin-bottom: 20px;"></i>
                            <h2 style="color: #333; margin-bottom: 15px;">Login Successful!</h2>
                            <p style="color: #666;">Redirecting to your dashboard...</p>
                        </div>
                    `;
                    container.style.transform = 'scale(1)';
                    container.style.opacity = '1';
                    
                    // In a real app, you would redirect here
                    // setTimeout(() => window.location.href = '/dashboard', 2000);
                }, 500);
            });
        });