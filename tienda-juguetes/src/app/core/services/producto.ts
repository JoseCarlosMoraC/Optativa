import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  disponible: boolean;
  categoria: string;  
}
@Injectable({
  providedIn: 'root'
})
export class ProductoService {


}