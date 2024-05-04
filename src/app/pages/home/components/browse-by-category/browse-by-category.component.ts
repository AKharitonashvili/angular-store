import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CategoryInterface } from '../../../../shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import * as CategorySelectors from '../../../../stores/categories/categories.selectors';
import { Observable, combineLatest, map, tap } from 'rxjs';
import { SliceByIndexPipe } from '../../../../shared/pipes/slice-by-index/slice-by-index.pipe';
import { Router } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-browse-by-category',
  standalone: true,
  imports: [CommonModule, MatIconModule, SliceByIndexPipe, SkeletonModule],
  templateUrl: './browse-by-category.component.html',
  styleUrl: './browse-by-category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowseByCategoryComponent {
  index = signal<number>(0);
  minIndex = signal<number>(0);
  maxIndex = signal<number>(0);

  vm$: Observable<{
    categories: CategoryInterface[] | undefined;
    categoriesLoading: boolean;
  }> = combineLatest([
    this.store.select(CategorySelectors.selectCategories).pipe(
      tap(v => {
        this.maxIndex.set((v?.length ?? 0) - 1);
        this.minIndex.set(6);
        this.index.set(this.maxIndex() - (this.maxIndex() - 6));
      })
    ),
    this.store.select(CategorySelectors.selectCategoriesLoading),
  ]).pipe(
    map(([categories, categoriesLoading]) => ({
      categories,
      categoriesLoading,
    }))
  );

  constructor(
    private store: Store,
    private router: Router
  ) {}

  changeIndex(prev?: boolean) {
    if (prev) {
      if (!(this.index() < 7)) {
        this.index.set(this.index() - 1);
      }
    } else {
      if (this.index() !== this.maxIndex()) {
        this.index.set(this.index() + 1);
      }
    }
  }

  navigateTo(category: string) {
    this.router.navigateByUrl(`products/categories/${category}`);
  }
}
