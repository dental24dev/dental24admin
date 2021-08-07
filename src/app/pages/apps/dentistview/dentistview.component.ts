import { Component, OnInit } from '@angular/core';

import { messageData, activities, tasks, projectData } from './data';

import { Message, Activity, Tasks, List } from './dentistview.model';
import { DataApiService } from '../../../core/services/data-api.service';
import { UserWService } from "../../../core/services/user-w.service";
import { DentistInterface } from '../../../core/models/dentist-interface'
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dentistview',
  templateUrl: './dentistview.component.html',
  styleUrls: ['./dentistview.component.scss']
})
/**
 * Profile-component - handling profile with sidenav-content
 */
export class DentistviewComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  messageData: Message[];
  activities: Activity[];
  tasks: Tasks[];
  projectData: List[];

  constructor(
 private dataApi: DataApiService,
    public _uw:UserWService,
    private location: Location,
        private route:ActivatedRoute,
    private router: Router
    ) { }
    public dentist:DentistInterface;
    public dentists:DentistInterface;  

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Masterdent24', path: '/' }, { label: 'Dentistas', path: '/dentists' }, { label: 'Perfil', active: true }];

    this._fetchData();
    this.getProfile(this.route.snapshot.paramMap.get('id'));
  }
     getProfile(id: string){
    this.dataApi.getProfileById(id).subscribe(dentist => (this.dentist = dentist));

   
  }

  /**
   * Fetches the data
   */
  private _fetchData() {
    this.messageData = messageData;
    this.activities = activities;
    this.tasks = tasks;
    this.projectData = projectData;
  }
}