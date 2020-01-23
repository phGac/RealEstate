export default {
    toggleNavMenu: () => {
        document.querySelector('#mobile-menu').classList.toggle('active');
    },
    toggleSearchMenu: () => {
        const menu = document.querySelector('.search-container');
        if(menu) {
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
                menu.classList.add('disable');
            } else {
                menu.classList.remove('disable');
                menu.classList.add('show');
            }
        }
    },
};