import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from'./shared/components/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './services/courses-services/courses.service';
import { RegistrationService } from './services/registration-services/registration.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomepageComponent,
    ContactPageComponent,
    RegistrationFormComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService,
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
