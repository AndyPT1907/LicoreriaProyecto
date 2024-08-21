import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  servicio = inject(ProductsService)
  productos : any;

  ngOnInit(){
    this.servicio.getProducts().subscribe(p=>(
      this.productos = p
    )
    )
  }

  eliminar(id:any){
    this.servicio.deletePersonalID(id).subscribe()
    window.location.reload()
    
  }
  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
  
}
