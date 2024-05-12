import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageProductsComponent } from './homepage-products.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('HomepageProductsComponent', () => {
  let component: HomepageProductsComponent;
  let fixture: ComponentFixture<HomepageProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageProductsComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(HomepageProductsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
