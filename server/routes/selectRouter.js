const selectBoard=require('../controllers/selectBoard');
const safeHandler = require('../utils/safeHandler.js');
const multer = require('../utils/multers3.js');

exports.setRequestUrl=function(app){
	// app.post('/selectBoard/addBoard',multer.selectPhoto,safeHandler.selectboardImagesafeHandler(selectBoard.addSelectBoard)); //게시판 추가
	// app.get('/selectBoard/getRandomList',safeHandler.safeHandler(selectBoard.listSelectBoard)); //게시판 목록보기
	// app.post('/selectBoardsStop/:selectBoardId/stop',safeHandler.safeHandler(selectBoard.stopSelectBoard)); //투표중지
	// app.post('/selectBoards/:selectBoardId/:bote',safeHandler.safeHandler(selectBoard.boteSelectBoard)); //게시판 투표
	// app.delete('/selectBoards/:selectBoardId',safeHandler.safeHandler(selectBoard.deleteSelectBoard)); //투표삭제
	app.get('/asdasd',selectBoard.deleteSelectBoardSche);

	app.route('/boards/selectBoard/addBoard')
	   .post(multer.selectPhoto,selectBoard.addSelectBoard); // 선택게시물 추가
	app.route('/boards/selectBoard/random/list')
	   .get(selectBoard.listSelectBoard); // 선택게시물 랜덤보기
	app.route('/boards/selectBoards/:selectBoardId')
	   .get(selectBoard.stopSelectBoard) //선택게시물 투표중지
	   .post(selectBoard.boteSelectBoard) //선택게시물 투표
	   .delete(selectBoard.deleteSelectBoard); // 선택게시물 삭제

}