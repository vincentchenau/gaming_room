import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAnalysisTableComponent } from './sales-analysis-table.component';

describe('SalesAnalysisTableComponent', () => {
  let component: SalesAnalysisTableComponent;
  let fixture: ComponentFixture<SalesAnalysisTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesAnalysisTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesAnalysisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
