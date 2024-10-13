import { ResponseColorPipe } from './../../pipes/response-color.pipe';
import { Component} from '@angular/core';
import { HeaderComponent } from '../../conponent/header/header.component';
import { FooterComponent } from '../../conponent/footer/footer.component';
import { GridSimillaryComponent } from '../../grid-simillary/grid-simillary.component';
import { Application } from './application.model';
import { ApplicationService } from '../../services/application.service';
import { CommonModule, DatePipe } from '@angular/common';
import { StatusPipe } from '../../pipes/status.pipe';
import { ResponsePipe } from '../../pipes/response.pipe';
import { ResponseLabelPipe } from '../../pipes/response-label.pipe';



@Component({
  selector: 'app-home',
  standalone: true,
  providers:[DatePipe],
  imports: [
    ResponseColorPipe,ResponseLabelPipe,HeaderComponent,
    FooterComponent,GridSimillaryComponent,CommonModule,StatusPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private applicationService:ApplicationService,private datePipe:DatePipe ){

  }
  applications!:Application[];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getApplication()
  }
  async getApplication (){
    try {
      this.applications =  await this.applicationService.getApplications()
    } catch (error) {
      
    }
  }

 
}
