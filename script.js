document.addEventListener('DOMContentLoaded', function() {
    // Social media URLs
    const socialUrls = {
        facebook: 'https://facebook.com/sunny.destination.np',
        tiktok: 'https://tiktok.com/@sunny.destination',
        viber: 'viber://chat?number=+9779845987393',
        whatsapp: 'https://wa.me/9779845987393',
        instagram: 'https://instagram.com/sunny.destination',
        youtube: 'https://youtube.com/@sunnydestinationtravel'
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