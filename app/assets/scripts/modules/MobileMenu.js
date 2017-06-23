import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.opaqueScreen = $(".mobile-menu__opaque-screen");
        this.menuIcon = $(".mobile-menu__menu-icon");
        this.menuContent = $(".mobile-menu__menu-content");
        this.events();
    }
    
    events() { this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("mobile-menu__menu-content--is-visible"); 
        this.opaqueScreen.toggleClass("mobile-menu__opaque-screen--is-visible");
        this.menuIcon.toggleClass("mobile-menu__menu-icon--close-x")
    }
}

export default MobileMenu;