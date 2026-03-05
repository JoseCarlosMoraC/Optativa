import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJugador } from './create-jugador';

describe('CreateJugador', () => {
  let component: CreateJugador;
  let fixture: ComponentFixture<CreateJugador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateJugador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateJugador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
