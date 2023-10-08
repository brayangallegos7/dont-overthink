import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'inicio', url: '/inicio/', icon: 'home' },
    { title: 'noticias', url: '/noticias/', icon: 'newspaper' },
    { title: 'tienda', url: '/comunidad/', icon: 'cart' },
    { title: 'acerca', url: '/acerca/', icon: 'information' },
    { title: 'contacto', url: '/contacto/', icon: 'call' },
  ];
 // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
