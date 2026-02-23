import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../services/producto';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h3>{{ producto.nombre }}</h3>
      <p>{{ producto.descripcion }}</p>
      <p><strong>{{ producto.precio }} €</strong></p>
    </div>
  `
})
export class TarjetaProducto {
  @Input() producto!: Producto;
}