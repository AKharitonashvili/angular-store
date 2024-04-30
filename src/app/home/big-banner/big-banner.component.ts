import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  signal,
} from '@angular/core';
import { Products, bigBannerProducts } from '../../fake-api/fake-api';
import { BigBannerProductsInterface } from '../../shared/interfaces/interfaces';
import { RadioGroupComponent } from '../../shared/ui/radio/radio-group/radio-group.component';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable, of, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html/safe-html.pipe';

@Component({
  selector: 'app-big-banner',
  standalone: true,
  imports: [CommonModule, RadioGroupComponent, SafeHtmlPipe],
  templateUrl: './big-banner.component.html',
  styleUrl: './big-banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BigBannerComponent {
  products$!: Observable<BigBannerProductsInterface[]>;

  currentProduct = signal<BigBannerProductsInterface | undefined>(undefined);
  products = signal<BigBannerProductsInterface[] | undefined>(undefined);

  form: FormGroup<{ selectedOption: FormControl<string> }> =
    this.fb.nonNullable.group({
      selectedOption: new FormControl<string>('', { nonNullable: true }),
    });

  constructor(private fb: FormBuilder) {
    this.form.controls.selectedOption.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(value => {
        this.currentProduct.set(
          this.products()?.find(product => product.id === value)
        );
      });

    this.products$ = of(bigBannerProducts).pipe(
      tap(products => {
        this.products.set(products);
        this.products()?.find(
          product => product.id === this.form.controls.selectedOption.value
        );
        this.form.controls.selectedOption.patchValue(products[0].id);
      })
    );
  }
}
