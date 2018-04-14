import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AlarmaService {

  private countdownEndSource = new Subject<void>();
  public countdownEnd$ = this.countdownEndSource.asObservable();

  private countdownSource = new BehaviorSubject<number>(0);
  public countdown$ = this.countdownSource.asObservable();

  private alarmaRef: any = null;
  private init:number = 0;
  public contador: number = 0;

  constructor() { }

  private destroy(){
    clearInterval( this.alarmaRef );
    this.alarmaRef = null;
    this.init = 0;
    this.contador = 0;
  }

  public reiniciarContador(init?){
    if( init ) this.init = init;
    this.contador = 0;
    console.log( "reiniciarContador" , this.init);
    this.procesar();
  }

  private contar(){
      this.contador++;
      console.log( "contar" , this.contador);
  }

  public parar(){
    this.destroy();
  }

  public procesar(){
    this.alarmaRef = setInterval( ()=>{ 
      if( this.contador >= this.init ){
        this.countdownEndSource.next();
      }else{
        this.contar();
      }
      this.countdownSource.next(this.contador);
    } , 1000);
  }



}
