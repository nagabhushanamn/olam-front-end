import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleVerifyGuard implements CanActivateChild {
  canActivateChild() {
    console.log('canActivateChild()');
    return true;
  }
}
