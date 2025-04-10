document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.menu-btn');
    const closeMobileMenuButton = document.querySelector('.close-btn-menu');
    const mobileMenu = document.querySelector('.mobile-menu-backdrop');
    const menuItems = document.querySelectorAll('.menu-item');
    const navSelector = document.querySelector('.js-header-nav-list');
    const logoElement = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.nav-link');
    const menuLinks = document.querySelectorAll('.menu-link');
  
    const toggleClasses = (element, active) => {
      element.style.transition = 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)';
      element.classList.toggle('js-nav-link-active', active);
      const navItem = element.closest('.nav-item');
      if (navItem) {
        navItem.style.transition = 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)';
        navItem.classList.toggle('js-nav-item-active', active);
      }
    };
  
    const updateActiveNav = () => {
      const savedPath = localStorage.getItem('activePath');
      const currentPath = window.location.pathname;
      const isHomePage = currentPath === '/' || currentPath === '/index.html';
      const activePath = currentPath === '/' ? './index.html' : `./${currentPath.split('/').pop()}`;
  
      navLinks.forEach(navLink => {
        const href = navLink.getAttribute('href');
        const isActive = (savedPath && href === savedPath) || 
                        (!savedPath && isHomePage && href === './index.html') || 
                        (!savedPath && !isHomePage && href === activePath);
        toggleClasses(navLink, isActive);
      });
  
      menuLinks.forEach(menuLink => {
        const href = menuLink.getAttribute('href');
        const isActive = (savedPath && href === savedPath) || 
                        (!savedPath && isHomePage && href === './index.html') || 
                        (!savedPath && !isHomePage && href === activePath);
        menuLink.style.transition = 'color 300ms cubic-bezier(0.4, 0, 0.2, 1)';
        menuLink.classList.toggle('active', isActive);
      });
    };
  
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.style.transition = 'opacity 300ms ease, visibility 300ms ease';
        mobileMenu.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    }
  
    if (closeMobileMenuButton && mobileMenu) {
      closeMobileMenuButton.addEventListener('click', () => {
        mobileMenu.style.transition = 'opacity 300ms ease, visibility 300ms ease';
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    }
  
    menuItems.forEach(item => {
      const link = item.querySelector('.menu-link');
      if (link) {
        link.addEventListener('click', () => {
          localStorage.setItem('activePath', link.getAttribute('href'));
          if (mobileMenu) {
            mobileMenu.style.transition = 'opacity 300ms ease, visibility 300ms ease';
            mobileMenu.classList.remove('is-open');
            document.body.style.overflow = '';
          }
          updateActiveNav();
        });
      }
    });
  
    if (navSelector) {
      navSelector.addEventListener('click', (event) => {
        const navLink = event.target.closest('.nav-link');
        if (navLink) {
          localStorage.setItem('activePath', navLink.getAttribute('href'));
          updateActiveNav();
        }
      });
    }
  
    if (logoElement) {
      logoElement.addEventListener('click', () => {
        localStorage.setItem('activePath', './index.html');
        updateActiveNav();
      });
    }
  
    updateActiveNav();
  });