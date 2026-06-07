import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonFooter,
  IonButtons, IonButton, IonIcon,
  IonSegment, IonSegmentButton, IonLabel,
  IonList, IonItem,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menu, ellipsisVertical, star } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonFooter,
    IonButtons, IonButton, IonIcon,
    IonSegment, IonSegmentButton, IonLabel,
    IonList, IonItem,
  ],
})
export class HomePage {
  // El filtro elegido en el ion-segment. [(ngModel)] lo mantiene sincronizado.
  filtro = 'todos';

  // Lista de ejemplo: algunos elementos están marcados como favoritos.
  items = [
    { nombre: 'Manzanas', favorito: true },
    { nombre: 'Pan', favorito: false },
    { nombre: 'Café', favorito: true },
    { nombre: 'Leche', favorito: false },
  ];

  // Así se ocupa el filtro: con "favoritos" devolvemos solo los favoritos;
  // con "todos", la lista completa.
  get itemsFiltrados() {
    return this.filtro === 'favoritos'
      ? this.items.filter((item) => item.favorito)
      : this.items;
  }

  // En standalone los íconos se registran a mano con addIcons(...)
  constructor() {
    addIcons({ menu, ellipsisVertical, star });
  }
}
