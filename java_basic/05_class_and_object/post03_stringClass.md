> 제가 현재 작성하고 있는 내용은 [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.


## 클래스와 객체

### String 클래스

- 문자열을 포함 할 때, 자바에서 가장 多 사용하는 클래스

  

#### 1. String 클래스의 인스턴스 생성방법

##### 1) new 연산자를 사용하지 않고, 인스턴스를 만드는 경우

```java
String str1 = "Hello";
String str2 = "Hello";
```

- String 이 워낙 많이 쓰이다 보니, new 연산자를 사용하지 않고도 인스턴스를 만들 수 있는 특혜가 있다.

- 위의 코드를 수행하면? 

  : 메모리 중에서 변하지 않는 값(상수)이 저장 되는 영역에 "Hello"라는 문자열이 저장된다.

  : String str2 = "Hello"; 라는 코드가 실행 될 때, "Hello" 라는 문자열 상수는 이미 만들어져 있으므로 str1이 참조하고 있는 인스턴스를 참조하게 된다. **즉, str1과 str2는 같은 인스턴스를 참조하고 있다.**

##### 2) new 연산자를 사용해서, 인스턴스를 만드는 경우

```java
String str3 = new String("Hello");
String str4 = new String("Hello");
```

- 위의 코드를 수행하면?

  : new 연산자를 이용하여 인스턴스를 만들면, 인스턴스는 무조건 새롭게 만들어진다.

  : String str4 = new String("Hello"); 라는 코드가 실행 될 때, 인스턴스가 새롭게 만들어 지므로 **str3과 str4는 서로 다른 인스턴스를 참조한다.**

##### 3) 인스턴스 참조

- 인스턴스 참조에 대해서 좀 더 살펴보길 원한다면, 아래의 코드를 참조하는 것이 좋다.
- str1, str2, ..., str4 은 1)과 2)에서 만들어 놓은 것이다.

```java
if(str1 == str2) // TRUE : 같은 인스턴스를 참조
    System.out.println("str1과 str2는 같은 Reference 입니다.");
if(str1 == str3) // FALSE : 서로 다른 인스턴스를 참조
    System.out.println("str1과 str3는 같은 Reference 입니다.");
if(str3 == str4) // FALSE
    System.out.println("str3과 str4는 같은 Reference 입니다.");
```

- 참조변수끼리 == 로 비교하면서, 서로 같은 것을 참조하는지 비교한다.
  - <u>Reference 타입에서의 == 의 의미: '실제 가리키고 있는 메모리 주소가 같니?'</u>
  - 문자열 자체가 같은 값인지 비교 할 때는 .equals를 써야한다.

- String은 다른 클래스와 다르게, new 연산자를 사용하지 않고 인스턴스를 생성 할 수 있다. 사용 할 수 있다.

  따라서, 메모리를 아끼려면 new 연산자를 사용하지 않고 쓰면 된다.

- **String은 불변클래스이다**

  : String이 인스턴스가 될 때, 가지고 있던 값을 나중에 수정 할 수 없다.

  : 즉, <u>substring을 하든 concat을 하든 오리지널 값은 유지된다.</u>

  - String은 문자열과 관련 된 다양한 메소드를 가지고 있다. String이 가진 다양한 메소드를 호출한다 하더라도 String의 내부의 값은 불변한다. String이 가지고 있는 메소드 중, String을 반환하는 메소드는 모두 새로운 String을 생성해서 반환하기 때문이다. 

  - <u>= (대입연산자)를 써야지만 참조하는 값이 변한다.</u>

    ```java
    String str5 = "Hello World"
    String str6 = str5.substring(3); // substring: 문자열을 자른 결과를 반환
    ```

    - 위의 코드가 실행 되어도 str5의 값은 변하지 않는다.

    - <u>str6은</u> str5가 갖가지고 있는 문자열 중, 3번 째 위치 부터 자른 결과.

       즉, <u>새로운 String을 참조하게 된다.</u>
