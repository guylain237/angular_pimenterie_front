import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPiment } from '../interfaces/IPiment';

@Injectable({
  providedIn: 'root'
})
export class PimentServiceService {
readonly API_URL:string='assets/data/piments.json';
  constructor(private client:HttpClient) {
  
   }
   get():Observable<IPiment[]>{
    return this.client.get<IPiment[]>(this.API_URL)
   }
}
