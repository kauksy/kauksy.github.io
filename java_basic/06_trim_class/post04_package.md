> 제가 현재 작성하고 있는 내용은  [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.



## 클래스 다듬기

### 패키지(Package)

- 자바도 컴퓨터 처럼, 관련 된 클래스를 폴더 별로 관리한다.

- 이때, 폴더 대신 사용되는 키워드가 '패키지'이다.

  - 관련 있는 클래스끼리 모아서, 하나의 패키지로 만든다.
  - 정확히는 클래스 or 인터페이스들을 묶은 묶음이다.
  - 패키지를 사용함으로써, <u>클래스들이 필요한 때만 사용 될 수 있도록</u>하고, 클래스를 패키지 이름과 함께 계층적인 형태로 사용함으로써 <u>다른 그룹에 속한 클래스와 발생할 수 있는 클래스 이름간의 충돌을 막아줌</u>으로 **클래스의 관리를 편하게 해준다.**

  ​    

#### 1. 패키지 정의 방법

- 이름: 보통 도메인 이름을 거꾸로 적은 후, 그 뒤에 프로젝트 이름을 붙여서 만든다. 물론, 프로젝트 이름뒤에 또 다른 이름이 나올 수도 있다.

  - '폴더명**.**폴더명**.**폴더명'의 형식으로 만들어진다.
  - 각각의 폴더명은 숫자로 시작할 수 없다.
  - 예
    - 도메인 이름: 8cruz.com
    - 프로젝트명: javaStudy
    - 만든 클래스명: Hello.java
  - 패키지명: com.eightcruz.javaStudy.Hello
    - 8cruz: 패키지명은 숫자로 시작할 수 없으므로 eightcruz 로 수정
    - 도메인을 사용하는 이유는 패키지가 중복되는 것을 막기 위함이다. 반드시 존재하는 도메인이 아니여도 무관하다.

- 패키지에 생성 된 클래스 사용하기  

  : java.lang 패키지를 제외하고, 다른 패키지에 있는 클래스를 사용하려면 import 구문을 적어주어야 한다.

  - import 구문 eclipse 단축키: ctrl + shitf + O

```java
package com.eightcruz.javaStudy;

public class Hello{
    
}
```

```java
package javaStudy;
import com.eightcruz.javaStudy.Hello;
public class HelloExam3{
    public static void main(String[] args){
        Hello hello = new Hello(); // import가 되어 있어야 컴파일 에러 발생 안함
    }
}
```

- 위의 'import ~ ' 코드는 'com.eightcruz.javaStudy' 패키지에 속한 Hello 클래스를 사용하겠다는 것을 컴파일러와 JVM에게 알리는 것이다. 
- 클래스 이름대신 '＊'를 사용하여 패키지 전체를 가져 올 수도 있다. → import com.eightcruz.javaStudy.*;

- cf. import 하지 않고 사용하는 방법
  - import를 사용하기 싫거나,
  - 각기 다른 패키지에 존재하는 같은 이름의 클래스 파일을 사용해야 할 때
  - 하기와 같이 전부 다 풀어서 쓸 수 있다. 그러면 import 하지 않고 사용 가능하다.

```java
com.eightcruz.javaStudy.Hello hello 
				= new com.eightcruz.javaStudy.Hello();
```



