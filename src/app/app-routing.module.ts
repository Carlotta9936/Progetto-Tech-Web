import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiochiComponent } from './giochi/giochi.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MemeComponent } from './meme/meme.component';
import { MemoryComponent } from './memory/memory.component';
import { PrimaComponent } from './prima/prima.component';
import { RegistrazioneAdminComponent } from './registrazione-admin/registrazione-admin.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';

const routes: Routes = [
  {path: '', component: PrimaComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'signup', component: RegistrazioneComponent},
  {path: 'signupAdmin', component: RegistrazioneAdminComponent},
  {path: 'games', component: GiochiComponent},
  {path: 'games/memory', component: MemoryComponent},
  {path: 'meme', component: MemeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
