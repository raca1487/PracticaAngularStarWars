import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetaComponent } from './planeta/planeta.component';

const routes: Routes = [
  {
    path: ':id',
    component: PlanetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetasRoutingModule { }
