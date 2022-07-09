import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productos = [
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: '', precio: 100},
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: '', precio: 100},
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: '', precio: 100},
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: '', precio: 100},
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: '', precio: 100},
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: '', precio: 100},
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: '', precio: 100},
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: '', precio: 100},
    {image: 'https://definicion.de/wp-content/uploads/2009/06/producto.png', name: '', precio: 100},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
