import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pm-file-upload-preview',
  templateUrl: './file-upload-preview.component.html',
  styleUrls: ['./file-upload-preview.component.scss']
})
export class FileUploadPreviewComponent implements OnInit {
  @Input() imageUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
