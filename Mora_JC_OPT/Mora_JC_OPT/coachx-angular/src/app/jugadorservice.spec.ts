import { TestBed } from '@angular/core/testing';

import { Jugadorservice } from './jugadorservice';

describe('Jugadorservice', () => {
  let service: Jugadorservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Jugadorservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
