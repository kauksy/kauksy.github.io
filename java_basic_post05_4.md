> 제가 현재 참고하고 있는 이론적 내용과 소스코드는 모두 [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 듣고 정리하는 내용입니다. 



## 클래스와 객체

### 필드선언

- 앞서만든 Car라는 객체를 생각해보자
- 자동차는 이름과 번호를 가지고 있고, 자동차는 달리고 멈추는 기능이 있다.
- 여기서 가지고 있는 것을 속성이라 한다. (기능: 메소드)
- 이러한 속성을 필드(Field)라고 한다.
- 필드 = 속성      ( cf.메소드 = 기능, 물체의 행동, class의 동작 )



#### 1. 속성을 가진 Car 클래스 선언

- 이름과 번호를 속성으로 가짐

  ```java
  public class Car{
      String name;
      String number;
  }
  ```

#### 2. Car 클래스 인스턴스화 하기

```java
public class CarExam{
    public static void main(String[] args){
        Car c1 = new Car(); // new연산자 뒤에 있는 생성자를 사용해서, 메모리에 객체 만들기
        Car c2 = new Car(); // Car라는 인스턴스가 메모리에 2개 만들어짐. 
        					// 객체별로 name과 number 속성을 가진다.
        
        c1.name = "소방차";
        c1.number = 1234;
        
        c2.name = "구급차";
        c2.number = 1004;
        
        String name = c2.name; // c2가 참조하는 객체의 name을 String타입변수 name도 참조하게 됨.
    }
}
```

