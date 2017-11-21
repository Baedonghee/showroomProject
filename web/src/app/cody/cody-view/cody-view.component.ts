import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { CodyAuthService } from "../shared/cody.service";


@Component({
  selector: 'app-cody-view',
  templateUrl: './cody-view.component.html',
  styleUrls: ['./cody-view.component.css']
})
export class CodyViewComponent implements OnInit {

  codyurl : string;
  clothOuterurl : string;
  clothTopurl : string;
  clothBottomurl : string;
  clothShoesurl : string;
  clothAccurl : string;
  codyArray : Array<any> = [];
  
  constructor(private codyService: CodyAuthService, private router: Router) { 
    this.codyurl = '';
    this.clothOuterurl = '';
    this.clothTopurl = '';
    this.clothBottomurl = '';
    this.clothShoesurl = '';
    this.clothAccurl = '';
  }

  ngOnInit() {
    this.getinCody();
    
  }

  getinCody() {
  	this.codyService.getinCody().subscribe(files =>{
      console.log(files);
      if(files.msg=='cody data not exist'){
        this.codyArray = [];
      }
      else{
        this.codyArray = files.codyData;
      }
      // if(files.msg=="cody show success"){
      //   this.codyurl=files.data[0].codyPhoto1;
      // }
  	},
      error => {
        alert('error');
      });
  }
  onClickEdit(cody) {
    this.router.navigate(['/cody/edit', cody]);
  }
  onClickDelete(codyNumber,codyArrayNumber) {
    this.codyService.deleteinCody(codyNumber).subscribe(files => {
      if(files.msg=='cody delete success'){
        this.codyArray.splice(codyArrayNumber,1);
      }
    },
    error => {
      alert('error');
    });
  }

}
