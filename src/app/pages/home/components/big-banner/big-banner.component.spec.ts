import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBannerComponent } from './big-banner.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('BigBannerComponent', () => {
  let component: BigBannerComponent;
  let fixture: ComponentFixture<BigBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigBannerComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(BigBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
