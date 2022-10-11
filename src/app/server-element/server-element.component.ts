import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ElementRef,
  ViewChild
} from '@angular/core';
import { ServerElement } from '../shared/server-element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element: ServerElement;
  @Input() name: string; //ng-onChange only works on primitive binding not models as the model doesn't change in memory just updates the property
  @ViewChild('header', {static: true}) header : ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes)
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log(`Text content: ${this.header.nativeElement.textContent}`);
    // on init cant check a value on the DOM until it has been rendered
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
    // checks every time something is clicked or changed try not to use with powerful hungry code
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    // checks only once after content loaded 
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
    // checks every time after each change cycle 
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log(`Text content: ${this.header.nativeElement.textContent}`);
    // checks only once after view loaded 
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
    // checks every time after each change cycle 
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
    // called just before the element is destroyed  
  }
}
