import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  signal,
} from '@angular/core';
import { Products, bigBannerProducts } from '../../../../fake-api/fake-api';
import { BigBannerProductsInterface } from '../../../../shared/interfaces/interfaces';
import { RadioGroupComponent } from '../../../../shared/ui/radio/radio-group/radio-group.component';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable, combineLatest, map, of, take, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SafeHtmlPipe } from '../../../../shared/pipes/safe-html/safe-html.pipe';
import * as BannerProductsSelectors from '../../../../stores/banner-products/banner-products.selectors';
import { Store } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-big-banner',
  standalone: true,
  imports: [
    CommonModule,
    RadioGroupComponent,
    SafeHtmlPipe,
    MatIconModule,
    RouterModule,
    SkeletonModule,
  ],
  templateUrl: './big-banner.component.html',
  styleUrl: './big-banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BigBannerComponent {
  vm$: Observable<{
    bigBannerProducts: BigBannerProductsInterface[] | undefined;
    bigBannerProductsLoading: boolean;
  }>;

  currentProduct = signal<BigBannerProductsInterface | undefined>(undefined);
  products = signal<BigBannerProductsInterface[] | undefined>(undefined);

  form: FormGroup<{ selectedOption: FormControl<string | null> }> =
    this.fb.group({
      selectedOption: new FormControl<string>(''),
    });

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    this.form.controls.selectedOption.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(value => {
        this.currentProduct.set(
          this.products()?.find(product => product.id === value)
        );
      });

    this.vm$ = combineLatest([
      this.store.select(BannerProductsSelectors.selectBannerProducts).pipe(
        tap(products => {
          if (products?.length ?? 0 > 0) {
            this.products.set(products);
            this.products()?.find(
              product => product.id === this.form.controls.selectedOption.value
            );

            this.form.controls.selectedOption.patchValue(
              products?.[0]?.id ?? null
            );
          }
        })
      ),
      this.store.select(BannerProductsSelectors.selectBannerProductsLoading),
    ]).pipe(
      map(([bigBannerProducts, bigBannerProductsLoading]) => ({
        bigBannerProducts,
        bigBannerProductsLoading,
      }))
    );
  }

  navigateTo(id: string) {
    this.router.navigateByUrl(`products/items/${id}`);
  }
}
