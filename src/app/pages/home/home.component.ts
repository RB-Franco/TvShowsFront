import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FavoriteModel } from 'src/app/models/favoriteModel';
import { ShowModel } from 'src/app/models/showModel';
import { TvShowService } from 'src/app/services/tvShow.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private tvShowService: TvShowService
  ) { }

  listTvShows: ShowModel[] = [];
  listFavorites: FavoriteModel[] = [];

  ngOnInit(): void {
    this.getAllTvShows()
    this.getAllfavorites()
  }

  getAllTvShows(){
    this.tvShowService.getAllTvShows()
    .subscribe(
      data => {
        this.listTvShows = data;
      }
    );
  }

  getAllfavorites(){
    this.tvShowService.getAllFavorites()
    .subscribe(
      data => {
        this.listFavorites = data;
      }
    );
  }

  showDetails(show: ShowModel){
    this.router.navigate(["/tv-show-details"], {queryParams: {Id: show.id}});
  }

  favorites(show: ShowModel){
    debugger;
    let favorite = this.listFavorites.find(x=> x.showId == show.id)

    if(favorite != undefined){
      this.removeToFavorite(favorite, show.id);
      return;
    }

    this.addToFavorite(show)
  }

  checkFavorite(showId: number){
    debugger;
    return this.listFavorites.some(x=> x.showId == showId) ? 'favorite' : 'favorite_border'
  }

  private removeToFavorite(favorite: FavoriteModel, showId: number){
    let index = this.listFavorites.findIndex(x=> x.showId == showId)

    this.tvShowService.removeFavorite(favorite)
    .subscribe(
      result => {
        if(result)
          this.listFavorites.splice(index, 1);
      });
  }

  private addToFavorite(show: ShowModel){
    this.tvShowService.addToFavorites(show)
    .subscribe(
      data => {
        if(data)
          this.listFavorites.push(data);
      }
    );
  }
}

