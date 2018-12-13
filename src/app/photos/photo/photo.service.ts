import{ HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'

import { Photo } from './photo';

const API = environment.API;

@Injectable({providedIn: 'root'})
export class PhotoService {
  constructor(private http: HttpClient) { }

  listFromUser(userName: string){
    console.log(API);
    return this.http
    .get<Photo[]>(API + '/' + userName + '/photos');
  }

  listFromUserPaginated(userName: string, page: number){
    const params = new HttpParams()
    .append('page', page.toString());

    return this.http
    .get<Photo[]>(API + '/' + userName + '/photos', { params: params });
  }
}