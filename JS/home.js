    const menuBtn = document.getElementById("menu-line");
    const navLinks = document.getElementById("ul-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", (e) => {
        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
    });

    navLinks.addEventListener("click", (e) => {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    });

    // Toggle dark mode on click

    const darkModeToggle = document.getElementById('darkModeToggle');


    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.classList.add('dark-active');
    }


    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.classList.toggle('dark-active'); 


        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });

    window.onscroll = function() { scrollFunction() };
    function scrollFunction() {
        document.getElementById("backToTop").style.display = document.documentElement.scrollTop > 20 ? "block" : "none";
    }
    
    function topFunction() {
        document.documentElement.scrollTop = 0;
    }



    const techCategory = document.getElementById("tech-category");
    const businessCategory = document.getElementById("business-category");
    const educationCategory = document.getElementById("education-category");


    const techContent = document.getElementById("technology-content");
    const businessContent = document.getElementById("business-content");
    const educationContent = document.getElementById("education-content");

    // Hide all content sections
    function hideAllContents() {
        techContent.style.display = "none";
        businessContent.style.display = "none";
        educationContent.style.display = "none";
    }

    // Event listeners to categories
    techCategory.addEventListener("click", () => {
        hideAllContents();
        techContent.style.display = "block";
    });

    businessCategory.addEventListener("click", () => {
        hideAllContents();
        businessContent.style.display = "block";
    });

    educationCategory.addEventListener("click", () => {
        hideAllContents();
        educationContent.style.display = "block";
    });

    // Get elements
    const popup = document.getElementById('newsletterPopup');
    const form = document.getElementById('newsletterForm');

    // Check subscription status
    const isSubscribed = localStorage.getItem('subscribed');

    // Show the pop-up only if the user is not subscribed

    if (!isSubscribed) {
        setTimeout(() => {
        popup.style.display = 'flex';
    }, 10000); 
    }


    // Handle the subscription form submission

    form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const emailInput = form.querySelector('input[name="email"]');

    if (emailInput.value.trim() !== '') {
        // Save subscription status
        localStorage.setItem('subscribed', 'true');
        alert('Thank you for subscribing!');
        popup.style.display = 'none';
    } else {
        alert('Please enter a valid email address.');
    }
    });

    popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
    });

    function goToPost(postIndex) {
        window.location.href = `./display-post.html?post=${postIndex}`;
    }