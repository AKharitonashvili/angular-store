import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { ProductInterface } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent {
  @Input() products!: ProductInterface[] | null;
  @Input() form!: FormGroup<{ selectedOption: FormControl<string> }>;
}
