//component che mostra all'interno del profilo gli animali preferiti di quell'utente

import { Component, OnInit } from '@angular/core';
import { MangiaBiscottoService } from '../../../services/mangia-biscotto.service';
import { HttpClient } from '@angular/common/http';
import { ProfiloServiceService } from '../../../services/profilo-service.service';


@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent implements OnInit {

  id?: any;
  animali?: any;

  constructor(public biscotto: MangiaBiscottoService, public http: HttpClient, public profilo: ProfiloServiceService) { }

  ngOnInit(): void {
    
  }

}
