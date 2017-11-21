const board=require('../controllers/board');
const safeHandler = require('../utils/safeHandler.js');
const multer = require('../utils/multers3.js');
var myShowRoom=require('../controllers/myShowRoom'); 
exports.setRequestUrl=function(app){
	// app.post('/boards/addBoard',multer.boardPhoto,safeHandler.boardImagesafeHandler(board.addBoard)); //게시판 추가
	// app.get('/boards/listBoard/:page',safeHandler.safeHandler(board.listBoard)); //게시판 목록보기
	// app.put('/boards/:boardId',multer.boardPhoto,safeHandler.boardImagesafeHandler(board.editBoard)); //게시판 수정
	// app.delete('/boards/:boardId',safeHandler.safeHandler(board.deleteBoard));//게시판삭제
	// app.get('/boards/:boardId',safeHandler.safeHandler(board.detailBoard)); //상세보기
	// app.post('/boards/:boardId/comment',safeHandler.safeHandler(board.addComment)); //댓글 등록
	// app.put('/boards/:boardId/comment/:commentId',safeHandler.safeHandler(board.editComment)); //댓글수정
	// app.delete('/boards/:boardId/comment/:commentId',safeHandler.safeHandler(board.deleteComment)); //댓글삭제
	// app.post('/boards/:boardId/like',safeHandler.safeHandler(board.likePushPull)); //게시판 좋아요
	app.get('/boards/main',myShowRoom.main2);//메인 
	app.get('/boards/bestCody/views/:page',board.bestUserCody); //역대게시물
	app.get('/boarddelete',board.deleteBoardSche);
	app.get('/boards/bestboard/success', board.todayBestUserCody);

	app.route('/boards/addBoard')
	   .post(multer.boardPhoto,board.addBoard); //게시물 등록
	app.route('/boards/:boardId/:page')
	   .get(board.detailBoard); //게시물 상세보기
	app.route('/boards/:boardId')
	   .put(multer.boardPhoto,board.editBoard) //게시물 수정
	   .delete(board.deleteBoard); // 게시물 삭제
	app.route('/boards/:boardId/comment')
	   .post(board.addComment); //게시물 댓글 등록
	app.route('/boards/:boardId/comment/:commentId')
	   .put(board.editComment) // 게시물 댓글 수정
	   .delete(board.deleteComment); // 게시물 댓글 삭제 
	app.route('/boards/:boardId/like')
	   .post(board.likePushPull); // 게시물 좋아요
	app.route('/boards/listBoard/:type/:page')
       .get(board.listBoard); // 게시물 전체 리스트
    // app.get('/boards/codys/example', myShowRoom.datagogo);
    
    

	  
}