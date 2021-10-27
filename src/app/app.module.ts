import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';

//routes
import { ROUTES } from './components/app.routes';
import { UserComponent } from './components/user/user.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartComponent } from './components/chart/chart.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgApexchartsModule,
    FormsModule,
    RouterModule.forRoot( ROUTES, {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
