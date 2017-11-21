const category = require('../utils/categoryController');   
const dbModel = require('../utils/dbOverlap');  	
const output = new Object();

//카테고리 보기(o)
exports.showCategoryList = function (req, res, next) {
	var pageCount = req.query.page || 0;
	var page = 5*pageCount
	dbModel.dbOverlap2(category.showCategoryList,page,function (err, result){
		res.json({ msg: 'success',  data: result});
	})
};

//카테고리 등록(o) 
exports.addCategory = async function (req, res, next){
	let categoryInfo = {
		categoryCode : req.body.categoryCode, 
		categoryColor : req.body.categoryColor,
		categoryDescription : req.body.categoryDescription
	};  

	let categoryCheck = 
	await dbModel.dbOverlap2(category.categorySameCheck,[categoryInfo.categoryDescription,categoryInfo.categoryCode]); //아이디 중복체크 
	if(!(categoryCheck.length == 0)){
		return res.status(400).send('데이터 중복 입력');
	}else{
		let categoryInsert = await dbModel.dbOverlap2(category.addCategory,categoryInfo);
		res.json('success');
	}
};

//카테고리수정(o)
exports.editCategory = async function (req, res, next){
	let categoryCode = req.params.categoryCode;
	let categoryInfo = {
		categoryCode : req.body.categoryCode, 
		categoryColor : req.body.categoryColor,
		categoryDescription : req.body.categoryDescription
	};
	let data = [categoryInfo,categoryCode];
	let categoryInsert = await dbModel.dbOverlap2(category.editCategory,data);	
	res.json({ msg: 'success' });
};	

//카테고리 삭제 (o)
exports.deleteCategory =async function (req, res, next) {
	let categoryCode = req.params.categoryCode;
	let categoryInsert = await dbModel.dbOverlap2(category.deleteCategory,categoryCode);	
	res.json({ msg: 'success',  });
}

