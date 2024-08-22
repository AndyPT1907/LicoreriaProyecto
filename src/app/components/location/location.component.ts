import { Component } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  latitude: number | null = null;
  longitude: number | null = null;
  error: string | null = null;

  constructor(private geolocationService: GeolocationService) {}

  ngOnInit(): void {
    this.getLocation();
  }

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
