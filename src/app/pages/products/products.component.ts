import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductosPicaditasService } from '../../services/productos-picaditas.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  bebidasA = inject(ProductsService)
  snacks = inject(ProductosPicaditasService)

  productos : any;
  snacks1 : any;
  currency = '$'

  ngOnInit(){
    this.bebidasA.getProducts().subscribe(p=>(
      this.productos = p
    )
    )
    this.snacks.getProducts().subscribe(p=>(
      this.snacks1 = p
    )
    )
  }
}
