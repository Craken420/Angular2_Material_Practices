import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import {FormsModule } from '@angular/forms'

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TypographyComponent } from './Tutorial/typography/typography.component';
import { ButtonsComponent } from './Tutorial/buttons/buttons.component';
import { ToggleButtonsComponent } from './Tutorial/toggle-buttons/toggle-buttons.component';
import { IconsComponent } from './Tutorial/icons/icons.component';
import { BadgesComponent } from './Tutorial/badges/badges.component';
import { ProgressSpinnerComponent } from './Tutorial/progress-spinner/progress-spinner.component';
import { SideNavComponent } from './Tutorial/side-nav/side-nav.component';
import { MenuComponent } from './Tutorial/menu/menu.component';
import { ListComponent } from './Tutorial/list/list.component';
import { GridlistComponent } from './Tutorial/gridlist/gridlist.component';
import { ExpansionPanelComponent } from './Tutorial/expansion-panel/expansion-panel.component';
import { CardsComponent } from './Tutorial/cards/cards.component';
import { TabsComponent } from './Tutorial/tabs/tabs.component';
import { StepperComponent } from './Tutorial/stepper/stepper.component';
import { InputsComponent } from './Tutorial/inputs/inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TypographyComponent,
    ButtonsComponent,
    ToggleButtonsComponent,
    IconsComponent,
    BadgesComponent,
    ProgressSpinnerComponent,
    SideNavComponent,
    MenuComponent,
    ListComponent,
    GridlistComponent,
    ExpansionPanelComponent,
    CardsComponent,
    TabsComponent,
    StepperComponent,
    InputsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
