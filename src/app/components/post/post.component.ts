import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    templateUrl: './post.component.html'
})

export class PostComponent {
    createPostForm: FormGroup;
    constructor( private fb: FormBuilder ) {
            this.createPostForm = this.fb.group({
               post: [''] 
            });
        }
        
    createPost() {
        console.log(this.createPostForm.value);
        this.createPostForm.reset();
    }
}