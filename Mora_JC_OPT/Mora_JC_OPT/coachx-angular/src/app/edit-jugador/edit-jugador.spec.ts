import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJugador } from './edit-jugador';

describe('EditJugador', () => {
  let component: EditJugador;
  let fixture: ComponentFixture<EditJugador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditJugador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJugador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
