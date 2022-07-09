import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    
  }

  logout(){
    this.tokenService.clearToken()
    this.router.navigate(["/login"])
  }
}
