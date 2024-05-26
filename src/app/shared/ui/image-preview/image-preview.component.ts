import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-image-preview',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './image-preview.component.html',
  styleUrl: './image-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagePreviewComponent implements OnInit {
  @Input() imageContainer!: string[] | undefined;

  selectedImage = signal<string | undefined>(undefined);

  selectImage(image: string) {
    this.selectedImage.set(image);
  }

  ngOnInit(): void {
    this.selectedImage.set(this.imageContainer?.[0]);
  }
}
