import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ThanksNoteComponent } from './thanks-note/thanks-note.component';
import { TitleComponent } from './title/title.component';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'title', component: TitleComponent},
  {path:'thanks-note', component: ThanksNoteComponent}

//   children: [
//     {
//         path:'', component: LoginComponent,
        
//     }
    
//   ]
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
