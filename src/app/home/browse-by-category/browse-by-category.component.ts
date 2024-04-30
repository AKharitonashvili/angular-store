import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Categories } from '../../fake-api/fake-api';
import { CategoryInterface } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-browse-by-category',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './browse-by-category.component.html',
  styleUrl: './browse-by-category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowseByCategoryComponent {
  categories: CategoryInterface[] = Categories;
}
