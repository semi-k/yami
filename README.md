## 개발 환경
* node v18.12.1
* npm v9.1.2

## 개발 서버 구동
* 프로젝트 루트에서 ```npm i``` 실행하여 의존 패키지들 설치
* ```npm run dev``` 실행하여 개발 서버 구동
* 표 이미지를 배경으로 노출하려면 src/index.scss 내 body 태그의 background 주석 제거

## 빌드
* ```npm run build``` 실행 시 dist 폴더 및 index.html 생성
* 표 이미지가 배경에 포함되어서 빌드되면 src/index.scss 내 body 태그의 background 주석 처리
