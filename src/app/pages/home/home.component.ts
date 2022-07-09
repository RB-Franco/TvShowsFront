import { Component, OnInit } from '@angular/core';
import { TvShowsModel } from '../../models/TvShowsModel';
import { TvShowService } from 'src/app/services/tvShow.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private tvShowService: TvShowService
  ) { }

  listTvShows: TvShowsModel[] = [];
  listFavorites: TvShowsModel[] = [];

  ngOnInit(): void {
    this.getAllTvShows()
    this.getAllfavorites()
  }

  getAllTvShows(){
    this.tvShowService.GetAllTvShows()
    .subscribe(
      data => {
        this.listTvShows = data;
      }
    );
  }

  getAllfavorites(){
    this.tvShowService.GetAllTvShows()
    .subscribe(
      data => {
        this.listTvShows = data;
      }
    );
  }

  showDetails(show: TvShowsModel){

  }

  addToFavorites(show: TvShowsModel){
    debugger;
    this.tvShowService.AddToFavorites(show)
    .subscribe(
      data => {
        debugger;        
        this.listFavorites.push(data);
      }
    );
  }

  checkFavorite(refecence: number){
    debugger;
    return this.listFavorites.some(x=> x.referenceId == refecence) ? 'favorite' : 'favorite_border'
  }
}

