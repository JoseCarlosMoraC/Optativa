import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPokemon } from './edit-pokemon';

describe('EditPokemon', () => {
  let component: EditPokemon;
  let fixture: ComponentFixture<EditPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPokemon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
