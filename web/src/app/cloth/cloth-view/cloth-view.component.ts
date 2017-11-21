import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl,FormArray } from "@angular/forms"; 
import { Router, NavigationExtras } from "@angular/router"; 

import { ClothAuthService } from "../shared/cloth.service";
import { CategorycodeService } from "../shared/categorycode.service";

@Component({
  selector: 'app-cloth-view',
  templateUrl: './cloth-view.component.html',
  styleUrls: ['./cloth-view.component.css']
})
export class ClothViewComponent implements OnInit {

  //clothArray : FormArray = new FormArray([]);
  clothArray : Array<any>=[];
  clothSizeArray : Array<any>=[];
  abc : number;
  url: string;
  constructor(private authService: ClothAuthService, private categorycodeservice: CategorycodeService, private router: Router) { 
    this.url = '/assets/image/clothadd.png';
  }


  loadCloth() {
  	this.authService.getinCloth().subscribe(files =>{
      console.log(files);
      
  		  if(files.msg=="all cloth shop success"){
          
          this.clothArray = files.data;
      		for(var i=0; i<this.clothArray.length; i++){
            if(this.clothArray[i].clothType == 1 || this.clothArray[i].clothType == 2 || this.clothArray[i].clothType == 3 || this.clothArray[i].clothType == 4 || this.clothArray[i].clothType == 5 ){
              for(var j=0; j<this.clothArray[i].size.length; j++){
                if(this.clothArray[i].size[j].data[0]==1){
                  switch (j) {
                    case 0:
                      this.clothArray[i].size[j]={value:"S"};
                      break;
                    case 1:
                      this.clothArray[i].size[j]={value:"M"};
                      break;
                    case 2:
                      this.clothArray[i].size[j]={value:"L"};
                      break;
                    case 3:
                      this.clothArray[i].size[j]={value:"XL"};
                      break;
                    case 4:
                      this.clothArray[i].size[j]={value:"2XL"};
                      break;
                    case 5:
                      this.clothArray[i].size[j]={value:"3XL"};
                      break;
                    case 11:
                      this.clothArray[i].size[j]={value:"FREE"};
                      break;
                    default:
                      break;
                  }
                }
              }
            }
            else if(this.clothArray[i].clothType == 6 || this.clothArray[i].clothType == 8){
              if(this.clothArray[i].size[11].data[0]==1){
                this.clothArray[i].size[11]= {value:"FREE"};
              }
            }
            else {
              for(var j=0; j<this.clothArray[i].size.length; j++){
                if(this.clothArray[i].size[j].data[0]==1){
                  switch (j) {
                    case 0:
                      this.clothArray[i].size[j]={value:"240"};
                      break;
                    case 1:
                      this.clothArray[i].size[j]={value:"245"};
                      break;
                    case 2:
                      this.clothArray[i].size[j]={value:"250"};
                      break;
                    case 3:
                      this.clothArray[i].size[j]={value:"255"};
                      break;
                    case 4:
                      this.clothArray[i].size[j]={value:"260"};
                      break;
                    case 5:
                      this.clothArray[i].size[j]={value:"270"};
                      break;
                    case 6:
                      this.clothArray[i].size[j]={value:"275"};
                      break;
                    case 7:
                      this.clothArray[i].size[j]={value:"280"};
                      break;
                    case 8:
                      this.clothArray[i].size[j]={value:"285"};
                      break;
                    case 9:
                      this.clothArray[i].size[j]={value:"290"};
                      break;
                    default:
                      break;
                  }
                }
              }
            }
            let categoryCode1 = this.categorycodeservice.changeCategory(this.clothArray[i].categoryCode);
      			this.clothArray[i].categoryCode1=categoryCode1.categoryname;
            
      	}
          
          
      }
      else if(files.msg=="cloth data not exist"){
        this.clothArray = [];
      }
  	},
  	error =>{
  		alert('error');
  	});
  }

