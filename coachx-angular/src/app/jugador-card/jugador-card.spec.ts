import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorCard } from './jugador-card';

describe('JugadorCard', () => {
  let component: JugadorCard;
  let fixture: ComponentFixture<JugadorCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JugadorCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadorCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
