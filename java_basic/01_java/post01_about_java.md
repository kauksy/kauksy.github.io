
> 제가 현재 작성하고 있는 내용은  [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.



## 자바 시작하기


#### 1. 자바란?

- 자바의 탄생
  - 1995년, 썬 마이크로시스템즈에서 발표한 객체지향 언어
  - 현재 썬 마이크로시스템즈는 오라클에 인수 된 상태다.
- 자바의 특징
  - 쉬운 언어
    - C, C++ 언어의 문법을 기본으로 차용 된 언어
    - C, C++이 가진 어려운 문법 개념인 '포인터, 다중상속'을 제거
    - C와 C++에 비해 비교적 쉬운 언어
  - 플랫폼에 독립적
    - 자바는 JVM만 있으면 윈도우와 리눅스, 맥 등 어떤 플랫폼에서도 실행이 가능하다.
      - 애플리케이션 | JVM | 리눅스    ,   애플리케이션| JVM | 윈도우.. 등
    - 컴퓨터의 OS, CPU Architect에 대해 독립적
  - **객체지향 언어**
  - **메모리 관리를 자동으로 해준다.**



#### 2. 자바의 동작(개발 순서)

- 소스작성 → 작성한 소스 컴파일 → 컴파일한 소스를 JVM을 이용하여 실행

- 따라해보기

  -  따라해보기

    1.  <u>[소스작성]</u>   C:\temp 에 메모장으로 HelloWorld.java 파일을 작성(내 컴퓨터상 경로는 C:\Windows\temp)

    2.  <u>[컴파일]</u>  cmd 창 열기 →  cd HelloWorld.java 저장 위치 (HelloWorld.java 파일을 저장한 곳으로 이동) → cmd 창에 'javac HelloWorld.java' 입력 후 엔터 (javac: 컴파일하는 명령어) → 1~3 까지 수행하면 HelloWorld.class 파일이 만들어 진다.

    3. <u>[실행]</u>  java HelloWorld 라고 cmd 창에 입력 후 엔터 > cmd 창에 HelloWorld.java 에 작성했던 소스코드가 실행 됨을 확인 할 수 있다.

  - 이클립스로 따라해보기
    - 이클립스는 저장과 동시에 파일을 컴파일 한다. (.class 파일이 생김)
    - 이클립스에서 생성한 소스코드의 경로를 따라가보면, 초기에 src 하위에 java 파일을 만들어 놓은 것 외에도 <u>bin 하위에 class 파일이 생성 된 것을 알 수 있다.</u>
    - **소스파일에 이상이 있다면, bin 폴더에 class파일을 만들지 못한다.**

#### 3. 주석문

- 프로그램의 코드와 실행에는 영향을 주지 않는 문장

- 주석의 종류

  - 구현주석

    ```java
    // 행당위 주석
    
    /* 블럭단위 
    	 주석 
    */
    ```

  -  문서화 주석

     ```java
     /** 문서에 포함 할 내용을 작성
      * 소스코드가 없는 개발자들도 알아보기 쉽게 하기 위함
      * 문서화 주석은 클래스, 인터페이스 멤버 당 하나씩 가질 수 있다.
      * 선언 바로 전에 작성한다.
      * 이 클래스와 메소드의 역할을 남기기 위함
      * 클래스 위에는 누가 만들었는지, 무슨 용도인지 기재 (@author, @since, @version)
      * 메서드 위에는 파라미터 위에 기재 (@param, @return, @exception, @see)
      * /
     ```

     
