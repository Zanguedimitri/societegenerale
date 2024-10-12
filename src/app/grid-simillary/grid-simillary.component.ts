import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-simillary',
  standalone: true,
  imports: [],
  templateUrl: './grid-simillary.component.html',
  styleUrl: './grid-simillary.component.css'
})
export class GridSimillaryComponent {

   offres = [
    {
      type:'CDI',
      work:'International Marketing Project Manager H/F',
      city:'Brazzaville',
    },
    {
      type:'CDD',
      work:'Contrôleur de Gestion Sociale H/F',
      city:'Point-Noire',
    },
    {
      type:'CDD',
      work:'Conseiller Clientèle BtoB, H/F, CDD',
      city:'Point-Noire',
    }
  ]

}
