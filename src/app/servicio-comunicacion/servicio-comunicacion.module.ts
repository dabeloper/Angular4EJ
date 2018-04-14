import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioComunicacionRoutingModule } from './servicio-comunicacion-routing.module';
import { AlarmaComponent } from './alarma/alarma.component';
import { AlarmaService } from './alarma/alarma.service';

@NgModule({
  imports: [
    CommonModule,
    ServicioComunicacionRoutingModule
  ],
  declarations: [AlarmaComponent],
  providers: [AlarmaService]
})
export class ServicioComunicacionModule { }
