import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAndFavoritesComponent } from './cart-and-favorites.component';

describe('CartAndFavoritesComponent', () => {
  let component: CartAndFavoritesComponent;
  let fixture: ComponentFixture<CartAndFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartAndFavoritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartAndFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
