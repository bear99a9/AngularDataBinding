import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval: string | number | NodeJS.Timeout;
  lastNumber: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  start(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++
    }, 1000);
  }



  stop(){
    console.log(this.lastNumber);
    clearInterval(this.interval);
  }
}
