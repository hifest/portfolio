window.addEventListener('DOMContentLoaded', () => {
    const menuCloseBtn = document.querySelector('.menu__close');
    const menu = document.querySelector('.menu');
    const menuTrigger = document.querySelector('.hamburger')
    const PrivacyClose = document.querySelector('.popup__close')
    const PrivacyMenu = document.querySelector('.popup')
    const Privacy = document.querySelector('.btn__privacy')

    function openMenu() {
        menu.classList.add('active')
    }

    function closeMenu() {
        menu.classList.remove('active')
    }

    menuTrigger.addEventListener('click', (e) => {
        openMenu();
    })

    menuCloseBtn.addEventListener('click', () => {
        closeMenu();
    });

    function openModal() {
        PrivacyMenu.classList.add('active')
    }

    function closeModal() {
        PrivacyMenu.classList.remove('active')
    }
    Privacy.addEventListener('click', () => {
        openModal();
    });

    PrivacyClose.addEventListener('click', () => {
        closeModal()
    });


});