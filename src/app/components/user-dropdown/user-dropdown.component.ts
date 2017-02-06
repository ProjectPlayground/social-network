import { 
    Component, 
    Input, 
    HostListener, 
    HostBinding, 
    Output, 
    EventEmitter } from '@angular/core';

@Component({
    selector: 'user-dropdown',
    templateUrl: './user-dropdown.component.html'
})

export class UserDropDownComponent {
    isHover: boolean;
    @Input() user;
    @Output() logOut = new EventEmitter<boolean>();
    @HostListener('mouseenter') onHover() {
        this.isHover = true;
    }
    
    @HostListener('mouseleave') onMouseLeave() {
        this.isHover = false;
    }

    onLogOut() {
        this.logOut.next(true);
    }
}