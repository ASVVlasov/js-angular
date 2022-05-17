import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { ProductListModule } from './pages/product-list/product-list.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    HeaderModule,
    SidenavModule,
    FooterModule,
    ProductListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
