import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent {
    @Output() linkClick;
    @Output() logOut;
    @Input() user;

    constructor() {
        this.linkClick = new EventEmitter<string>();
        this.logOut = new EventEmitter<boolean>();
    }

    onLinkClicked(route: string) {
        this.linkClick.emit(route);
    }

    onLogOut() {
        this.logOut.emit(true);
    }

}