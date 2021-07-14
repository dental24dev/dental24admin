import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewprojectComponent } from './newproject/newproject.component';

const routes: Routes = [
    {
        path: 'apps-calendar',
        component: CalendarComponent
    },
    {
        path: 'newproject',
        component: NewprojectComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppsRoutingModule { }
