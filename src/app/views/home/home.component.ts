import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productos = [
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: 'producto1', precio: 100},
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: 'producto2', precio: 100},
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: 'producto3', precio: 100},
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: 'producto4', precio: 100},
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: 'producto5', precio: 100},
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: 'producto6', precio: 100},
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: 'producto7', precio: 100},
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: 'producto8', precio: 100},
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: 'producto9', precio: 100},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
