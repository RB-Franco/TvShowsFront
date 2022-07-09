import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TokenService } from "./token.service";
import { FavoriteModel } from 'src/app/models/favoriteModel';
import { EpisodeModel } from "../models/episodeModel";

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

  private readonly _userId = this.tokenService.tokenData.idUser;
  private readonly baseUrl = environment["endPoint"];
  private readonly _headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.tokenService.token}`
  });

  getAllTvShows() {
    return this.httpClient.get<TvShowsModel[]>
          (`${this.baseUrl}/getAllTvShows/`, {headers: this._headers});
  }

  GetEpisodesByTvShow(showId: number) {
    return this.httpClient.get<EpisodeModel[]>
          (`${this.baseUrl}/getAllTvShows/?tvShowId=${showId}`, {headers: this._headers});
  }


  getAllFavorites() {
    return this.httpClient.get<any>
          (`${this.baseUrl}/getAllFavoritesByUserId/?userId=${this._userId}`, {headers: this._headers});
  }

  addToFavorites(object: any) {
    return this.httpClient.post<FavoriteModel>
          (`${this.baseUrl}/addTvShowToFavorites/?userId=${this._userId}`, object, {headers: this._headers});
  }

  removeFavorite(object: any) {
    return this.httpClient.delete<TvShowsModel>
          (`${this.baseUrl}/removeTvShowToFavorites/`, {headers: this._headers, body: object});
  }
}
