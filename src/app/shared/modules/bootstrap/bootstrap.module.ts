import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    declarations: [],
    imports: [
        // CommonModule,
        BsDropdownModule.forRoot()
    ],
    exports: [
        BsDropdownModule
    ]
})
export class BootstrapModule {
}
