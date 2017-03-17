import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhwInfoComponent } from './phw-info.component';

describe('PhwInfoComponent', () => {
  let component: PhwInfoComponent;
  let fixture: ComponentFixture<PhwInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhwInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhwInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
