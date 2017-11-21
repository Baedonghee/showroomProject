import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl,FormArray } from "@angular/forms"; 
import { Http } from "@angular/http";
import { Router,ActivatedRoute } from "@angular/router";

import { Cloth } from "../shared/cloth.interface";
import { ClothAuthService } from "../shared/cloth.service";
import { CategorycodeService } from "../shared/categorycode.service";


@Component({
  selector: 'app-cloth-edit',
  templateUrl: './cloth-edit.component.html',
  styleUrls: ['./cloth-edit.component.css']
})
export class ClothEditComponent implements OnInit {

    public clothsize = [
      {value: "S", num: 0},
      {value: "M", num: 1},
      {value: "L", num: 2},
      {value: "XL", num:3},
      {value: "2XL", num: 4},
      {value: "3XL", num: 5},
      {value: "FREE", num: 6}
    ];
    
    public shoessize = [
      { value:"240", num: 0 },
      { value:"245" , num: 1},
      { value:"250" , num: 2},
      { value:"255" , num: 3},
      { value:"260" , num: 4},
      { value:"265" , num: 5},
      { value:"270" , num: 6},
      { value:"275" , num: 7},
      { value:"280" , num: 8},
      { value:"285" , num: 9 },
      { value:"290" ,num: 10}
    ]; 
    public bagaccsize = [
      { value:"free", num: 0 }
    ]

    myForm: FormGroup;
    checkboxForm: FormGroup;
    bigCategoryName: string;
    midCategoryName: string;
    smallCategoryName: number;
    clothPhoto: Array<File>=[];
    daysFormGroup3: FormGroup = new FormGroup({});
    daysFormArray3: FormArray = new FormArray([]);
    daysFormGroup1: FormGroup = new FormGroup({});
    daysFormArray1: FormArray = new FormArray([]);
    daysFormGroup2: FormGroup = new FormGroup({});
    daysFormArray2: FormArray = new FormArray([]);
    daysFormGroup4: FormGroup = new FormGroup({});
    daysFormArray4: FormArray = new FormArray([]);
    daysFormGroup5: FormGroup = new FormGroup({});
    daysFormArray5: FormArray = new FormArray([]);
    daysFormGroup6: FormGroup = new FormGroup({});
    daysFormArray6: FormArray = new FormArray([]);
    daysFormGroup7: FormGroup = new FormGroup({});
    daysFormArray7: FormArray = new FormArray([]);
    daysFormGroup8: FormGroup = new FormGroup({});
    daysFormArray8: FormArray = new FormArray([]);
    daysFormGroup9: FormGroup = new FormGroup({});
    daysFormArray9: FormArray = new FormArray([]);
    getDetailFormGorup : FormGroup = new FormGroup({});
    
    bigCategoryNumber: number;
    midCategoryNumber: number;
    smallCategoryNumber: number;
    
    checkStatus: number = 1;
    midCategorys = [];
    midSelectedCategory = {};
    smallCategorys = [];
    smallSelectedCategory = {};
    smallSelectedbeforeCategory ={};
    clothImg: string;
    url: string;
    clothName: string;
    price: number;
    clothurl: string;
    clothphoto: string;
    size = [];
    clothId: number;
    
    midSelectedCategory1 = {};
    smallSelectedCategory1 = {};
    topStatus : number = 0;
    bottomStatus : number = 0;
    outerStatus : number = 0;
    suitStatus : number = 0;
    summerStatus : number = 0;
    bagStatus : number = 0;
    shoesStatus : number = 0;
    accStatus : number = 0;
    smallStatus :number = 0;
    
    id : number;
    clothArray = []
    clothsizearray = [];

    outerCategorys = []; 
    topCategorys = []; 
    bottomCategorys = []; 
    suitCategorys = [];
    summerCategorys = [];
    bagCategorys = [];
    shoesCategorys = [];
    accCategorys = [];

    bigCategorys = [];

    bigSelectedCategory: any;

    each = [];
   
    private sub:Object;


    constructor(private fb: FormBuilder, private authService: ClothAuthService, private http:Http, private router: Router, private route : ActivatedRoute, private cloth: Cloth, private categorycodeservice: CategorycodeService) { 
      
      this.myForm = this.fb.group({
          bigcategory: ['', Validators.required],
          midcategory: ['',Validators.required],
          smallcategory: ['',Validators.required],
          clothname: ['', Validators.required],
          Price: ['', Validators.required],
          clothurl: ['', Validators.required],
          size1: this.daysFormGroup1,
          size2: this.daysFormGroup2,
          size3: this.daysFormGroup3,
          size4: this.daysFormGroup4,
          size5: this.daysFormGroup5,
          size6: this.daysFormGroup6,
          size7: this.daysFormGroup7,
          size8: this.daysFormGroup8
          
          
        });
      this.smallCategorys=null;
      this.bigCategorys = this.cloth.bigCategorys;
      this.bigSelectedCategory = this.bigCategorys[0];
      this.outerCategorys = this.cloth.outerCategorys;
      this.topCategorys = this.cloth.topCategorys;
      this.bottomCategorys = this.cloth.bottomCategorys;
      this.suitCategorys = this.cloth.suitCategorys;
      this.summerCategorys = this.cloth.summerCategorys;
      this.bagCategorys = this.cloth.bagCategorys;
      this.shoesCategorys = this.cloth.shoesCategorys;
      this.accCategorys = this.cloth.accCategorys;

    }
    

