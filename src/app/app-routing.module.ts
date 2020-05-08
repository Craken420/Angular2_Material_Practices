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
import { TabsComponent } from './Tutorial/tabs/tabs.component';
import { StepperComponent } from './Tutorial/stepper/stepper.component';
import { InputsComponent } from './Tutorial/inputs/inputs.component';

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
  { path: 'tabs', component: TabsComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'inputs', component: InputsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
