const fs=require('fs');
const moment=require('moment');
const ObjectId = require('mongodb').ObjectID;	
const multer = require('../utils/multers3.js');
const push = require('../utils/pushToken.js');
const BoardController=require('../utils/boardController.js')
	  ,UserController=require('../utils/userController.js')
	  ,CodyController =require('../utils/codyController')
	  ,Board=require('../model/Boarddb');
const jsonWebToken=require('../utils/jsonWebToken');



moment.locale("ko");
var output=new Object();


//리스트보기
exports.listBoard = async function(req, res, next) {
	try {
		output.data = null;
		let userTokenCheck = req.headers.usertoken;
		let limit = 20;
		let skip = (req.params.page - 1) * limit;
		let type = req.params.type;
		let userToken,userIdCheckdata,userInfo,boardListquery,boardListResult;
		if(userTokenCheck == 'guest') {
			if(type == 'new'){
				boardListquery = [{
			 		"$lookup": {
			 			from:"users",
			 			localField: "boardUserId",
			 			foreignField: "userId",
			 			as: "boardUserJoin"
			 		}},
			 		{"$unwind": "$boardUserJoin"},
			 		{"$project":{
			 							boardUserName: "$boardUserJoin.userName",
			 							boardUserPhoto: "$boardUserJoin.userPhoto",
										boardPhoto: 1,
										boardDatetime: 1,
										boardContent: 1,
										boardOnOff: 1,
										boardTodayCount: 1,
										boardName: 1,
										boardLikeCount: {"$size": "$boardLikeUsers"},
										boardCommentsCount: {"$size": "$boardComments"},
										boardIsLike: {"$in": ['guest', "$boardLikeUsers"]}
					}},
			 		{"$match": {"boardOnOff": true}},
			 		{"$sort": {"boardDatetime": -1}},
			 		{"$skip": skip},
			 		{"$limit": limit}
			 		
			 	];
		 	}
		 	else if(type == 'favorite'){
		 		boardListquery = [{
			 		"$lookup": {
			 			from:"users",
			 			localField: "boardUserId",
			 			foreignField: "userId",
			 			as: "boardUserJoin"
			 		}},
			 		{"$unwind": "$boardUserJoin"},
			 		{"$project":{
			 							boardUserName: "$boardUserJoin.userName",
			 							boardUserPhoto: "$boardUserJoin.userPhoto",
										boardPhoto: 1,
										boardDatetime: 1,
										boardContent: 1,
										boardOnOff: 1,
										boardTodayCount: 1,
										boardName: 1,
										boardLikeCount: {"$size": "$boardLikeUsers"},
										boardCommentsCount: {"$size": "$boardComments"},
										boardIsLike: {"$in": ['guest', "$boardLikeUsers"]}
					}},
			 		{"$match": {"boardOnOff": true}},
			 		{"$sort": {"boardLikeCount": -1}},
			 		{"$skip": skip},
			 		{"$limit": limit}
			 		
			 	];
		 	}
			boardListResult = await BoardController.aggregateBoard(boardListquery);
			output.msg="success";
			output.data = boardListResult;
			
			res.setHeader('userToken','guest');
		}
		else if(userTokenCheck == undefined) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else if(userTokenCheck == null) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else{
			userToken = await jsonWebToken.TokenCheck(req.headers.usertoken);
		 	userIdCheckdata = { _id: userToken.ObjectId };
		 	userInfo = await UserController.getUserFindObjectId(userIdCheckdata);
		 	if(type == 'new'){
			 	boardListquery = [{
			 		"$lookup": {
			 			from:"users",
			 			localField: "boardUserId",
			 			foreignField: "userId",
			 			as: "boardUserJoin"
			 		}},
			 		{"$unwind": "$boardUserJoin"},
			 		{"$project": {
			 			boardUserName: "$boardUserJoin.userName",
			 			boardUserPhoto: "$boardUserJoin.userPhoto",
			 			boardPhoto: 1,
			 			boardDatetime: 1,
			 			boardContent:1,
			 			boardOnOff: 1,
			 			boardName: 1,
			 			boardLikeCount: {"$size": "$boardLikeUsers"},
			 			boardCommentsCount: {"$size": "$boardComments"},
			 			boardIsLike: {"$in": [userInfo.userId, "$boardLikeUsers"]}
			 		}},
			 		{"$match": {"boardOnOff": true}},
			 		{"$sort": {"boardDatetime": -1}},
			 		{"$skip": skip},
			 		{"$limit": limit}
			 		
			 	];
		 	}
		 	else if(type == 'favorite'){
		 		boardListquery = [{
			 		"$lookup": {
			 			from:"users",
			 			localField: "boardUserId",
			 			foreignField: "userId",
			 			as: "boardUserJoin"
			 		}},
			 		{"$unwind": "$boardUserJoin"},
			 		{"$project": {
			 			boardUserName: "$boardUserJoin.userName",
			 			boardUserPhoto: "$boardUserJoin.userPhoto",
			 			boardPhoto: 1,
			 			boardDatetime: 1,
			 			boardContent:1,
			 			boardOnOff: 1,
			 			boardName: 1,
			 			boardTodayCount: 1,
			 			boardLikeCount: {"$size": "$boardLikeUsers"},
			 			boardCommentsCount: {"$size": "$boardComments"},
			 			boardIsLike: {"$in": [userInfo.userId, "$boardLikeUsers"]}
			 		}},
			 		{"$match": {"boardOnOff": true}},
			 		{"$sort": {"boardLikeCount": -1}},
			 		{"$skip": skip},
			 		{"$limit": limit}
			 		
			 	];
		 	}
			boardListResult = await BoardController.aggregateBoard(boardListquery);

			output.msg="success";
			output.data = boardListResult;
			
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

//게시판 등록
exports.addBoard = async function(req, res, next) {
	try {
		output.data = null;
		let loadDt = new Date();
		let boardDate  =  new Date(Date.parse(loadDt) +9 * 1000 * 60 * 60); //한시간 전
		dateTime = moment(boardDate).format("YYYY-MM-DD HH:mm:ss");
		let userTokenCheck = req.headers.usertoken;
		if(userTokenCheck == 'guest'){
			output.msg = "success";
			res.setHeader('userToken', 'guest');
		}
		else if(userTokenCheck == undefined) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else if(userTokenCheck == null) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else {
			let userToken = await jsonWebToken.TokenCheck(req.headers.usertoken);
			let userIdCheckdata = { _id: userToken.ObjectId };
			let userInfo = await UserController.getUserFindObjectId(userIdCheckdata);
			let board = new Board();
			
			board.boardUserId = userInfo.userId;
			board.boardName = req.body.boardName;
			board.boardPhoto = req.file.transforms[0].location;
			board.boardContent = req.body.boardContent;
			//board.boardDatetime = new moment().format("YYYY-MM-DD HH:mm:ss"); 
			board.boardDatetime  = dateTime;
			board.boardPhotoKey = req.file.transforms[0].key;
			let saveBoardResult = await BoardController.saveBoard(board);
			output.msg = "success";
			output.data = null;
			res.setHeader('userToken',userToken.userToken);
		}
		res.json(output);
	}catch(e) {
		if(req.file) {
			let deletePhoto = await multer.deleteFile([{Key: req.file.transforms[0].key}]);
		}
		output.msg = 'fail';
		output.data = e.message;
		res.setHeader('userToken',req.headers.usertoken);
		res.json(output);
	}
}
//게시판 상세보기
exports.detailBoard = async function(req,res,next) {
	try {
		output.data = null;
		let userTokenCheck = req.headers.usertoken;
		let limit = 10;
		let skip = (req.params.page - 1) * limit;
		let boardDetailquery; 
		let boardDetailResult;
		let boardDetailCommentsResult;
		let boardDetailCommentsquery;
		if(userTokenCheck == 'guest'){
			if(req.params.page == 1) {
				boardDetailquery = [{
					"$lookup": {
						from: "users",
						localField: "boardUserId",
						foreignField: "userId",
						as: "boardUserJoin"
					}},
					{"$unwind": "$boardUserJoin"},
					{"$project": {
						boardUserName: "$boardUserJoin.userName",
						boardUserPhoto: "$boardUserJoin.userPhoto",
						boardPhoto: 1,
						boardDatetime: 1,
						boardContent: 1,
						boardOnOff: 1,
						boardName: 1,
						boardLikeCount: {"$size": "$boardLikeUsers"},
						boardCommentsCount: {"$size": "$boardComments"},
						boardIsLike: {"$in": ["guest", "$boardLikeUsers"]}
					}},
					{"$match": {_id: ObjectId(req.params.boardId)}}
				];
				boardDetailResult = await BoardController.aggregateBoard(boardDetailquery);
				boardDetailCommentsquery = [
					{"$unwind": {
						path: "$boardComments",
						preserveNullAndEmptyArrays: true
					}},
					{
						"$lookup": {
							from: "users",
							localField: "boardComments.boardCommentsUserId",
							foreignField: "userId",
							as: "boardCommentsUserJoin"
						}
					},
					{"$unwind": "$boardCommentsUserJoin"},
					{
						"$project": {
							boardComments: {
								"boardCommentsDatetime": 1,
								"boardCommentsContent": 1,
								"boardCommentsUserPhoto": "$boardCommentsUserJoin.userPhoto",
								"boardCommentsUserName": "$boardCommentsUserJoin.userName"
							}
						}
					},
					{"$match": { _id: ObjectId(req.params.boardId) }},
					{"$skip": skip},
					{"$limit": limit}

				];
				boardDetailCommentsResult = await BoardController.aggregateBoardComments(boardDetailCommentsquery);
				boardDetailResult[0].boardComments = boardDetailCommentsResult;
				output.msg="success";
				output.data = boardDetailResult[0];
			}
			else {
				output.msg = '';
				output.data = {
					boardComments: ''
				}
				boardDetailCommentsquery = [
					{"$unwind": {
						path: "$boardComments",
						preserveNullAndEmptyArrays: true
					}},
					{
						"$lookup": {
							from: "users",
							localField: "boardComments.boardCommentsUserId",
							foreignField: "userId",
							as: "boardCommentsUserJoin"
						}
					},
					{"$unwind": "$boardCommentsUserJoin"},
					{
						"$project": {
							boardComments: {
								"_id": 1,
								"boardCommentsDatetime": 1,
								"boardCommentsContent": 1,
								"boardCommentsUserPhoto": "$boardCommentsUserJoin.userPhoto",
								"boardCommentsUserName": "$boardCommentsUserJoin.userName"
							}
						}
					},
					{"$match": { _id: ObjectId(req.params.boardId) }},
					{"$skip": skip},
					{"$limit": limit}
				];
				boardDetailCommentsResult = await BoardController.aggregateBoardComments(boardDetailCommentsquery);
				output.msg = "success";
				output.data.boardComments = boardDetailCommentsResult;
			}
			res.setHeader('userToken', 'guest');
		}
		else if(userTokenCheck == undefined) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else if(userTokenCheck == null) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else {
			let userToken = await jsonWebToken.TokenCheck(req.headers.usertoken);
			let userIdCheckdata = { _id: userToken.ObjectId };
			let userInfo = await UserController.getUserFindObjectId(userIdCheckdata);
			if(req.params.page == 1) {
				boardDetailquery = [{
					"$lookup": {
						from: "users",
						localField: "boardUserId",
						foreignField: "userId",
						as: "boardUserJoin"
					}},
					{"$unwind": "$boardUserJoin"},
					{"$project": {
						boardUserName: "$boardUserJoin.userName",
						boardUserPhoto: "$boardUserJoin.userPhoto",
						boardPhoto: 1,
						boardDatetime: 1,
						boardContent: 1,
						boardOnOff: 1,
						boardName: 1,
						boardAccess: {"$eq": [ "$boardUserId", userInfo.userId]},
						boardLikeCount: {"$size": "$boardLikeUsers"},
						boardCommentsCount: {"$size": "$boardComments"},
						boardIsLike: {"$in": [userInfo.userId, "$boardLikeUsers"]}
					}},
					{"$match": {_id: ObjectId(req.params.boardId)}}
				];
				let boardDetailResult = await BoardController.aggregateBoard(boardDetailquery);
				boardDetailCommentsquery = [
					{"$unwind": {
						path: "$boardComments",
						preserveNullAndEmptyArrays: true
					}},
					{
						"$lookup": {
							from: "users",
							localField: "boardComments.boardCommentsUserId",
							foreignField: "userId",
							as: "boardCommentsUserJoin"
						}
					},
					{"$unwind": "$boardCommentsUserJoin"},
					{
						"$project": {
							boardComments: {
								"_id": 1,
								"boardCommentsAccess": {"$eq": [ "$boardComments.boardCommentsUserId", userInfo.userId]},
								"boardCommentsDatetime": 1,
								"boardCommentsContent": 1,
								"boardCommentsUserPhoto": "$boardCommentsUserJoin.userPhoto",
								"boardCommentsUserName": "$boardCommentsUserJoin.userName"
							}
						}
					},
					{"$match": { _id: ObjectId(req.params.boardId) }},
					{"$skip": skip},
					{"$limit": limit}
				];
				boardDetailCommentsResult = await BoardController.aggregateBoardComments(boardDetailCommentsquery);
				boardDetailResult[0].boardComments = boardDetailCommentsResult;
				output.msg="success";
				output.data = boardDetailResult[0];
			}
			else {
				output.msg = '';
				output.data = {
					boardComments: ''
				}
				boardDetailCommentsquery = [
					{"$unwind": {
						path: "$boardComments",
						preserveNullAndEmptyArrays: true
					}},
					{
						"$lookup": {
							from: "users",
							localField: "boardComments.boardCommentsUserId",
							foreignField: "userId",
							as: "boardCommentsUserJoin"
						}
					},
					{"$unwind": "$boardCommentsUserJoin"},
					{
						"$project": {
							boardComments: {
								"_id": 1,
								"boardCommentsAccess": {"$eq": [ "$boardComments.boardCommentsUserId", userInfo.userId]},
								"boardCommentsDatetime": 1,
								"boardCommentsContent": 1,
								"boardCommentsUserPhoto": "$boardCommentsUserJoin.userPhoto",
								"boardCommentsUserName": "$boardCommentsUserJoin.userName"
							}
						}
					},
					{"$match": { _id: ObjectId(req.params.boardId) }},
					{"$skip": skip},
					{"$limit": limit}
				];
				boardDetailCommentsResult = await BoardController.aggregateBoardComments(boardDetailCommentsquery);
				output.msg = "success";
				output.data.boardComments = boardDetailCommentsResult;
			}
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

//게시물 수정
exports.editBoard = async function(req,res,next) {
	try {
		output.data = null;
		let userTokenCheck = req.headers.usertoken;
		if(userTokenCheck == 'guest'){
			output.msg = "fail";
			res.setHeader('userToken', 'guest');
		}
		else if(userTokenCheck == undefined) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else if(userTokenCheck == null) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else {
			let userToken = await jsonWebToken.TokenCheck(req.headers.usertoken);
			let userIdCheckdata = { _id: userToken.ObjectId };
			let userInfo = await UserController.getUserFindObjectId(userIdCheckdata);
			
			if(req.file) {
				let changePhoto = req.file.location;
				let changeKey = req.file.key;
				let saveDay=new moment().format("YYYY-MM-DD");
				let boardUpdateSetquery = '';
				let deletePhoto = [];
				if(req.body.boardContent)
					boardUpdateSetquery = {"$set": {"boardPhoto": changePhoto, "boardPhotoKey": changeKey, "boardContent": req.body.boardContent}};
				else
					boardUpdateSetquery = {"$set": {"boardPhoto": changePhoto, "boardPhotoKey": changeKey}};
				let boardDetailquery = {_id: ObjectId(req.params.boardId)};
				let boardPhotoUpdate = await BoardController.updateBoard(boardDetailquery, boardUpdateSetquery);
				deletePhoto.push({Key: boardPhotoUpdate.boardPhotoKey});
				await multer.deleteFile(deletePhoto);
				
				output.msg = "success";
				output.data = "Update success";
			}
			else {
				let boardUpdatequery = {_id: ObjectId(req.params.boardId)};
				let boardUpdateSetquery = {"$set": {"boardContent": req.body.boardContent}};
				let boardContentUpdate = await BoardController.updateBoard(boardUpdatequery,boardUpdateSetquery);
				output.msg = "success";
				output.data = "Update success";
			}
			res.setHeader('userToken',userToken.userToken);
		}
		res.json(output);
	}catch(e) {
		if(req.file) {
			let deletePhoto = await multer.deleteFile([{Key: req.file.transforms[0].key}]);
		}
		output.msg = 'fail';
		output.data = e.message;
		res.setHeader('userToken',req.headers.usertoken);
		res.json(output);
	}
}
//게시판삭제
exports.deleteBoard = async function(req,res,next) {
	try{
		output.data = null;
		let userTokenCheck = req.headers.usertoken;
		if(userTokenCheck == 'guest'){
			output.msg = "success";
			res.setHeader('userToken', 'guest');
		}
		else if(userTokenCheck == undefined) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else if(userTokenCheck == null) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else {
			let userToken = await jsonWebToken.TokenCheck(req.headers.usertoken);
			let userIdCheckdata = { _id: userToken.ObjectId };
			let userInfo = await UserController.getUserFindObjectId(userIdCheckdata);
			let boardFindOnequery = {_id: ObjectId(req.params.boardId)};
			let boardInfo = await BoardController.findOneBoard(boardFindOnequery);
			let after_time=moment().add(30,'days');
			let times = after_time.format("YYYY-MM-DD");

			
			if(userInfo.userId == boardInfo.boardUserId){
				let removeBoardSetquery = {"$set": {"boardOnOff": false, "boardDeleteTime":times}};
				let removeBoard = await BoardController.updateBoard(boardFindOnequery,removeBoardSetquery);
				output.msg = "success";
				output.data = null;
			}
			else{
				output.msg = "fail";
				output.data = null;
			}
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


//게시판 댓글 달기
exports.addComment = async function(req,res,next) {
	try{
		output.data = null;
		let loadDt = new Date();
		var boardDate  =  new Date(Date.parse(loadDt) +9 * 1000 * 60 * 60); //한시간 전
		dateTime = moment(boardDate).format("YYYY-MM-DD HH:mm:ss");
		
		let userTokenCheck = req.headers.usertoken;
		if(userTokenCheck == 'guest'){
			output.msg = "success";
			res.setHeader('userToken', 'guest');
		}
		else if(userTokenCheck == undefined) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else if(userTokenCheck == null) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else{
			let userToken = await jsonWebToken.TokenCheck(req.headers.usertoken);
			let userIdCheckdata = { _id: userToken.ObjectId };
			let userInfo = await UserController.getUserFindObjectId(userIdCheckdata);

			let comments = {
				boardCommentsUserId: userInfo.userId,
				boardCommentsContent: req.body.boardCommentsContent,
				boardCommentsDatetime: dateTime
			}


			let boardFindOnequery = {_id: ObjectId(req.params.boardId)};
			let boardCommentsSetquery = {"$push": {boardComments: comments}};
			let boardComments = await BoardController.boardComments(boardFindOnequery, boardCommentsSetquery);
			output.msg = "success";
			output.data = {
				_id: boardComments._id,
				boardCommentsUserName: userInfo.userName,
				boardCommentsUserPhoto: userInfo.userPhoto,
				boardCommentsContent: boardComments.boardCommentsContent,
				boardCommentsDatetime: boardComments.boardCommentsDatetime
			};
	
			// 푸시받을사람찾기
			let toUserFind = [
			    {
			      $lookup:
			        {
			          from: "users",
			          localField: "boardUserId",
			          foreignField: "userId",
			          as: "toUserTest"
			        }
			   },
			   {
			   		"$unwind" : "$toUserTest"
			   },
			   {
			   	 $project:{
			   	 	_id : "$toUserTest._id",
			   	 	userPushOnOff : "$toUserTest.userPushOnOff",
			   	 	userId : "$toUserTest.userId",
			   	 	userPushA : "$toUserTest.userPushA"
			   	 }
			   }
			]
			let toUser = await BoardController.aggregate(toUserFind);
			//푸시알람 
			if(toUser[0].userPushOnOff == true){
				push.pushFunction(userInfo,toUser,req.params.boardId,1);
			}
			// 푸시정보 유저에 update
			let userFindOnequery = {_id: ObjectId(toUser[0]._id)};
			let pushMessge = {
				pushInfo: 1,
				pushMessage: userInfo.userName+"님의 댓글이 달렸습니다.",
				pushMigrate: req.params.boardId,
				pushConfirm: false
			}
			let userPushSetquery = {"$push": {userPushMessage: pushMessge}};
			await BoardController.userPush(userFindOnequery,userPushSetquery);
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
//게시판댓글수정
exports.editComment = async function(req,res,next) {
	try{
		output.data = null;
		let userTokenCheck = req.headers.usertoken;
		if(userTokenCheck == 'guest'){
			output.msg = "success";
			output.data = null;
			res.setHeader('userToken', 'guest');
		}
		else if(userTokenCheck == undefined) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else if(userTokenCheck == null) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else {

			let userToken = await jsonWebToken.TokenCheck(req.headers.usertoken);
			let userIdCheckdata = { _id: userToken.ObjectId };
			let userInfo = await UserController.getUserFindObjectId(userIdCheckdata);
			let boardFindOnequery = {_id: ObjectId(req.params.boardId)};
			let boardIsMatchquery = {"boardComments": {"$elemMatch": {_id: ObjectId(req.params.commentId)}}};
			let boardIsMatch = await BoardController.findOneBoardComment(boardFindOnequery, boardIsMatchquery,userInfo.userId);
			
			let comment = {
				"_id":boardIsMatch._id,
				"boardCommentsUserId":userInfo.userId,
				"boardCommentsContent":req.body.boardCommentsContent,
				"boardCommentsDatetime": new moment().format("YYYY-MM-DD HH:mm:ss")
			}
			let boardUpdatequery = {_id:ObjectId(req.params.boardId), "boardComments._id": ObjectId(req.params.commentId)};
			let boardUpdateSetquery = {"$set": {"boardComments.$": comment}};
			let boardUpdate = await BoardController.updateBoard(boardUpdatequery,boardUpdateSetquery);
			output.msg = "success";
			let commentsData = {
				"_id": boardIsMatch._id,
				"boardCommentsUserName": userInfo.userName,
				"boardCommentsUserPhoto": userInfo.userPhoto,
				"boardCommentsContent": comment.boardCommentsContent,
				"boardCommentsDatetime": comment.boardCommentsDatetime
			}
			output.data = commentsData;
			res.setHeader('userToken',userToken.userToken);
		}
		res.json(output);
	}catch(e){
		output.msg = 'fail';
		output.data = e.message;
		res.setHeader('userToken',req.headers.usertoken);
		res.json(output);
	}
}


//게시판댓글삭제
exports.deleteComment = async function(req,res,next) {
	try{
		output.data = null;
		let userTokenCheck = req.headers.usertoken;
		if(userTokenCheck == 'guest'){
			output.msg = "success";
			output.data = null;
			res.setHeader('userToken', 'guest');
		}
		else if(userTokenCheck == undefined) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else if(userTokenCheck == null) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else {
			let userToken = await jsonWebToken.TokenCheck(req.headers.usertoken);
			let userIdCheckdata = { _id: userToken.ObjectId };
			let userInfo = await UserController.getUserFindObjectId(userIdCheckdata);
			let boardFindOnequery = {_id: ObjectId(req.params.boardId)};
			let boardIsMatchquery = {"boardComments": {"$elemMatch": {_id: ObjectId(req.params.commentId)}}};
			let boardIsMatch = await BoardController.findOneBoardComment(boardFindOnequery, boardIsMatchquery,userInfo.userId);
			let boardDeleteSetquery = {"$pull": {boardComments: {_id: Object(req.params.commentId)}}};
			let boardDelete = await BoardController.updateBoard(boardFindOnequery, boardDeleteSetquery);
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
//좋아요
exports.likePushPull = async function(req,res,next) {
	try{
		output.data = null;
		let userTokenCheck = req.headers.usertoken;
		if(userTokenCheck == 'guest'){
			output.msg = "success";
			output.data = null;
			res.setHeader('userToken', 'guest');
		}
		else if(userTokenCheck == undefined) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else if(userTokenCheck == null) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else {
			let userToken = await jsonWebToken.TokenCheck(req.headers.usertoken);
			let userIdCheckdata = { _id: userToken.ObjectId };
			let userInfo = await UserController.getUserFindObjectId(userIdCheckdata);
			let boardFindOnequery = {_id: ObjectId(req.params.boardId)};
			if(req.body.boardLike == true) {
				let likeBoardtruequery = {"$push": {"boardLikeUsers": userInfo.userId}, "$inc": {boardTodayCount: 1}};
				let likeBoardtrue = await BoardController.updateBoard(boardFindOnequery,likeBoardtruequery);
			}
			else {
				let likeBoardfalsequery = {"$pull": {"boardLikeUsers": userInfo.userId}, "$inc": {boardTodayCount: -1}};
				let likeBoardfalse = await BoardController.updateBoard(boardFindOnequery, likeBoardfalsequery);
			}

			// 푸시받을사람찾기
			let toUserFind = [
			    {
			      $lookup:
			        {
			          from: "users",
			          localField: "boardUserId",
			          foreignField: "userId",
			          as: "toUserTest"
			        }
			   },
			   {
			   		"$unwind" : "$toUserTest"
			   },
			   {
			   	 $project:{
			   	 	_id : "$toUserTest._id",
			   	 	userPushOnOff : "$toUserTest.userPushOnOff",
			   	 	userId : "$toUserTest.userId",
			   	 	userPushA : "$toUserTest.userPushA"
			   	 }
			   }
			]
			let toUser = await BoardController.aggregate(toUserFind);
			//푸시알람 
			if(toUser[0].userPushOnOff == true){
				push.pushFunction(userInfo,toUser,req.params.boardId,1);
			}
			// 푸시정보 유저에 update
			let userFindOnequery = {_id: ObjectId(toUser[0]._id)};
			let pushMessge = {
				pushInfo: 2,
				pushMessage: userInfo.userName+"님이 좋아요 하였습니다.",
				pushMigrate: req.params.boardId,
				pushConfirm: false
			}
			let userPushSetquery = {"$push": {userPushMessage: pushMessge}};
			await BoardController.userPush(userFindOnequery,userPushSetquery);

			output.msg="success";
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
//오늘자 베스트게시물선정
exports.todayBestUserCody = async function(req,res,next) {
	try{
		output.data = null;
		let todayBestUserCodyquery = {boardBestDate:{"$exists":false}};
		let todayBestUserCodysort = {"boardTodayCount": -1};
		let todayBestUserCody = await BoardController.sortListBoard(todayBestUserCodyquery,todayBestUserCodysort);

		if(todayBestUserCody == 0){
			return;
		}else{
			let userInfoquery = { userId : todayBestUserCody[0].boardUserId};
			let userInfo = await UserController.getUserFindObjectId(userInfoquery);

			//푸시알람 
			if(userInfo.userPushOnOff == true){
				push.pushFunction(0,userInfo,todayBestUserCody[0].boardUserId,3);
			}

			// 푸시정보 유저에 update
			let pushMessge = {
				pushInfo: 3,
				pushMessage: userInfo.userName+"님의 게시물이 명예의전당에 선정되었습니다.",
				pushMigrate: todayBestUserCody[0].boardId,
				pushConfirm: false
			}
			
			let userFindOnequery = {_id: ObjectId(userInfo.userId)};
			let userPushSetquery = {"$push": {userPushMessage: pushMessge}};
			await BoardController.userPush(userFindOnequery,userPushSetquery);

			let current_time=new moment().format("YYYY-MM-DD");
			let todayBestUserCodyChoisequery = {_id:ObjectId(todayBestUserCody[0]._id)};
			let todayBestUserCodyChoiseset = {"$set": {"boardBestDate": current_time}};
			let todayBestUserCodyChoise = await BoardController.updateBoard(todayBestUserCodyChoisequery, todayBestUserCodyChoiseset);

			let resetset = {"$set": {"boardTodayCount": 0}};
			let resetBoardToday = await BoardController.todayCountreset(resetset); 
		}

		output.msg = "success";
		return console.log(output);
	}catch(e) {
		return console.log(e.message);
	}
	
}
//역대 게시물
exports.bestUserCody = async function(req,res,next) {
	try{
		output.data = null;
		let userTokenCheck = req.headers.usertoken;
		if(userTokenCheck == 'guest'){
			let limit = 5;
			let skip = (req.params.page - 1) * limit;
			
			let pastCodyquery = [
				{
					"$project": {
						_id: 1,
						boardPhoto: 1,
						boardBestDate: 1,
					}
				},
				{"$match": {"boardBestDate": {"$exists": true}}},
				{"$sort": {"boardBestDate": -1}},
				{"$skip": skip},
				{"$limit": limit}
			];
			let pastCody = await BoardController.aggregateBoard(pastCodyquery);
			output.msg = "success";
			output.data = pastCody;
			res.setHeader('userToken', 'guest');
			res.json(output);
		}
		else if(userTokenCheck == undefined) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else if(userTokenCheck == null) {
			output.msg="success";
			output.data = null;
			res.setHeader('userToken','guest');
		}
		else{
			let userToken = await jsonWebToken.TokenCheck(req.headers.usertoken);
			let limit = 5;
			let skip = (req.params.page - 1) * limit;
			
			let pastCodyquery = [
				{
					"$project": {
						_id: 1,
						boardPhoto: 1,
						boardBestDate: 1,
					}
				},
				{"$match": {"boardBestDate": {"$exists": true}}},
				{"$sort": {"boardBestDate": -1}},
				{"$skip": skip},
				{"$limit": limit}
			];
			let pastCody = await BoardController.aggregateBoard(pastCodyquery);
			output.msg = "success";
			output.data = pastCody;
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
//게시물 진짜삭제
exports.deleteBoardSche = async function() {
	try{
		let deletePhoto = [];
		//let after_time = moment().add(30, 'days');
		let dbdeletetime=new moment().format("YYYY-MM-DD");
		//let dbdeletetime = after_time.format("YYYY-MM-DD");
		let deleteBoardFind = {"boardDeleteTime": dbdeletetime};
		let deleteBoard = await BoardController.removeBoard(deleteBoardFind);
		for(let i=0; i<deleteBoard.length; i++)
			deletePhoto.push({Key: deleteBoard[i]});
		await multer.deleteFile(deletePhoto);
		console.log("삭제갯수 : " + deleteBoard.length);
		return;
	}catch(e) {
		return;
	}
}

