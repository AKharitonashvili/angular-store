import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-browse-by-category',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './browse-by-category.component.html',
  styleUrl: './browse-by-category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowseByCategoryComponent {
  categories = [
    { name: 'Phones', icon: 'smartphone' },
    { name: 'Smart Watches', icon: 'watch' },
    { name: 'Cameras', icon: 'local_see' },
    { name: 'Headphones', icon: 'headphones' },
    { name: 'Computers', icon: 'computer' },
    { name: 'Gaming', icon: 'sports_esports' },
  ];
}
