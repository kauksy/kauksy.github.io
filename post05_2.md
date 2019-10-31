> 제가 현재 참고하고 있는 이론적 내용과 소스코드는 모두 [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 듣고 정리하는 내용입니다. 



## 클래스와 객체

### 참조형(Reference Type)

- 클래스는 모두 참조형(Reference)이다.

- 참조형은(Reference Type) 기본형(Primitive Type)을 제외한 모든 타입이다.

- 앞서 배웠던 배열, 클래스 모두 참조형이다. 

  

#### 자바의 변수타입

- 자바는 변수를 사용하려면, 변수의 타입을 지정해 주어야 한다.

| 1. 기본형 (Primitive Type)       | 2. 참조형(Reference Type) |
| :------------------------------- | :------------------------ |
| ① 논리형: boolean                | 기본형을 제외한 모든 타입 |
| ② 문자형: char                   |                           |
| ③ 정수형: byte, short, int, long |                           |
| ④ 실수형: float, double          |                           |

- 기본형은 클래스가 아니다.

  ```java
  int i = 4;  
  ```

  - i 라는 4바이트 크기의 정수형 변수에 숫자 4를 저장

    <img src="C:\Users\SOO\AppData\Roaming\Typora\typora-user-images\image-20191031173720101.png" alt="image-20191031173720101" style="zoom:80%;" />

- 참조형은 클래스다. 기본형 타입을 제외한 모든 타입이다.

  ```java
  String str = new String("Hello");
  ```

  - 변수 str 앞에 String 이라는 클래스가 쓰임 (참조형)
  - new 연산자로 클래스를 메모리에 올려 둠 (이때 올라간 클래스를 인스턴스라 함)
  - str은 메모리에 올라간 인스턴스를 가리키는 변수, 참조하는 변수, Reference하는 변수이다.

  <img src="C:\Users\SOO\AppData\Roaming\Typora\typora-user-images\image-20191031174515443.png" alt="image-20191031174515443" style="zoom:90%;" />

  - 즉, str == Hello 이 아니라 참조만 하는 것이다.
  - str 변수에는 메모리의 위치 값만 저장 됨.
  - 메모리의 위치 값이 저장된다 하더라도 '어떤 메모리에 저장 되었는지' 그 정보를 알아 낼 방법은 無
  - 그렇기 때문에, "str 변수는 String 인스턴스를 참조한다" 라고만 알고 있으면 된다.
