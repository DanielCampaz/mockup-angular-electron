import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-electron-mockup');

  async changeTitle() {
    window.serverElectron.sendData("from-angular", {hola:"Dime Como Estas"})
    const response = await window.serverElectron.sendDataAndWait("from-angular-async", {hola:"Dime Como Estas"})
    console.log(response)
  }
}
