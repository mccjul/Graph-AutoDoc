import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { DocService } from './../services/data/doc.service';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {
  docs: Type[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DocService
  ) {}

  ngOnInit() {
    this.service.getDoc(this.route.params).subscribe(
      (data)=>{
        this.docs = data;
    }, (err)=>{});
  }

}

interface Type {
  comment: String;
  typecode: String;
}