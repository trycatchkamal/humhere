import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "../app/views/home/home.component";
import {DashboardComponent} from "../app/views/dashboard/dashboard.component";
import {BookingsComponent} from "../app/views/bookings/bookings.component";
import {ListingsComponent} from "../app/views/listings/listings.component";
import {ReviewsComponent} from "../app/views/reviews/reviews.component";
import {SettingsComponent} from "../app/views/settings/settings.component";
import {AuthGuard} from "../app/services/auth/auth-guard.service"
import {LandingComponent} from "./views/landing/landing.component";
import {ExploreComponent} from "./views/explore/explore.component";
import {ListComponent} from "./views/list/list.component";

const routes:Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
      },
      {
        path: 'bookings',
        canActivate: [AuthGuard],
        component: BookingsComponent
      },
      {
        path: 'listings',
        canActivate: [AuthGuard],
        component: ListingsComponent,
      },
      {
        path: 'reviews',
        canActivate: [AuthGuard],
        component: ReviewsComponent,
      },
      {
        path: 'settings',
        canActivate: [AuthGuard],
        component: SettingsComponent,
      }
    ]
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'explore',
    component: ExploreComponent,
  },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
