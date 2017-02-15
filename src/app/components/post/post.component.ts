import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

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
        let postData;
        
        this.socialService.sendPost(this.createPostForm.value)
            .filter(obj =>  { 
                if(image.length > 0){
                    postData = obj;
                    console.log(postData.key);
                    return true;
                }else{
                    console.log('the post has been created');
                }
            })
            .switchMap( postData => this.socialService.postImage(postData.key, image[0]))
            .switchMap( imgRef => this.socialService.updatePost(postData.key, {image: imgRef.downloadURL}))
            .subscribe(() => console.log('the post with image has been created'));
    }
    
}