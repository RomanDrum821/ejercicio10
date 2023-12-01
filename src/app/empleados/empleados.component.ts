import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css',
})
export class EmpleadosComponent {
  empleados = [
    { id: 1, nombre: 'Juan', sueldo: 450.45, activo: false },
    { id: 2, nombre: 'Luis', sueldo: 45.45, activo: true },
    { id: 3, nombre: 'Ana', sueldo: 43.45, activo: true },
    { id: 4, nombre: 'Karla', sueldo: 123.45, activo: false },
    { id: 5, nombre: 'Luz', sueldo: 50.45, activo: false },
    { id: 6, nombre: 'Miriam', sueldo: 150.45, activo: true },
    { id: 7, nombre: 'Manuel', sueldo: 120.45, activo: false },
    { id: 8, nombre: 'Axel', sueldo: 145.45, activo: true },
    { id: 9, nombre: 'Eduardo', sueldo: 55.45, activo: true },
    { id: 10, nombre: 'Roberto', sueldo: 40.45, activo: false },
  ];
}
