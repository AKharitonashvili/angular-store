import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseByCategoryComponent } from './browse-by-category.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('BrowseByCategoryComponent', () => {
  let component: BrowseByCategoryComponent;
  let fixture: ComponentFixture<BrowseByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseByCategoryComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
