import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsJugador } from './details-jugador';

describe('DetailsJugador', () => {
  let component: DetailsJugador;
  let fixture: ComponentFixture<DetailsJugador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsJugador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsJugador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
