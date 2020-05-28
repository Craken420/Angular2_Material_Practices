import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { AdvanceCardsComponent } from './Tutorial/advance-cards/advance-cards.component';
import { TabsComponent } from './Tutorial/tabs/tabs.component';
import { Tabs2Component } from './Tutorial/tabs2/tabs2.component';
import { StepperComponent } from './Tutorial/stepper/stepper.component';
import { InputsComponent } from './Tutorial/inputs/inputs.component';
import { SelectComponent } from './Tutorial/select/select.component';
import { AutocompleteComponent } from './Tutorial/autocomplete/autocomplete.component';
import { CheckboxRadioButtonComponent } from './Tutorial/checkbox-radio-button/checkbox-radio-button.component';
import { DatePickerComponent } from './Tutorial/date-picker/date-picker.component';
import { ToolTipComponent } from './Tutorial/tool-tip/tool-tip.component';
import { SnackbarComponent } from './Tutorial/snackbar/snackbar.component';
import { DialogComponent } from './Tutorial/dialog/dialog.component';
import { DataTablesComponent } from './Tutorial/data-tables/data-tables.component';
import { FilterDataTableComponent } from './Tutorial/filter-data-table/filter-data-table.component';
import { SortingDataTableComponent } from './Tutorial/sorting-data-table/sorting-data-table.component';
import { VirtualScrollingComponent } from './Tutorial/virtual-scrolling/virtual-scrolling.component';
import { CarrucelComponent } from './Tutorial/carrucel/carrucel.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'togglebuttons', component: ToggleButtonsComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'badge', component: BadgesComponent },
  { path: 'spinner', component: ProgressSpinnerComponent },
  { path: 'sidenav', component: SideNavComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'list', component: ListComponent },
  { path: 'gridlist', component: GridlistComponent },
  { path: 'panel', component: ExpansionPanelComponent },
  { path: 'card', component: CardsComponent },
  { path: 'advacards', component: AdvanceCardsComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tabs2', component: Tabs2Component },
  { path: 'stepper', component: StepperComponent },
  { path: 'inputs', component: InputsComponent },
  { path: 'select', component: SelectComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'checkboxRadiobtn', component: CheckboxRadioButtonComponent },
  { path: 'datepicker', component: DatePickerComponent },
  { path: 'tooltip', component: ToolTipComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'datatable', component: DataTablesComponent },
  { path: 'filterdatatable', component: FilterDataTableComponent },
  { path: 'sortdatatable', component: SortingDataTableComponent },
  { path: 'vscroll', component: VirtualScrollingComponent },
  { path: 'carrucel', component: CarrucelComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
