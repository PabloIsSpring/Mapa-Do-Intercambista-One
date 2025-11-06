import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumAgencia } from './forum-agencia';

describe('ForumAgencia', () => {
  let component: ForumAgencia;
  let fixture: ComponentFixture<ForumAgencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForumAgencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumAgencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
