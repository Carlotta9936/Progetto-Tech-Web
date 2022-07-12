import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AggiungiDBService } from '../aggiungi-db.service';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { MangiaBiscottoService } from '../mangia-biscotto.service';



@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  form: FormGroup;
  form2: FormGroup;
  postId: any; //id di ritorno da mongo
  url: string= "utenti"; //per indirizzare alla collection


  constructor(public fb: FormBuilder, private router: Router, public db: AggiungiDBService, public http: HttpClient, public cookieService: CookieService, public biscotto: MangiaBiscottoService) { 
    this.form = fb.group({
      "nome": ['',Validators.required],
      "cognome": ['',Validators.required],
      "email": ['',Validators.required],
      "username": ['',Validators.required],
      "password": ['',Validators.required],
      "ruolo": ['utente']
    });
    this.form2=fb.group({
      "confirmpassword": ['',Validators.required],
    });
  }

  ngOnInit(): void {
  }

  //metodo per verificare che gli input inseriti( e se sono stati inseriti) siano validi
  controllaInput(): void{
    console.log(this.form);
    if(!this.form.valid || !this.form2.valid){
      alert("Dati mancanti");
      return;
    }else{
      //controllo l'user non sia già in uso
      console.log(this.form.value.username);
      this.http.put<any>('http://localhost:3000/controllaUsername', this.form.value)
      .subscribe(data => {
        if(data==null){ //se data è vuoto non è in uso
          //controllo la mail non sia già in uso
          this.http.put<any>('http://localhost:3000/controllaEmail', this.form.value)
          .subscribe(data1 => {
            if(data1==null){ //se data è vuoto non è in uso
              if(this.form.value.password==this.form2.value.confirmpassword){
                this.db.aggiungiDB(this.form.value, this.url);
                //Chiamata al db per salvare il token
                this.http.put<any>('http://localhost:3000/ricercaUtenti', {user: this.form.value.username, password: this.form.value.password})
                .subscribe(data => {
                //Se data non è null vuol dire che ha trovato una corrispondenza nel DB, data = al token che dobbiamo salvare
                  if(data!==null){
                    this.cookieService.set("token",data);// in questo punto sto salvando il token in data
                    this.biscotto.getRuolo(); //richiamo metodo per prendere il ruolo dal token
                    this.router.navigate(['preferenze']);
                  }
                });
              }else{
                alert("le password non coincidono");
              }
            }else{
              alert( "mail: "+this.form.value.email+" è già in uso")
            }
          });
        }else{
          console.log("username già in uso")
          alert( "username: "+this.form.value.username+" è già in uso")
          return;
        }
      });
    }
  }
}
