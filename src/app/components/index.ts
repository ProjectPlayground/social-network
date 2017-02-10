import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { COMPONENTS } from './components';

@NgModule({
    declarations: [ COMPONENTS ],
    imports: [ CommonModule, ReactiveFormsModule ],
    exports: [ COMPONENTS ]
})

export class ComponentsModule {}