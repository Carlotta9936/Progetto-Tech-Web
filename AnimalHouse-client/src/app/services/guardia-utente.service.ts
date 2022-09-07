//servizio che blocca l'accesso alla pagina se non si è un utente

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { MangiaBiscottoService } from './mangia-biscotto.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiaUtenteService {

  ruolo?: string;

  constructor(private _router:Router, public biscotto: MangiaBiscottoService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    try{
      this.ruolo=this.biscotto.getRuolo();
    }catch (error) {
      this.ruolo='';
    }
    
    if(this.ruolo=='utente'){
      return true;
    }else{
      this.router.navigate(['**']);
      return false;
    }
  }
}