    ngOnInit() {
      
      this.sub = this.route.params.subscribe(params => {
        console.log(params);
         let clothData: any = params;
         this.clothId = clothData.clothNumber;
         let categoryCode;
         
         let oldclothsize = [];
         this.clothsizearray = oldclothsize.concat(clothData.size0,clothData.size1,clothData.size2,clothData.size3,clothData.size4,clothData.size5,clothData.size6,clothData.size7,clothData.size8,clothData.size9,clothData.size10,clothData.size11);
         
         categoryCode = Number(clothData.categoryCode);
         let categorysInfo = this.categorycodeservice.changeCategory(categoryCode);
         this.bigSelectedCategory = categorysInfo.bigCategorys;
         this.midSelectedCategory = categorysInfo.midCategorys;
         this.smallSelectedbeforeCategory = categorysInfo.smallCategorys;
         this.url = clothData.clothPhoto;
         this.clothName = clothData.clothName;
         this.price = Number(clothData.clothPrice);
         this.clothurl = clothData.clothUrl;
         
         if(this.bigSelectedCategory.bigcategory == "Outer")
           this.outerStatus = 1;
         else if(this.bigSelectedCategory.bigcategory == "Top")
           this.topStatus = 1;
         else if(this.bigSelectedCategory.bigcategory == "Bottom")
           this.bottomStatus = 1;
         else if(this.bigSelectedCategory.bigcategory == "Suit")
           this.suitStatus = 1;
         else if(this.bigSelectedCategory.bigcategory == "Summer")
           this.summerStatus = 1;
         else if(this.bigSelectedCategory.bigcategory == "Bag")
           this.bagStatus = 1;
         else if(this.bigSelectedCategory.bigcategory == "Shoes")
           this.shoesStatus = 1;
         else if(this.bigSelectedCategory.bigcategory == "Acc")
           this.accStatus = 1;
        
         // else if(this.bigSelectedCategory.bigcategory == "Shoes"){
         //   for(let i=0; i<this.clothsizearray.length; i++){
         //     if(this.clothsizearray[i] != "undefined"){
         //       let control: FormControl = new FormControl({value:this.shoessize[i].value, disabled:false}, Validators.required);
         //       this.daysFormGroup.addControl(this.shoessize[i].value, control);
               
         //     }
         //   }
         // }
         // else{
         //   if(this.clothsizearray[11] != "undefined"){
         //     let control: FormControl = new FormControl({value:this.bagaccsize[0].value, disabled:false}, Validators.required);
         //     this.daysFormGroup.addControl(this.bagaccsize[0].value, control);
             
         //   }
         // }
      })
      // this.authService.getinClothDetail(this.id).subscribe(files=>{
       
        
      //   //this.myForm.controls.clothname.updateValue(this.sampleData.clothName);
      //   console.log(files);
      //   if((Math.floor(files.data[0].categoryCode/100000000))==3){
      //     this.bigSelectedCategory = this.bigCategorys[1];
      //     this.midSelectedCategory = this.outerMidCategorys[1];
      //     this.smallSelectedCategory1 = this.outerSmallCategorys1[1];
      //     this.outerStatus = 1;

      //   }
      //   else if((Math.floor(files.data[0].categoryCode/100000000))==2){
      //     this.bigSelectedCategory = this.bigCategorys[3];
      //     this.midSelectedCategory = this.bottomMidCategorys[1];
      //     this.smallSelectedCategory1 = this.bottomSmallCategorys1[1];
      //     this.bottomStatus = 1;
      //   }
      //   else if((Math.floor(files.data[0].categoryCode/100000000))==1){
      //     this.bigSelectedCategory = this.bigCategorys[2];
      //     this.topStatus = 1;
      //     this.midSelectedCategory = this.topMidCategorys[1];
      //     this.smallSelectedCategory1 = this.topSmallCategorys1[1];
      //   }
      //   else if((Math.floor(files.data[0].categoryCode/100000000))==4){
      //     this.bigSelectedCategory = this.bigCategorys[2];
      //     this.shoesStatus = 1;
      //     this.midSelectedCategory = this.shoesMidCategorys[1];
      //     this.smallSelectedCategory1 = this.shoesSmallCategorys1[1];
      //   }
      //   else if((Math.floor(files.data[0].categoryCode/100000000))==5){
      //     this.bigSelectedCategory = this.bigCategorys[2];
      //     this.accStatus = 1;
      //     this.midSelectedCategory = this.accMidCategorys[1];
      //     this.smallSelectedCategory1 = this.accSmallCategorys1[1];
      //   }
      //   this.smallStatus =1;
      //   this.clothName=files.data[0].clothName;
      //   this.price = files.data[0].clothPrice;
      //   this.clothurl = files.data[0].clothUrl;
      //   this.clothphoto = files.data[0].clothPhoto;
      //   this.url = this.clothphoto;
      //   this.example = files.data[0].size;
      //   console.log(this.example)
      //   //console.log(this.example[1].data[0]);
      //   //console.log(this.smallSelectedCategory);
      //   //console.log(this.sampleData);
      //   localStorage.setItem("shopToken",files.shopToken);
        
          
      // },
      // error =>{
      //   alert('error');
      // });
      
      
      
    }

  
    readUrl(event: any) {
      this.clothPhoto = <Array<File>> event.target.files;
      //this.product.photo = event.target.files[0]['name'];
      if(event.target.files && event.target.files[0]){
        var reader = new FileReader();

        reader.onload = (event:any) => {
          this.url = event.target.result;
        }

        reader.readAsDataURL(event.target.files[0]);
      }
    }


