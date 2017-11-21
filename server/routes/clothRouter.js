const cloth = require('../controllers/cloth');
const multer = require('../utils/multers3.js');

exports.setRequestUrl=function(app){
    app.get('/clothList',cloth.showClothList);  //등록한 옷 보기(필터)  - 앱
    app.get('/clothDetail/:clothNumber',cloth.showDetailCloth); //옷 상세보기  - 앱
    app.post('/cloth/:clothNumber/clothMybag',cloth.userClothMybag);//옷 즐겨찾기  - 앱    
    
    app.post('/adminCloth',multer.clothPhoto,cloth.addCloth);  //옷 등록 하기 - 웹
    app.put('/adminCloth/:clothNumber',multer.clothPhoto,cloth.editCloth);  //옷 수정하기  - 웹
    app.delete('/adminClothDelete/:clothNumber',cloth.deleteCloth);  //옷 삭제 - 웹 
    app.post('/adminShowDetailBeforeCloth',cloth.showDetailBeforeCloth); //옷 상세보기전 데이터 - 웹
    app.get('/adminClothList/:type',cloth.showClothTypeList);  //타입별 옷보기 - 웹 (없앨예정)
    app.post('/adminCloth/:clothNumber',cloth.detailCloth); //옷 상세보기 - 웹
    app.get('/adminClothList',cloth.showWebClothList);  //등록한 옷 보기  - 웹
};
