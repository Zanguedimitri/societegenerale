import { Pipe, PipeTransform } from '@angular/core';
import { HrResponse } from '../pages/home/application.model';

@Pipe({
  name: 'responseLabel',
  standalone: true
})
export class ResponseLabelPipe implements PipeTransform {

  transform(response: HrResponse, ...args: string[]): unknown {
    const date = args[0];

    const responseMapping  = {
      PENDING:`Entretiens le ${date}`,
      ACCEPTED : 'Acceptée',
      REJECTED:'Refusée'
    }
     return responseMapping[response || 'PENDING'];
  }

}
