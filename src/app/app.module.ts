import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { SuggestionComponent } from './suggestion/suggestion.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SuggestionFilterComponent } from './suggestion-filter/suggestion-filter.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { SuggestionEditorComponent } from './suggestion-editor/suggestion-editor.component';
import {MatInputModule} from '@angular/material/input';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SuggestionComponent,
    NavComponent,
    SidebarComponent,
    SuggestionFilterComponent,
    SuggestionEditorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatChipsModule,
    MatStepperModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
