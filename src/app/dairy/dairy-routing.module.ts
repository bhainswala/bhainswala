import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CattleComponent } from './components/cattle/cattle.component';
import { DairyComponent } from './components/dairy/dairy.component';

const routes: Routes = [
  {path:'',component:DairyComponent},
  {path:'diary/:id',component:CattleComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DairyRoutingModule { }
