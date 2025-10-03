import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRevenue } from './total-revenue';

describe('TotalRevenue', () => {
  let component: TotalRevenue;
  let fixture: ComponentFixture<TotalRevenue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalRevenue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalRevenue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
