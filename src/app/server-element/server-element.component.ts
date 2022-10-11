import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { ServerElement } from '../shared/server-element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: ServerElement;
  @Input() name: string; //ng-onChange only works on primitive binding not models as the model doesn't change in memory just updates the property

  constructor() {
    console.log('1: constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2: ngOnChanges called');
    console.log(changes)
  }

  ngOnInit() {
    console.log('3: ngOnInit called');
  }
}
