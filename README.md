# 01 · Esqueleto — ion-header + ion-content + ion-footer

El esqueleto de toda página, con sus tres partes:

1. **Header** — barra fija arriba (`ion-header`), con botones en los slots `start`/`end` del `ion-toolbar` (`ion-buttons`).
2. **Content** — el cuerpo que scrollea (`ion-content [fullscreen]="true"`); hay texto de sobra para ver el scroll mientras header y footer quedan fijos.
3. **Footer** — barra fija abajo (`ion-footer`).

**Archivo clave:** `src/app/home/home.page.html`

---

Proyecto **Ionic Angular standalone** (Angular 20 + Ionic 8) de la **clase 2** de
IIP323W · Tecnologías y Aplicaciones Web y Móviles.

Es el mismo código del celular que viste en la presentación, pero completo y
ejecutable. Al abrirlo en StackBlitz, espera el `npm install` y se levanta solo
(`npm start` → `ng serve`).
