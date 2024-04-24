import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  signal,
} from '@angular/core';
import { Products } from '../../shared/fake-api/fake-api';
import { ProductInterface } from '../../shared/interfaces/interfaces';
import { RadioGroupComponent } from '../../shared/ui/radio/radio-group/radio-group.component';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-big-banner',
  standalone: true,
  imports: [CommonModule, RadioGroupComponent],
  templateUrl: './big-banner.component.html',
  styleUrl: './big-banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BigBannerComponent {
  products$: Observable<ProductInterface[]> = of(Products.slice(0, 4)).pipe(
    tap(products => this.form.controls.selectedOption.setValue(products[0].id))
  );

  currentProduct = signal<ProductInterface | undefined>(undefined);

  form: FormGroup<{ selectedOption: FormControl<string> }> =
    this.fb.nonNullable.group({
      selectedOption: new FormControl<string>('', { nonNullable: true }),
    });

  constructor(private fb: FormBuilder) {
    this.form.controls.selectedOption.valueChanges.subscribe(value => {
      this.currentProduct.set(Products.find(product => product.id === value));
    });
  }
}
