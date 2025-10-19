import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDestinos } from './cards-destinos';

describe('CardsDestinos', () => {
  let component: CardsDestinos;
  let fixture: ComponentFixture<CardsDestinos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsDestinos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsDestinos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
