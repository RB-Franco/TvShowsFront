import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable(
  {
    providedIn: "root"
  }
)

export class LoginService
{
  private _isValidUser: boolean = false

  constructor(private httpClient: HttpClient)
  {
  }

  private readonly baseUrl = environment["endPoint"]

  SigInUser(object: any) {
    return this.httpClient.post<any>
          (`${this.baseUrl}/CreateTokenIdentity/`, object);
  }

  setValid(result: boolean){
    this._isValidUser = result;
  }

  isValid(){
    return this._isValidUser;
  }
}
