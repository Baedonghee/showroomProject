export class Cloth {
	bigCategorys = [
		{'bigcategory':'Choose a category'},
		{'bigcategory':'Outer'},
		{'bigcategory':'Top'},
		{'bigcategory':'Bottom'},
		{'bigcategory':'Suit'},
		{'bigcategory':'Summer'},
		{'bigcategory':'Bag'},
		{'bigcategory':'Shoes'},
		{'bigcategory':'Acc'}
	];
	outerCategorys = [
		{'midcategory': 'Choose a outerCategory'},
		{'midcategory': '가디건'},
		{'midcategory': '무스탕'},
		{'midcategory': '블레이져'},
		{'midcategory': '스카잔'},
		{'midcategory': '야상'},
		{'midcategory': '자켓'},
		{'midcategory': '점퍼'},
		{'midcategory': '집업'},
		{'midcategory': '코트'},
		{'midcategory': '패딩'}
	];
	topCategorys = [
		{'midcategory': 'Choose a topCategory'},
		{'midcategory': '긴팔티'},
		{'midcategory': '나시'},
		{'midcategory': '니트'},
		{'midcategory': '맨투맨'},
		{'midcategory': '반팔티'},
		{'midcategory': '베스트'},
		{'midcategory': '셔츠'},
		{'midcategory': '후드'}
	];
	bottomCategorys = [
		{'midcategory': 'Choose a bottomCategory'},
		{'midcategory': '면긴바지'},
		{'midcategory': '면스키니'},
		{'midcategory': '슬랙스'},
		{'midcategory': '청긴바지'},
		{'midcategory': '청스키니'},
		{'midcategory': '트레이닝'},
		{'midcategory': '면반바지'},
		{'midcategory': '청반바지'}
	];
	suitCategorys = [
		{'midcategory': 'Choose a suitCategory'},
		{'midcategory': '수트'}
	];
	summerCategorys = [
		{'midcategory': 'Choose a summberCategory'},
		{'midcategory': '비치웨어'}
	];
	bagCategorys = [
		{'midcategory': 'Choose a bagCategory'},
		{'midcategory': '백팩'},
		{'midcategory': '숄더'},
		{'midcategory': '여행가방'},
		{'midcategory': '캐리어'},
		{'midcategory': '크로스백'},
		{'midcategory': '클러치'},
		{'midcategory': '토드'},
		{'midcategory': '힙색'}
	];
	shoesCategorys = [
		{'midcategory': 'Choose a shoesCategory'},
		{'midcategory': '구두'},
		{'midcategory': '로퍼'},
		{'midcategory': '부츠'},
		{'midcategory': '샌들'},
		{'midcategory': '스니커즈'},
		{'midcategory': '운동화'},
		{'midcategory': '워커'},
		{'midcategory': '쪼리'},
		{'midcategory': '키높이깔창'}
	];
	accCategorys = [
		{'midcategory': 'Choose a accCategory'},
		{'midcategory': '가발'},
		{'midcategory': '귀걸이'},
		{'midcategory': '머니클립'},
		{'midcategory': '머플러'},
		{'midcategory': '모자'},
		{'midcategory': '목걸이'},
		{'midcategory': '반지'},
		{'midcategory': '벨트'},
		{'midcategory': '부토니에'},
		{'midcategory': '브로치'},
		{'midcategory': '선글라스'},
		{'midcategory': '스카프'},
		{'midcategory': '시계'},
		{'midcategory': '안경'},
		{'midcategory': '양말'},
		{'midcategory': '언더웨어'},
		{'midcategory': '장갑'},
		{'midcategory': '지갑'},
		{'midcategory': '키링'},
		{'midcategory': '타이'},
		{'midcategory': '팔찌'},
		{'midcategory': '헤어왁스'},
		{'midcategory': '화장품'},
		{'midcategory': '기타'}
	];
	outercardiganCategorys = [
		{'smallcategory': '니트가디건',
		 'categorysCode': 110010001},
		{'smallcategory': '데미지가디건',
		 'categorysCode': 110010002},
		{'smallcategory': '떡볶이가디건',
	     'categorysCode': 110010003},
		{'smallcategory': '롱가디건',
		 'categorysCode': 110010004},
		{'smallcategory': '루프가디건',
		 'categorysCode': 110010005},
		{'smallcategory': '베이직',
		 'categorysCode': 110010006},
		{'smallcategory': '숏가디건',
		 'categorysCode': 110010007},
		{'smallcategory': '스트라이프가디건',
		 'categorysCode': 110010008},
		{'smallcategory': '집업가디건',
		 'categorysCode': 110010009},
		{'smallcategory': '코튼가디건',
		 'categorysCode': 110010010}
	];
	outermustangCategorys = [
		{'smallcategory': '베이직',
		 'categorysCode': 100010001}
	];
	outerblazerCategorys =[
		{'smallcategory': '더블블레이져',
		 'categorysCode': 110020001},
		{'smallcategory': '베이직',
		 'categorysCode': 110020002},
		{'smallcategory': '분또블레이져',
		 'categorysCode': 110020003},
		{'smallcategory': '체크블레이져',
		 'categorysCode': 110020004},
	];
	outersukajanCategorys = [
		{'smallcategory': '베이직',
		 'categorysCode': 100020001}
	];
	outernightCategorys = [
		{'smallcategory': '롱야상',
		 'categorysCode': 100030001},
		{'smallcategory': '베이직',
		 'categorysCode': 100030002},
		{'smallcategory': '숏야상',
		 'categorysCode': 100030003},
		{'smallcategory': '오버핏야상',
		 'categorysCode': 100030004},
		{'smallcategory': '후드야상',
		 'categorysCode': 100030005}
	];
	outerjacketCategorys = [
		{'smallcategory': '가죽자켓',
		 'categorysCode': 110030001},
		{'smallcategory': '골덴자켓',
		 'categorysCode': 110030002},
		{'smallcategory': '데님자켓',
		 'categorysCode': 110030003},
		{'smallcategory': '떡볶이자켓',
		 'categorysCode': 110030004},
		{'smallcategory': '라이더자켓',
		 'categorysCode': 110030005},
		{'smallcategory': '레더자켓',
		 'categorysCode': 110030006},
		{'smallcategory': '린넨자켓',
		 'categorysCode': 110030007},
		{'smallcategory': '면자켓',
		 'categorysCode': 110030008},
		{'smallcategory': '보카시자켓',
		 'categorysCode': 110030009},
		{'smallcategory': '분또자켓',
		 'categorysCode': 110030010},
		{'smallcategory': '생지자켓',
		 'categorysCode': 110030011},
		{'smallcategory': '셔츠자켓',
		 'categorysCode': 110030012},
		{'smallcategory': '스트리아프자켓',
		 'categorysCode': 110030013},
		{'smallcategory': '양털자켓',
		 'categorysCode': 110030014},
		{'smallcategory': '오버자켓',
		 'categorysCode': 110030015},
		{'smallcategory': '워싱자켓',
		 'categorysCode': 110030016},
		{'smallcategory': '청자켓',
		 'categorysCode': 110030017},
		{'smallcategory': '체크자켓',
		 'categorysCode': 110030018},
		{'smallcategory': '커팅자켓',
		 'categorysCode': 110030019},
		{'smallcategory': '코치자켓',
		 'categorysCode': 110030020},
		{'smallcategory': '트러커자켓',
		 'categorysCode': 110030021},
		{'smallcategory': '패딩자켓',
		 'categorysCode': 110030022},
		{'smallcategory': '후드자켓',
		 'categorysCode': 110030023}
	];
	outerjumperCategorys = [
		{'smallcategory': '나그랑점퍼',
		 'categorysCode': 100040001},
		{'smallcategory': '네오프랜점퍼',
		 'categorysCode': 100040002},
		{'smallcategory': '데님점퍼',
		 'categorysCode': 100040003},
		{'smallcategory': '레토르점퍼',
		 'categorysCode': 100040004},
		{'smallcategory': '롱점퍼',
		 'categorysCode': 100040005},
		{'smallcategory': '마르코점퍼',
		 'categorysCode': 100040006},
		{'smallcategory': '아노락점퍼',
		 'categorysCode': 100040007},
		{'smallcategory': '야구점퍼',
		 'categorysCode': 100040008},
		{'smallcategory': '양털점퍼',
		 'categorysCode': 100040009},
		{'smallcategory': '웨이블점퍼',
		 'categorysCode': 100040010},
		{'smallcategory': '유광점퍼',
		 'categorysCode': 100040011},
		{'smallcategory': '코듀로이점퍼',
		 'categorysCode': 100040012},
		{'smallcategory': '항공점퍼',
		 'categorysCode': 100040013},
		{'smallcategory': '후드점퍼',
		 'categorysCode': 100040014}
	];
	outerjipupCategorys = [
		{'smallcategory': '니트집업',
		 'categorysCode': 100050001},
		{'smallcategory': '데님집업',
		 'categorysCode': 100050002},
		{'smallcategory': '모직집업',
		 'categorysCode': 100050003},
		{'smallcategory': '베이직',
		 'categorysCode': 100050004},
		{'smallcategory': '보카시집업',
		 'categorysCode': 100050005},
		{'smallcategory': '양털집업',
		 'categorysCode': 100050006},
		{'smallcategory': '트레이닝집업',
		 'categorysCode': 100050007},
		{'smallcategory': '후드집업',
		 'categorysCode': 100050008}
	];
	outercoatCategorys = [
		{'smallcategory': '나그랑코트',
		 'categorysCode': 100060001},
		{'smallcategory': '더블코트',
		 'categorysCode': 100060002},
		{'smallcategory': '데님코트',
		 'categorysCode': 100060003},
		{'smallcategory': '드랍코트',
		 'categorysCode': 100060004},
		{'smallcategory': '롱코트',
		 'categorysCode': 100060005},
		{'smallcategory': '루즈코트',
		 'categorysCode': 100060006},
		{'smallcategory': '베이직',
		 'categorysCode': 100060007},
		{'smallcategory': '보카시코트',
		 'categorysCode': 100060008},
		{'smallcategory': '분또코트',
		 'categorysCode': 100060009},
		{'smallcategory': '스트라이프코트',
		 'categorysCode': 100060010},
		{'smallcategory': '싱글코트',
		 'categorysCode': 100060011},
		{'smallcategory': '오버코트',
		 'categorysCode': 100060012},
		{'smallcategory': '지퍼코트',
		 'categorysCode': 100060013},
		{'smallcategory': '차이나코트',
		 'categorysCode': 100060014},
		{'smallcategory': '청코트',
		 'categorysCode': 100060015},
		{'smallcategory': '체크코트',
		 'categorysCode': 100060016},
		{'smallcategory': '하드릭코트',
		 'categorysCode': 100060017},
		{'smallcategory': '헤리튼코트',
		 'categorysCode': 100060018},
		{'smallcategory': '헤링본코트',
		 'categorysCode': 100060019},
		{'smallcategory': '후드코트',
		 'categorysCode': 100060020}
	];
	outerpaddingCategorys = [
		{'smallcategory': '덕다운패딩',
		 'categorysCode': 100070001},
		{'smallcategory': '라쿤패딩',
		 'categorysCode': 100070002},
		{'smallcategory': '롱패딩',
		 'categorysCode': 100070003},
		{'smallcategory': '베이직',
		 'categorysCode': 100070004},
		{'smallcategory': '숏패딩',
		 'categorysCode': 100070005},
		{'smallcategory': '스카잔패딩',
		 'categorysCode': 100070006},
		{'smallcategory': '야상패딩',
		 'categorysCode': 100070007},
		{'smallcategory': '양털패딩',
		 'categorysCode': 100070008},
		{'smallcategory': '조끼패딩',
		 'categorysCode': 100070009},
		{'smallcategory': '지퍼패딩',
		 'categorysCode': 100070010},
		{'smallcategory': '항공패딩',
		 'categorysCode': 100070011},
		{'smallcategory': '후드패딩',
		 'categorysCode': 100070012}
	];
	topnitCategorys = [
		{'smallcategory': '꽈배기니트',
		 'categorysCode': 200010001},
		{'smallcategory': '나그랑니트',
		 'categorysCode': 200010002},
		{'smallcategory': '레터링니트',
		 'categorysCode': 200010003},
		{'smallcategory': '목폴라니트',
		 'categorysCode': 200010004},
		{'smallcategory': '베이직',
		 'categorysCode': 200010005},
		{'smallcategory': '보카시니트',
		 'categorysCode': 200010006},
		{'smallcategory': '스트라이프니트',
		 'categorysCode': 200010007},
		{'smallcategory': '체크니트',
		 'categorysCode': 200010008},
		{'smallcategory': '크로딘니트',
		 'categorysCode': 200010009},
		{'smallcategory': '헨리넥니트',
		 'categorysCode': 200010010}
	];
	toplongshirtCategorys = [
		{'smallcategory': '기모티셔츠',
		 'categorysCode': 210010001},
		{'smallcategory': '나그랑티셔츠',
		 'categorysCode': 210010002},
		{'smallcategory': '레이어드티셔츠',
		 'categorysCode': 210010003},
		{'smallcategory': '롱슬리브티셔츠',
		 'categorysCode': 210010004},
		{'smallcategory': '루즈티셔츠',
		 'categorysCode': 210010005},
		{'smallcategory': '반폴라티셔츠',
		 'categorysCode': 210010006},
		{'smallcategory': '베이직',
		 'categorysCode': 210010007},
		{'smallcategory': '분또티셔츠',
		 'categorysCode': 210010008},
		{'smallcategory': '스트라이프티셔츠',
		 'categorysCode': 210010009},
		{'smallcategory': '오버핏티셔츠',
		 'categorysCode': 210010010},
		{'smallcategory': '포켓티셔츠',
		 'categorysCode': 210010011},
		{'smallcategory': '프린팅티셔츠',
		 'categorysCode': 210010012},
		{'smallcategory': '피그먼트티셔츠',
		 'categorysCode': 210010013},
		{'smallcategory': '헨리넥티셔츠',
		 'categorysCode': 210010014}
	];	
	topmantomanCategorys = [
		{'smallcategory': '기모맨투맨',
		 'categorysCode': 210020001},
		{'smallcategory': '나그랑맨투맨',
		 'categorysCode': 210020002},
		{'smallcategory': '루즈핏맨투맨',
		 'categorysCode': 210020003},
		{'smallcategory': '목폴라맨투맨',
		 'categorysCode': 210020004},
		{'smallcategory': '반집업맨투맨',
		 'categorysCode': 210020005},
		{'smallcategory': '베이직',
		 'categorysCode': 210020006},
		{'smallcategory': '스트라이프맨투맨',
		 'categorysCode': 210020007},
		{'smallcategory': '양털맨투맨',
		 'categorysCode': 210020008},
		{'smallcategory': '오버핏맨투맨',
		 'categorysCode': 210020009},
		{'smallcategory': '프린팅맨투맨',
		 'categorysCode': 210020010},
		{'smallcategory': '항공맨투맨',
		 'categorysCode': 210020011},
		{'smallcategory': '헨리넥맨투맨',
		 'categorysCode': 210020012},
	];
	topvestCategorys = [
		{'smallcategory': '니트베스트',
		 'categorysCode': 210030001},
		{'smallcategory': '목폴라베스트',
		 'categorysCode': 210030002},
		{'smallcategory': '베이직',
		 'categorysCode': 210030003},
		{'smallcategory': '양털베스트',
		 'categorysCode': 210030004},
		{'smallcategory': '오버핏베스트',
		 'categorysCode': 210030005},
		{'smallcategory': 'V넥베스트',
		 'categorysCode': 210030006}
	];
	tophoodCategorys = [
		{'smallcategory': '기모후드',
		 'categorysCode': 210040001},
		{'smallcategory': '레이어드후드',
		 'categorysCode': 210040002},
		{'smallcategory': '반집업후드',
		 'categorysCode': 210040003},
		{'smallcategory': '베이직',
		 'categorysCode': 210040004},
		{'smallcategory': '스트라이프후드',
		 'categorysCode': 210040005},
		{'smallcategory': '아노락후드',
		 'categorysCode': 210040006},
		{'smallcategory': '양털후드',
		 'categorysCode': 210040007},
		{'smallcategory': '오버핏후드',
		 'categorysCode': 210040008},
		{'smallcategory': '집업후드',
		 'categorysCode': 210040009},
		{'smallcategory': '칼집후드',
		 'categorysCode': 210040010},
		{'smallcategory': '프린팅후드',
		 'categorysCode': 210040011},
	];
	topshirtCategorys = [
		{'smallcategory': '베이직',
		 'categorysCode': 210050001},
		{'smallcategory': '스트라이프셔츠',
		 'categorysCode': 210050002},
		{'smallcategory': '차이나셔츠',
		 'categorysCode': 210050003}
	];
	topsleevelessCategorys = [
		{'smallcategory': '레이어드나시',
		 'categorysCode': 220010001},
		{'smallcategory': '롱나시',
		 'categorysCode': 220010002},
		{'smallcategory': '베이직',
		 'categorysCode': 220010003},
		{'smallcategory': '스트라이프나시',
		 'categorysCode': 220010004},
		{'smallcategory': '프린팅나시',
		 'categorysCode': 220010005}
	];
	topshortshirtCategorys = [
		{'smallcategory': '7부티셔츠',
		 'categorysCode': 220020001},
		{'smallcategory': '기모티셔츠',
		 'categorysCode': 220020002},
		{'smallcategory': '나그랑티셔츠',
		 'categorysCode': 220020003},
		{'smallcategory': '레이어드티셔츠',
		 'categorysCode': 220020004},
		{'smallcategory': '롱슬리브티셔츠',
		 'categorysCode': 220020005},
		{'smallcategory': '루즈티셔츠',
		 'categorysCode': 220020006},
		{'smallcategory': '반폴라티셔츠',
		 'categorysCode': 220020007},
		{'smallcategory': '베이직',
		 'categorysCode': 220020008},
		{'smallcategory': '분또티셔츠',
		 'categorysCode': 220020009},
		{'smallcategory': '스트라이프티셔츠',
		 'categorysCode': 220020010},
		{'smallcategory': '오버핏티셔츠',
		 'categorysCode': 220020011},
		{'smallcategory': '카라티셔츠',
		 'categorysCode': 220020012},
		{'smallcategory': '포켓티셔츠',
		 'categorysCode': 220020013},
		{'smallcategory': '프린팅티셔츠',
		 'categorysCode': 220020014},
		{'smallcategory': '피그먼트티셔츠',
		 'categorysCode': 220020015}
	];
	bottomlongcottonpantsCategorys = [
		{'smallcategory': '10부면바지',
		 'categorysCode': 300010001},
		{'smallcategory': '9부면바지',
		 'categorysCode': 300010002},
		{'smallcategory': '기모면바지',
		 'categorysCode': 300010003},
		{'smallcategory': '디스트로이드면바지',
		 'categorysCode': 300010004},
		{'smallcategory': '배기면바지',
		 'categorysCode': 300010005},
		{'smallcategory': '베이직',
		 'categorysCode': 300010006},
		{'smallcategory': '밴딩면바지',
		 'categorysCode': 300010007},
		{'smallcategory': '스트라이프면바지',
		 'categorysCode': 300010008},
		{'smallcategory': '조거면바지',
		 'categorysCode': 300010009},
		{'smallcategory': '체크면바지',
		 'categorysCode': 300010010},
		{'smallcategory': '카고면바지',
		 'categorysCode': 300010011}
	];
	bottomcottonskinnyCategorys = [
		{'smallcategory': '기모스키니',
		 'categorysCode': 300020001},
		{'smallcategory': '베이직',
		 'categorysCode': 300020002},
		{'smallcategory': '밴딩스키니',
		 'categorysCode': 300020003},
		{'smallcategory': '체크스키니',
		 'categorysCode': 300020004},
		{'smallcategory': '컷팅스키니',
		 'categorysCode': 300020005},
		{'smallcategory': '코튼스키니',
		 'categorysCode': 300020006},
		{'smallcategory': '코팅스키니',
		 'categorysCode': 300020007}
	];
	bottomslacksCategorys = [
		{'smallcategory': '기모슬랙스',
		 'categorysCode': 300030001},
		{'smallcategory': '밴딩슬랙스',
		 'categorysCode': 300030002},
		{'smallcategory': '생지슬랙스',
		 'categorysCode': 300030003},
		{'smallcategory': '스트라이프슬랙스',
		 'categorysCode': 300030004},
		{'smallcategory': '조거슬랙스',
		 'categorysCode': 300030005},
		{'smallcategory': '체크슬랙스',
		 'categorysCode': 300030006}
	];
	bottomlongbluejeanCategorys = [
		{'smallcategory': '7부청바지',
		 'categorysCode': 300040001},
		{'smallcategory': '그라데이션청바지',
		 'categorysCode': 300040002},
		{'smallcategory': '데님청바지',
		 'categorysCode': 300040003},
		{'smallcategory': '데미지청바지',
		 'categorysCode': 300040004},
		{'smallcategory': '디스트로이드청바지',
		 'categorysCode': 300040005},
		{'smallcategory': '배기면바지',
		 'categorysCode': 300040006},
		{'smallcategory': '베이직',
		 'categorysCode': 300040007},
		{'smallcategory': '밴딩청바지',
		 'categorysCode': 300040008},
		{'smallcategory': '생지청바지',
		 'categorysCode': 300040009},
		{'smallcategory': '컷팅청바지',
		 'categorysCode': 300040010},
		{'smallcategory': '코팅청바지',
		 'categorysCode': 300040011},
		{'smallcategory': '페린팅청바지',
		 'categorysCode': 300040012}
	];
	bottombluejeanskinnyCategorys = [
		{'smallcategory': '기모스키니',
		 'categorysCode': 300050001},
		{'smallcategory': '데님스키니',
		 'categorysCode': 300050002},
		{'smallcategory': '데미지스키니',
		 'categorysCode': 300050003},
		{'smallcategory': '디스트로이드스키니',
		 'categorysCode': 300050004},
		{'smallcategory': '밴딩스키니',
		 'categorysCode': 300050005},
		{'smallcategory': '베이직',
		 'categorysCode': 300050006},
		{'smallcategory': '생지스키니',
		 'categorysCode': 300050007},
		{'smallcategory': '워싱스키니',
		 'categorysCode': 300050008},
		{'smallcategory': '커팅스키니',
		 'categorysCode': 300050009},
		{'smallcategory': '페인팅스키니',
		 'categorysCode': 300050010}
	];
	bottomtrainingCategorys = [
		{'smallcategory': '기모트레이닝',
		 'categorysCode': 300060001},
		{'smallcategory': '베이직',
		 'categorysCode': 300060002},
		{'smallcategory': '조거트레이닝',
		 'categorysCode': 300060003}
	];
	bottomshirtcottonpantsCategorys = [
		{'smallcategory': '5부반바지',
		 'categorysCode': 310010001},
		{'smallcategory': '7부반바지',
		 'categorysCode': 310010002},
		{'smallcategory': '데님반바지',
		 'categorysCode': 310010003},
		{'smallcategory': '매쉬반바지',
		 'categorysCode': 310010004},
		{'smallcategory': '베이직',
		 'categorysCode': 310010005},
		{'smallcategory': '밴딩반바지',
		 'categorysCode': 310010006},
		{'smallcategory': '스트라이프반바지',
		 'categorysCode': 310010007},
		{'smallcategory': '카고반바지',
		 'categorysCode': 310010008}
	];
	bottomshirtbluejeanCategorys = [
		{'smallcategory': '5부반바지',
		 'categorysCode': 310010001},
		{'smallcategory': '데님반바지',
		 'categorysCode': 310010002},
		{'smallcategory': '데미지반바지',
		 'categorysCode': 310010003},
		{'smallcategory': '디스트로이드반바지',
		 'categorysCode': 310010004},
		{'smallcategory': '베이직',
		 'categorysCode': 310010005},
		{'smallcategory': '밴딩반바지',
		 'categorysCode': 310010006},
		{'smallcategory': '생지반바지',
		 'categorysCode': 310010007}
	];
	suitdetailCategorys = [
		{'smallcategory': '세트',
		 'categorysCode': 400010001}
	];
	summberdetailCategorys = [
		{'smallcategory': '래쉬가드',
		 'categorysCode': 500010001},
		{'smallcategory': '비치집업',
		 'categorysCode': 500010002},
		{'smallcategory': '트렁크',
		 'categorysCode': 500010003},
		{'smallcategory': '팬츠',
		 'categorysCode': 500010004},
		{'smallcategory': '후드집업',
		 'categorysCode': 500010005}
	];
	bagbackbagCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 600010001}
	];
	bagshoulderCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 600010002}
	];
	bagtripbagCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 600010003}
	];
	bagcarrierCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 600010004}
	];
	bagcrossbagCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 600010005}
	];
	bagclutchCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 600010006}
	];
	bagtodCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 600010007}
	];
	baghipCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 600010008}
	];
	shoesshoesCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 610010001}
	];
	shoesloafersCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 610010002}
	];
	shoesbootsCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 610010003}
	];
	shoessandalCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 610010004}
	];
	shoessneakersCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 610010005}
	];
	shoesrunningshoesCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 610010006}
	];
	shoeswalkerCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 610010007}
	];
	shoesJJriCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 610010008}
	];
	shoeskeyhighCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 610010009}
	];
	accwigCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010001}
	];
	accearringCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010002}
	];
	accmoneyCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010003}
	];
	accmufflerCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010004}
	];
	acchatCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010005}
	];
	accnecklaceCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010006}
	];
	accringCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010007}
	];
	accbaltCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010008}
	];
	accbuttneyCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010009}
	];
	accbroochCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010010}
	];
	accsunglassesCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010011}
	];
	accscarfCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010012}
	];
	accwatchCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010013}
	];
	accglassesCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010014}
	];
	accsocksCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010015}
	];
	accunderwearCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010016}
	];
	accglovesCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010017}
	];
	accwalletCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010018}
	];
	acckiringCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010019}
	];
	accnecktieCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010020}
	];
	accbraceletCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010021}
	];
	acchairwaxCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010022}
	];
	acccosmeticsCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010023}
	];
	accetcCategorys = [
		{'smallcategory': '기본',
		 'categorysCode': 620010024}
	];

}