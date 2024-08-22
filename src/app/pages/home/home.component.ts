import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';
import { CarruselPicaditasComponent } from '../../components/carrusel-picaditas/carrusel-picaditas.component';
import { GeolocationService } from '../../services/geolocation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule,CarruselComponent,CarruselPicaditasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  servicio = inject(ProductsService)
  geolocationService = inject(GeolocationService)
  productos : any;

  ngOnInit(){
    this.servicio.getProducts().subscribe(p=>(
      this.productos = p
    )
    )
    this.getLocation();
  }

  eliminar(id:any){
    this.servicio.deletePersonalID(id).subscribe()
    window.location.reload()
    
  }
  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
  latitude: number | null = null;
  longitude: number | null = null;
  error: string | null = null;

   

  

  getLocation(): void {
    this.geolocationService.getCurrentPosition().then(position => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.error = null;
    }).catch(err => {
      this.error = err.message;
      this.latitude = null;
      this.longitude = null;
    });
  }
}
