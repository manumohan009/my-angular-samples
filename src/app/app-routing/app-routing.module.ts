import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ParentComponent } from '../parent-child/parent/parent.component';
import { MyHomeComponent } from '../shared-service/my-home/my-home.component';
import { ConsumeHttpComponent } from '../consume-http/consume-http.component';
import { HttpClientComponent } from '../http-example/http-client/http-client.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/http-example',
		pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: 'shared-service',
    component: MyHomeComponent
  },
  {
    path: 'http-example',
    component: HttpClientComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
