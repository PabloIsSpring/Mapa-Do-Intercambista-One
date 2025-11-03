import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaDetalhes } from './agencia-detalhes';

describe('AgenciaDetalhes', () => {
  let component: AgenciaDetalhes;
  let fixture: ComponentFixture<AgenciaDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgenciaDetalhes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenciaDetalhes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
