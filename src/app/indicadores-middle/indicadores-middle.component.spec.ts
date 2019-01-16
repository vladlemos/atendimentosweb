import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresMiddleComponent } from './indicadores-middle.component';

describe('IndicadoresMiddleComponent', () => {
  let component: IndicadoresMiddleComponent;
  let fixture: ComponentFixture<IndicadoresMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicadoresMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadoresMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
