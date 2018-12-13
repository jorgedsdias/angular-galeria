import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { GridComponent } from './photo-list/grid/grid.component';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    GridComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent
  ]
})
export class PhotosModule { }