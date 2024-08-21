import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductosPicaditasService } from '../../services/productos-picaditas.service';

@Component({
  selector: 'app-carrusel-picaditas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel-picaditas.component.html',
  styleUrl: './carrusel-picaditas.component.css'
})
export class CarruselPicaditasComponent {
  servicio = inject(ProductosPicaditasService)
  picaditas : any;

  ngOnInit(){
    this.servicio.getProducts().subscribe(p=>(
      this.picaditas = p
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
