import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ParentComponent } from '../parent-child/parent/parent.component';
import { MyHomeComponent } from '../shared-service/my-home/my-home.component';
import { ConsumeHttpComponent } from '../consume-http/consume-http.component';
import { HttpClientComponent } from '../http-example/http-client/http-client.component';
import { MyMapComponent } from '../agm-example/my-map/my-map.component';
import { MyRxjsComponent } from '../rxjs-example/my-rxjs/my-rxjs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/rxjs-example',
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
  },
  {
    path: 'agm-example',
    component: MyMapComponent
  },
  {
    path: 'rxjs-example',
    component: MyRxjsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // RouterModule.forRoot(routes, { useHash: true })
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
