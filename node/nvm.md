# NVM(Node Version Manager에 대한 설명)
## 설치

맥 OS 를 기준으로 설명을 한다. 

`nvm` 는 윈도우를 지원안함! 윈도우 사용자들은 아래 프로젝트를 참고.
 - [nvm-windows](https://github.com/coreybutler/nvm-windows)
 - [nodist](https://github.com/marcelklehr/nodist)

### 설치하기.

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
    
## 핵심사용법만 적어보기.

특정버젼 다운로드 하기 + 사용.

    nvm install 5.0

받은 버젼 사용하기.(교체)

    nvm use 5.0

설치된 버젼들 보기.

    nvm ls

설치할수 있는 버젼들 보기.

    nvm ls-remote

새 커맨드 창이 열릴때, 지정할 디폴트 node version 정하기.

    nvm alias default node

예제)

	nvm alias foo 0.10.36 	// 0.10.36 버젼 노드를 foo 라고 별칭 짓는다.
	nvm use foo // node -v 는 0.10.36
	nvm alias default foo // 새창이 열릴때 기본노드값은 이제 0.10.36이다.
