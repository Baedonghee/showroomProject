import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";


import { CodyAuthService } from '../shared/cody.service';


@Component({
    selector: 'app-cody-edit',
    templateUrl: './cody-edit.component.html',
    styleUrls: ['./cody-edit.component.css']
})
export class CodyEditComponent implements OnInit {
	

    private sub:any;
    id : string;
    

    serverOnOff = true;

    codyUrl : string;
    values = '';
    showAll = false;
    showOuter = false;
    showTop = false
    showBottom = false;
    showSuit = false;
    showSummer = false; 
    showShoes = false;
    showBag = false;
    showAcc = false;
    showSearch = false;
    
    item = [];
    tagItems = [];
    cloths = [];
    outerCloths = [];
    allCloths = [];
    topCloths = [];
    bottomCloths = [];
    suitCloths = [];
    summerCloths = [];
    bagCloths = [];
    shoesCloths = [];
    accCloths = [];
    searchCloths = [];
    clothList = [];
    weather = [];
    schedule = [];
    clothListOff = false;
    clothListOn = true;
    num = 10;
    listBoxers:Array<string> = ['Sugar Ray Robinson','Muhammad Ali','George Foreman','Joe Frazier','Jake LaMotta','Joe Louis','Jack Dempsey','Rocky Marciano','Mike Tyson','Oscar De La Hoya','ㅁㄴㅇ','ㅁㄴㅇ','ㅁㄴㅇ','ㅁㄴㅇ','ㅁㄴㅇ','ㅁㄴㅇ'];
    //listBoxers= [];
    clothExamplePhoto: string;
    codyPhoto: Array<File>=[];
    listOuter:Array<string> = [];
    listTop:Array<string> = [];
    listBottom:Array<string> = [];
    listSuit:Array<string> = [];
    listSummer:Array<string> = [];
    listShoes:Array<string> = [];
    listBag:Array<string> = [];
    listAcc:Array<string> = [];
    listSearch:Array<string> = [];
    example = [];
    output: string;
    selectedModel: string;
    activeWeatherItems:Array<string>;
    activeScheduleItems:Array<string>;



    public items:Array<string> = ['화창한', '비가오는', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
    'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
    'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
    'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
    'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
    'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
    'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];

    private value:any = ['Athens'];
    private _disabledV:string = '0';
    private disabled:boolean = false;

    private get disabledV():string {

        return this._disabledV;
    }

    private set disabledV(value:string) {

        this._disabledV = value;
        this.disabled = this._disabledV === '1';
    }

    public selectedWeather(value:any):void {
       
        this.weather.push(value.text);
    }
    public selectedSchedule(value:any):void {
        this.schedule.push(value.text);
    }

    public removedWeather(value:any):void {
        var index = this.weather.indexOf(value.text);
        this.weather.splice(index,1);
    }
    public removedSchedule(value:any):void {
        var index = this.schedule.indexOf(value.text);
        this.schedule.splice(index,1);
    }

    public refreshValue(value:any):void {
        this.value = value;
    }

    public itemsToString(value:Array<any> = []):string {
        return value
        .map((item:any) => {
            return item.text;
        }).join(',');
    }


    public transformer(item: string): string {
        return `#${item}`;
    }
    constructor(private codyService: CodyAuthService, private router: Router, private route: ActivatedRoute) { 
        this.clothExamplePhoto = '/assets/image/150x150.png';
        this.codyUrl = '';
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            console.log(params);
            let codyData: any = params;
            this.codyUrl = codyData.codyPhoto;
            this.id = codyData._id;
            let codyTag = codyData.codyTag.split(',');
            this.tagItems = codyTag;
            for(let i=0; i<codyTag.length; i++){

                let tagArray = "#"+codyTag[i];
                this.item.push(tagArray);
            }
            if(codyData.codyWeather){
                let weatherWord = ['화창한'];
                this.activeWeatherItems = weatherWord;
                this.weather.push(weatherWord[0])
            }
            if(codyData.codyScheduleContent){
                let scheduleWord = ['화창한'];
                this.activeScheduleItems = scheduleWord;
                this.schedule.push(scheduleWord[0]);
            }
            this.num = Number(codyData.codyDegree);
            if(codyData.clothPhoto ==null){
                this.clothList = null;
                this.cloths = null;
                this.clothListOff = true;
            }
            else{
                let clothPhoto = codyData.clothPhoto.split(',');
                let codyCategoryCode = codyData.codyCategoryCode.split(',');
                let clothNumber = codyData.codyClothNumber.split(',');
                let clothName = codyData.clothName.split(',');
                let clothPrice = codyData.codyClothPrice.split(',');
                let clothDescription = codyData.categoryDescription.split(',');
                
                for(let i=0; i<codyCategoryCode.length; i++){
                    let clothObject = {
                        clothName: clothName[i],
                        clothPhoto: clothPhoto[i],
                        categoryDescription: clothDescription[i],
                        categoryCode: Number(codyCategoryCode[i]),
                        clothNumber: Number(clothNumber[i]),
                        clothPrice: Number(clothPrice[i])
                    };
                    this.clothList.push(clothObject);
                    if((Math.floor(this.clothList[i].categoryCode/100000000))==1){
                        this.listOuter.push(this.clothList[i]);
                    }
                    else if((Math.floor(this.clothList[i].categoryCode/100000000))==2){
                        this.listTop.push(this.clothList[i]);
                    }
                    else if((Math.floor(this.clothList[i].categoryCode/100000000))==3){
                        this.listBottom.push(this.clothList[i]);
                    }
                    else if((Math.floor(this.clothList[i].categoryCode/100000000))==4){
                        this.listSuit.push(this.clothList[i]);
                    }
                    else if((Math.floor(this.clothList[i].categoryCode/100000000))==5){
                        this.listSummer.push(this.clothList[i]);
                    }
                    else if((Math.floor(this.clothList[i].categoryCode/10000000))==60){
                        this.listBag.push(this.clothList[i]);
                    }
                    else if((Math.floor(this.clothList[i].categoryCode/10000000))==61){
                        this.listShoes.push(this.clothList[i]);
                    }
                    else if((Math.floor(this.clothList[i].categoryCode/10000000))==62){
                        this.listAcc.push(this.clothList[i]);
                    }
                }
            }
            // this.id=params['id'];
        });
        // console.log(this.id);
        // console.log(localStorage.getItem("shopToken"))
        // this.codyService.getinDetailCody(this.id).subscribe(files => {
        //     console.log(files);
        //     if(files.msg=="cody Detail CodyShow success"){

