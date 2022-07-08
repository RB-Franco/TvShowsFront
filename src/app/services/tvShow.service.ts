import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable(
  {
    providedIn: "root"
  }
)

export class TvShowService
{

  constructor(private httpClient: HttpClient)
  {

  }
  private readonly baseUrl = environment["endPoint"]

  GetAllTvShows() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('Token')}`
    })
    return this.httpClient.get<any>
          (`${this.baseUrl}/GetAllTvShows/`, {headers: headers});
  }
}
