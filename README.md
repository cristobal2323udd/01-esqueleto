# 01 · Esqueleto — ion-header + ion-content + ion-footer

El esqueleto de toda página, con sus tres partes:

1. **Header** — barra fija arriba (`ion-header`), con un segundo `ion-toolbar` que lleva el `ion-segment` del filtro.
2. **Content** — el cuerpo de la página (`ion-content`), donde va la lista.
3. **Footer** — barra fija abajo (`ion-footer`). Ni él ni el header se mueven cuando la lista hace scroll.

Encima de eso está el tema de la clase, los **signals**:

- `filtro` es un `signal`, o sea una caja con un valor adentro. `[(ngModel)]` le escribe la opción que elegiste en el segmento, y se lee llamándolo: `filtro()`, con paréntesis.
- `items` es una propiedad normal, sin signal, porque la lista en sí nunca cambia.
- `itemsFiltrados` es un `computed()`: no guarda nada, se calcula a partir de `filtro()`. Toca una pestaña y la lista cambia sola. Fíjate en que nadie escribió «ahora actualiza la lista»: eso es estado derivado.

**Archivos clave:** `src/app/home/home.page.html` y `src/app/home/home.page.ts`

---

Proyecto **Ionic Angular standalone** (Angular 20 + Ionic 8) de la **clase 2** de
IIP323W · Tecnologías y Aplicaciones Web y Móviles.

Es el mismo código del celular que viste en la presentación, pero completo y
ejecutable. Al abrirlo en StackBlitz, espera el `npm install` y se levanta solo
(`npm start` → `ng serve`).
