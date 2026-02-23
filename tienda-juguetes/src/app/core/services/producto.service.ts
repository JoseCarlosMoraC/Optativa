// src/app/core/services/producto.service.ts
import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Muñeca Antonio José',
      precio: 19.99,
      descripcion: 'Muñeca con vestido brillante, algunas veces lo expulsan, pero siempre vuelve',
      imagen: 'https://media.istockphoto.com/id/1351665907/es/foto/rizado-lindo-mu%C3%B1eco-de-trapo-de-juguete-sonre%C3%ADr-y-sentarse-aislado-en-la-foto-blanca-del.jpg?s=612x612&w=0&k=20&c=_iYKoMVYd1IHTlVRwv-JbGdQ-BS4aOi1b6-krvK1Ii0=',
      disponible: true,
      categoria: 'Muñecas'
    },
    {
      id: 2,
      nombre: 'Coche Adrián',
      precio: 29.99,
      descripcion: 'Coche con control remoto, falla algunas veces, pero se le quiere',
      imagen: 'https://imgs.search.brave.com/pfjz7Us7mdLdUzXODoAwCROIZWCUNuG-YrfzGvbtT6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxl/cy5qb2d1aWJhLmNv/bS9pbWFnZXMvZWNv/bW1lcmNlL0xJVDY2/MTIyOC5qcGc',
      disponible: false,
      categoria: 'Vehículos'
    },
    {
      id: 3,
      nombre: 'Lego Parrado',
      precio: 49.99,
      descripcion: 'Construye tu propio castillo pero en modo deprimido',
      imagen: 'https://imgs.search.brave.com/6TX2eJRGMuOB0odJZ-W7Xj_SCIhNB9_fqedk_yRbSSs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM3Lm1lbWVkcm9p/ZC5jb20vaW1hZ2Vz/L1VQTE9BREVENjE0/LzY4MThjNWZhYzFm/NjIuanBlZw',
      disponible: true,
      categoria: 'Construcción'
    }
  ];

  constructor() {}

  getProductos(): Producto[] {
    return this.productos;
  }
}