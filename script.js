document.addEventListener('DOMContentLoaded', function() {
    // Social media URLs
    const socialUrls = {
        facebook: 'https://facebook.com/sunny.destination.np',
        tiktok: 'https://tiktok.com/@sunny.destination',
        viber: 'viber://chat?number=+9779845987393',
        whatsapp: 'https://wa.me/9779845987393',
        instagram: 'https://instagram.com/sunny.destination',
        youtube: 'https://youtube.com/@travelsolutionnepal'
    };
    
    // Logo click handler
    const logo = document.querySelector('.rotating-logo');
    logo.addEventListener('click', function() {
            window.location.href = "home.html";
        
        // In a real implementation, this would navigate to the home page
        alert('Navigating to home page...');
        // window.location.href = '/home'; // Uncomment in actual implementation
    });
    
    // Social icon click handlers
    document.querySelector('.facebook-icon').addEventListener('click', function() {
        window.open(socialUrls.facebook, '_blank');
    });
    
    document.querySelector('.tiktok-icon').addEventListener('click', function() {
        window.open(socialUrls.tiktok, '_blank');
    });
    
    document.querySelector('.youtube-icon').addEventListener('click', function() {
        window.open(socialUrls.youtube, '_blank');
    });
    
    document.querySelector('.viber-icon').addEventListener('click', function() {
        window.open(socialUrls.viber, '_blank');
    });
    
    document.querySelector('.whatsapp-icon').addEventListener('click', function() {
        window.open(socialUrls.whatsapp, '_blank');
    });
    
    document.querySelector('.instagram-icon').addEventListener('click', function() {
        window.open(socialUrls.instagram, '_blank');
    });
});
  // Simple smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });

        });
// Gallery Filter Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const filterValue = this.getAttribute('data-filter');
                    
                    // Show/hide gallery items based on filter
                    galleryItems.forEach(item => {
                        if (filterValue === 'all') {
                            item.style.display = 'block';
                        } else {
                            const categories = item.getAttribute('data-category').split(' ');
                            if (categories.includes(filterValue)) {
                                item.style.display = 'block';
                            } else {
                                item.style.display = 'none';
                            }
                        }
                    });
                });
            });
            
            // Modal functionality
            const modal = document.getElementById('imageModal');
            const modalImage = modal.querySelector('.modal-image');
            const modalTitle = modal.querySelector('.modal-title');
            const modalLocation = modal.querySelector('.modal-location');
            const closeModal = modal.querySelector('.modal-close');
            
            galleryItems.forEach(item => {
                item.addEventListener('click', function() {
                    const imageSrc = this.querySelector('.gallery-image').getAttribute('src');
                    const title = this.querySelector('.gallery-title').textContent;
                    const location = this.querySelector('.gallery-location').textContent;
                    
                    modalImage.setAttribute('src', imageSrc);
                    modalTitle.textContent = title;
                    modalLocation.textContent = location;
                    
                    modal.style.display = 'flex';
                });
            });
            
            closeModal.addEventListener('click', function() {
                modal.style.display = 'none';
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });