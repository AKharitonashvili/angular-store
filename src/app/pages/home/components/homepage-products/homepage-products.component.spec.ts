import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageProductsComponent } from './homepage-products.component';

describe('HomepageProductsComponent', () => {
  let component: HomepageProductsComponent;
  let fixture: ComponentFixture<HomepageProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomepageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
