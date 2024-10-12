import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { menu } from './model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menus :menu[] = [
    {'name':'<img src="/asset/Shape.png" alt="BOUTIQUE" srcset="">',
      'link':'',
    },
    {'name':'OFFRES DISPONIBLE',
      'link':'home'
    },
    {'name':'VOS CANDIDATURE',
      'link':'contact'
    },
    {'name':'VOTRES CV',
      'link':'cv'
    },
    {'name':'PARAMETRES',
      'link':'parametre'
    },
  ]
}
