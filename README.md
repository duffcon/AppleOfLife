# TreeApple



```
npm install --save jquery
npm install --save bootstrap
npm install --save animejs

```


Replace This:
```json
// angular.json: Line 25?
"styles": [
    "src/styles.css"
],
"scripts": []
```


With This:
```json
//angular.json
"styles": [
    "src/styles.css",
    "./node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
    "./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/bootstrap/dist/js/bootstrap.min.js",
    "./node_modules/animejs/anime.min.js"
]
```


Optional: Tabs.
```
//.editorconfig
indent_style = tab
indent_size = 4
```


Create NavBar.
```
ng generate component Nav
ng generate component A
ng generate component B
ng generate component C

```


Routing.
```ts
//app.module.ts
import { RouterModule, Routes } from '@angular/router';
```

```ts
//app.module.ts
const appRoutes: Routes =
  [
    { path: 'A', component: AComponent },
    { path: 'B', component: BComponent },
    { path: 'C', component: CComponent },
    { path: '**', component: AComponent }
  ];
```

```ts
//app.module.ts
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
```

All Together Now.
```ts
//app.module.ts
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

```


```html
<!-- //app.component.html -->
<div >
  <app-nav></app-nav>
</div>
<div class=' col-lg-12 body-content'>
  <router-outlet></router-outlet>
</div>
```


```html
<!-- //nav.component.html -->
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <a style="color:whitesmoke" class="navbar-brand">NaV</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" [routerLink]="['A']" [routerLinkActive]="['active']"> A <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" [routerLink]="['B']" [routerLinkActive]="['active']"> B </a>
      <a class="nav-item nav-link" [routerLink]="['C']" [routerLinkActive]="['active']"> C </a>

    </div>
  </div>
</nav>
```

Animejs.
```html
<!-- a.component.html -->
<svg width="500" height="500" >
  <polygon class="polymorph" stroke-width="4" fill="none" stroke="red" points="327.67 49.37 127.67 49.37 27.67 222.58 127.67 395.78 327.67 395.78 427.67 222.58 327.67 49.37"></polygon>
</svg> 
```

```ts
//a.component.ts
import * as anime from 'animejs';
```

```ts
//a.component.ts
var morphing = anime({
    targets: '.polymorph',
    points: [
        { value: "327.67 49.37 127.67 49.37 27.67 222.58 127.67 395.78 327.67 395.78 427.67 222.58 327.67 49.37" },
        { value: "248 2.91 18 66.24 0 282.24 180 324.24 301.58 439.19 466 165.58 248 2.91"},
        { value: "400 49.37 139.73 0 85.33 222.58 124.67 428.91 382.67 368.91 366.67 214.91 400 49.37" },
        { value: "327.67 49.37 127.67 49.37 27.67 222.58 127.67 395.78 327.67 395.78 427.67 222.58 327.67 49.37" }
    ],
    easing: 'easeOutQuad',
    duration: 2000,
    loop: true
});
```

All Together Now.
```ts
//a.component.ts
import { Component, OnInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      var morphing = anime({
        targets: '.polymorph',
        points: [
          { value: "327.67 49.37 127.67 49.37 27.67 222.58 127.67 395.78 327.67 395.78 427.67 222.58 327.67 49.37" },
          { value: "248 2.91 18 66.24 0 282.24 180 324.24 301.58 439.19 466 165.58 248 2.91"},
          { value: "400 49.37 139.73 0 85.33 222.58 124.67 428.91 382.67 368.91 366.67 214.91 400 49.37" },
          { value: "327.67 49.37 127.67 49.37 27.67 222.58 127.67 395.78 327.67 395.78 427.67 222.58 327.67 49.37" }
        ],
        easing: 'easeOutQuad',
        duration: 2000,
        loop: true
      });
  }

}

```
