import { TestBed } from '@angular/core/testing';

import { ProductosPicaditasService } from './productos-picaditas.service';

describe('ProductosPicaditasService', () => {
  let service: ProductosPicaditasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosPicaditasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
