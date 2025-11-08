import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEsqueciSenha } from './tela-esqueci-senha';

describe('TelaEsqueciSenha', () => {
  let component: TelaEsqueciSenha;
  let fixture: ComponentFixture<TelaEsqueciSenha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaEsqueciSenha]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaEsqueciSenha);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
