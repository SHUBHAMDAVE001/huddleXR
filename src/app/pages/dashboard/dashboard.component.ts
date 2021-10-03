import { Component, OnInit, TemplateRef } from '@angular/core';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelComponent } from '../model/model.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // modalRef?: BsModalRef;
  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  openVotingModal() {
    const modalRef = this.modalService.open(ModelComponent, { size: 'lg', backdrop: 'static', centered: true });
    modalRef.result.then((result) => {
    })
  }

}
