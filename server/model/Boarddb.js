const mongoose=require("mongoose");

const Schema=mongoose.Schema;
mongoose.Promise=global.Promise;

var BoardSchema = mongoose.Schema({
	boardUserId: String,
	boardPhoto: String, 
	boardName: String,
	boardContent: String, 
	boardDatetime: String,
	boardLikeUsers: [String], 
	boardTodayCount: {
		type: Number,
		default: 0
	},
	boardBestDate: String,
	boardComments: [{
		boardCommentsUserId : String,
		boardCommentsContent : String,
		boardCommentsDatetime : String
	}],
	boardOnOff:{
		type: Boolean,
		default: true
	},
	boardDeleteTime: String,
	boardAge:[Number],
	boardBestCody: {
		type: Boolean,
		default: false
	},
	boardPhotoKey: String
});

var Board = mongoose.model('boards', BoardSchema);

module.exports=Board;