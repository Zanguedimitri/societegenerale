import { Component } from '@angular/core';
import { HeaderComponent } from '../../conponent/header/header.component';
import { FooterComponent } from '../../conponent/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
