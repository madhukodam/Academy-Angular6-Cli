import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BranchService } from 'src/app/services/branch.service';
import { Branch } from 'src/app/models/branch';
import { NgbDropdownConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
  providers: [NgbDropdownConfig]
})
export class BranchComponent implements OnDestroy, OnInit {


  branches: Observable<Branch[]>;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  branchdto: any;

  constructor(private branchService: BranchService,
    // tslint:disable-next-line:align
    private modalService: NgbModal, private config: NgbDropdownConfig,
    // tslint:disable-next-line:align
    private alertService: AlertService) { }


  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
    this.reloadData();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  reloadData() {
    this.branchService.getBranchsList().subscribe(data => {
      this.branches = data;
      this.dtTrigger.next();
    }, error => {
      this.alertService.error(error);
    });
  }


  handleAddEdit(id, content) {
    if (id === 0) {

    } else {
      this.branchService.getBranch(id).subscribe(data => {
        this.branchdto = data;
      }, error => {
        this.alertService.error(error);
      });
    }

    this.modalService.open(content, { size: 'lg' });
  }

}
