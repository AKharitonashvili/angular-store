import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  expanded = signal<boolean>(false);

  handleExpandedToggle = () => {
    this.expanded.set(!this.expanded());
  };
}
