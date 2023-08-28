import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaiComponent } from './pages/pai/pai.component';
import { FilhoComponent } from './pages/filho/filho.component';
import { HeaderComponent } from './pages/header/header.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importe ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    PaiComponent,
    FilhoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
