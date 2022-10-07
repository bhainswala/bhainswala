import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';



@NgModule({
  declarations: [
    HeaderBarComponent,
    BottomBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderBarComponent
  ]
})
export class SharedModule { }
