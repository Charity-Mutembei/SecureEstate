import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertiesComponent } from './properties/properties.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUSComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    PropertiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'aboutUsComponent', component: AboutUSComponent},
      {path: 'properties', component: PropertiesComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