    isCheckBox() {
      if(this.outerStatus == 1 || this.topStatus == 1 || this.bottomStatus == 1 || this.suitStatus == 1 || this.summerStatus == 1 || this.bagStatus == 1 || this.shoesStatus == 1 || this.accStatus == 1) {
        if(this.bigCategoryName=="Choose a category"){
          this.midCategoryName='false';
          return this.bigCategoryName;
        }
        else if(this.bigCategoryName=="Outer"){
          this.topStatus = this.bottomStatus = this.suitStatus = this.summerStatus = this.bagStatus = this.shoesStatus = this.accStatus = 0;
          this.midCategorys=this.outerCategorys;
          this.midSelectedCategory = this.midSelectedCategory;
          return this.bigCategoryName;
        }
        else if(this.bigCategoryName=="Top"){
          this.outerStatus = this.bottomStatus = this.suitStatus = this.summerStatus = this.bagStatus = this.shoesStatus = this.accStatus = 0;
          this.midCategorys=this.topCategorys;
          this.midSelectedCategory = this.midSelectedCategory;
          return this.bigCategoryName;
        }
        else if(this.bigCategoryName=="Bottom"){
          this.outerStatus = this.topStatus = this.suitStatus = this.summerStatus = this.bagStatus = this.shoesStatus = this.accStatus = 0;
          this.midCategorys=this.bottomCategorys;
          this.midSelectedCategory = this.midSelectedCategory;
          return this.bigCategoryName;
        }
        else if(this.bigCategoryName=="Suit"){
          this.outerStatus = this.topStatus = this.bottomStatus = this.summerStatus = this.bagStatus = this.shoesStatus = this.accStatus = 0;
          this.midCategorys=this.suitCategorys;
          this.midSelectedCategory = this.midSelectedCategory;
          return this.bigCategoryName;
        }
        else if(this.bigCategoryName=="Summer"){
          this.outerStatus = this.topStatus = this.bottomStatus = this.suitStatus = this.bagStatus = this.shoesStatus = this.accStatus = 0;
          this.midCategorys=this.summerCategorys;
          this.midSelectedCategory = this.midSelectedCategory;
          return this.bigCategoryName;
        }
        else if(this.bigCategoryName=="Bag"){
          this.outerStatus = this.topStatus = this.bottomStatus = this.suitStatus = this.summerStatus = this.shoesStatus = this.accStatus = 0;
          this.midCategorys=this.bagCategorys;
          this.midSelectedCategory = this.midSelectedCategory;
          return this.bigCategoryName;
        }
        else if(this.bigCategoryName=="Shoes"){
          this.outerStatus = this.topStatus = this.bottomStatus = this.suitStatus = this.summerStatus = this.bagStatus = this.accStatus = 0;
          this.midCategorys=this.shoesCategorys;
          this.midSelectedCategory = this.midSelectedCategory;
          return this.bigCategoryName;
        }
        else{
          this.outerStatus = this.topStatus = this.bottomStatus = this.suitStatus = this.summerStatus = this.bagStatus = this.shoesStatus = 0;
          this.midCategorys=this.accCategorys;
          this.midSelectedCategory = this.midSelectedCategory;
          return this.bigCategoryName;
        }
      }
      else {
        if(this.bigCategoryName=="Choose a category"){
          this.midCategoryName='false';
          return this.bigCategoryName;
        }
        else if(this.bigCategoryName=="Outer"){
          this.midCategorys=this.outerCategorys;
          this.midSelectedCategory = this.midCategorys[0];
          return this.bigCategoryName;
        }
        else if(this.bigCategoryName=="Top"){
          this.midCategorys=this.topCategorys;
          this.midSelectedCategory = this.midCategorys[0];
          return this.bigCategoryName;
        }
        else if(this.bigCategoryName=="Bottom"){
          this.midCategorys=this.bottomCategorys;
          this.midSelectedCategory = this.midCategorys[0];
          return this.bigCategoryName;
        }
        else if(this.bigCategoryName=="Suit"){
          this.midCategorys=this.suitCategorys;
          this.midSelectedCategory = this.midCategorys[0];
          return this.bigCategoryName;
        }
        else if(this.bigCategoryName=="Summer"){
          this.midCategorys=this.summerCategorys;
          this.midSelectedCategory = this.midCategorys[0];
          return this.bigCategoryName;
        }
        else if(this.bigCategoryName=="Bag"){
          this.midCategorys=this.bagCategorys;
          this.midSelectedCategory = this.midCategorys[0];
          return this.bigCategoryName;
        }
        else if(this.bigCategoryName=="Shoes"){
          this.midCategorys=this.shoesCategorys;
          this.midSelectedCategory = this.midCategorys[0];
          return this.bigCategoryName;
        }
        else{
          this.midCategorys=this.accCategorys;
          this.midSelectedCategory = this.midCategorys[0];
          return this.bigCategoryName;
        }
      }
    }




