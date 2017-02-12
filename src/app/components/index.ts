import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { COMPONENTS } from './components';

@NgModule({
    declarations: [ COMPONENTS ],
    imports: [ CommonModule, ReactiveFormsModule, FormsModule ],
    exports: [ COMPONENTS ]
})

export class ComponentsModule {}