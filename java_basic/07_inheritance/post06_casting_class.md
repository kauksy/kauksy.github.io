> 제가 현재 작성하고 있는 내용은  [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.



## 상속

### 클래스의 형 변환(Casting)

- **부모타입으로 자식객체를 참조하게 되면**, **부모가 가지고 있는 메소드만 사용 할 수 있다.**

- 자식객체가 가지고 있는 메소드의 속성을 사용하고 싶다면, 형 변환해야한다.

  

#### 1. 형변환의 예

```java
public class Car{
    public void run(){
        System.out.println("Car의 run메소드");
    }
}
```

```java
public class Bus extends Car{
    public void ppangppang(){
        System.out.println("빵빵");
    }
}
```

```java
public class BusExam{
    public static void main(String[] args){
        Car car = new Bus(); // 이런 경우가, 부모타입으로 자식객체를 참조하는 경우다.
        car.run();
        car.ppangppang(); // 여기서, 컴파일에러 발생
    }
}
```

- ppangppang() 메소드를 호출하고 싶다면, Bus 타입의 참조변수로 참조해야 한다.

  - 부모타입을 자식 타입으로 형변환 해야한다.

  ```java
  Bus bus = (Bus) car;
  bus.run();
  bus.ppangppang();
  ```

------



- 객체끼리도 형변환이 가능하다.

- 부모타입으로 자식객체를 참조하게 되면, **묵시적 형변환**

  - 예

  - ```java
    Car car = new Bus();
    ```

  - 큰 것(부모)에서 작은 것으로 변환하므로 명시할 필요 없다. 묵시한다.

  - 부모의 그릇이 자식의 그릇보다 크다.

- 자식타입으로 부모객체를 참조하게 되면, **명시적 형변환**

  - 예

    ```java
    Bus bus = (Bus) car;
    // Bus bus = car; 는 불가능하다.
    ```

- 단, 이렇게 형변환 할 때는 부모가 참조하는 인스턴스가 형변환하려는 자식타입 일 때만 가능하다.

  - 즉, 아래와 같은 경우만 가능하다.

    ```java
    Car car = new Bus(); // 이런 식의 코드가 전제 되어야 가능하다.
    // Car car = new Car(); 이럴 경우, 명시적 형변환이 불가능하다.
    ```

    