        //         this.codyUrl = files.codyData[0].codyPhoto;
        //         console.log(this.codyUrl);
        //         console.log(files.codyData[0].codyTag.length);
        //         this.tagItems=files.codyData[0].codyTag;
        //         for(let i=0; i<files.codyData[0].codyTag.length; i++){
        //             let tagArray = "#"+files.codyData[0].codyTag[i];
        //             this.item.push(tagArray);

        //         }
        //         this.tagItems = files.codyData[0].codyTag;
        //         if(files.codyData[0].codyWeather[0]){
        //             let abc = ['화창한'];
        //             this.activeWeatherItems = abc;
        //             this.weather.push(abc[0]);
        //         }
        //         if(files.codyData[0].codyScheduleContent){
        //             let abc = ['화창한'];
        //             this.activeScheduleItems = abc;
        //             this.schedule.push(abc[0]);
        //         }
        //         this.num = files.codyData[0].codyDegree[0];
        //         for(let i=0; i<files.codyData[0].clothName.length; i++){
        //             let clothObject = {
        //                 clothName: files.codyData[0].clothName[i],
        //                 clothPhoto: files.codyData[0].clothPhoto[i],
        //                 categoryDescription: files.codyData[0].codyCategoryCode[i],
        //                 clothNumber: files.codyData[0].codyClothNumber[i]
        //             };
        //             this.clothList.push(clothObject);
        //             console.log(clothObject);
        //             if((Math.floor(this.clothList[i].categoryDescription/100000000))==3){
        //                 this.listTeamOne.push(this.clothList[i]);
        //             }
        //             else if((Math.floor(this.clothList[i].categoryDescription/100000000))==1){
        //                 this.listTeamTwo.push(this.clothList[i]);
        //             }
        //             else if((Math.floor(this.clothList[i].categoryDescription/100000000))==2){
        //                 this.listTeamThree.push(this.clothList[i]);
        //             }
        //             else if((Math.floor(this.clothList[i].categoryDescription/100000000))==4){
        //                 this.listTeamFour.push(this.clothList[i]);
        //             }
        //             else if((Math.floor(this.clothList[i].categoryDescription/100000000))==5){
        //                 this.listTeamFive.push(this.clothList[i]);
        //             }
        //         }
                
