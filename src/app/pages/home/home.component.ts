import { Component, OnInit } from '@angular/core';
import { TvShowsModel } from '../../models/TvShowsModel';
import { TvShowService } from 'src/app/services/tvShow.service';
import { faHeart, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faHeart = faHeart;
  faEye = faEye;
  constructor(private tvShowService: TvShowService) { }

  listTvShows!: TvShowsModel[];

  ngOnInit(): void {
    this.getAllTvShows()
  }

  getAllTvShows(){
    this.tvShowService.GetAllTvShows()
    .subscribe(
      data => {
        this.listTvShows = data;
      }
    );
  }
}

