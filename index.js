//git 프로젝트

//git 은 무엇인가

// 1. 형상관리도구중에 하나
// 형상관리 도구 : 버전 관리 시스템
// 작업을 하면서 작업의 리스트를 관리 할 수 있다.

// 2. git의 장점
// 팀과 협엽하는 단계에서 소스 코드를 파일로 주고 받을 필요 없이 같은 파일을 
// 팀원들과 동시에 병렬로 작업이 가능하다.

// A가 작업을 하고 -> B한테 작업을 넘겨주는데 
// A랑 B랑 메인페이지를 같이 작업하고 있을 때
// A는 상품 페이지 B는 장바구니 페이지
// 파일로 넘겨주고 어디가 다른지 눈으로 보고 이렇게
// 작업을 하면 시간도 오래걸리고 버그도 잡기 힘들다.
// 코드가 어디가 다른지 찾기 힘들다.

// 서버에 서로 푸쉬를 하면 서버에 있는 파일이 자동으로 갱신된다.
// A랑 B랑 작업을 하는데
// C라는 새로운 팀원이 생겼는데 A랑 B랑 파일 C파일
// git이라는 저장소에서 클론으로 파일을 내려받아서 바로 작업이 가능하다.

// git 설치

// git init
// 새로운 git 저장소를 생성할 때 사용하는 git 명령어

// git 저장소를 생성한 폴더에서
// 숨김파일 보기를 체크하면.git

// git add 커밋을 추가하는데 git 저장소에 추가하려고 대기
// git add README.md 이렇게쓰면 git 저장소에 README.md 추가하려고 대기

// git commit -m 커밋 메시지를 작성할 수 있다.
// git commit -m "first commit" 이거면 저장소에 추가하면서
// 작업 내용 메시지는 first commit이 메시지가 보인다.

// git branch -M 이건 마스터 브런치를 설정한다.
// git branch -M main 이렇게하면 main이라는 마스터 브런치 설정

// git remote add origin 깃 저장소 링크를 추가한다.
// origin : 복제한 원격 git 저장소의 기본 이름
// git remote : origin 복제한 url을 참조하기 위해 호출

// git remote add origin https://github.com/onedayonecommit/test1.git 이건
// https://github.com/onedayonecommit/test1.git(자신의 깃 저장소 주소)를 추가해준다.

// git push -u origin main 깃 저장소에 첫 커밋을 푸쉬

// git save

//dasfsdfe