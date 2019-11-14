> 제가 현재 작성하고 있는 내용은  [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.



## 상속

### 오버라이딩(Overriding)

- 부모가 가지고 있는 메소드와 똑같은 모양의 메소드를 자식이 가지고 있는 것.

- 즉, 오버라이딩이란 메소드를 재정의 하는 것이다.

- 부모 클래스의 메소드를 자식 클래스에서 재정의하여 사용하는 것이다.

  ​    

#### 1. 메소드 오버라이딩의 예

```java
public class Car{
	public void run(){
        System.out.println("Car가 달린다.");
    }
}
```

```java
public class Bus extends Car{
}
```

```java
public class BusExam{
    public static void main(String[] args){
        Bus bus = new Bus();
        bus.run();
    }
}
```

- Car클래스를 상속 받은 Bus클래스는 부모 클래스가 가진 run메소드를 사용할 수 있다.
- BusExam클래스를 실행하면 *"Car가 달린다."* 가 출력 된다.

  

------

- Bus 클래스에 부모가 가진 run 메소드를 재정의하여 선언 → 오버라이딩

```java
public class Bus extends Car{
    @Override
    public void run(){
        System.out.println("Bus가 달린다.");
    }
}
```

- BusExam  실행 시, *"Bus가 달린다."* 가 출력 된다.
- 메소드를 오버라이딩 했기 때문에, 항상 자식 클래스에서 정의된 메소드가 호출 된다.

------

- 오버라이딩 한다고 해서, 부모의 메소드가 사라지는 것은 아니다.
- super 키워드를 이용해서, 부모의 메소드를 호출 할 수 있다.

```java
public class Bus extends Car{
    @Override
    public void run(){
        super.run();
        System.out.println("Bus가 달린다.");
    }
}
```

- 위의 코드 실행 시, 아래와 같은 결과를 출력한다.

  Car가 달린다.

  Bus 달린다. 
