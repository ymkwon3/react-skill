# 프로젝트 소개

## 항해99 리액트 2주차 과제입니다.


##  1.제작 기간

2022.03.25 ~ 2022.03.31


## 2. 사용 기술

* Framework: React


## 3. 핵심 기능

* react-redux, firestore를 통한 상태관리
  
* 단어 추가, 수정, 삭제기능
  - <br>react-redux의 미들웨어를 통해 firestore에 추가,수정,삭제를 진행하고, redux에 상태변화를 요청합니다.

* 단어 체크 기능
  - <br>숙지 완료한 단어를 체크 할 수 있으며, 체크된 단어의 상태는 firestore, redux에 저장됩니다.

* 무한 스크롤
  - <br> IntersetionObserver를 이용한 무한 스크롤 구현

* 검색 기능
  - <br> 용어 이름 검색을 통한 데이터 불러오기


![image](https://user-images.githubusercontent.com/48580444/161012007-f7abc3ab-3bc8-44e1-82e6-1ecba52a042b.png)
![image](https://user-images.githubusercontent.com/48580444/161012271-b495a6f4-084a-4c1d-a71e-c716ef70e276.png)
![image](https://user-images.githubusercontent.com/48580444/161012384-79e344a5-dbe0-4d66-a4ce-2243a8328ac9.png)


* 부가 기능
  - <br> 자전거 애니메이션(완료 상태 비율을 계산해 위치 이동), 헤더 클릭 시 primary color 변경, 

  

## 4. 회고

react-redux가 동작하는 방식에 대해 자세히 알 수 있었고, 서버와 통신할 때 어떠한 방식으로 주고 받아야 상태관리가 효율적인지에 대해서도 알 수 있었다. 애니메이션과 컬러변화와 같은 css를 적당히 만져봐서 기분이 좋아지는 프로젝트였다.
