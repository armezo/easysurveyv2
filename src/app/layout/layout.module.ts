import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '@app/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SurveyComponent } from './survey/survey.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [LayoutComponent, SurveyComponent, DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    MaterialModule
  ]
})
export class LayoutModule { }
