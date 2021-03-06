import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FacebookModule } from 'ngx-facebook';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './nav/login/login.component';
import { RegisterComponent } from './nav/register/register.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'contact',  component: ContactComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    CommentsComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FacebookModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
