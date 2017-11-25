import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { DropdownNavDirective } from './dropdown-nav.directive';

@NgModule({
    declarations: [
        DropdownDirective,
        DropdownNavDirective
    ],
    exports: [
        CommonModule,
        DropdownDirective,
        DropdownNavDirective
    ]
})
export class SharedModule {}