  onClickOuter() {
    let type="outer";

    this.authService.getinClothType(type).subscribe(files =>{
      if(files.msg=="cloth show success"){
        this.clothArray = files.data;
        for(var i=0; i<this.clothArray.length; i++){
          if(this.clothArray[i].clothType == 1){
            for(var j=0; j<this.clothArray[i].size.length; j++){
                if(this.clothArray[i].size[j].data[0]==1){
                  switch (j) {
                    case 0:
                      this.clothArray[i].size[j]={value:"S"};
                      break;
                    case 1:
                      this.clothArray[i].size[j]={value:"M"};
                      break;
                    case 2:
                      this.clothArray[i].size[j]={value:"L"};
                      break;
                    case 3:
                      this.clothArray[i].size[j]={value:"XL"};
                      break;
                    case 4:
                      this.clothArray[i].size[j]={value:"2XL"};
                      break;
                    case 5:
                      this.clothArray[i].size[j]={value:"3XL"};
                      break;
                    case 11:
                      this.clothArray[i].size[j]={value:"FREE"};
                      break;
                    default:
                      break;
                  }
                }
              }
          }
          let categoryCode1 = this.categorycodeservice.changeCategory(this.clothArray[i].categoryCode);
          this.clothArray[i].categoryCode1=categoryCode1.categoryname;
        }
      }
      else if(files.msg =="cloth data not exist"){
        this.clothArray = [];
      }
    },
    error =>{
      alert('error');
    });
  }
  onClickTop() {
    
    let type="top";
    

    this.authService.getinClothType(type).subscribe(files =>{
      if(files.msg==="cloth show success"){
        this.clothArray = files.data;
        for(var i=0; i<this.clothArray.length; i++){
          if(this.clothArray[i].clothType == 2){
            for(var j=0; j<this.clothArray[i].size.length; j++){
                if(this.clothArray[i].size[j].data[0]==1){
                  switch (j) {
                    case 0:
                      this.clothArray[i].size[j]={value:"S"};
                      break;
                    case 1:
                      this.clothArray[i].size[j]={value:"M"};
                      break;
                    case 2:
                      this.clothArray[i].size[j]={value:"L"};
                      break;
                    case 3:
                      this.clothArray[i].size[j]={value:"XL"};
                      break;
                    case 4:
                      this.clothArray[i].size[j]={value:"2XL"};
                      break;
                    case 5:
                      this.clothArray[i].size[j]={value:"3XL"};
                      break;
                    case 11:
                      this.clothArray[i].size[j]={value:"FREE"};
                      break;
                    default:
                      break;
                  }
                }
              }
          }
          let categoryCode1 = this.categorycodeservice.changeCategory(this.clothArray[i].categoryCode);
          this.clothArray[i].categoryCode1=categoryCode1.categoryname;
        }
        
      }
      else if(files.msg =="cloth data not exist"){
        this.clothArray = [];
      }
    },
    error =>{
      alert('error');
    });
  }
  onClickBottom() {
    let type="bottom";

    this.authService.getinClothType(type).subscribe(files =>{
      if(files.msg=="cloth show success"){
        this.clothArray = files.data;
        for(var i=0; i<this.clothArray.length; i++){
          if(this.clothArray[i].clothType == 3){
            for(var j=0; j<this.clothArray[i].size.length; j++){
                if(this.clothArray[i].size[j].data[0]==1){
                  switch (j) {
                    case 0:
                      this.clothArray[i].size[j]={value:"S"};
                      break;
                    case 1:
                      this.clothArray[i].size[j]={value:"M"};
                      break;
                    case 2:
                      this.clothArray[i].size[j]={value:"L"};
                      break;
                    case 3:
                      this.clothArray[i].size[j]={value:"XL"};
                      break;
                    case 4:
                      this.clothArray[i].size[j]={value:"2XL"};
                      break;
                    case 5:
                      this.clothArray[i].size[j]={value:"3XL"};
                      break;
                    case 11:
                      this.clothArray[i].size[j]={value:"FREE"};
                      break;
                    default:
                      break;
                  }
                }
              }
          }
          let categoryCode1 = this.categorycodeservice.changeCategory(this.clothArray[i].categoryCode);
          this.clothArray[i].categoryCode1=categoryCode1.categoryname;
        }
        
        
      }
      else if(files.msg =="cloth data not exist"){
        this.clothArray = [];
      }
    },
    error =>{
      alert('error');
    });
  }
  onClickSuit() {
    let type="suit";

    this.authService.getinClothType(type).subscribe(files =>{
      if(files.msg=="cloth show success"){
        this.clothArray = files.data;
        for(var i=0; i<this.clothArray.length; i++){
          if(this.clothArray[i].clothType == 4){
            for(var j=0; j<this.clothArray[i].size.length; j++){
                if(this.clothArray[i].size[j].data[0]==1){
                  switch (j) {
                    case 0:
                      this.clothArray[i].size[j]={value:"S"};
                      break;
                    case 1:
                      this.clothArray[i].size[j]={value:"M"};
                      break;
                    case 2:
                      this.clothArray[i].size[j]={value:"L"};
                      break;
                    case 3:
                      this.clothArray[i].size[j]={value:"XL"};
                      break;
                    case 4:
                      this.clothArray[i].size[j]={value:"2XL"};
                      break;
                    case 5:
                      this.clothArray[i].size[j]={value:"3XL"};
                      break;
                    case 11:
                      this.clothArray[i].size[j]={value:"FREE"};
                      break;
                    default:
                      break;
                  }
                }
              }
          }
          let categoryCode1 = this.categorycodeservice.changeCategory(this.clothArray[i].categoryCode);
          this.clothArray[i].categoryCode1=categoryCode1.categoryname;
        }
        
        
      }
      else if(files.msg =="cloth data not exist"){
        this.clothArray = [];
      }
    },
    error =>{
      alert('error');
    });
  }
  onClickSummer() {
    let type="summer";

    this.authService.getinClothType(type).subscribe(files =>{
      if(files.msg=="cloth show success"){
        this.clothArray = files.data;
        for(var i=0; i<this.clothArray.length; i++){
          if(this.clothArray[i].clothType == 5){
            for(var j=0; j<this.clothArray[i].size.length; j++){
                if(this.clothArray[i].size[j].data[0]==1){
                  switch (j) {
                    case 0:
                      this.clothArray[i].size[j]={value:"S"};
                      break;
                    case 1:
                      this.clothArray[i].size[j]={value:"M"};
                      break;
                    case 2:
                      this.clothArray[i].size[j]={value:"L"};
                      break;
                    case 3:
                      this.clothArray[i].size[j]={value:"XL"};
                      break;
                    case 4:
                      this.clothArray[i].size[j]={value:"2XL"};
                      break;
                    case 5:
                      this.clothArray[i].size[j]={value:"3XL"};
                      break;
                    case 11:
                      this.clothArray[i].size[j]={value:"FREE"};
                      break;
                    default:
                      break;
                  }
                }
              }
          }
          let categoryCode1 = this.categorycodeservice.changeCategory(this.clothArray[i].categoryCode);
          this.clothArray[i].categoryCode1=categoryCode1.categoryname;
        }
        
        
      }
      else if(files.msg =="cloth data not exist"){
        this.clothArray = [];
      }
    },
    error =>{
      alert('error');
    });
  }
  onClickBag() {
    let type="bag";

    this.authService.getinClothType(type).subscribe(files =>{
      if(files.msg=="cloth show success"){
        this.clothArray = files.data;
        for(var i=0; i<this.clothArray.length; i++){
          if(this.clothArray[i].clothType == 6){
              if(this.clothArray[i].size[11].data[0]==1){
                this.clothArray[i].size[11]= {value:"FREE"};
              }
            }
          let categoryCode1 = this.categorycodeservice.changeCategory(this.clothArray[i].categoryCode);
          this.clothArray[i].categoryCode1=categoryCode1.categoryname;
        }
      }
      else if(files.msg =="cloth data not exist"){
        this.clothArray = [];
      }
    },
    error =>{
      alert('error');
    });
  }
  onClickShoes() {
    let type="shoes";

    this.authService.getinClothType(type).subscribe(files =>{
      if(files.msg=="cloth show success"){
        this.clothArray = files.data;
        for(var i=0; i<this.clothArray.length; i++){
          if(this.clothArray[i].clothType == 7){
            for(var j=0; j<this.clothArray[i].size.length; j++){
                if(this.clothArray[i].size[j].data[0]==1){
                  switch (j) {
                    case 0:
                      this.clothArray[i].size[j]={value:"240"};
                      break;
                    case 1:
                      this.clothArray[i].size[j]={value:"245"};
                      break;
                    case 2:
                      this.clothArray[i].size[j]={value:"250"};
                      break;
                    case 3:
                      this.clothArray[i].size[j]={value:"255"};
                      break;
                    case 4:
                      this.clothArray[i].size[j]={value:"260"};
                      break;
                    case 5:
                      this.clothArray[i].size[j]={value:"270"};
                      break;
                    case 6:
                      this.clothArray[i].size[j]={value:"275"};
                      break;
                    case 7:
                      this.clothArray[i].size[j]={value:"280"};
                      break;
                    case 8:
                      this.clothArray[i].size[j]={value:"285"};
                      break;
                    case 9:
                      this.clothArray[i].size[j]={value:"290"};
                      break;
                    default:
                      break;
                  }
                }
              }
          }
          let categoryCode1 = this.categorycodeservice.changeCategory(this.clothArray[i].categoryCode);
          this.clothArray[i].categoryCode1=categoryCode1.categoryname;
        }
        
        
        
      }
      else if(files.msg =="cloth data not exist"){
        this.clothArray = [];
      }
    },
    error =>{
      alert('error');
    });
  }
  onClickAcc() {
    let type="acc";

    this.authService.getinClothType(type).subscribe(files =>{
      if(files.msg=="cloth show success"){
        this.clothArray = files.data;
        for(var i=0; i<this.clothArray.length; i++){
          if(this.clothArray[i].clothType == 8){
              if(this.clothArray[i].size[11].data[0]==1){
                this.clothArray[i].size[11]= {value:"FREE"};
              }
            }
            let categoryCode1 = this.categorycodeservice.changeCategory(this.clothArray[i].categoryCode);
            this.clothArray[i].categoryCode1=categoryCode1.categoryname;
        }
      }
      else if(files.msg =="cloth data not exist"){
        this.clothArray = [];
      }
    },
    error =>{
      alert('error');
    });
  }
  onClickEdit(cloth) {
    
    let clothData = {
      categoryCode: cloth.categoryCode,
      clothNumber: cloth.clothNumber,
      clothName: cloth.clothName,
      clothPhoto: cloth.clothPhoto,
      clothPrice: cloth.clothPrice,
      clothUrl: cloth.clothUrl,
      size0: cloth.size[0].value,
      size1: cloth.size[1].value,
      size2: cloth.size[2].value,
      size3: cloth.size[3].value,
      size4: cloth.size[4].value,
      size5: cloth.size[5].value,
      size6: cloth.size[6].value,
      size7: cloth.size[7].value,
      size8: cloth.size[8].value,
      size9: cloth.size[9].value,
      size10: cloth.size[10].value,
      size11: cloth.size[11].value
    }
    this.router.navigate(['/cloth/edit', clothData]);
  }
  onClickDelete(clothdeleteNumber) {
    for(let i=0; i< this.clothArray.length; i++){
      if (this.clothArray[i].clothNumber == clothdeleteNumber){
        this.clothArray.splice(i,1);
      }
    }

    this.authService.deleteinCloth(clothdeleteNumber).subscribe(files =>{
      if(files.msg=="cloth delete success"){
      }
    },
    error =>{
      alert('error');
    });
  }
  ngOnInit() {
  	this.loadCloth();
  }

  

}
