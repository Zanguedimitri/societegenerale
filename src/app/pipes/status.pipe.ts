import { DatePipe } from '@angular/common';
import { inject, Pipe, PipeTransform } from '@angular/core';
import { Application } from '../pages/home/application.model';

@Pipe({
  name: 'status',
  
  standalone: true
})
export class StatusPipe implements PipeTransform {

  constructor(private datePipe:DatePipe){}
  transform(application: Application, ...args: unknown[]): unknown {

    const statusMapping = {
      PROGRESS : 'En cours',
      CLOSED:`Entretiens le ${this.datePipe.transform(application.interviewDate,'dd/MM/YYYY')}`,
      WAITING : 'En attente'
    }
    return statusMapping[application.status] || 'RAS'
  }

}
