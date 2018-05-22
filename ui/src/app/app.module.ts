import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import {
  FormsModule,
  ReactiveFormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatMenuModule,
  MatCommonModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatSelectModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatSnackBarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppService} from "./services/app.service";
import {MyErrorStateMatcher} from "./services/errorstatematcher";
import {AuthService} from "./services/auth/auth.service";
import {SidebarService} from "./services/sidebar.service"
import {AuthGuard} from "./services/auth/auth-guard.service";
import {HomeComponent} from "../app/views/home/home.component";
import { HeaderComponent } from './views/header/header.component';
import { SidenavComponent } from './views/sidenav/sidenav.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { BookingsComponent } from './views/bookings/bookings.component';
import { ReviewsComponent } from './views/reviews/reviews.component';
import { ListingsComponent } from './views/listings/listings.component';
import { SettingsComponent } from './views/settings/settings.component';
import {LocationDialog} from "./views/location/locationdialog.component";
import { AlertComponent } from './views/alert/alert.component';
import {AlertService} from "./services/alert.service";
import {LocationService} from "./services/location.service";
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LocationDialog,
    SidenavComponent,
    DashboardComponent,
    BookingsComponent,
    ReviewsComponent,
    ListingsComponent,
    SettingsComponent,
    AlertComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCommonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    MatListModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSnackBarModule
  ],
  providers: [
    AppService,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    MyErrorStateMatcher,
    AuthService,
    AuthGuard,
    SidebarService,
    AlertService,
    LocationService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LocationDialog
  ]
})
export class AppModule {
}

