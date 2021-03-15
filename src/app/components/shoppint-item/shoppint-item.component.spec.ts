import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppintItemComponent } from './shoppint-item.component';

describe('ShoppintItemComponent', () => {
  let component: ShoppintItemComponent;
  let fixture: ComponentFixture<ShoppintItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppintItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppintItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
