## 프로젝트 실행 방법

패키지 설치
```bash
npm install
# or
yarn install
# or
pnpm install
```
개발서버 실행
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
http://localhost:3000 로 접속합니다. (과제에 "/" 페이지 구현사항이 없어 middleware에서 "/products" 페이지로 리다이렉팅 진행됩니다.)

## 프로젝트 구조
컴포넌트 작성은 최대한 독립적으로 작은개념에서 큰개념으로 넘어가도록 설계하고자 하였습니다.

- `components/`: 기능별로 폴더를 구분하였습니다.
- `hooks/`: 1차적으로 기능별로 폴더를 구분후 /queries(tanstack quries), /store(글로벌 상태관리), /custom 으로 폴더를 세분화 할 예정이였으나 현재 프로젝트에서는 queries만 사용하였습니다.
- `lib/`: util, api 등등 자주 사용하는 함수 재사용을 위해 폴터들 구분하였습니다
- `types/`: 기능별 타입으로 구분하였습니다.

## 개발이슈
- 상품 리스트 뷰 타입에 관한 접근을 어떻게 할지 고민하다가 nextjs api route로 api를 만들어 쿠키의 값을 보관해놓은 다음 24시간을 체크해 응답 값을 내려주는 방법과 클라이언트 사이드에서도 클라이언트가 초기화가 되지 않는다는 가정하여 tanstack query를 사용하여 24시간 동안 캐싱을 설정하는 방법을 택하였습니다. tanstak persist를 통한 localstorage 보관도 고려해 보았으나 보일러 플레이트가 클 것 같은 점과 실제 서비스를 운영한다면 뭔가 하드코딩을 하는 느낌이라 유동적인 대처를 고려해 server에서 받아온다는 가정하에 진행하였습니다.
