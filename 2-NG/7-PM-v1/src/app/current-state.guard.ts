import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentStateGuard implements CanDeactivate<any> {
  canDeactivate() {
    console.log('canDeactivate()');
    let c = confirm('Are sure to leave!');
    if (c) return true;
    return false;
  }
}
