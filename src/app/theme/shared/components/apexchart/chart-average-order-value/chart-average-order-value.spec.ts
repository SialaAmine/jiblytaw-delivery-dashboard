import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAverageOrderValue } from './chart-average-order-value';

describe('ChartAverageOrderValue', () => {
  let component: ChartAverageOrderValue;
  let fixture: ComponentFixture<ChartAverageOrderValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartAverageOrderValue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartAverageOrderValue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
