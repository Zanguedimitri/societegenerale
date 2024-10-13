import { Pipe, PipeTransform } from '@angular/core';
import { Application } from '../pages/home/application.model';
import { DatePipe } from '@angular/common';


@Pipe({
  name: 'response',
  standalone: true
})
export class ResponsePipe implements PipeTransform {
  constructor(private datePipe:DatePipe){}
  transform(response:string, ...args: unknown[]): unknown {
    const status =args[0] as string;
    const date = args[1] as string;
    const level = args[2] as string;
    const responseMapping :any = {
      PROGRESS : {
        ACCEPTED : {
            label: `Entretiens le ${this.datePipe.transform(date,'dd/MM/YYYY')}`,
            color:'blue'
        },
        REJECTED : {
            label: `Entretiens le ${this.datePipe.transform(date,'dd/MM/YYYY')}`,
            color:'blue'
        },
        PENDING : {
            label: `Entretiens le ${this.datePipe.transform(date,'dd/MM/YYYY')}`,
            color:'blue'
        }
      },

      CLOSED: {
        ACCEPTED : {
          label:'Accepté ',
          color: 'green'
        },
        REJECTED : {
          label:'Rejeté',
          color: 'red'
        },
        PENDING : {
          label: 'En attente',
          color:'blue'
        }

      },
      WAITING:{
        ACCEPTED : {
          label: 'Entretiens',
          color:''
      },
      REJECTED : {
          label: 'Entretiens',
          color:''
      },
      PENDING : {
        label: 'Entretiens',
        color:''
      }
      }
    }

    return responseMapping[status][response][level] || '' ;
  }

}
