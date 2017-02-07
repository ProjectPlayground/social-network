import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent {
    @Output() linkClick;
    @Input() user;

    constructor() {
        this.linkClick = new EventEmitter<string>();
    }

    onLinkClicked(route: string) {
        this.linkClick.emit(route);
    }

}