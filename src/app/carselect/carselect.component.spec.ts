import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarselectComponent } from './carselect.component';

describe('CarselectComponent', () => {
  let component: CarselectComponent;
  let fixture: ComponentFixture<CarselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarselectComponent]
    });
    fixture = TestBed.createComponent(CarselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
