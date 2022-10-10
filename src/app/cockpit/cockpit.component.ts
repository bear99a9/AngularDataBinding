import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ServerData } from '../shared/server-data.model';
import { BlueprintData } from '../shared/blueprint-data.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output('serCreated') serverCreated = new EventEmitter<ServerData>();
  @Output() blueprintCreated = new EventEmitter<BlueprintData>();;
  // newServerName = '';
  //newServerContent = '';
  @ViewChild('newServerNameInput', { static: true}) newServerContentInput : ElementRef;

  onAddServer(newServerNameInput: HTMLInputElement) {
    this.serverCreated.emit(new ServerData(newServerNameInput.value, this.newServerContentInput.nativeElement.value));

  }
  onAddBlueprint(newServerNameInput: HTMLInputElement) {
    this.blueprintCreated.emit(new BlueprintData(newServerNameInput.value, this.newServerContentInput.nativeElement.value));
  }
}