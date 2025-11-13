import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercambistaGrafico } from './intercambista-grafico';

describe('IntercambistaGrafico', () => {
  let component: IntercambistaGrafico;
  let fixture: ComponentFixture<IntercambistaGrafico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntercambistaGrafico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntercambistaGrafico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
