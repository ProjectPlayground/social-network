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
    @Output() userProfile = new EventEmitter<boolean>();
    @HostListener('mouseover') onHover() {
        this.isHover = true;
    }
    
    @HostListener('mouseout') onMouseUp() {
        this.isHover = false;
    }
    
    onLogOut() {
        this.isHover = false;
        this.logOut.next(true);
    }

    onUserProfile() {
        this.isHover = false;
        this.userProfile.next(true);
    }
}