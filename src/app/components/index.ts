import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { COMPONENTS } from './components';

@NgModule({
    declarations: [ COMPONENTS ],
    imports: [ CommonModule, ReactiveFormsModule ],
    exports: [ COMPONENTS ]
})

export class ComponentsModule {}