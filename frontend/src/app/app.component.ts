import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star, moon, sunny } from 'ionicons/icons';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Coming soon', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Coming soon', url: '/folder/favorites', icon: 'heart' },
    { title: 'Coming soon', url: '/folder/archived', icon: 'archive' },
    { title: 'Coming soon', url: '/folder/trash', icon: 'trash' },
    { title: 'Coming soon', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Coming soon', 'Coming soon', 'Coming soon', 'Coming soon', 'Coming soon', 'Coming soon'];
  public isDarkMode = false;
  public darkModeIcon = 'moon';
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star, moon, sunny });
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    document.body.classList.toggle('dark-theme', this.isDarkMode);

    this.darkModeIcon = this.isDarkMode ? 'sunny' : 'moon';
  }

}
