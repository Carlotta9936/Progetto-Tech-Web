import { Component, OnInit } from '@angular/core';
import { ProfiloServiceService } from '../profilo-service.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {

  constructor(public profilo: ProfiloServiceService) { }

  ngOnInit(): void {
  }

  

}
