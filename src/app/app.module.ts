import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowTimeComponent } from './show-time/show-time.component';
import { CounterComponent } from './counter/counter.component';
import { ConsumeHttpComponent } from './consume-http/consume-http.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { Child1Component } from './parent-child/child1/child1.component';
import { Child2Component } from './parent-child/child2/child2.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MyHomeComponent } from './shared-service/my-home/my-home.component';
import { MyChild1Component } from './shared-service/my-child1/my-child1.component';
import { MyChild2Component } from './shared-service/my-child2/my-child2.component';
import { HttpClientComponent } from './http-example/http-client/http-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowTimeComponent,
    CounterComponent,
    ConsumeHttpComponent,
    ProductsComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    MyHomeComponent,
    MyChild1Component,
    MyChild2Component,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