        //     }
        // },
        // error =>{
        //     alert('error');
        // });
        //  this.loadCloth();
         this.loadCloth();
    }


    onItemAdded(items) {
        console.log(items);
        var strArray=items.value.split('#');
        this.tagItems.push(strArray[1]);
    }
    onItemRemoved(items){
        if(items.value==undefined){
            var strArray=items.split('#');
            var index = this.tagItems.indexOf(strArray[1]);
            this.tagItems.splice(index,1);
        }
        else{
            var strArray=items.value.split('#');
            var index = this.tagItems.indexOf(strArray[1]);
            this.tagItems.splice(index,1);
        }
    }

    onExample(items){
        console.log(items);
    }

    AllToBasket(items) {
        console.log(items);
    }
    firstToBasket(items) {

    }
    secondToBasket(items) {

    }
    threeToBasket(items) {

    }
    fourToBasket(items) {

    }
    fiveToBasket(items) {

    }
    opened() {
        this.output = '(opened)';
       

    }
    closed() {
        this.output = '(closed)';
        this.clothList = [];
        this.clothList = this.clothList.concat(this.listOuter, this.listTop, this.listBottom, this.listSuit, this.listSummer, this.listShoes, this.listBag, this.listAcc);

        if(this.clothList[0]!=null){
            this.clothListOn = true;
            this.clothListOff = false; 
        }

    }

    dismissed() {
        this.output = '(closed)';

        if(this.listOuter[0] == null && this.listTop[0] == null && this.listBottom[0] == null && this.listSuit[0] == null && this.listSummer[0] == null && this.listShoes[0] == null && this.listBag[0] == null && this.listAcc[0] == null){
            this.clothListOn = false;
            this.clothListOff = true; 
            this.clothList = [];
        }
    }
    onClickAll() {
    this.showAll = true;
    this.showOuter = false;
    this.showBottom = false;
    this.showTop = false;
    this.showSuit = false;
    this.showSummer = false;
    this.showShoes = false;
    this.showBag = false;
    this.showAcc = false;
    this.showSearch = false;
  }
  onClickOuter() {
    this.showAll = false;
    this.showOuter = true;
    this.showBottom = false;
    this.showTop = false;
    this.showSuit = false;
    this.showSummer = false;
    this.showShoes = false;
    this.showBag = false;
    this.showAcc = false;
    this.showSearch = false;
  }
  onClickTop() {
    this.showAll = false;
    this.showOuter = false;
    this.showBottom = false;
    this.showTop = true;
    this.showSuit = false;
    this.showSummer = false;
    this.showShoes = false;
    this.showBag = false;
    this.showAcc = false;
    this.showSearch = false;
  }
  onClickBottom() {
    this.showAll = false;
    this.showOuter = false;
    this.showBottom = true;
    this.showTop = false;
    this.showSuit = false;
    this.showSummer = false;
    this.showShoes = false;
    this.showBag = false;
    this.showAcc = false;
    this.showSearch = false;
  }
  onClickSuit() {
    this.showAll = false;
    this.showOuter = false;
    this.showBottom = false;
    this.showTop = false;
    this.showSuit = true;
    this.showSummer = false;
    this.showShoes = false;
    this.showBag = false;
    this.showAcc = false;
    this.showSearch = false;
  }
  onClickSummer() {
    this.showAll = false;
    this.showOuter = false;
    this.showBottom = false;
    this.showTop = false;
    this.showSuit = false;
    this.showSummer = true;
    this.showShoes = false;
    this.showBag = false;
    this.showAcc = false;
    this.showSearch = false;
  }
  onClickShoes() {
    this.showAll = false;
    this.showOuter = false;
    this.showBottom = false;
    this.showTop = false;
    this.showSuit = false;
    this.showSummer = false;
    this.showShoes = true;
    this.showBag = false;
    this.showAcc = false;
    this.showSearch = false;
  }
  onClickBag() {
    this.showAll = false;
    this.showOuter = false;
    this.showBottom = false;
    this.showTop = false;
    this.showSuit = false;
    this.showSummer = false;
    this.showShoes = false;
    this.showBag = true;
    this.showAcc = false;
    this.showSearch = false;
  }
  onClickAcc() {
    this.showAll = false;
    this.showOuter = false;
    this.showBottom = false;
    this.showTop = false;
    this.showSuit = false;
    this.showSummer = false;
    this.showShoes = false;
    this.showBag = false;
    this.showAcc = true;
    this.showSearch = false;
  }
  onKey(event: any) {
    let abc;
    console.log(event.target.value);
    this.showAll = false;
    this.showOuter = false;
    this.showBottom = false;
    this.showTop = false;
    this.showSuit = false;
    this.showSummer = false;
    this.showShoes = false;
    this.showBag = false;
    this.showAcc = false;
    this.showSearch = true;
    // abc = this.allCloths.filter(x => x.clothName === event.target.value);
    this.searchCloths = this.isAutobot(this.allCloths, event.target.value);
    //console.log(abc);
  }
  isAutobot(objList, text) {
    if(undefined === text || text === '') return objList;
      return objList.filter(product => {
        let flag;
        for(let prop in product){
          flag = false;
          flag = product[prop].toString().indexOf(text) > -1;
          if(flag)
            break;
        }
        return flag;
      });
  }
    onMinus() {
        this.num--;
    }
    onPlus() {
        this.num++;
    }
    public buttonStats() {
        const files:Array<File> = this.codyPhoto;
        if(files[0]==null || this.clothList[0]==null || this.weather[0]==null || this.schedule[0]==null || this.tagItems[0]==null)
            return 1;
        else
            return 0;
    }
    loadCloth() {
        this.onClickAll();

        if(this.serverOnOff==true){
            this.serverOnOff=false;
            this.codyService.getinCloth().subscribe(files => {
                
                this.cloths = files.data;
                console.log(this.clothList);
                
                    var newArr = removeDuplicatedCategories(this.cloths,this.clothList);
                    this.cloths = newArr;
                    for(let i=0; i<this.cloths.length; i++){
                      if(this.cloths[i].clothType == 1){
                        this.outerCloths.push(this.cloths[i]);
                      }
                      else if(this.cloths[i].clothType == 2){
                        this.topCloths.push(this.cloths[i]);
                      }
                      else if(this.cloths[i].clothType == 3){
                        this.bottomCloths.push(this.cloths[i]);
                      }
                      else if(this.cloths[i].clothType == 4){
                        this.suitCloths.push(this.cloths[i]);
                      }
                      else if(this.cloths[i].clothType == 5){
                        this.summerCloths.push(this.cloths[i]);
                      }
                      else if(this.cloths[i].clothType == 6){
                        this.bagCloths.push(this.cloths[i]);
                      }
                      else if(this.cloths[i].clothType == 7){
                        this.shoesCloths.push(this.cloths[i]);
                      }
                      else if(this.cloths[i].clothType == 8){
                        this.accCloths.push(this.cloths[i]);
                      }
                    } 
                    this.allCloths = this.allCloths.concat(this.outerCloths,this.topCloths,this.bottomCloths,this.suitCloths, this.summerCloths, this.shoesCloths, this.bagCloths, this.accCloths);  
                
            },
            error => {
                alert('error');
            });

        }
        else{
            this.allCloths = [];
            this.allCloths = this.allCloths.concat(this.outerCloths,this.topCloths,this.bottomCloths,this.suitCloths, this.summerCloths, this.shoesCloths, this.bagCloths, this.accCloths);  
        }

        
    }
    readUrl(event: any) {
        this.codyPhoto = <Array<File>> event.target.files;
        //this.product.photo = event.target.files[0]['name'];
        if(event.target.files && event.target.files[0]){
            var reader = new FileReader();

            reader.onload = (event:any) => {
                this.codyUrl = event.target.result;
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }
    onEdit() {
        const formData:any = new FormData();
        const files:Array<File> = this.codyPhoto;
        const codyClothNumber = [];
        const codyCategoryCode = [];
        const codyClothPrice = [];
        let codyPrice : number= 0;
        console.log(this.clothList);
        for(let i=0; i<this.clothList.length; i++){
          codyClothNumber.push(this.clothList[i].clothNumber);
          codyCategoryCode.push(this.clothList[i].categoryCode);
          codyClothPrice.push(this.clothList[i].clothPrice);
          codyPrice += this.clothList[i].clothPrice;
        }
        if(files[0]==null)
            formData.append("codyPhoto","null");
        else
            formData.append("codyPhoto",files[0]);
        console.log(codyPrice);
        formData.append("codyWeather",14);
        formData.append("codyScheduleContent",1);
        formData.append("codyClothPrice", codyClothPrice);
        formData.append("codyDegree",this.num);
        formData.append("codyPrice", codyPrice);
        formData.append("codyClothNumber",codyClothNumber);
        formData.append("codyCategoryCode",codyCategoryCode);
        formData.append("codyTag",this.tagItems);
        this.codyService.editinCody(formData,this.id).subscribe(files => {
            if(files.msg=="success"){
                this.router.navigate(['/cody']);
                alert("코디가 수정되었습니다.");
            }else{
                alert("에러");
            }
        },
        error => {
            alert("error");
        });
    }
}
function removeDuplicatedCategories(prodCategories: any[], toBeRemoved: any[]): any[] {
    if(toBeRemoved ==null){
        return prodCategories;
    }
    else {
        let ret: any[] = []; // new array to be returned
        for (let pc of prodCategories) {
            let isDup: boolean = false;
            for (let toRem of toBeRemoved) {
                if (pc.clothNumber === toRem.clothNumber) {
                    isDup = true;
                    break;
                }
            }
            if (!isDup) ret.push(pc); // append non-duplicated
        }
        return ret;
    }
}


