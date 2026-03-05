import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePokemon } from './create-pokemon';

describe('CreatePokemon', () => {
  let component: CreatePokemon;
  let fixture: ComponentFixture<CreatePokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePokemon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
