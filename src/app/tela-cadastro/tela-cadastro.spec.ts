import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastro } from './tela-cadastro';

describe('TelaCadastro', () => {
  let component: TelaCadastro;
  let fixture: ComponentFixture<TelaCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaCadastro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
