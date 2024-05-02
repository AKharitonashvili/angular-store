import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CategoryInterface } from '../../../../shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import * as CategorySelectors from '../../../../stores/home/categories/categories.selectors';
import { Observable, tap } from 'rxjs';
import { SliceByIndexPipe } from '../../../../shared/pipes/slice-by-index/slice-by-index.pipe';

@Component({
  selector: 'app-browse-by-category',
  standalone: true,
  imports: [CommonModule, MatIconModule, SliceByIndexPipe],
  templateUrl: './browse-by-category.component.html',
  styleUrl: './browse-by-category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowseByCategoryComponent {
  index = signal<number>(0);
  minIndex = signal<number>(0);
  maxIndex = signal<number>(0);

  categories$: Observable<CategoryInterface[] | undefined> = this.store
    .select(CategorySelectors.selectCategories)
    .pipe(
      tap(v => {
        this.maxIndex.set((v?.length ?? 0) - 1);
        this.minIndex.set(6);
        this.index.set(this.maxIndex() - (this.maxIndex() - 6));
      })
    );

  constructor(private store: Store) {}

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
}
