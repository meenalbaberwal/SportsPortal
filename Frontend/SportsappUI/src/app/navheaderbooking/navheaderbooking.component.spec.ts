import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavheaderbookingComponent } from './navheaderbooking.component';

describe('NavheaderbookingComponent', () => {
  let component: NavheaderbookingComponent;
  let fixture: ComponentFixture<NavheaderbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavheaderbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavheaderbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
