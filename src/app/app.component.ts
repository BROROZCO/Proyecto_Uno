import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivas';

  listEstudiantes: any[] = [
    // Lista 
    { nombre: "Joaquin Gonzales", estado: "Activo", id: 45 },
    { nombre: "Anyel Ramirez", estado: "Regular", id: 17 },
    { nombre: "Flor Garcia", estado: "Activo", id: 78 },
    { nombre: "Anahis Aguilera", estado: "Regular", id: 78 },
    { nombre: "Antonio Cuadra", estado: "Activo", id: 78 } 
  ]

  mostrar = true;

  toogle(): void{
    this.mostrar = !this.mostrar
  }
}
