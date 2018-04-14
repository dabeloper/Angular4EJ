import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

/*
const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }
];
*/

const routes: Routes = [
    {
      path: 'comunicacion',
      loadChildren: 'app/comunicacion-componentes/comunicacion-componentes.module#ComunicacionComponentesModule'
    },
    {
      path: 'servicio-comunicacion',
      loadChildren: 'app/servicio-comunicacion/servicio-comunicacion.module#ServicioComunicacionModule'
    },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    },
    { path: 'lazy', loadChildren: './lazy.module#LazyModule'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(
      routes,
      //{ enableTracing: true } // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }