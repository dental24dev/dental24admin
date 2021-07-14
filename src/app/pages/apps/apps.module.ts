import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FilePickerModule } from  '../../../assets/file-picker/src/public_api';
import { UIModule } from '../../shared/ui/ui.module';
import { AppsRoutingModule } from './apps-routing.module';

import { EmailModule } from './email/email.module';
import { ProjectModule } from './project/project.module';
import { TasksModule } from './tasks/tasks.module';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CalendarComponent } from './calendar/calendar.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewprojectComponent } from './newproject/newproject.component';

@NgModule({
    declarations: [CalendarComponent,ProjectsComponent,NewprojectComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModalModule,
        FullCalendarModule,
        AppsRoutingModule,
        UIModule,
        EmailModule,
        ProjectModule,
        TasksModule,
        FilePickerModule,
    ],
     schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppsModule { }
