import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CategoryInterface } from '../../shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import * as CategorySelectors from '../../stores/home/categories/categories.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-browse-by-category',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './browse-by-category.component.html',
  styleUrl: './browse-by-category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowseByCategoryComponent {
  categories$: Observable<CategoryInterface[] | undefined> = this.store.select(
    CategorySelectors.selectCategories
  );

  constructor(private store: Store) {}
}
