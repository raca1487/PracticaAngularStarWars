import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { PlanetaComponent } from './planetas/planeta/planeta.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('src/app/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: "personajes",
    loadChildren: () => import('./personajes/personajes.module').then((m) => m.PersonajesModule)
  },
  {
    path: "planeta",
    loadChildren: () => import('./planetas/planetas.module').then((m) => m.PlanetasModule)
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
