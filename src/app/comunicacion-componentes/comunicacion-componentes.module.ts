import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { IndexComponent } from './index/index.component';

const appRoutes: Routes = [
  { path: '',
    component: IndexComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [
    PadreComponent,
    HijoComponent,
    IndexComponent
  ]
})
export class ComunicacionComponentesModule { }
