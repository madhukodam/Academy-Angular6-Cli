import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BranchService } from 'src/app/services/branch.service';
import { Branch } from 'src/app/models/branch';
import { NgbDropdownConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/services/alert.service';
import { NgForm } from '@angular/forms';

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
  deptList: string[];
  instList: string[];
  deptSelected = null;
  instSelected = null;

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
      this.dtTrigger.next();
    });
  }


  handleAddEdit(id, content) {
    this.branchService.getDeptList().subscribe(data => {
      this.deptList = data as string[];
    });

    this.branchService.getInstList().subscribe(data => {
      this.instList = data as string[];
    });
    if (id === 0) {
      this.branchdto = new Branch();
      this.branchdto.branchId = 0;
      this.modalService.open(content, { size: 'lg' });
    } else {
      this.branchService.getBranch(id).subscribe(data => {
        this.branchdto = data;
        this.modalService.open(content, { size: 'lg' });
      }, error => {
        this.alertService.error(error);
      });
    }


  }


  saveBranch() {
    if (this.branchdto.branchId === 0) {
      this.branchdto.branchId = null;
    }
    this.branchdto.status = this.branchdto.status ? 1 : 0;
    this.branchService.createBranch(this.branchdto).subscribe(data => {
      this.branchdto = data;
      alert('Successfully saved');
      location.reload();
    }, error => {
      this.alertService.error(error);
    });
  }


  handleDelete(id) {
    this.branchService.deleteBranch(id).subscribe(data => {
      alert('Successfully deleted');
      location.reload();
    }, error => {
      this.alertService.error(error);
    });
  }
}
