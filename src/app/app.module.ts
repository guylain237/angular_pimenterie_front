import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PimentIndexComponent } from './piment-index/piment-index.component';
import { PimentDetailsComponent } from './piment-details/piment-details.component';
//import { AjoutPimentComponent } from './ajout-piment/ajout-piment.component';
//import { AjoutpimentComponent } from './ajout-piment/ajoutpiment.component';
//import { AjoutPimentComponent } from './ajout-piment/ajout-piment.component';

@NgModule({
  declarations: [
    AppComponent,
    PimentIndexComponent,
    PimentDetailsComponent,
    //AjoutPimentComponent,
    //AjoutpimentComponent,
//AjoutPimentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
