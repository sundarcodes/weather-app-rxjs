import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempInfoComponent } from './temp-info.component';

describe('TempInfoComponent', () => {
  let component: TempInfoComponent;
  let fixture: ComponentFixture<TempInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
