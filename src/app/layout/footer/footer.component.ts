import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  redirectToStore() {
    const userAgent = navigator.userAgent || navigator.vendor;

    // Detect Android
    if (/android/i.test(userAgent)) {
      window.location.href =
        'https://play.google.com/store/apps/details?id=za.co.vitality.health';
    }
    // Detect iOS
    else if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href =
        'https://apps.apple.com/us/app/power-of-vitality/id6444772659';
    } else {
      alert('Your platform is not supported for redirection.');
    }
  }
}