    onChange(bigcategory) {
      this.daysFormArray1=new FormArray([]);
      this.daysFormArray2=new FormArray([]);
      this.daysFormArray3=new FormArray([]);
      this.daysFormArray4=new FormArray([]);
      this.daysFormArray5=new FormArray([]);
      this.daysFormArray6=new FormArray([]);
      this.daysFormArray7=new FormArray([]);
      this.daysFormArray8=new FormArray([]);
      this.bigCategoryName=bigcategory.bigcategory;
      
      // this.daysFormGroup1.reset();
      // this.daysFormGroup2.reset();
     
      if(this.bigCategoryName=='Outer' ){
        if(this.checkStatus ==0){
          for (let size of this.clothsize) {
            let control: FormControl = new FormControl({value:!size.value, disabled:false}, Validators.required);
            this.daysFormGroup1.addControl(size.value, control);
            this.daysFormArray1.setControl(size.num,control);
          }
        }
        else{
          for(let i=0; i<this.clothsizearray.length; i++){
               if(this.clothsizearray[i] != "undefined"){
                 if(i==11){
                   let control: FormControl = new FormControl(true, Validators.required);
                   this.daysFormGroup1.setControl(this.clothsize[6].value, control);
                   this.daysFormArray1.push(control);
                   this.checkStatus = 1;
                  
                 }
                 else{
                   let control: FormControl = new FormControl(true, Validators.required);
                   this.daysFormGroup1.setControl(this.clothsize[i].value, control);
                   this.daysFormArray1.push(control);
                 }
               }
               else{
                 if(i<6){
                   let control: FormControl = new FormControl(false, Validators.required);
                   this.daysFormGroup1.setControl(this.clothsize[i].value, control);
                   this.daysFormArray1.push(control);
                 }
                 else if(i==11){
                   let control: FormControl = new FormControl(false, Validators.required);
                   this.daysFormGroup1.setControl(this.clothsize[6].value, control);
                   this.daysFormArray1.push(control);
                   this.checkStatus = 1;
                 }
               }
             }
            }
        this.onMidChange('false');
      }
      else if(this.bigCategoryName=='Top'){
        if(this.checkStatus == 0){
          for (let size of this.clothsize){
            let control: FormControl = new FormControl({value:!size.value, disabled:false}, Validators.required);
            this.daysFormGroup2.addControl(size.value, control);
            this.daysFormArray2.setControl(size.num,control);
          }
        }
        else{
          for(let i=0; i<this.clothsizearray.length; i++){
               if(this.clothsizearray[i] != "undefined"){
                 if(i==11){
                   let control: FormControl = new FormControl(true, Validators.required);
                   this.daysFormGroup2.setControl(this.clothsize[6].value, control);
                   this.daysFormArray2.push(control);
                   this.checkStatus = 1;
                  
                 }
                 else{
                   let control: FormControl = new FormControl(true, Validators.required);
                   this.daysFormGroup2.setControl(this.clothsize[i].value, control);
                   this.daysFormArray2.push(control);
                 }
               }
               else{
                 if(i<6){
                   let control: FormControl = new FormControl(false, Validators.required);
                   this.daysFormGroup2.setControl(this.clothsize[i].value, control);
                   this.daysFormArray2.push(control);
                 }
                 else if(i==11){
                   let control: FormControl = new FormControl(false, Validators.required);
                   this.daysFormGroup2.setControl(this.clothsize[6].value, control);
                   this.daysFormArray2.push(control);
                   this.checkStatus = 1;
                 }
               }
             }
            }
        this.onMidChange('false');
      }
      else if(this.bigCategoryName=='Bottom'){
        if(this.checkStatus == 0){
          for (let size of this.clothsize){
            let control: FormControl = new FormControl({value:!size.value, disabled:false}, Validators.required);
            this.daysFormGroup3.addControl(size.value, control);
            this.daysFormArray3.setControl(size.num, control);
          }
        }
        else {
          for(let i=0; i<this.clothsizearray.length; i++){
               if(this.clothsizearray[i] != "undefined"){
                 if(i==11){
                   let control: FormControl = new FormControl(true, Validators.required);
                   this.daysFormGroup3.setControl(this.clothsize[6].value, control);
                   this.daysFormArray3.push(control);
                   this.checkStatus = 1;
                  
                 }
                 else{
                   let control: FormControl = new FormControl(true, Validators.required);
                   this.daysFormGroup3.setControl(this.clothsize[i].value, control);
                   this.daysFormArray3.push(control);
                 }
               }
               else{
                 if(i<6){
                   let control: FormControl = new FormControl(false, Validators.required);
                   this.daysFormGroup3.setControl(this.clothsize[i].value, control);
                   this.daysFormArray3.push(control);
                 }
                 else if(i==11){
                   let control: FormControl = new FormControl(false, Validators.required);
                   this.daysFormGroup3.setControl(this.clothsize[6].value, control);
                   this.daysFormArray3.push(control);
                   this.checkStatus = 1;
                 }
               }
             }
        }
        this.onMidChange('false');
      }
      else if(this.bigCategoryName=='Suit'){
        if(this.checkStatus == 0){
          for (let size of this.clothsize){
            let control: FormControl = new FormControl({value:!size.value, disabled:false}, Validators.required);
            this.daysFormGroup4.addControl(size.value, control);
            this.daysFormArray4.setControl(size.num, control);
          }
        }
        else {
          for(let i=0; i<this.clothsizearray.length; i++){
               if(this.clothsizearray[i] != "undefined"){
                 if(i==11){
                   let control: FormControl = new FormControl(true, Validators.required);
                   this.daysFormGroup4.setControl(this.clothsize[6].value, control);
                   this.daysFormArray4.push(control);
                   this.checkStatus = 1;
                  
                 }
                 else{
                   let control: FormControl = new FormControl(true, Validators.required);
                   this.daysFormGroup4.setControl(this.clothsize[i].value, control);
                   this.daysFormArray4.push(control);
                 }
               }
               else{
                 if(i<6){
                   let control: FormControl = new FormControl(false, Validators.required);
                   this.daysFormGroup4.setControl(this.clothsize[i].value, control);
                   this.daysFormArray4.push(control);
                 }
                 else if(i==11){
                   let control: FormControl = new FormControl(false, Validators.required);
                   this.daysFormGroup4.setControl(this.clothsize[6].value, control);
                   this.daysFormArray4.push(control);
                   this.checkStatus = 1;
                 }
               }
             }
        }
        this.onMidChange('false');
      }
      else if(this.bigCategoryName=='Summer'){
        if(this.checkStatus == 0){
          for (let size of this.clothsize){
            let control: FormControl = new FormControl({value:!size.value, disabled:false}, Validators.required);
            this.daysFormGroup5.addControl(size.value, control);
            this.daysFormArray5.setControl(size.num, control);
          }
        }
        else {
          for(let i=0; i<this.clothsizearray.length; i++){
               if(this.clothsizearray[i] != "undefined"){
                 if(i==11){
                   let control: FormControl = new FormControl(true, Validators.required);
                   this.daysFormGroup5.setControl(this.clothsize[6].value, control);
                   this.daysFormArray5.push(control);
                   this.checkStatus = 1;
                  
                 }
                 else{
                   let control: FormControl = new FormControl(true, Validators.required);
                   this.daysFormGroup5.setControl(this.clothsize[i].value, control);
                   this.daysFormArray5.push(control);
                 }
               }
               else{
                 if(i<6){
                   let control: FormControl = new FormControl(false, Validators.required);
                   this.daysFormGroup5.setControl(this.clothsize[i].value, control);
                   this.daysFormArray5.push(control);
                 }
                 else if(i==11){
                   let control: FormControl = new FormControl(false, Validators.required);
                   this.daysFormGroup5.setControl(this.clothsize[6].value, control);
                   this.daysFormArray5.push(control);
                   this.checkStatus = 1;
                 }
               }
             }
        }
        this.onMidChange('false');
      }
      else if(this.bigCategoryName=='Bag'){
        if(this.checkStatus == 0){
          for (let size of this.bagaccsize){
            let control: FormControl = new FormControl({value:!size.value, disabled:false}, Validators.required);
            this.daysFormGroup6.addControl(size.value, control);
            this.daysFormArray6.setControl(size.num, control);
          }
        }
        else {
          if(this.clothsizearray[11] !="undefined"){
            let control: FormControl = new FormControl(true, Validators.required);
            this.daysFormGroup6.setControl(this.bagaccsize[0].value, control);
            this.daysFormArray6.push(control);
            this.checkStatus = 1;
          }
        }
        this.onMidChange('false');
      }
      else if(this.bigCategoryName=='Acc'){
        if(this.checkStatus == 0){
          for (let size of this.bagaccsize){
            let control: FormControl = new FormControl({value:!size.value, disabled:false}, Validators.required);
            this.daysFormGroup7.addControl(size.value, control);
            this.daysFormArray7.push(control);
          }
        }
        else {
          if(this.clothsizearray[11] !="undefined"){
            let control: FormControl = new FormControl(true, Validators.required);
            this.daysFormGroup7.setControl(this.bagaccsize[0].value, control);
            this.daysFormArray7.push(control);
            this.checkStatus = 1;
          }
        }
        this.onMidChange('false');
      }
      else if(this.bigCategoryName=='Shoes'){
        console.log(this.clothsizearray);
        if(this.checkStatus == 0){
          for (let shoe of this.shoessize){
            let control: FormControl = new FormControl({value:!shoe.value, disabled:false}, Validators.required);
            this.daysFormGroup8.addControl(shoe.value, control);
            this.daysFormArray8.setControl(shoe.num, control);
          }
        }
        else {
          for(let i=0; i<this.clothsizearray.length; i++){
               if(this.clothsizearray[i] != "undefined"){
                 let control: FormControl = new FormControl(true, Validators.required);
                 this.daysFormGroup8.setControl(this.shoessize[i].value, control);
                 this.daysFormArray8.push(control);
                 if(i==11)
                   this.checkStatus = 1;

               }
               else{
                   if(i==11){
                     this.checkStatus = 1;
                   }
                   else{
                     let control: FormControl = new FormControl(false, Validators.required);
                     this.daysFormGroup8.setControl(this.shoessize[i].value, control);
                     this.daysFormArray8.push(control);
                   }
                   
                 }
               }
             }
        
        this.onMidChange('false');
      }
       
      else  
        this.onMidChange('false');   
    
    }
    

    
    onMidChange(midcategory) {
      this.midCategoryName = midcategory.midcategory;
      this.isMidCheckBox(this.midCategoryName);

    }
    onSmallChange(smallcategory) {
      this.smallCategoryName = smallcategory.categorysCode;
    }
    

