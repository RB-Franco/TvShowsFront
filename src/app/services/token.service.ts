import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { ACCESS_TOKEN_STORAGE_KEY } from "../Constants/Autorization/access-token-storage-key";

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  private readonly jwtService: JwtHelperService;

  constructor() {
    this.jwtService = new JwtHelperService();
  }

  get token(): string {
    return localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY) ?? '';
  }

  get tokenData() {
    return this.jwtService.decodeToken(this.token);
  }

  setToken(token: string) {
    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, token);
  }

  clearToken() {
    localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
  }

  isTokenValid() {
    return this.token && !this.jwtService.isTokenExpired(this.token) ? this.token : null;
  }
}
