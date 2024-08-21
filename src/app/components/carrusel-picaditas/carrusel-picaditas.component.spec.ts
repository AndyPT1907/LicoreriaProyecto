import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselPicaditasComponent } from './carrusel-picaditas.component';

describe('CarruselPicaditasComponent', () => {
  let component: CarruselPicaditasComponent;
  let fixture: ComponentFixture<CarruselPicaditasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselPicaditasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarruselPicaditasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
