import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlugarComponent } from './alugar.component';

describe('AlugarComponent', () => {
  let component: AlugarComponent;
  let fixture: ComponentFixture<AlugarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlugarComponent]
    });
    fixture = TestBed.createComponent(AlugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
