import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { BoostrapModule } from './bostrap/boostrap.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

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
import { SelectComponent } from './Tutorial/select/select.component';
import { AutocompleteComponent } from './Tutorial/autocomplete/autocomplete.component';
import { CheckboxRadioButtonComponent } from './Tutorial/checkbox-radio-button/checkbox-radio-button.component';
import { DatePickerComponent } from './Tutorial/date-picker/date-picker.component';
import { ToolTipComponent } from './Tutorial/tool-tip/tool-tip.component';
import { SnackbarComponent, CustomSnackbBarComponent } from './Tutorial/snackbar/snackbar.component';
import { DialogComponent } from './Tutorial/dialog/dialog.component';
import { DialogExampleComponent } from './Tutorial/dialog/dialog-example/dialog-example.component';
import { DataTablesComponent } from './Tutorial/data-tables/data-tables.component';
import { FilterDataTableComponent } from './Tutorial/filter-data-table/filter-data-table.component';
import { SortingDataTableComponent } from './Tutorial/sorting-data-table/sorting-data-table.component';
import { VirtualScrollingComponent } from './Tutorial/virtual-scrolling/virtual-scrolling.component';
import { Tabs2Component } from './Tutorial/tabs2/tabs2.component';
import { CarrucelComponent } from './Tutorial/carrucel/carrucel.component';
import { AdvanceCardsComponent } from './Tutorial/advance-cards/advance-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSnackbBarComponent,
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
    InputsComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckboxRadioButtonComponent,
    DatePickerComponent,
    ToolTipComponent,
    SnackbarComponent,
    DialogComponent,
    DialogExampleComponent,
    DataTablesComponent,
    FilterDataTableComponent,
    SortingDataTableComponent,
    VirtualScrollingComponent,
    Tabs2Component,
    CarrucelComponent,
    AdvanceCardsComponent
  ],
  entryComponents:  [CustomSnackbBarComponent, DialogExampleComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BoostrapModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
