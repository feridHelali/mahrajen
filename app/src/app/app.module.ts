import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { EventListComponent } from './shared/events/event-list/event-list.component';
import { EventAddformComponent } from './shared/events/event-addform/event-addform.component';
import { PagesModule } from './shared/pages/pages.module';
import { EventsModule } from './shared/events/events.module';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventAddformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PagesModule,
    EventsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
