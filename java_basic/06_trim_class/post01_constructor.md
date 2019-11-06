> 제가 현재 작성하고 있는 내용은  [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.



## 클래스 다듬기

### 생성자(Constructor)

- new 연산자 다음에는 반드시 생성자가 와야한다.

- 모든 클래스는 인스턴스화 될 때, 생성자를 사용한다.

  ```java
  public class CarExam{
      Car c1 = new Car(); // 여기서, 'new Car();' 의 Car가 생성자가 된다.
  }
  ```

  

#### 1. 생성자 선언하기

```java
public class 클래스명{
	타입 필드명;
    public 클래스명(매개변수_목록){
        // ... 생성자 블록
    }
    
    public 리턴타입 메소드명(매개변수_목록){
            // .. 일번적인 메소드 블록
    }
}
```

- 생성자 블록은 메소드와 다르게 리턴 타입을 가지고 있지 않다.



#### 2. 생성자(블록)의 특징

- 메소드와는 다르게 리턴 타입을 가지고 있지 않다.

- 매개변수가 없는 생성자 = 기본 생성자

- 생성자를 프로그래머가 만들지 않으면, 컴파일 할 때 기본 생성자가 만들어진다.

  - 이럴 때, 기본 생성자가 만들어 진다.

    ```java
    public class Car{
    	String name;
        int number;	// 생성자를 프로그래머가 따로 만들지 않은 상태
    }
    ```

  - 기본 생성자의 예

    ```java
    public class Car{
        // ..코드중략
        public Car(){
            // 컴파일 시, 만들어지는 기본생성자의 예
        }
    }
    ```

  - Car 객체 만들어서 사용하기 :

    : Car 클래스의 기본 생성자를 사용하는 것이다.

    ```java
    public class CarExam2{
    	Car c1 = new Car();
    }
    ```

- But, 프로그래머가 생성자를 하나라도 만들었다면 기본 생성자는 자동으로 만들어지지 않는다.



#### 3. 부연설명

- 어떤 객체를 만들 때, 우리는 그 객체가 처음부터 어떤 특정한 값을 갖기로 원할 때가 있다.

- 생성자는 객체가 될 때, 필드를 초기화하는 역할을 수행한다.

  - **자동차 객체가 만들어 질 때, 반드시 이름을 가지고 만들어지도록 하고싶다.**

  - **아래 코드와 같은 생성자를 Car클래스에 만들면 된다.**

    ```java
    public Car(String n){
    	name = n;
    }
    ```

    - 이렇게 되면 Car라는 객체가 생성 되면서, name이 초기화 된다.

    - 또한, **CarExam2클래스에 만들어 두었던 new Car(); 에 컴파일 에러가 발생**할 것이다.

    - 이는 '프로그래머가 생성자를 하나라도 만들었다면, 기본 생성자는 자동으로 만들어지지 않는다.' 는 개념과 일맥상통 한다.

    - **더 이상 기본 생성자로 Car의 객체를 만들어 낼 수 없다. 사용자가 정의한 생성자로 객체를 만든다.**

      

  - **따라서, CarExam2 클래스에서 Car 객체는 아래와 같은 형태로 만들 수 있다.**

    ```java
    public class CarExam2{
    	Car c1 = new Car("소방차");
    	Car c2 = new Car("구급차");
    }
    ```

    