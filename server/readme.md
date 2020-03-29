node server.js를 사용하면 실행이 됩니다. 8000번 포트에서 확인 가능합니다.

server.js 파일은 서버 실행여부고 mariadb 폴더 안 mariadb.js는 mariadb 데이터 정보 파일입니다. 

에러여부를 판단하기위해 server.js에서 response를 mariadb에 함수로 받았습니다.

데이터베이스로는 MariaDB를 사용했습니다.

회원가입 정보를 다 쓰고 create버튼을 누르면 MariaDB에 연동돼 들어갑니다.

회원가입, 로그인에 성공 시에 콘솔창에는 SUCCESS라고 뜨고 회원가입에 실패시 ERR를 반환하고 로그인에 실패시 FAIL이 뜹니다.

데이터 정보는 MariaDB에 저장됩니다.
