import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TokenService } from "./token.service";
import { Observable } from "rxjs";
import { TvShowsModel } from "../models/TvShowsModel";

@Injectable(
  {
    providedIn: "root"
  }
)

export class TvShowService
{
  
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService )
  {
  }

  private readonly _token!: string;
  private readonly baseUrl = environment["endPoint"];
  private readonly _headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.tokenService.token}`
  });

  GetAllTvShows() {
    return this.httpClient.get<any>
          (`${this.baseUrl}/GetAllTvShows/`, {headers: this._headers});
  }
  
  GetAllFavorites() {
    return this.httpClient.get<any>
          (`${this.baseUrl}/GetAllFavorites/`, {headers: this._headers});
  }

  AddToFavorites(object: any) {
    let userId = this.tokenService.tokenData.idUser
    return this.httpClient.post<TvShowsModel>
          (`${this.baseUrl}/AddTvShowToFavorites/?userId=${userId}`, object, {headers: this._headers});
  }
}
