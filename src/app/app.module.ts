import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular 
import { RouterModule, Routes } from '@angular/router';

//Me
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';


const appRoutes: Routes =
  [
    { path: 'A', component: AComponent },
    { path: 'B', component: BComponent },
    { path: 'C', component: CComponent },
    { path: '**', component: AComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AComponent,
    BComponent,
    CComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
