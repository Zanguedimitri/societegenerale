import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'responseColor',
  standalone: true
})
export class ResponseColorPipe implements PipeTransform {

  transform(response: string): unknown {

    const responseMapping :any = {
      PENDING:'blue',
      ACCEPTED : 'green',
      REJECTED:'red'
    }

    return responseMapping[response || 'PENDING'] ;

  }

}
