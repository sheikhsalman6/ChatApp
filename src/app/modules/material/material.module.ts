import {NgModule} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';

const materialComponent = [
  MatSliderModule,
  MatTabsModule
];


@NgModule({
  imports: [materialComponent],
  exports: [materialComponent]
})
export class MaterialModule {
}
