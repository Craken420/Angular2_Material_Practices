import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import {  MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MaterialModules = [
  MatToolbarModule, MatIconModule, MatButtonModule, MatButtonToggleModule,
  MatBadgeModule, MatProgressSpinnerModule, MatSidenavModule, MatMenuModule,
  MatListModule, MatGridListModule, MatDividerModule, MatExpansionModule, MatCardModule, MatTabsModule,
  MatStepperModule, MatFormFieldModule, MatInputModule
]

@NgModule({
  declarations: [],
  imports: [ MaterialModules ],
  exports: [ MaterialModules ]
})
export class MaterialModule { }
