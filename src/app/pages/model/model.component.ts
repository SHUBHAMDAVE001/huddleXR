import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  doucmentsArray = [
    {
      documentName: 'Document_Name-FTI.pdf'
    },
    {
      documentName: 'Document_Name-XYZ.pdf'
    },
    {
      documentName: 'Document_Name2-11.pdf'
    },
    {
      documentName: 'Document_Name-ERR.pdf'
    },
    {
      documentName: 'Document_Name-ROQ.pdf'
    },
    {
      documentName: 'Document_Name-TUO.pdf'
    }
  ]
  constructor(
    public modal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  modelClose() {
    this.modal.close();
  }

}