    isMidCheckBox(midCat) {

      if(this.smallStatus == 0) {
        if(this.midCategoryName=='가디건'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.outercardiganCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='무스탕'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.outermustangCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='블레이져'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.outerblazerCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='스카잔'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.outersukajanCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='야상'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.outernightCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='자켓'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.outerjacketCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='점퍼'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.outerjumperCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='집업'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.outerjipupCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='코트'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.outercoatCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='패딩'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.outerpaddingCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='긴팔티'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.toplongshirtCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='나시'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.topsleevelessCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='니트'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.topnitCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='맨투맨'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.topmantomanCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='반팔티'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.topshortshirtCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='베스트'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.topvestCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='셔츠'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.topshirtCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='후드'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.tophoodCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='면긴바지'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.bottomlongcottonpantsCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='면스키니'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.bottomcottonskinnyCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='슬랙스'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.bottomslacksCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='청긴바지'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.bottomlongbluejeanCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='청스키니'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.bottombluejeanskinnyCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='트레이닝'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.bottomtrainingCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='면반바지'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.bottomshirtcottonpantsCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='청반바지'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.bottomshirtbluejeanCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='수트'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.suitdetailCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='비치웨어'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.summberdetailCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='백팩'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.bagbackbagCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='숄더'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.bagshoulderCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='여행가방'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.bagtripbagCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='캐리어'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.bagcarrierCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='크로스백'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.bagcrossbagCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='클러치'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.bagclutchCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='토드'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.bagtodCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='힙색'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.baghipCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='구두'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.shoesshoesCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='로퍼'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.shoesloafersCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='부츠'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.shoesbootsCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='샌들'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.shoessandalCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='스니커즈'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.shoessneakersCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='운동화'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.shoesrunningshoesCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='워커'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.shoeswalkerCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='쪼리'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.shoesJJriCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='키높이깔창'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.shoeskeyhighCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='가발'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accwigCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='귀걸이'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accearringCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='머니클립'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accmoneyCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='머플러'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accmufflerCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='모자'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.acchatCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='목걸이'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accnecklaceCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='반지'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accringCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='벨트'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accbaltCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='부토니에'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accbuttneyCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='브로치'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accbroochCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='선글라스'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accsunglassesCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='스카프'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accscarfCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='시계'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accwatchCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='안경'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accglassesCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='양말'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accsocksCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='언더웨어'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accunderwearCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='장갑'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accglovesCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='지갑'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accwalletCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='키링'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.acckiringCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='타이'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accnecktieCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='팔찌'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accbraceletCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='헤어왁스'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.acchairwaxCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='화장품'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.acccosmeticsCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='기타'){
          this.smallStatus = 1;
          this.smallCategorys = this.cloth.accetcCategorys;
          this.smallSelectedCategory = this.smallSelectedbeforeCategory;
          return this.midCategoryName;
        }
        else{
          this.smallSelectedCategory=[];
          return this.midCategoryName;
        }

      }
      else {
       if(this.midCategoryName=='가디건'){
          this.smallCategorys = this.cloth.outercardiganCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='무스탕'){
          this.smallCategorys = this.cloth.outermustangCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='블레이져'){
          this.smallCategorys = this.cloth.outerblazerCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='스카잔'){
          this.smallCategorys = this.cloth.outersukajanCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='야상'){
            this.smallCategorys = this.cloth.outernightCategorys;
            this.smallSelectedCategory = this.smallCategorys[0];
            return this.midCategoryName;
        }
        else if(this.midCategoryName=='자켓'){
          this.smallCategorys = this.cloth.outerjacketCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='점퍼'){
          this.smallCategorys = this.cloth.outerjumperCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='집업'){
          this.smallCategorys = this.cloth.outerjipupCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='코트'){
          this.smallCategorys = this.cloth.outercoatCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='패딩'){
          this.smallCategorys = this.cloth.outerpaddingCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='긴팔티'){
          this.smallCategorys = this.cloth.toplongshirtCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='나시'){
          this.smallCategorys = this.cloth.topsleevelessCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='니트'){
          this.smallCategorys = this.cloth.topnitCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='맨투맨'){
          this.smallCategorys = this.cloth.topmantomanCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='반팔티'){
          this.smallCategorys = this.cloth.topshortshirtCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='베스트'){
          this.smallCategorys = this.cloth.topvestCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='셔츠'){
          this.smallCategorys = this.cloth.topshirtCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='후드'){
          this.smallCategorys = this.cloth.tophoodCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='면긴바지'){
          this.smallCategorys = this.cloth.bottomlongcottonpantsCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='면스키니'){
          this.smallCategorys = this.cloth.bottomcottonskinnyCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='슬랙스'){
          this.smallCategorys = this.cloth.bottomslacksCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='청긴바지'){
          this.smallCategorys = this.cloth.bottomlongbluejeanCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='청스키니'){
          this.smallCategorys = this.cloth.bottombluejeanskinnyCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='트레이닝'){
          this.smallCategorys = this.cloth.bottomtrainingCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='면반바지'){
          this.smallCategorys = this.cloth.bottomshirtcottonpantsCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='청반바지'){
          this.smallCategorys = this.cloth.bottomshirtbluejeanCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='수트'){
          this.smallCategorys = this.cloth.suitdetailCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='비치웨어'){
          this.smallCategorys = this.cloth.summberdetailCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='백팩'){
          this.smallCategorys = this.cloth.bagbackbagCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='숄더'){
          this.smallCategorys = this.cloth.bagshoulderCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='여행가방'){
          this.smallCategorys = this.cloth.bagtripbagCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='캐리어'){
          this.smallCategorys = this.cloth.bagcarrierCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='크로스백'){
          this.smallCategorys = this.cloth.bagcrossbagCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='클러치'){
          this.smallCategorys = this.cloth.bagclutchCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='토드'){
          this.smallCategorys = this.cloth.bagtodCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='힙색'){
          this.smallCategorys = this.cloth.baghipCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='구두'){
          this.smallCategorys = this.cloth.shoesshoesCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='로퍼'){
          this.smallCategorys = this.cloth.shoesloafersCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='부츠'){
          this.smallCategorys = this.cloth.shoesbootsCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='샌들'){
          this.smallCategorys = this.cloth.shoessandalCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='스니커즈'){
          this.smallCategorys = this.cloth.shoessneakersCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='운동화'){
          this.smallCategorys = this.cloth.shoesrunningshoesCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='워커'){
          this.smallCategorys = this.cloth.shoeswalkerCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='쪼리'){
          this.smallCategorys = this.cloth.shoesJJriCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='키높이깔창'){
          this.smallCategorys = this.cloth.shoeskeyhighCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='가발'){
          this.smallCategorys = this.cloth.accwigCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='귀걸이'){
          this.smallCategorys = this.cloth.accearringCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='머니클립'){
          this.smallCategorys = this.cloth.accmoneyCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='머플러'){
          this.smallCategorys = this.cloth.accmufflerCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='모자'){
          this.smallCategorys = this.cloth.acchatCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='목걸이'){
          this.smallCategorys = this.cloth.accnecklaceCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='반지'){
          this.smallCategorys = this.cloth.accringCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='벨트'){
          this.smallCategorys = this.cloth.accbaltCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='부토니에'){
          this.smallCategorys = this.cloth.accbuttneyCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='브로치'){
          this.smallCategorys = this.cloth.accbroochCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='선글라스'){
          this.smallCategorys = this.cloth.accsunglassesCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='스카프'){
          this.smallCategorys = this.cloth.accscarfCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='시계'){
          this.smallCategorys = this.cloth.accwatchCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='안경'){
          this.smallCategorys = this.cloth.accglassesCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='양말'){
          this.smallCategorys = this.cloth.accsocksCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='언더웨어'){
          this.smallCategorys = this.cloth.accunderwearCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='장갑'){
          this.smallCategorys = this.cloth.accglovesCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='지갑'){
          this.smallCategorys = this.cloth.accwalletCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='키링'){
          this.smallCategorys = this.cloth.acckiringCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='타이'){
          this.smallCategorys = this.cloth.accnecktieCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='팔찌'){
          this.smallCategorys = this.cloth.accbraceletCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='헤어왁스'){
          this.smallCategorys = this.cloth.acchairwaxCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='화장품'){
          this.smallCategorys = this.cloth.acccosmeticsCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else if(this.midCategoryName=='기타'){
          this.smallCategorys = this.cloth.accetcCategorys;
          this.smallSelectedCategory = this.smallCategorys[0];
          return this.midCategoryName;
        }
        else{
          this.smallSelectedCategory=[];
          return this.midCategoryName;
        }
      }
      
    }

     


      public onClothedit() {
        console.log(this.smallCategoryName);
        const formData :any = new FormData();
        const files:Array<File> = this.clothPhoto;
        let count=0;
        
        //console.log(this.daysFormGroup.value);
        console.log("1"+this.daysFormArray1.value);
        //console.log("2"+this.daysFormArray2.value);
        //console.log("3"+this.daysFormArray3.value);
        if(this.bigCategoryName == 'Outer'){
          for(let i=0; i<this.daysFormArray1.value.length; i++){
            if(this.daysFormArray1.value[i]==true)
              count++;
          }
        }
        else if(this.bigCategoryName == 'Top'){
          for(let i=0; i<this.daysFormArray2.value.length; i++){
            if(this.daysFormArray2.value[i]==true)
              count++;
          }
        }
        else if(this.bigCategoryName == 'Bottom'){
          for(let i=0; i<this.daysFormArray3.value.length; i++){
            if(this.daysFormArray3.value[i]==true)
              count++;
          }
        }
        else if(this.bigCategoryName == 'Suit'){
          for(let i=0; i<this.daysFormArray4.value.length; i++){
            if(this.daysFormArray4.value[i]==true)
              count++;
          }
        }
        else if(this.bigCategoryName == 'Summer'){
          for(let i=0; i<this.daysFormArray5.value.length; i++){
            if(this.daysFormArray5.value[i]==true)
              count++;
          }
        }
        else if(this.bigCategoryName == 'Bag'){
          for(let i=0; i<this.daysFormArray6.value.length; i++){
            if(this.daysFormArray6.value[i]==true)
              count++;
          }
        }
        else if(this.bigCategoryName == 'Acc'){
          for(let i=0; i<this.daysFormArray7.value.length; i++){
            if(this.daysFormArray7.value[i]==true)
              count++;
          }
        }
        else if(this.bigCategoryName == 'Shoes'){
          for(let i=0; i<this.daysFormArray8.value.length; i++){
            if(this.daysFormArray8.value[i]==true)
              count++;
          }
        }
        
        // for(let i=0; i<this.daysFormArray.value.length; i++){
        //   if(this.daysFormArray.value[i]!=false){
        //      let control: FormControl = new FormControl(true);
        //     this.daysFormArray.setControl(i,control);
        //     count++;
        //   }
        // }
        
        
        
          

          let categoryNumber = this.bigCategoryNumber + this.midCategoryNumber + this.smallCategoryNumber;
          
          //console.log(this.myForm.value.bigcategory.bigcategory);
          if(files[0]==null)
            formData.append("clothPhoto","null");
          else
            formData.append("clothPhoto",files[0],files[0]['name']);
          if((Math.floor(this.smallCategoryName/10000000))==60)
            formData.append("clothType",6);
          else if((Math.floor(this.smallCategoryName/10000000))==61)
            formData.append("clothType",7);
          else if((Math.floor(this.smallCategoryName/10000000))==62)
            formData.append("clothType",8);
          else
            formData.append("clothType",this.smallCategoryName/100000000);
          formData.append("categoryCode",this.smallCategoryName);
          formData.append("clothName",this.myForm.value.clothname);
          formData.append("clothPrice",this.myForm.value.Price);
          formData.append("clothUrl",this.myForm.value.clothurl);
          if(this.bigCategoryName=="Outer"){
            for(let i=0; i<this.daysFormArray1.value.length; i++){
              if(i==this.daysFormArray1.value.length-1){
                formData.append("clothFreeSize",this.daysFormArray1.value[i]);
              }
              else{
                formData.append("cloth"+(i+1)+"Size",this.daysFormArray1.value[i]);
              }
            }
          }
          else if(this.bigCategoryName=="Top"){
            for(let i=0; i<this.daysFormArray2.value.length; i++){
              if(i==this.daysFormArray2.value.length-1){
                formData.append("clothFreeSize",this.daysFormArray2.value[i]);
              }
              else{
                formData.append("cloth"+(i+1)+"Size",this.daysFormArray2.value[i]);
              }
            }
          }
          else if(this.bigCategoryName=="Bottom"){
            for(let i=0; i<this.daysFormArray3.value.length; i++){
              if(i==this.daysFormArray3.value.length-1){
                formData.append("clothFreeSize",this.daysFormArray3.value[i]);
              }
              else{
                formData.append("cloth"+(i+1)+"Size",this.daysFormArray3.value[i]);
              }
            }
          }
          else if(this.bigCategoryName=="Suit"){
            for(let i=0; i<this.daysFormArray4.value.length; i++){
              if(i==this.daysFormArray4.value.length-1){
                formData.append("clothFreeSize",this.daysFormArray4.value[i]);
              }
              else{
                formData.append("cloth"+(i+1)+"Size",this.daysFormArray4.value[i]);
              }
            }
          }
          else if(this.bigCategoryName=="Summer"){
            for(let i=0; i<this.daysFormArray5.value.length; i++){
              if(i==this.daysFormArray5.value.length-1){
                formData.append("clothFreeSize",this.daysFormArray5.value[i]);
              }
              else{
                formData.append("cloth"+(i+1)+"Size",this.daysFormArray5.value[i]);
              }
            }
          }
          else if(this.bigCategoryName=="Bag"){
            for(let i=0; i<this.daysFormArray6.value.length; i++){
              formData.append("clothFreeSize",this.daysFormArray6.value[i]);
            }
          }
          else if(this.bigCategoryName=="Acc"){
            for(let i=0; i<this.daysFormArray7.value.length; i++){
              formData.append("clothFreeSize",this.daysFormArray7.value[i]);
            }
          }
          else if(this.bigCategoryName=="Shoes"){
            for(let i=0; i<this.daysFormArray8.value.length; i++){
              formData.append("cloth"+(i+1)+"Size",this.daysFormArray8.value[i]);
            }
          }

          //console.log(this.id);
          // console.log(formData.get("clothFreeSize"));
          

          //console.log(formData.get('size[0]'));
          // this.http.post('http://192.168.1.225:3000/cloth',formData)
          // .map(files => files.json())
          // .subscribe(files => console.log('files',files))
          
          this.authService.editinCloth(formData,this.clothId).subscribe(files =>{
            if(files.msg=="cloth edit success"){
              this.router.navigate(['/cloth']);
            }else{
              alert("에러");
            }
            
          },
          error =>{
            alert('error');
          });

          
     
        

        // this.authService.addinCloth(this.myForm.value).subscribe(respone =>{

          // },
          // error => {
            //   alert('error');
            // });
            //this.QRCode = "data:image/png;base64,"+this.url;
            //console.log(this.clothPhoto);
            //console.log(this.myForm.value);
          }

  
}
