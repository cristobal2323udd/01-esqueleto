import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonFooter,
  IonButtons, IonButton, IonIcon,
  IonSegment, IonSegmentButton, IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menu, ellipsisVertical } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonFooter,
    IonButtons, IonButton, IonIcon,
    IonSegment, IonSegmentButton, IonLabel,
  ],
})
export class HomePage {
  // El filtro elegido en el ion-segment. [(ngModel)] lo mantiene sincronizado.
  filtro = 'todos';

  // En standalone los íconos se registran a mano con addIcons(...)
  constructor() {
    addIcons({ menu, ellipsisVertical });
  }
}
