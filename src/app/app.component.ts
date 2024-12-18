import { Component } from '@angular/core';
import listadoPostres from '../assets/json/postres.json'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'apptablaJSON';
  Postres: any = listadoPostres;

}
