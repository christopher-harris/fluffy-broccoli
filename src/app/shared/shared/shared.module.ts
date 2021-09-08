import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploadPreviewComponent} from '../file-upload-preview/file-upload-preview.component';
import {InlineSVGModule} from 'ng-inline-svg';


@NgModule({
    declarations: [
        FileUploadPreviewComponent
    ],
    imports: [
        CommonModule,
        InlineSVGModule
    ],
    exports: [
        FileUploadPreviewComponent,
        InlineSVGModule
    ]
})
export class SharedModule {
}
