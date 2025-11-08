import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaResetarSenha } from './tela-resetar-senha';

describe('TelaResetarSenha', () => {
  let component: TelaResetarSenha;
  let fixture: ComponentFixture<TelaResetarSenha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaResetarSenha]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaResetarSenha);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
