import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { Store } from '@ngrx/store';
import * as AppActions from './stores/page.actions';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isHomeRoute = signal(false);

  constructor(
    private store: Store,
    private _location: Location,
    private router: Router
  ) {
    this.store.dispatch(AppActions.loadApplication());

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomeRoute.set(this.router.url === '/home');
      }
    });
  }

  goBack() {
    this._location.back();
  }
}
