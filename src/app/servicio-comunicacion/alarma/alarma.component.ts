import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { AlarmaService } from "./alarma.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-alarma',
  templateUrl: './alarma.component.html',
  styleUrls: ['./alarma.component.css']
})
export class AlarmaComponent implements OnInit {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init:number = 5;

  private countdownEndRef: Subscription = null;

  constructor(public timer:AlarmaService){}

  ngOnInit(){
    this.timer.reiniciarContador(this.init);

    this.countdownEndRef = this.timer.countdownEnd$.subscribe(()=>{
      console.log( "FIN" );
      this.timer.parar();
      this.onComplete.emit();
    });

  }

  ngOnDestroy(){
    this.timer.parar();
    this.countdownEndRef.unsubscribe();
  }


}
