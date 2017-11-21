import { Injectable } from "@angular/core";
import { Cloth } from "./cloth.interface";
import 'rxjs/Rx';

@Injectable()
export class CategorycodeService {

	constructor(private cloth: Cloth) { }

	getasd() {
		return "thasd";
	}

	changeCategory(categoryCode: any) {
		let categoryName;
		let bigCategorys;
		let midCategorys;
		let smallCategorys;
		switch (categoryCode) {
			case 100010001:
				categoryName="무스탕-베이직";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[2];
				smallCategorys = this.cloth.outermustangCategorys[0];
				break;
			case 100020001:
				categoryName="스카잔-베이직";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[4];
				smallCategorys = this.cloth.outersukajanCategorys[0];
				break;
			case 100030001:
				categoryName="야상-롱야상";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[5];
				smallCategorys = this.cloth.outernightCategorys[0];
				break;
			case 100030002:
				categoryName="야상-베이직";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[5];
				smallCategorys = this.cloth.outernightCategorys[1];
				break;
			case 100030003:
				categoryName="야상-숏야상";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[5];
				smallCategorys = this.cloth.outernightCategorys[2];
				break;
			case 100030004:
				categoryName="야상-오버핏야상";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[5];
				smallCategorys = this.cloth.outernightCategorys[3];
				break;
			case 100030005:
				categoryName="야상-후드야상";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[5];
				smallCategorys = this.cloth.outernightCategorys[4];
				break;
			case 100040001:
				categoryName="점퍼-나그랑점퍼";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[7];
				smallCategorys = this.cloth.outerjumperCategorys[0];
				break;
			case 100040002:
				categoryName="점퍼-네오프랜점퍼";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[7];
				smallCategorys = this.cloth.outerjumperCategorys[1];
				break;
			case 100040003:
				categoryName="점퍼-데님점퍼";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[7];
				smallCategorys = this.cloth.outerjumperCategorys[2];
				break;
			case 100040004:
				categoryName="점퍼-레토르점퍼";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[7];
				smallCategorys = this.cloth.outerjumperCategorys[3];
				break;
			case 100040005:
				categoryName="점퍼-롱점퍼";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[7];
				smallCategorys = this.cloth.outerjumperCategorys[4];
				break;
			case 100040006:
				categoryName="점퍼-마르코점퍼";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[7];
				smallCategorys = this.cloth.outerjumperCategorys[5];
				break;
			case 100040007:
				categoryName="점퍼-아노락점퍼";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[7];
				smallCategorys = this.cloth.outerjumperCategorys[6];
				break;
			case 100040008:
				categoryName="점퍼-야구점퍼";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[7];
				smallCategorys = this.cloth.outerjumperCategorys[7];
				break;
			case 100040009:
				categoryName="점퍼-양털점퍼";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[7];
				smallCategorys = this.cloth.outerjumperCategorys[8];
				break;
			case 100040010:
				categoryName="점퍼-웨이블점퍼";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[7];
				smallCategorys = this.cloth.outerjumperCategorys[9];
				break;
			case 100040011:
				categoryName="점퍼-유광점퍼";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[7];
				smallCategorys = this.cloth.outerjumperCategorys[10];
				break;
			case 100040012:
				categoryName="점퍼-코듀로이점퍼";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[7];
				smallCategorys = this.cloth.outerjumperCategorys[11];
				break;
			case 100040013:
				categoryName="점퍼-항공점퍼";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[7];
				smallCategorys = this.cloth.outerjumperCategorys[12];
				break;
			case 100040014:
				categoryName="점퍼-후드점퍼";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[7];
				smallCategorys = this.cloth.outerjumperCategorys[13];
				break;
			case 100050001:
				categoryName="집업-니트집업";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[8];
				smallCategorys = this.cloth.outerjipupCategorys[0];
				break;
			case 100050002:
				categoryName="집업-데님집업";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[8];
				smallCategorys = this.cloth.outerjipupCategorys[1];
				break;
			case 100050003:
				categoryName="집업-모직집업";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[8];
				smallCategorys = this.cloth.outerjipupCategorys[2];
				break;
			case 100050004:
				categoryName="집업-베이직";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[8];
				smallCategorys = this.cloth.outerjipupCategorys[3];
				break;
			case 100050005:
				categoryName="집업-보카시집업";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[8];
				smallCategorys = this.cloth.outerjipupCategorys[4];
				break;
			case 100050006:
				categoryName="집업-양털집업";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[8];
				smallCategorys = this.cloth.outerjipupCategorys[5];
				break;
			case 100050007:
				categoryName="집업-트레이닝집업";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[8];
				smallCategorys = this.cloth.outerjipupCategorys[6];
				break;
			case 100050008:
				categoryName="집업-후드집업";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[8];
				smallCategorys = this.cloth.outerjipupCategorys[7];
				break;
			case 100060001:
				categoryName="코트-나그랑코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[0];
				break;
			case 100060002:
				categoryName="코트-더블코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[1];
				break;
			case 100060003:
				categoryName="코트-데님코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[2];
				break;
			case 100060004:
				categoryName="코트-드랍코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[3];
				break;
			case 100060005:
				categoryName="코트-롱코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[4];
				break;
			case 100060006:
				categoryName="코트-루즈코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[5];
				break;
			case 100060007:
				categoryName="코트-베이직";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[6];
				break;
			case 100060008:
				categoryName="코트-보카시코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[7];
				break;
			case 100060009:
				categoryName="코트-분또코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[8];
				break;
			case 100060010:
				categoryName="코트-스트라이프코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[9];
				break;
			case 100060011:
				categoryName="코트-싱글코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[10];
				break;
			case 100060012:
				categoryName="코트-오버코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[11];
				break;
			case 100060013:
				categoryName="코트-지퍼코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[12];
				break;
			case 100060014:
				categoryName="코트-차이나코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[13];
				break;
			case 100060015:
				categoryName="코트-청코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[14];
				break;
			case 100060016:
				categoryName="코트-체크코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[15];
				break;
			case 100060017:
				categoryName="코트-하드릭코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[16];
				break;
			case 100060018:
				categoryName="코트-헤리튼코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[17];
				break;
			case 100060019:
				categoryName="코트-헤링본코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[18];
				break;
			case 100060020:
				categoryName="코트-후드코트";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[9];
				smallCategorys = this.cloth.outercoatCategorys[19];
				break;
			case 100070001:
				categoryName="패딩-덕다운패딩";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[10];
				smallCategorys = this.cloth.outerpaddingCategorys[0];
				break;
			case 100070002:
				categoryName="패딩-라쿤패딩";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[10];
				smallCategorys = this.cloth.outerpaddingCategorys[1];
				break;
			case 100070003:
				categoryName="패딩-롱패딩";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[10];
				smallCategorys = this.cloth.outerpaddingCategorys[2];
				break;
			case 100070004:
				categoryName="패딩-베이직";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[10];
				smallCategorys = this.cloth.outerpaddingCategorys[3];
				break;
			case 100070005:
				categoryName="패딩-숏패딩";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[10];
				smallCategorys = this.cloth.outerpaddingCategorys[4];
				break;
			case 100070006:
				categoryName="패딩-스카잔패딩";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[10];
				smallCategorys = this.cloth.outerpaddingCategorys[5];
				break;
			case 100070007:
				categoryName="패딩-야상패딩";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[10];
				smallCategorys = this.cloth.outerpaddingCategorys[6];
				break;
			case 100070008:
				categoryName="패딩-양털패딩";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[10];
				smallCategorys = this.cloth.outerpaddingCategorys[7];
				break;
			case 100070009:
				categoryName="패딩-조끼패딩";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[10];
				smallCategorys = this.cloth.outerpaddingCategorys[8];
				break;
			case 100070010:
				categoryName="패딩-지퍼패딩";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[10];
				smallCategorys = this.cloth.outerpaddingCategorys[9];
				break;
			case 100070011:
				categoryName="패딩-항공패딩";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[10];
				smallCategorys = this.cloth.outerpaddingCategorys[10];
				break;
			case 100070012:
				categoryName="패딩-후드패딩";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[10];
				smallCategorys = this.cloth.outerpaddingCategorys[11];
				break;
			case 110010001:
				categoryName="가디건-니트가디건";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[1];
				smallCategorys = this.cloth.outercardiganCategorys[0];
				break;
			case 110010002:
				categoryName="가디건-데미지가디건";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[1];
				smallCategorys = this.cloth.outercardiganCategorys[1];
				break;
			case 110010003:
				categoryName="가디건-떡볶이가디건";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[1];
				smallCategorys = this.cloth.outercardiganCategorys[2];
				break;
			case 110010004:
				categoryName="가디건-롱가디건";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[1];
				smallCategorys = this.cloth.outercardiganCategorys[3];
				break;
			case 110010005:
				categoryName="가디건-루프가디건";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[1];
				smallCategorys = this.cloth.outercardiganCategorys[4];
				break;
			case 110010006:
				categoryName="가디건-베이직";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[1];
				smallCategorys = this.cloth.outercardiganCategorys[5];
				break;
			case 110010007:
				categoryName="가디건-숕가디건";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[1];
				smallCategorys = this.cloth.outercardiganCategorys[6];
				break;
			case 110010008:
				categoryName="가디건-스트라이프가디건";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[1];
				smallCategorys = this.cloth.outercardiganCategorys[7];
				break;
			case 110010009:
				categoryName="가디건-집업가디건";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[1];
				smallCategorys = this.cloth.outercardiganCategorys[8];
				break;
			case 110010010:
				categoryName="가디건-코튼가디건";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[1];
				smallCategorys = this.cloth.outercardiganCategorys[9];
				break;
			case 110020001:
				categoryName="블레이져-더블블레이져";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[3];
				smallCategorys = this.cloth.outerblazerCategorys[0];
				break;
			case 110020002:
				categoryName="블레이져-베이직";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[3];
				smallCategorys = this.cloth.outerblazerCategorys[1];
				break;
			case 110020003:
				categoryName="블레이져-분또블레이져";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[3];
				smallCategorys = this.cloth.outerblazerCategorys[2];
				break;
			case 110020004:
				categoryName="블레이져-체크블레이져";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[3];
				smallCategorys = this.cloth.outerblazerCategorys[3];
				break;
			case 110030001:
				categoryName="자켓-가죽자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[0];
				break;
			case 110030002:
				categoryName="자켓-골덴자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[1];
				break;
			case 110030003:
				categoryName="자켓-데님자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[2];
				break;
			case 110030004:
				categoryName="자켓-떡볶이자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[3];
				break;
			case 110030005:
				categoryName="자켓-라이더자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[4];
				break;
			case 110030006:
				categoryName="자켓-레더자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[5];
				break;
			case 110030007:
				categoryName="자켓-린넨자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[6];
				break;
			case 110030008:
				categoryName="자켓-면자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[7];
				break;
			case 110030009:
				categoryName="자켓-보카시자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[8];
				break;
			case 110030010:
				categoryName="자켓-분또자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[9];
				break;
			case 110030011:
				categoryName="자켓-생지자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[10];
				break;
			case 110030012:
				categoryName="자켓-셔츠자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[11];
				break;
			case 110030013:
				categoryName="자켓-스트라이프자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[12];
				break;
			case 110030014:
				categoryName="자켓-양털자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[13];
				break;
			case 110030015:
				categoryName="자켓-오버자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[14];
				break;
			case 110030016:
				categoryName="자켓-워싱자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[15];
				break;
			case 110030017:
				categoryName="자켓-청자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[16];
				break;
			case 110030018:
				categoryName="자켓-체크자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[17];
				break;
			case 110030019:
				categoryName="자켓-커팅자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[18];
				break;
			case 110030020:
				categoryName="자켓-코치자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[19];
				break;
			case 110030021:
				categoryName="자켓-트러커자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[20];
				break;
			case 110030022:
				categoryName="자켓-패딩자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[21];
				break;
			case 110030023:
				categoryName="자켓-후드자켓";
				bigCategorys = this.cloth.bigCategorys[1];
				midCategorys = this.cloth.outerCategorys[6];
				smallCategorys = this.cloth.outerjacketCategorys[22];
				break;
			case 200010001:
				categoryName="니트-꽈배기니트";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[3];
				smallCategorys = this.cloth.topnitCategorys[0];
				break;
			case 200010002:
				categoryName="니트-나그랑니트";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[3];
				smallCategorys = this.cloth.topnitCategorys[1];
				break;
			case 200010003:
				categoryName="니트-레터링니트";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[3];
				smallCategorys = this.cloth.topnitCategorys[2];
				break;
			case 200010004:
				categoryName="니트-목폴라니트";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[3];
				smallCategorys = this.cloth.topnitCategorys[3];
				break;
			case 200010005:
				categoryName="니트-베이직";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[3];
				smallCategorys = this.cloth.topnitCategorys[4];
				break;
			case 200010006:
				categoryName="니트-보카시니트";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[3];
				smallCategorys = this.cloth.topnitCategorys[5];
				break;
			case 200010007:
				categoryName="니트-스트라이프니트";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[3];
				smallCategorys = this.cloth.topnitCategorys[6];
				break;
			case 200010008:
				categoryName="니트-체크니트";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[3];
				smallCategorys = this.cloth.topnitCategorys[7];
				break;
			case 200010009:
				categoryName="니트-크로딘니트";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[3];
				smallCategorys = this.cloth.topnitCategorys[8];
				break;
			case 200010010:
				categoryName="니트-헨리넥니트";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[3];
				smallCategorys = this.cloth.topnitCategorys[9];
				break;
			case 210010001:
				categoryName="긴팔티-기모티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[1];
				smallCategorys = this.cloth.toplongshirtCategorys[0];
				break;
			case 210010002:
				categoryName="긴팔티-나그랑티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[1];
				smallCategorys = this.cloth.toplongshirtCategorys[1];
				break;
			case 210010003:
				categoryName="긴팔티-레이어드티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[1];
				smallCategorys = this.cloth.toplongshirtCategorys[2];
				break;
			case 210010004:
				categoryName="긴팔티-롱슬리브티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[1];
				smallCategorys = this.cloth.toplongshirtCategorys[3];
				break;
			case 210010005:
				categoryName="긴팔티-루즈티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[1];
				smallCategorys = this.cloth.toplongshirtCategorys[4];
				break;
			case 210010006:
				categoryName="긴팔티-반폴라티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[1];
				smallCategorys = this.cloth.toplongshirtCategorys[5];
				break;
			case 210010007:
				categoryName="긴팔티-베이직";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[1];
				smallCategorys = this.cloth.toplongshirtCategorys[6];
				break;
			case 210010008:
				categoryName="긴팔티-분또티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[1];
				smallCategorys = this.cloth.toplongshirtCategorys[7];
				break;
			case 210010009:
				categoryName="긴팔티-스트라이프티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[1];
				smallCategorys = this.cloth.toplongshirtCategorys[8];
				break;
			case 210010010:
				categoryName="긴팔티-오버핏티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[1];
				smallCategorys = this.cloth.toplongshirtCategorys[9];
				break;
			case 210010011:
				categoryName="긴팔티-포켓티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[1];
				smallCategorys = this.cloth.toplongshirtCategorys[10];
				break;
			case 210010012:
				categoryName="긴팔티-프린팅티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[1];
				smallCategorys = this.cloth.toplongshirtCategorys[11];
				break;
			case 210010013:
				categoryName="긴팔티-피그먼트티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[1];
				smallCategorys = this.cloth.toplongshirtCategorys[12];
				break;
			case 210010014:
				categoryName="긴팔티-헨리넥티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[1];
				smallCategorys = this.cloth.toplongshirtCategorys[13];
				break;
			case 210020001:
				categoryName="맨투맨-기모맨투맨";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[4];
				smallCategorys = this.cloth.topmantomanCategorys[0];
				break;
			case 210020002:
				categoryName="맨투맨-나그랑맨투맨";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[4];
				smallCategorys = this.cloth.topmantomanCategorys[1];
				break;
			case 210020003:
				categoryName="맨투맨-루즈핏맨투맨";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[4];
				smallCategorys = this.cloth.topmantomanCategorys[2];
				break;
			case 210020004:
				categoryName="맨투맨-목폴라맨투맨";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[4];
				smallCategorys = this.cloth.topmantomanCategorys[3];
				break;
			case 210020005:
				categoryName="맨투맨-반집업맨투맨";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[4];
				smallCategorys = this.cloth.topmantomanCategorys[4];
				break;
			case 210020006:
				categoryName="맨투맨-베이직";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[4];
				smallCategorys = this.cloth.topmantomanCategorys[5];
				break;
			case 210020007:
				categoryName="맨투맨-스트라이프맨투맨";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[4];
				smallCategorys = this.cloth.topmantomanCategorys[6];
				break;
			case 210020008:
				categoryName="맨투맨-양털맨투맨";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[4];
				smallCategorys = this.cloth.topmantomanCategorys[7];
				break;
			case 210020009:
				categoryName="맨투맨-오버핏맨투맨";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[4];
				smallCategorys = this.cloth.topmantomanCategorys[8];
				break;
			case 210020010:
				categoryName="맨투맨-프린팅맨투맨";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[4];
				smallCategorys = this.cloth.topmantomanCategorys[9];
				break;
			case 210020011:
				categoryName="맨투맨-항공맨투맨";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[4];
				smallCategorys = this.cloth.topmantomanCategorys[11];
				break;
			case 210020012:
				categoryName="맨투맨-헨리넥맨투맨";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[4];
				smallCategorys = this.cloth.topmantomanCategorys[12];
				break;
			case 210030001:
				categoryName="베스트-니트베스트";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[6];
				smallCategorys = this.cloth.topvestCategorys[0];
				break;
			case 210030002:
				categoryName="베스트-목폴라베스트";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[6];
				smallCategorys = this.cloth.topvestCategorys[1];
				break;
			case 210030003:
				categoryName="베스트-베이직";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[6];
				smallCategorys = this.cloth.topvestCategorys[2];
				break;
			case 210030004:
				categoryName="베스트-양털베스트";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[6];
				smallCategorys = this.cloth.topvestCategorys[3];
				break;
			case 210030005:
				categoryName="베스트-오버핏베스트";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[6];
				smallCategorys = this.cloth.topvestCategorys[4];
				break;
			case 210030006:
				categoryName="베스트-V넥베스트";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[6];
				smallCategorys = this.cloth.topvestCategorys[5];
				break;
			case 210040001:
				categoryName="후드-기모후드";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[8];
				smallCategorys = this.cloth.tophoodCategorys[0];
				break;
			case 210040002:
				categoryName="후드-레이어드후드";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[8];
				smallCategorys = this.cloth.tophoodCategorys[1];
				break;
			case 210040003:
				categoryName="후드-반집업후드";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[8];
				smallCategorys = this.cloth.tophoodCategorys[2];
				break;
			case 210040004:
				categoryName="후드-베이직";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[8];
				smallCategorys = this.cloth.tophoodCategorys[3];
				break;
			case 210040005:
				categoryName="후드-스트라이프후드";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[8];
				smallCategorys = this.cloth.tophoodCategorys[4];
				break;
			case 210040006:
				categoryName="후드-아노락후드";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[8];
				smallCategorys = this.cloth.tophoodCategorys[5];
				break;
			case 210040007:
				categoryName="후드-양털후드";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[8];
				smallCategorys = this.cloth.tophoodCategorys[6];
				break;
			case 210040008:
				categoryName="후드-오버핏후드";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[8];
				smallCategorys = this.cloth.tophoodCategorys[7];
				break;
			case 210040009:
				categoryName="후드-집업후드";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[8];
				smallCategorys = this.cloth.tophoodCategorys[8];
				break;
			case 210040010:
				categoryName="후드-칼집후드";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[8];
				smallCategorys = this.cloth.tophoodCategorys[9];
				break;
			case 210040011:
				categoryName="후드-프린팅후드";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[8];
				smallCategorys = this.cloth.tophoodCategorys[10];
				break;
			case 210050001:
				categoryName="셔츠-베이직";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[7];
				smallCategorys = this.cloth.topshirtCategorys[0];
				break;
			case 210050002:
				categoryName="셔츠-스트라이프셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[7];
				smallCategorys = this.cloth.topshirtCategorys[1];
				break;
			case 210050003:
				categoryName="셔츠-차이나셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[7];
				smallCategorys = this.cloth.topshirtCategorys[2];
				break;
			case 220010001:
				categoryName="나시-레이어드나시";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[2];
				smallCategorys = this.cloth.topsleevelessCategorys[0];
				break;
			case 220010002:
				categoryName="나시-롱나시";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[2];
				smallCategorys = this.cloth.topsleevelessCategorys[1];
				break;
			case 220010003:
				categoryName="나시-베이직";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[2];
				smallCategorys = this.cloth.topsleevelessCategorys[2];
				break;
			case 220010004:
				categoryName="나시-스트라이프나시";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[2];
				smallCategorys = this.cloth.topsleevelessCategorys[3];
				break;
			case 220010005:
				categoryName="나시-프린팅나시";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[2];
				smallCategorys = this.cloth.topsleevelessCategorys[4];
				break;
			case 220020001:
				categoryName="반팔티-7부티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[5];
				smallCategorys = this.cloth.topshortshirtCategorys[0];
				break;
			case 220020002:
				categoryName="반팔티-기모티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[5];
				smallCategorys = this.cloth.topshortshirtCategorys[1];
				break;
			case 220020003:
				categoryName="반팔티-나그랑티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[5];
				smallCategorys = this.cloth.topshortshirtCategorys[2];
				break;
			case 220020004:
				categoryName="반팔티-레이어드티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[5];
				smallCategorys = this.cloth.topshortshirtCategorys[3];
				break;
			case 220020005:
				categoryName="반팔티-롱슬리브티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[5];
				smallCategorys = this.cloth.topshortshirtCategorys[4];
				break;
			case 220020006:
				categoryName="반팔티-루즈티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[5];
				smallCategorys = this.cloth.topshortshirtCategorys[5];
				break;
			case 220020007:
				categoryName="반팔티-반폴라티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[5];
				smallCategorys = this.cloth.topshortshirtCategorys[6];
				break;
			case 220020008:
				categoryName="반팔티-베이직";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[5];
				smallCategorys = this.cloth.topshortshirtCategorys[7];
				break;
			case 220020009:
				categoryName="반팔티-분또티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[5];
				smallCategorys = this.cloth.topshortshirtCategorys[8];
				break;
			case 220020010:
				categoryName="반팔티-스트라이프티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[5];
				smallCategorys = this.cloth.topshortshirtCategorys[9];
				break;
			case 220020011:
				categoryName="반팔티-오버핏티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[5];
				smallCategorys = this.cloth.topshortshirtCategorys[10];
				break;
			case 220020012:
				categoryName="반팔티-카라티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[5];
				smallCategorys = this.cloth.topshortshirtCategorys[11];
				break;
			case 220020013:
				categoryName="반팔티-포켓티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[5];
				smallCategorys = this.cloth.topshortshirtCategorys[12];
				break;
			case 220020014:
				categoryName="반팔티-프린팅티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[5];
				smallCategorys = this.cloth.topshortshirtCategorys[13];
				break;
			case 220020015:
				categoryName="반팔티-피그먼트티셔츠";
				bigCategorys = this.cloth.bigCategorys[2];
				midCategorys = this.cloth.topCategorys[5];
				smallCategorys = this.cloth.topshortshirtCategorys[14];
				break;
			case 300010001:
				categoryName="면긴바지-10부면바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[1];
				smallCategorys = this.cloth.topshortshirtCategorys[0];
				break;
			case 300010002:
				categoryName="면긴바지-9부면바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[1];
				smallCategorys = this.cloth.bottomlongcottonpantsCategorys[1];
				break;
			case 300010003:
				categoryName="면긴바지-기모면바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[1];
				smallCategorys = this.cloth.bottomlongcottonpantsCategorys[2];
				break;
			case 300010004:
				categoryName="면긴바지-디스트로이드면바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[1];
				smallCategorys = this.cloth.bottomlongcottonpantsCategorys[3];
				break;
			case 300010005:
				categoryName="면긴바지-배기면바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[1];
				smallCategorys = this.cloth.bottomlongcottonpantsCategorys[4];
				break;
			case 300010006:
				categoryName="면긴바지-밴딩면바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[1];
				smallCategorys = this.cloth.bottomlongcottonpantsCategorys[5];
				break;
			case 300010007:
				categoryName="면긴바지-베이직";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[1];
				smallCategorys = this.cloth.bottomlongcottonpantsCategorys[6];
				break;
			case 300010008:
				categoryName="면긴바지-스트라이프면바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[1];
				smallCategorys = this.cloth.bottomlongcottonpantsCategorys[7];
				break;
			case 300010009:
				categoryName="면긴바지-조거면바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[1];
				smallCategorys = this.cloth.bottomlongcottonpantsCategorys[8];
				break;
			case 300010010:
				categoryName="면긴바지-체크면바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[1];
				smallCategorys = this.cloth.bottomlongcottonpantsCategorys[9];
				break;
			case 300010011:
				categoryName="면긴바지-카고면바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[1];
				smallCategorys = this.cloth.bottomlongcottonpantsCategorys[10];
				break;
			case 300020001:
				categoryName="면스키니-기모스키니";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[2];
				smallCategorys = this.cloth.bottomcottonskinnyCategorys[0];
				break;
			case 300020002:
				categoryName="면스키니-베이직";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[2];
				smallCategorys = this.cloth.bottomcottonskinnyCategorys[1];
				break;
			case 300020003:
				categoryName="면스키니-밴딩스키니";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[2];
				smallCategorys = this.cloth.bottomcottonskinnyCategorys[2];
				break;
			case 300020004:
				categoryName="면스키니-체크스키니";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[2];
				smallCategorys = this.cloth.bottomcottonskinnyCategorys[3];
				break;
			case 300020005:
				categoryName="면스키니-컷팅스키니";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[2];
				smallCategorys = this.cloth.bottomcottonskinnyCategorys[4];
				break;
			case 300020006:
				categoryName="면스키니-코튼스키니";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[2];
				smallCategorys = this.cloth.bottomcottonskinnyCategorys[5];
				break;
			case 300020007:
				categoryName="면스키니-코팅스키니";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[2];
				smallCategorys = this.cloth.bottomcottonskinnyCategorys[6];
				break;
			case 300030001:
				categoryName="슬랙스-기모슬랙스";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[3];
				smallCategorys = this.cloth.bottomslacksCategorys[0];
				break;
			case 300030002:
				categoryName="슬랙스-밴딩슬랙스";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[3];
				smallCategorys = this.cloth.bottomslacksCategorys[1];
				break;
			case 300030003:
				categoryName="슬랙스-베이직";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[3];
				smallCategorys = this.cloth.bottomslacksCategorys[2];
				break;
			case 300030004:
				categoryName="슬랙스-생지슬랙스";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[3];
				smallCategorys = this.cloth.bottomslacksCategorys[3];
				break;
			case 300030005:
				categoryName="슬랙스-스트라이프슬랙스";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[3];
				smallCategorys = this.cloth.bottomslacksCategorys[4];
				break;
			case 300030006:
				categoryName="슬랙스-조거슬랙스";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[3];
				smallCategorys = this.cloth.bottomslacksCategorys[5];
				break;
			case 300030007:
				categoryName="슬랙스-체크슬랙스";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[3];
				smallCategorys = this.cloth.bottomslacksCategorys[6];
				break;
			case 300040001:
				categoryName="청긴바지-7부면바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.topCategorys[4];
				smallCategorys = this.cloth.bottomlongbluejeanCategorys[0];
				break;
			case 300040002:
				categoryName="청긴바지-그라데이션청바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[4];
				smallCategorys = this.cloth.bottomlongbluejeanCategorys[1];
				break;
			case 300040003:
				categoryName="청긴바지-데님청바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[4];
				smallCategorys = this.cloth.bottomlongbluejeanCategorys[2];
				break;
			case 300040004:
				categoryName="청긴바지-데미지청바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[4];
				smallCategorys = this.cloth.bottomlongbluejeanCategorys[3];
				break;
			case 300040005:
				categoryName="청긴바지-디스트로이드청바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[4];
				smallCategorys = this.cloth.bottomlongbluejeanCategorys[4];
				break;
			case 300040006:
				categoryName="청긴바지-배기면바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[4];
				smallCategorys = this.cloth.bottomlongbluejeanCategorys[5];
				break;
			case 300040007:
				categoryName="청긴바지-베이직";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[4];
				smallCategorys = this.cloth.bottomlongbluejeanCategorys[6];
				break;
			case 300040008:
				categoryName="청긴바지-밴딩청바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[4];
				smallCategorys = this.cloth.bottomlongbluejeanCategorys[7];
				break;
			case 300040009:
				categoryName="청긴바지-생지청바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[4];
				smallCategorys = this.cloth.bottomlongbluejeanCategorys[8];
				break;
			case 300040010:
				categoryName="청긴바지-컷팅청바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[4];
				smallCategorys = this.cloth.bottomlongbluejeanCategorys[9];
				break;
			case 300040011:
				categoryName="청긴바지-코팅청바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[4];
				smallCategorys = this.cloth.bottomlongbluejeanCategorys[10];
				break;
			case 300040012:
				categoryName="청긴바지-페인팅청바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[4];
				smallCategorys = this.cloth.bottomlongbluejeanCategorys[11];
				break;
			case 300050001:
				categoryName="청스키니-기모스키니";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[5];
				smallCategorys = this.cloth.bottombluejeanskinnyCategorys[0];
				break;
			case 300050002:
				categoryName="청스키니-데님스키니";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[5];
				smallCategorys = this.cloth.bottombluejeanskinnyCategorys[1];
				break;
			case 300050003:
				categoryName="청스키니-데미지스키니";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[5];
				smallCategorys = this.cloth.bottombluejeanskinnyCategorys[2];
				break;
			case 300050004:
				categoryName="청스키니-디스트로이드스키니";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[5];
				smallCategorys = this.cloth.bottombluejeanskinnyCategorys[3];
				break;
			case 300050005:
				categoryName="청스키니-밴딩스키니";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[5];
				smallCategorys = this.cloth.bottombluejeanskinnyCategorys[4];
				break;
			case 300050006:
				categoryName="청스키니-베이직";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[5];
				smallCategorys = this.cloth.bottombluejeanskinnyCategorys[5];
				break;
			case 300050007:
				categoryName="청스키니-생지스키니";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[5];
				smallCategorys = this.cloth.bottombluejeanskinnyCategorys[6];
				break;
			case 300050008:
				categoryName="청스키니-워싱스키니";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[5];
				smallCategorys = this.cloth.bottombluejeanskinnyCategorys[7];
				break;
			case 300050009:
				categoryName="청스키니-커팅스키니";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[5];
				smallCategorys = this.cloth.bottombluejeanskinnyCategorys[8];
				break;
			case 300050010:
				categoryName="청스키니-페인팅스키니";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[5];
				smallCategorys = this.cloth.bottombluejeanskinnyCategorys[9];
				break;
			case 300060001:
				categoryName="트레이닝-기모트레이닝";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[6];
				smallCategorys = this.cloth.bottomtrainingCategorys[0];
				break;
			case 300060002:
				categoryName="트레이닝-베이직";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[6];
				smallCategorys = this.cloth.bottomtrainingCategorys[1];
				break;
			case 300060003:
				categoryName="트레이닝-조거트레이닝";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[6];
				smallCategorys = this.cloth.bottomtrainingCategorys[2];
				break;
			case 310010001:
				categoryName="면반바지-5부반바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[7];
				smallCategorys = this.cloth.bottomshirtcottonpantsCategorys[0];
				break;
			case 310060002:
				categoryName="면반바지-7부반바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[7];
				smallCategorys = this.cloth.bottomshirtcottonpantsCategorys[1];
				break;
			case 310060003:
				categoryName="면반바지-데님반바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[7];
				smallCategorys = this.cloth.bottomshirtcottonpantsCategorys[2];
				break;
			case 310060004:
				categoryName="면반바지-매쉬반바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[7];
				smallCategorys = this.cloth.bottomshirtcottonpantsCategorys[3];
				break;
			case 310060005:
				categoryName="면반바지-베이직";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[7];
				smallCategorys = this.cloth.bottomshirtcottonpantsCategorys[4];
				break;
			case 310060006:
				categoryName="면반바지-밴딩반바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[7];
				smallCategorys = this.cloth.bottomshirtcottonpantsCategorys[5];
				break;
			case 310060007:
				categoryName="면반바지-스트라이프반바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[7];
				smallCategorys = this.cloth.bottomshirtcottonpantsCategorys[6];
				break;
			case 310060008:
				categoryName="면반바지-카고반바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[7];
				smallCategorys = this.cloth.bottomshirtcottonpantsCategorys[7];
				break;
			case 310020001:
				categoryName="청반바지-5부반바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[8];
				smallCategorys = this.cloth.bottomshirtbluejeanCategorys[0];
				break;
			case 310020002:
				categoryName="청반바지-데님반바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[8];
				smallCategorys = this.cloth.bottomshirtbluejeanCategorys[1];
				break;
			case 310020003:
				categoryName="청반바지-데미지반바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[8];
				smallCategorys = this.cloth.bottomshirtbluejeanCategorys[2];
				break;
			case 310020004:
				categoryName="청반바지-디스트로이드반바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[8];
				smallCategorys = this.cloth.bottomshirtbluejeanCategorys[3];
				break;
			case 310020005:
				categoryName="청반바지-베이직";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[8];
				smallCategorys = this.cloth.bottomshirtbluejeanCategorys[4];
				break;
			case 310020006:
				categoryName="청반바지-밴딩반바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[8];
				smallCategorys = this.cloth.bottomshirtbluejeanCategorys[5];
				break;
			case 310020007:
				categoryName="청반바지-생지반바지";
				bigCategorys = this.cloth.bigCategorys[3];
				midCategorys = this.cloth.bottomCategorys[8];
				smallCategorys = this.cloth.bottomshirtbluejeanCategorys[6];
				break;
			case 400010001:
				categoryName="수트-세트";
				bigCategorys = this.cloth.bigCategorys[4];
				midCategorys = this.cloth.suitCategorys[1];
				smallCategorys = this.cloth.suitdetailCategorys[0];
				break;
			case 500010001:
				categoryName="비치웨어-래쉬가드";
				bigCategorys = this.cloth.bigCategorys[5];
				midCategorys = this.cloth.summerCategorys[1];
				smallCategorys = this.cloth.summberdetailCategorys[0];
				break;
			case 500010002:
				categoryName="비치웨어-비치집업";
				bigCategorys = this.cloth.bigCategorys[5];
				midCategorys = this.cloth.summerCategorys[1];
				smallCategorys = this.cloth.summberdetailCategorys[1];
				break;
			case 500010003:
				categoryName="비치웨어-트렁크";
				bigCategorys = this.cloth.bigCategorys[5];
				midCategorys = this.cloth.summerCategorys[1];
				smallCategorys = this.cloth.summberdetailCategorys[2];
				break;
			case 500010004:
				categoryName="비치웨어-팬츠";
				bigCategorys = this.cloth.bigCategorys[5];
				midCategorys = this.cloth.summerCategorys[1];
				smallCategorys = this.cloth.summberdetailCategorys[3];
				break;
			case 500010005:
				categoryName="비치웨어-후드집업";
				bigCategorys = this.cloth.bigCategorys[5];
				midCategorys = this.cloth.summerCategorys[1];
				smallCategorys = this.cloth.summberdetailCategorys[4];
				break;
			case 600010001:
				categoryName="가방-백팩";
				bigCategorys = this.cloth.bigCategorys[6];
				midCategorys = this.cloth.bagCategorys[1];
				smallCategorys = this.cloth.bagbackbagCategorys[0];
				break;
			case 600010002:
				categoryName="가방-숄더";
				bigCategorys = this.cloth.bigCategorys[6];
				midCategorys = this.cloth.bagCategorys[2];
				smallCategorys = this.cloth.bagshoulderCategorys[0];
				break;
			case 600010003:
				categoryName="가방-여행가방";
				bigCategorys = this.cloth.bigCategorys[6];
				midCategorys = this.cloth.bagCategorys[3];
				smallCategorys = this.cloth.bagtripbagCategorys[0];
				break;
			case 600010004:
				categoryName="가방-캐리어";
				bigCategorys = this.cloth.bigCategorys[6];
				midCategorys = this.cloth.bagCategorys[4];
				smallCategorys = this.cloth.bagcarrierCategorys[0];
				break;
			case 600010005:
				categoryName="가방-크로스백";
				bigCategorys = this.cloth.bigCategorys[6];
				midCategorys = this.cloth.bagCategorys[5];
				smallCategorys = this.cloth.bagcrossbagCategorys[0];
				break;
			case 600010006:
				categoryName="가방-클러치";
				bigCategorys = this.cloth.bigCategorys[6];
				midCategorys = this.cloth.bagCategorys[6];
				smallCategorys = this.cloth.bagclutchCategorys[0];
				break;
			case 600010007:
				categoryName="가방-토드";
				bigCategorys = this.cloth.bigCategorys[6];
				midCategorys = this.cloth.bagCategorys[7];
				smallCategorys = this.cloth.bagtodCategorys[0];
				break;
			case 600010008:
				categoryName="가방-힙색";
				bigCategorys = this.cloth.bigCategorys[6];
				midCategorys = this.cloth.bagCategorys[8];
				smallCategorys = this.cloth.baghipCategorys[0];
				break;
			case 610010001:
				categoryName="신발-구두";
				bigCategorys = this.cloth.bigCategorys[7];
				midCategorys = this.cloth.shoesCategorys[1];
				smallCategorys = this.cloth.shoesshoesCategorys[0];
				break;
			case 610010002:
				categoryName="신발-로퍼";
				bigCategorys = this.cloth.bigCategorys[7];
				midCategorys = this.cloth.shoesCategorys[2];
				smallCategorys = this.cloth.shoesloafersCategorys[0];
				break;
			case 610010003:
				categoryName="신발-부츠";
				bigCategorys = this.cloth.bigCategorys[7];
				midCategorys = this.cloth.shoesCategorys[3];
				smallCategorys = this.cloth.shoesbootsCategorys[0];
				break;
			case 610010004:
				categoryName="신발-샌들";
				bigCategorys = this.cloth.bigCategorys[7];
				midCategorys = this.cloth.shoesCategorys[4];
				smallCategorys = this.cloth.shoessandalCategorys[0];
				break;
			case 610010005:
				categoryName="신발-스니커즈";
				bigCategorys = this.cloth.bigCategorys[7];
				midCategorys = this.cloth.shoesCategorys[5];
				smallCategorys = this.cloth.shoessneakersCategorys[0];
				break;
			case 610010006:
				categoryName="신발-운동화";
				bigCategorys = this.cloth.bigCategorys[7];
				midCategorys = this.cloth.shoesCategorys[6];
				smallCategorys = this.cloth.shoesrunningshoesCategorys[0];
				break;
			case 610010007:
				categoryName="신발-워커";
				bigCategorys = this.cloth.bigCategorys[7];
				midCategorys = this.cloth.shoesCategorys[7];
				smallCategorys = this.cloth.shoeswalkerCategorys[0];
				break;
			case 610010008:
				categoryName="신발-쪼리";
				bigCategorys = this.cloth.bigCategorys[7];
				midCategorys = this.cloth.shoesCategorys[8];
				smallCategorys = this.cloth.shoesJJriCategorys[0];
				break;
			case 610010009:
				categoryName="신발-키높이깔창";
				bigCategorys = this.cloth.bigCategorys[7];
				midCategorys = this.cloth.shoesCategorys[9];
				smallCategorys = this.cloth.shoeskeyhighCategorys[0];
				break;
			case 620010001:
				categoryName="악세서리-가발";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[1];
				smallCategorys = this.cloth.accwigCategorys[0];
				break;
			case 620010002:
				categoryName="악세서리-귀걸이";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[2];
				smallCategorys = this.cloth.accearringCategorys[0];
				break;
			case 620010003:
				categoryName="악세서리-머니클립";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[3];
				smallCategorys = this.cloth.accmoneyCategorys[0];
				break;
			case 620010004:
				categoryName="악세서리-머플러";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[4];
				smallCategorys = this.cloth.accmufflerCategorys[0];
				break;
			case 620010005:
				categoryName="악세서리-모자";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[5];
				smallCategorys = this.cloth.acchatCategorys[0];
				break;
			case 620010006:
				categoryName="악세서리-목걸이";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[6];
				smallCategorys = this.cloth.accnecklaceCategorys[0];
				break;
			case 620010007:
				categoryName="악세서리-반지";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[7];
				smallCategorys = this.cloth.accringCategorys[0];
				break;
			case 620010008:
				categoryName="악세서리-벨트";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[8];
				smallCategorys = this.cloth.accbaltCategorys[0];
				break;
			case 620010009:
				categoryName="악세서리-부토니에";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[9];
				smallCategorys = this.cloth.accbuttneyCategorys[0];
				break;
			case 620010010:
				categoryName="악세서리-브로치";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[10];
				smallCategorys = this.cloth.accbroochCategorys[0];
				break;
			case 620010011:
				categoryName="악세서리-선글라스";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[11];
				smallCategorys = this.cloth.accsunglassesCategorys[0];
				break;
			case 620010012:
				categoryName="악세서리-스카프";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[12];
				smallCategorys = this.cloth.accscarfCategorys[0];
				break;
			case 620010013:
				categoryName="악세서리-시계";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[13];
				smallCategorys = this.cloth.accwatchCategorys[0];
				break;
			case 620010014:
				categoryName="악세서리-안경";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[14];
				smallCategorys = this.cloth.accglassesCategorys[0];
				break;
			case 620010015:
				categoryName="악세서리-양말";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[15];
				smallCategorys = this.cloth.accsocksCategorys[0];
				break;
			case 620010016:
				categoryName="악세서리-언더웨어";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[16];
				smallCategorys = this.cloth.accunderwearCategorys[0];
				break;
			case 620010017:
				categoryName="악세서리-장갑";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[17];
				smallCategorys = this.cloth.accglovesCategorys[0];
				break;
			case 620010018:
				categoryName="악세서리-지갑";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[18];
				smallCategorys = this.cloth.accwalletCategorys[0];
				break;
			case 620010019:
				categoryName="악세서리-키링";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[19];
				smallCategorys = this.cloth.acckiringCategorys[0];
				break;
			case 620010020:
				categoryName="악세서리-타이";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[20];
				smallCategorys = this.cloth.accnecktieCategorys[0];
				break;
			case 620010021:
				categoryName="악세서리-팔찌";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[21];
				smallCategorys = this.cloth.accbraceletCategorys[0];
				break;
			case 620010022:
				categoryName="악세서리-헤어왁스";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[22];
				smallCategorys = this.cloth.acchairwaxCategorys[0];
				break;
			case 620010023:
				categoryName="악세서리-화장품";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[23];
				smallCategorys = this.cloth.acccosmeticsCategorys[0];
				break;
			case 620010024:
				categoryName="악세서리-기타";
				bigCategorys = this.cloth.bigCategorys[8];
				midCategorys = this.cloth.accCategorys[24];
				smallCategorys = this.cloth.accetcCategorys[0];
				break;

			default:
				break;
		}
		let clothInfo = {
			categoryname: categoryName,
			bigCategorys: bigCategorys,
			midCategorys: midCategorys,
			smallCategorys: smallCategorys
		}
		return clothInfo;
	}
}