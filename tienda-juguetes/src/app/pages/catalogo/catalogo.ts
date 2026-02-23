import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../core/services/producto.service';
import { Producto } from '../../core/services/producto';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']  // ← CORRECTO
})
export class Catalogo {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {
    this.productos = this.productoService.getProductos();
  }
}