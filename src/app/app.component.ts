import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './conponent/header/header.component';
import { FooterComponent } from './conponent/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterOutlet,ContactComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Société Général';
}
