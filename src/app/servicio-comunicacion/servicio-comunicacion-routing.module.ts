import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlarmaComponent } from './alarma/alarma.component';

const routes: Routes = [ 

  { path: '' , component: AlarmaComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioComunicacionRoutingModule { }
