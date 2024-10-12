import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from '../pages/home/application.model';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  url = 'https://67090c04af1a3998baa02c83.mockapi.io/api/v1/Application';
  constructor(private http:HttpClient ) {
   }
    async getApplications () : Promise<Application[]>{
    return await lastValueFrom ( this.http.get<Application[]>(this.url) ) 
   
  }

}
