//component che rappresneta il menu di Animalhosue
//sfrutta il servizio di MangiaBIscotto perché il base alla tipologia dell'utente la navbar cambia

import { Component, OnInit } from '@angular/core';
import { MangiaBiscottoService } from '../../../services/mangia-biscotto.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ruolo?: string;
  id?: string;
  user?: string;
  constructor(public biscotto: MangiaBiscottoService, public http: HttpClient) { }

  ngOnInit(): void {
    this.id=this.biscotto.getId();
    this.ruolo=this.biscotto.getRuolo();
    //accedo al db per prendere il mio user per poter accedere al mio profilo trmite la navbar
    this.http.get<any>('http://localhost:3000/CRUD/one/utenti/'+ this.id)
      .subscribe(data => {
        this.user=data.username;
      });  

  }

}
