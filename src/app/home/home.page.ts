import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonSegment, IonSegmentButton, IonLabel, IonList, IonItem, IonNote } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonSegment, IonSegmentButton, IonLabel, IonList, IonItem, IonNote],
})
export class HomePage {
  // Cambia cuando tocas el segmento, así que es un signal.
  filtro = signal('todos');

  // La lista en sí no cambia nunca: propiedad normal, sin signal.
  items = [
    { nombre: 'Pan', favorito: false },
    { nombre: 'Leche', favorito: true },
    { nombre: 'Correr 5K', favorito: true },
    { nombre: 'Estudiar Ionic', favorito: false },
  ];

  // Estado derivado: computed() se recalcula solo cuando cambia filtro().
  itemsFiltrados = computed(() =>
    this.filtro() === 'todos' ? this.items : this.items.filter((i) => i.favorito),
  );
}
