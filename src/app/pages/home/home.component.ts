import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';
import { CarruselPicaditasComponent } from '../../components/carrusel-picaditas/carrusel-picaditas.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule,CarruselComponent,CarruselPicaditasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
