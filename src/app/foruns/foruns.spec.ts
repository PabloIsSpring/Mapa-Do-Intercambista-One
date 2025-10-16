import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foruns } from './foruns';

describe('Foruns', () => {
  let component: Foruns;
  let fixture: ComponentFixture<Foruns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Foruns]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Foruns);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
