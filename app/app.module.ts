import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{ MatCardModule} from '@angular/material/card';
import{ MatButtonModule} from '@angular/material/button';
import{ MatInputModule} from '@angular/material/input';
import{ MatIconModule} from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TitleComponent } from './title/title.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ThanksNoteComponent } from './thanks-note/thanks-note.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FixedComponent } from './fixed/fixed.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TitleComponent,
    ThanksNoteComponent,
    FixedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatCardModule,MatButtonModule,MatInputModule,ReactiveFormsModule,MatIconModule,
    MatSelectModule,MatDatepickerModule,MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
