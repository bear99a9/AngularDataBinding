import { Component } from '@angular/core';
import { ServerData } from './shared/server-data.model';
import { ServerElement } from './shared/server-element.model';
import { BlueprintData } from './shared/blueprint-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [new ServerElement('TestServer', 'server', 'Just a test')];
  oddFiredNumbers: number[] = []
  evenFiredNumbers: number[] = []

  onServerAdded(serverData: ServerData) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: BlueprintData) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChange() {
    this.serverElements[0].name = 'Changed!'
  }

  onDelete() {
    this.serverElements.splice(0, 1);
  }

  onIntervalSent(intervalNumber: number) {
    console.log(intervalNumber);
    if (intervalNumber % 2 === 0) {
      this.evenFiredNumbers.push(intervalNumber)
    } else {
      this.oddFiredNumbers.push(intervalNumber)
    }
  }

}
