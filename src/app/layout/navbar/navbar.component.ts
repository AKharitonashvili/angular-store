import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../../shared/ui/search-input/search-input.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, SearchInputComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  showMenu = signal<boolean>(false);

  constructor(public router: Router) {}

  toggleShowMenu() {
    this.showMenu.set(!this.showMenu());
    console.log(this.showMenu());
  }
}
