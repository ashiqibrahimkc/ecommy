import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsignupComponent } from './vendorsignup.component';

describe('VendorsignupComponent', () => {
  let component: VendorsignupComponent;
  let fixture: ComponentFixture<VendorsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorsignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendorsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
