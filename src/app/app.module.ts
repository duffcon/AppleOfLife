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
import { DComponent } from './d/d.component';


const appRoutes: Routes =
  [
    { path: 'A', component: AComponent },
    { path: 'B', component: BComponent },
    { path: 'C', component: CComponent },
    { path: 'D', component: DComponent },
    { path: '**', component: DComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AComponent,
    BComponent,
    CComponent,
    DComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
