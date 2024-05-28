import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import { MejoresPropiedadesComponent } from "./components/mejores-propiedades/mejores-propiedades.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MenuComponent, MejoresPropiedadesComponent]
})
export class AppComponent {
  title = 'ppPrueba';
}
