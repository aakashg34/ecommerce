import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: string = '';
  private address : string = '';

  setUsername(username: string) {
    this.username = username;
  }

  getUsername(): string {
    return this.username;
  }

  setAddress(address : string) {
    this.address =address
  }

  getAddress() {
    return this.address
  }



}
