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
    @HostListener('click') onHover() {
        this.isHover = !this.isHover;
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