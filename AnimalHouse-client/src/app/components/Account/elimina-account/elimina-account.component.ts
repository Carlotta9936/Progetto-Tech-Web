//compoente che utilizza i metodi di ProfiloService per recuperare i dati dell'utente e eliminarlo

import { Component, OnInit } from '@angular/core';
import { ProfiloServiceService } from '../../../services/profilo-service.service';
@Component({
  selector: 'app-elimina-account',
  templateUrl: './elimina-account.component.html',
  styleUrls: ['./elimina-account.component.css']
})
export class EliminaAccountComponent implements OnInit {

  
  constructor(public profilo: ProfiloServiceService) { }

  ngOnInit(): void {
  }

}
