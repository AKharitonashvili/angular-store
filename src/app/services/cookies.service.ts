import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  constructor(private cookieService: CookieService) {}

  setCookie(name: string, value: any[]) {
    this.cookieService.set(name, JSON.stringify(value));
  }

  getCookie(name: string) {
    const value = this.cookieService.get(name);

    return value ? JSON.parse(value) : undefined;
  }

  deleteCookie(name: string) {
    this.cookieService.delete('myCookie');
  }
}
