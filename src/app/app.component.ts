import { Component, OnInit } from '@angular/core';
import {WorkService} from './_shared/_services/work.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  subscriptionList = [];
  title = 'portfolio';
  work: any = {};

  constructor(private _workService: WorkService) {

  }

  ngOnInit(): void {
    this.getWorks('mywork', 1);
  }

  getWorks(table, id) {
    const sub = this._workService.getWorks(table, id).subscribe(
      data => {
        console.log('data: ', data);
        if (data !== null) {
          this.work = data;
        }
      }
    );
    this.subscriptionList.push(sub);
  }
}
