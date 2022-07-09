import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowModel } from 'src/app/models/showModel';
import { TvShowService } from 'src/app/services/tvShow.service';


@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.scss']
})
export class TvShowDetailsComponent implements OnInit {

  data: any;
  tvShowDetail!: ShowModel;

  constructor(
    private readonly route: ActivatedRoute,
    private router: Router,
    private tvShowService: TvShowService) {
   }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(param=> {
      this.getTvShowDetails(param['Id']);
    });
  }

  getTvShowDetails(showId: number){
    debugger;
    this.tvShowService.GetTvShowDetailById(showId)
    .subscribe(
      result => {
        if(result)
        this.tvShowDetail = result;
      });
  }

}
