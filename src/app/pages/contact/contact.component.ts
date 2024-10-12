import { Component } from '@angular/core';
import { HeaderComponent } from '../../conponent/header/header.component';
import { FooterComponent } from '../../conponent/footer/footer.component';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

    user = new FormGroup({
    id: new FormControl<string>(''),
    name: new FormControl<string>(''),
    prenom: new FormControl<string>(''),
    date: new FormControl<string>(''),
    lieu: new FormControl<string>(''),
    email: new FormControl<string>(''),
    niveau: new FormControl<string>(''),
    domaine: new FormControl<string>(''),
  });

}
