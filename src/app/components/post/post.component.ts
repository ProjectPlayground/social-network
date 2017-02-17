import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { SocialService } from '../../services/social.service';

@Component({
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})

export class PostComponent {
    createPostForm: FormGroup;
    @ViewChild('imageInput') image: ElementRef;
    
    constructor( 
        private fb: FormBuilder,
        private socialService: SocialService ) {
            this.createPostForm = this.fb.group({
               post: ['']
            });
        }
        
    createPost() {
        let image = this.image.nativeElement.files;
        let thisKey;
        
        this.socialService.sendPost(this.createPostForm.value)
            .do(key => thisKey = key )
            .do(() => this.createPostForm.reset())
            .filter(key =>  { 
                if(image.length > 0){
                    return true;
                }else{
                    console.log('the post has been created');
                }
            })
            .switchMap( key => this.socialService.postImage(key, image[0]))
            .switchMap( imgRef => this.socialService.updatePost( thisKey, {image: imgRef.downloadURL}))
            .subscribe(() => console.log('the post with image has been created'));
    }
    
}