const SelectBoardController=require('../utils/selectController.js')
	  ,UserController=require('../utils/userController.js')
	  ,Select=require('../model/Selectdb');
const moment=require('moment');
const jsonWebToken=require('../utils/jsonWebToken');
const ObjectId = require('mongodb').ObjectID;	
const multer = require('../utils/multers3.js');
moment.locale("ko");
var output=new Object();



//랜덤리스트주기
async function randomListView(list) {
	return new Promise(function(resolve,reject) {
		if(list == 0) 
			resolve(0);
		else {
			let max = list.length;
			let randomnum = Math.floor(Math.random() * (max));
			let dataresult = {
				_id: list[randomnum]._id,
				selectboardRightPhoto: list[randomnum].selectboardRightPhoto,
				selectboardLeftPhoto: list[randomnum].selectboardLeftPhoto,
				selectboardContent: list[randomnum].selectboardContent,
				selectboardName: list[randomnum].selectboardName,
				selectboardDatetime: list[randomnum].selectboardDatetime,
				selectboardUserName: '',
				selectboardUserPhoto: '',
			}
			let array = [];
			array.push(dataresult);
			array.push(list[randomnum].selectboardUserId);
			resolve(array);
		}
	});
}

//선택게시판 등록
exports.addSelectBoard = async function(req,res,next) {
	try{
		let userTokenCheck = req.headers.usertoken;
		if(userTokenCheck == 'guest'){
			output.msg = "success";
			res.setHeader('userToken', 'guest');
		}
		else if(userTokenCheck == undefined) {
			output.msg="success";
			res.setHeader('userToken','guest');
		}
		else if(userTokenCheck == null) {
			output.msg="success";
			res.setHeader('userToken','guest');
		}
		else {
			let userToken = await jsonWebToken.TokenCheck(req.headers.usertoken);
			let userIdCheckdata = { _id: userToken.ObjectId };
			let userInfo = await UserController.getUserFindObjectId(userIdCheckdata);
			let select = new Select();
			
			let leftPhotoFile = req.files.leftPhoto[0].transforms[0].location;
			let rightPhotoFile = req.files.rightPhoto[0].transforms[0].location;

			select.selectboardUserName = userInfo.userName;
			select.selectboardName = req.body.selectboardName;
			select.selectboardContent = req.body.selectboardContent;
			select.selectboardDatetime = new moment().format("YYYY-MM-DD");
			select.selectboardLeftPhoto = leftPhotoFile;
			select.selectboardRightPhoto = rightPhotoFile;
			select.selectboardUserId = select.selectboardSelectUsers = userInfo.userId;
			select.selectboardLeftPhotoKey = req.files.leftPhoto[0].transforms[0].key;
			select.selectboardRightPhotoKey = req.files.rightPhoto[0].transforms[0].key;
			let saveSelectBoard = await SelectBoardController.saveSelectBoard(select);
			output.msg = "success";
			res.setHeader('userToken',userToken.userToken);
		}
		res.json(output);
	}catch(e) {
		if(req.files.leftPhoto[0] && req.files.rightPhoto[0]){
				let deleteselectPhoto = await multer.deleteFile([{Key: req.files.leftPhoto[0].transforms[0].key},{Key: req.files.rightPhoto[0].transforms[0].key}]);
		}
		output.msg = 'fail';
		output.data = e.message;
		res.setHeader('userToken',req.headers.usertoken);
		res.json(output);
	}
}
//리스트뿌리기
exports.listSelectBoard = async function(req,res,next) {
	try {
		let userTokenCheck = req.headers.usertoken;
		if(userTokenCheck == 'guest'){
			let listSelectBoardquery = [
					{
						"$match": {
							"$and": [
								{
									"selectboardExit": true,
									"selectboardDelete": true
								}
							]
						}
					},
					{
						"$lookup": {
							from: "users",
							localField: "selectboardUserId",
							foreignField: "userId",
							as: "selectBoardUserJoin"
						}
					},
					{"$unwind": "$selectBoardUserJoin"},
					{
						"$project": {
							_id: 1,
							selectboardRightPhoto: 1,
							selectboardLeftPhoto: 1,
							selectboardContent: 1,
							selectboardName: 1,
							selectboardDatetime: 1,
							selectboardUserName: "$selectBoardUserJoin.userName",
							selectboardUserPhoto: "$selectBoardUserJoin.userPhoto"
						}
					},
					{"$sample": { size: 1 }},
					{"$limit": 1}
				];
			let listSelectBoard = await SelectBoardController.aggregateBoard(listSelectBoardquery);
			if(listSelectBoard == 0) {
				output.msg = "success";
				output.data = null;
			}
			else {
				output.msg = "success";
				output.data = listSelectBoard[0];
			}
			output.msg = "success";
			res.setHeader('userToken', 'guest');
		}
		else if(userTokenCheck == undefined) {
			output.msg="success";
			res.setHeader('userToken','guest');
		}
		else if(userTokenCheck == null) {
			output.msg="success";
			res.setHeader('userToken','guest');
		}
		else {
			let userToken = await jsonWebToken.TokenCheck(req.headers.usertoken);
			let userIdCheckdata = { _id: userToken.ObjectId };
			let userInfo = await UserController.getUserFindObjectId(userIdCheckdata);
			let listSelectBoardquery = [
				{
					"$match": {
						"$and": [
							{
								"selectboardSelectUsers": {"$ne": userInfo.userId},
								"selectboardExit": true,
								"selectboardDelete": true
							}
						]
					}
				},
				{
					"$lookup": {
						from: "users",
						localField: "selectboardUserId",
						foreignField: "userId",
						as: "selectBoardUserJoin"
					}
				},
				{"$unwind": "$selectBoardUserJoin"},
				{
					"$project": {
						_id: 1,
						selectboardRightPhoto: 1,
						selectboardLeftPhoto: 1,
						selectboardContent: 1,
						selectboardName: 1,
						selectboardDatetime: 1,
						selectboardUserName: "$selectBoardUserJoin.userName",
						selectboardUserPhoto: "$selectBoardUserJoin.userPhoto"
					}
				},
				{"$sample": { size: 1 }},
				{"$limit": 1}
			]
			let listSelectBoard = await SelectBoardController.aggregateBoard(listSelectBoardquery);
			if(listSelectBoard == 0) {
				output.msg = "success";
				output.data = null;
			}
			else {
				output.msg = "success";
				output.data = listSelectBoard[0];
			}
			res.setHeader('userToken',userToken.userToken);
		}
		console.log(output);
		res.json(output);
	}catch(e) {
		output.msg = 'fail';
		output.data = e.message;
		console.log(e);
		res.setHeader('userToken',req.headers.usertoken);
		res.json(output);
	}
}
//투표중지
exports.stopSelectBoard = async function(req,res,next) {
	try {
		let userTokenCheck = req.headers.usertoken;
		if(userTokenCheck == 'guest'){
			output.msg = "success";
			res.setHeader('userToken', 'guest');
		}
		else if(userTokenCheck == undefined) {
			output.msg="success";
			res.setHeader('userToken','guest');
		}
		else if(userTokenCheck == null) {
			output.msg="success";
			res.setHeader('userToken','guest');
		}
		else {
			let userToken = await jsonWebToken.TokenCheck(req.headers.usertoken);
			let userIdCheckdata = { _id: userToken.ObjectId };
			let userInfo = await UserController.getUserFindObjectId(userIdCheckdata);
			let detailSelectBoardquery = {_id: ObjectId(req.params.selectBoardId)};
			let detailSelectBoard = await SelectBoardController.findSelectBoard(detailSelectBoardquery, userInfo.userId);
			let stopSelectBoardset = {"$set": {"selectboardExit": false}};
			let stopSelectBoard = await SelectBoardController.updateSelectBoard(detailSelectBoardquery, stopSelectBoardset);
			output.msg = "success";
			output.data = null;
			
		}
		res.json(output);
	}catch(e) {
		output.msg = 'fail';
		output.data = e.message;
		res.setHeader('userToken',req.headers.usertoken);
		res.json(output);
	}
}
//게스트 보스트
//투표하기
exports.boteSelectBoard = async function(req,res,next) {
	try {
		let userTokenCheck = req.headers.usertoken;
		if(userTokenCheck == 'guest'){
			let listSelectBoardquery = [
					{
						"$match": {
							"$and": [
								{
									"selectboardExit": true,
									"selectboardDelete": true
								}
							]
						}
					},
					{
						"$lookup": {
							from: "users",
							localField: "selectboardUserId",
							foreignField: "userId",
							as: "selectBoardUserJoin"
						}
					},
					{"$unwind": "$selectBoardUserJoin"},
					{
						"$project": {
							_id: 1,
							selectboardRightPhoto: 1,
							selectboardLeftPhoto: 1,
							selectboardContent: 1,
							selectboardName: 1,
							selectboardDatetime: 1,
							selectboardUserName: "$selectBoardUserJoin.userName",
							selectboardUserPhoto: "$selectBoardUserJoin.userPhoto"
						}
					},
					{"$sample": { size: 1 }},
					{"$limit": 1}
				];
			let listSelectBoard = await SelectBoardController.aggregateBoard(listSelectBoardquery);
			if(listSelectBoard == 0) {
				output.msg = "success";
				output.data = null;
			}
			else {
				output.msg = "success";
				output.data = listSelectBoard;
			}
			output.msg = "success";
			res.setHeader('userToken', 'guest');
		}
		else if(userTokenCheck == undefined) {
			output.msg="success";
			res.setHeader('userToken','guest');
		}
		else if(userTokenCheck == null) {
			output.msg="success";
			res.setHeader('userToken','guest');
		}
		else {
			let userToken = await jsonWebToken.TokenCheck(req.headers.usertoken);
			let userIdCheckdata = { _id: userToken.ObjectId };
			let userInfo = await UserController.getUserFindObjectId(userIdCheckdata);
			let detailSelectBoardquery = {_id: ObjectId(req.params.selectBoardId)};
			let boteset = '';
			if(req.body.bote == 0)
				boteset = {"$push": {"selectboardSelectUsers": userInfo.userId, "selectboardLeftLike": userInfo.userAge}};
			else 
				boteset = {"$push": {"selectboardSelectUsers": userInfo.userId, "selectboardRightLike": userInfo.userAge}};
			let boteSelectBoard = await SelectBoardController.updateSelectBoardVote(detailSelectBoardquery, boteset);
			if(boteSelectBoard.selectboardSelectUsers.length == 11){
				let userInfoquery = { userId: boteSelectBoard.selectboardUserId};
				let boarduserInfo = await UserController.getUserFindObjectId(userInfoquery);
				if(boarduserInfo.userPushOnOff == true){
					let boardData = {};
					boardData.boardId = req.params.selectBoardId;
					boardData.boardName = boteSelectBoard.selectboardName;
					push.pushFunction(null,boarduserInfo,boardData,4);
				}
				// 푸시정보 유저에 update
				let userFindOnequery = {_id: ObjectId(boarduserInfo._id)};
				let pushMessge = {
					pushInfo: 4,
					pushMessage: boarduserInfo.userName+"님의 "+boteSelectBoard.selectboardName+"게시물의 투표가 10명이 넘었습니다.",
					pushMigrate: req.params.selectboardUserId,
					pushConfirm: false
				}
				let userPushSetquery = {"$push": {userPushMessage: pushMessge}};
				await BoardController.userPush(userFindOnequery,userPushSetquery);
			}
			let listSelectBoardquery = [
					{
						"$match": {
							"$and": [
								{
									"selectboardSelectUsers": {"$ne": userInfo.userId},
									"selectboardExit": true,
									"selectboardDelete": true
								}
							]
						}
					},
					{
						"$lookup": {
							from: "users",
							localField: "selectboardUserId",
							foreignField: "userId",
							as: "selectBoardUserJoin"
						}
					},
					{"$unwind": "$selectBoardUserJoin"},
					{
						"$project": {
							_id: 1,
							selectboardRightPhoto: 1,
							selectboardLeftPhoto: 1,
							selectboardContent: 1,
							selectboardName: 1,
							selectboardDatetime: 1,
							selectboardUserName: "$selectBoardUserJoin.userName",
							selectboardUserPhoto: "$selectBoardUserJoin.userPhoto"
						}
					},
					{"$sample": { size: 1 }},
					{"$limit": 1}
				]
			let listSelectBoard = await SelectBoardController.aggregateBoard(listSelectBoardquery);
			if(listSelectBoard == 0) {
				output.msg = "success";
				output.data = null;
			}
			else {
				output.msg = "success";
				output.data = listSelectBoard;
			}
			res.setHeader('userToken',userToken.userToken);
			res.json(output);
		}
	}catch(e) {
		output.msg = 'fail';
		output.data = e.message;
		res.setHeader('userToken',req.headers.usertoken);
		res.json(output);
	}
}
//삭제하기
exports.deleteSelectBoard = async function(req,res,next) {
	try {
	let userTokenCheck = req.headers.usertoken;
		if(userTokenCheck == 'guest'){
			output.msg = "fail";
			res.setHeader('userToken', 'guest');
		}
		else if(userTokenCheck == undefined) {
			output.msg="success";
			res.setHeader('userToken','guest');
		}
		else if(userTokenCheck == null) {
			output.msg="success";
			res.setHeader('userToken','guest');
		}
		else {
			let userToken = await jsonWebToken.TokenCheck(req.headers.usertoken);
			let userIdCheckdata = { _id: ObjectId(userToken.ObjectId) };
			let userInfo = await UserController.getUserFindObjectId(userIdCheckdata);
			let detailSelectBoardquery = {_id: ObjectId(req.params.selectBoardId)};
			let detailSelectBoard = await SelectBoardController.findSelectBoard(detailSelectBoardquery, userInfo.userId);
			let after_time = moment().add(30, 'days');
			let times = after_time.format("YYYY-MM-DD");
			let deleteSelectBoardset = {"$set": {"selectboardExit": false , "selectboardDelete": false, "selectboardDeleteTime": times}};
			let deleteSelectBoard = await SelectBoardController.updateSelectBoard(detailSelectBoardquery, deleteSelectBoardset);
			output.msg = "success";
			output.data = null;
			res.setHeader('userToken',userToken.userToken);
		}
		res.json(output);
	}catch(e) {
		output.msg = 'fail';
		output.data = e.message;
		res.setHeader('userToken',req.headers.usertoken);
		res.json(output);
	}
}
//게시물 진짜 삭제
exports.deleteSelectBoardSche = async function() {
	let deletePhoto = [];
	let after_time = moment().add(30, 'days');
	//let dbdeletetime=new moment().format("YYYY-MM-DD");
	let dbdeletetime = after_time.format("YYYY-MM-DD");
	let deleteSelectBoardFind = {"selectboardDeleteTime": dbdeletetime};
	let deleteBoard = await SelectBoardController.removeSelectBoard(deleteSelectBoardFind);
	for(let i=0; i<deleteBoard.length; i++)
		deletePhoto.push({Key: deleteBoard[i]});
	await multer.deleteFile(deletePhoto);
	console.log("삭제갯수 :" + (deleteBoard.length/2));
	return;
}


