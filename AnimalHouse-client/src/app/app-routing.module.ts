import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabyAnimalComponent } from './baby-animal/baby-animal.component';
import { CuriositaComponent } from './curiosita/curiosita.component';
import { GiochiComponent } from './giochi/giochi.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MemeComponent } from './meme/meme.component';
import { PrimaComponent } from './prima/prima.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { RegistrazioneAdminComponent } from './registrazione-admin/registrazione-admin.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ClassificheComponent } from './classifiche/classifiche.component';
import { ProfessionistiComponent } from './professionisti/professionisti.component';
import { UtentiComponent } from './utenti/utenti.component';
import { QuizComponent } from './quiz/quiz.component';
import { AggiungiCuriositaComponent } from './aggiungi-curiosita/aggiungi-curiosita.component';
import { PreferenzeComponent } from './preferenze/preferenze.component';

const routes: Routes = [
  {path: '', component: PrimaComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'signup', component: RegistrazioneComponent},
  {path: 'signupAdmin', component: RegistrazioneAdminComponent},
  {path: 'games', component: GiochiComponent},
  {path: 'babyanimal/meme', component: MemeComponent},
  {path: 'babyanimal', component: BabyAnimalComponent},
  {path: 'curiosity', component: CuriositaComponent},
  {path: 'curiosity/addcuriosity', component: AggiungiCuriositaComponent},
  {path: 'profilo',component: ProfiloComponent}, //ci sarà poi da aggiungere l'id
  {path: 'classifiche', component: ClassificheComponent},
  {path: 'newProfessionisti', component: ProfessionistiComponent},
  {path: 'utenti', component: UtentiComponent},
  {path: 'preferenze', component: PreferenzeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
