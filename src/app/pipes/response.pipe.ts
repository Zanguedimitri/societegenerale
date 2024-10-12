import { Pipe, PipeTransform } from '@angular/core';
import { Application } from '../pages/home/application.model';
import { DatePipe } from '@angular/common';


@Pipe({
  name: 'response',
  standalone: true
})
export class ResponsePipe implements PipeTransform {
  constructor(private datePipe:DatePipe){}
  transform(application:Application, ...args: unknown[]): unknown {
    const responseMapping :any = {
      PROGRESS : {0 : {
        label: `Entretiens le ${this.datePipe.transform(application.interviewDate,'dd/MM/YYYY')}`,
        color:'blue'
      }},
      CLOSED: {
        ACCEPTED : {
          label:'Accepté ',
          color: 'green'
        },
        REJECTED : {
          label:'Rejeté',
          color: 'red'
        }
      },
      WAITING:{0:{0:{}}}
    }
    const level:any = args[0] || 0
    const response = application.hrResponse || 0
    return responseMapping[application.status][response][level] || '' ;
  }

}
