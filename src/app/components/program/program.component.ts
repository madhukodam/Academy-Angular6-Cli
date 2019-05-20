import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/services/branch.service';
import { Branch } from 'src/app/models/branch';
import { Observable } from 'rxjs';
import { NgbModal, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  branches: Observable<Branch[]>;
  branchData: Branch;
  constructor(private branchService: BranchService,
    // tslint:disable-next-line:align
    private modalService: NgbModal, private config: NgbDropdownConfig, private router: Router,
    // tslint:disable-next-line:align
    private alertService: AlertService) { }
  ngOnInit() {

    this.reloadData();
  }



  reloadData() {
    this.branchService.getBranchsList().subscribe(data => {
      this.branches = data;
    }, error => {
      this.alertService.error(error);
    });
  }

  handleNotify(eventData: Branch) {
    this.branchData = eventData;
  }

  getDetails(id: number) {
    this.router.navigate(['/program', id]);
  }



}
