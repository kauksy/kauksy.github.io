> 제가 현재 작성하고 있는 내용은  [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.



## 상속

### 상속(Inheritance)

- 부모가 가진 것을 자식이 물려 받는 것, 자식에게 물려주는 것

- 즉, 자식이 '부모가 가지고 있는 것'을 사용 할 수 있게 된다.

  ​    

#### 1. 상속 받는 방법

- 클래스명 **extends** 부모 클래스명
- 예: Car 클래스를 상속받은 Bus클래스

```java
public class Car{
    
}
```

```java
public class Bus extends Car{
}
```

- 부모 클래스에 있는 메소드 사용하기(= 추가하기)
  - Bus 클래스는 어떤 코드도 가지고 있지 않지만, Car클래스를 상속 받았기 때문에 run메소드를 사용 할 수 있다.

```java
public class Car{
    public void run(){
        System.out.println("달리다");
    }
}
```

```java
public class BusExam{
    public static void main(String[] args){
        Bus bus = new Bus();
        bus.run(); // Car클래스의 run메소드가 실행
    }
}
```

- Bus에 메소드 추가하기
  - Bus는 Car를 상속 받았기 때문에, Car클래스의 run메소드와 Bus 클래스의 ppangppang 메소드를 사용 할 수 있다.
  - 이렇게 **부모가 가진 메소드 외에 추가로 메소드를 선언**하는 것을 **확장**하였다고 표현한다.

```java
public class Bus extends Car{
    public void ppangppang(){
         System.out.println("빵빵");
    }
}
```



