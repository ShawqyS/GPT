import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/home.component';
import { EventDetailComponent } from './eventdetails/event-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'event-detail', component: EventDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventDetailComponent
    // Andere componenten...
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(appRoutes)
    // Andere modules...
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    // Andere providers...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
