import {NgModule} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const materialComponent = [
  MatSliderModule,
  MatTabsModule,
  MatCardModule,
  MatToolbarModule,
  MatGridListModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatProgressSpinnerModule
];


@NgModule({
  imports: [materialComponent],
  exports: [materialComponent]
})
export class MaterialModule {
}
