import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agencias } from './agencias';

describe('Agencias', () => {
  let component: Agencias;
  let fixture: ComponentFixture<Agencias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Agencias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agencias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
