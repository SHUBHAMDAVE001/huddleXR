import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainLayoutRoutes } from './main-layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
    declarations: [
        HeaderComponent,
        MainLayoutComponent
    ],
    imports: [
        CommonModule,
        NgxNavbarModule,
        RouterModule.forChild(MainLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})

export class LayoutModule { }
