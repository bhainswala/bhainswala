import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DairyRoutingModule } from './dairy-routing.module';
import { DairyComponent } from './components/dairy/dairy.component';
import { CattleComponent } from './components/cattle/cattle.component';
import { LazyLoadImageModule ,LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    DairyComponent,
    CattleComponent,
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
  imports: [
    CommonModule,
    DairyRoutingModule,
    LazyLoadImageModule,
    
    
  ]
})
export class DairyModule { }
