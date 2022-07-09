import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.scss']
})
export class TvShowDetailsComponent implements OnInit {

  tvShowDetail: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.tvShowDetail = nav?.extras.state;
   }

  ngOnInit(): void {
    debugger;
    if(this.tvShowDetail?.tvShowDetail){
      
    }
  }

}
