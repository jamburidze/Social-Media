import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogRegPageComponent } from './log-reg-page/log-reg-page.component';
import { ProfileComponent } from './profile/profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: LogRegPageComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path:'about',
    component :AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
