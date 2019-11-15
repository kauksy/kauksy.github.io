> 제가 현재 작성하고 있는 내용은  [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.



## 인터페이스와 다른 형식의 클래스

### 인터페이스(Interface)

- 인터페이스: 서로 관계가 없는 물체들이 상호작용을 하기 위해서 사용하는 장치나 시스템-

  

#### 1. 인터페이스 만들기

- 인터페이스를 정의하는 방법
  - 예: 추상메소드와 상수를 정의 할 수 있다.

```java
public interface TV{
    public static final int MAX_VOLUME = 100;
    public static final int MIN_VOLUME = 0;
    
    public abstract void on();
    public abstract void off();
    public abstract void volume(int value);
    public abstract void channel(int number);
}
```

- 인터페이스에서 정의한 변수는 상수기 때문에, 아래 LedTV 클레스에서는 수정 할 수 없다. 값을 달리하고 싶으면, 애초에  LedTV에서만 정의 했어야한다. 물론 Main에서 '=' 연산자로 대입은 가능하다.
- static final과 abstract 없이 메소드를 선언해도 컴파일시 자동으로 abstract이 생긴다.



#### 2. 인터페이스 사용하기

- 인터페이스 사용하는 방법: 인터페이스는 사용할 때, 해당 인터페이스를 구현하는 클래스에서 implements 키워드를 이용한다.
- 인터페이스가 가지고 있는 매소드를 하나라도 구현하지 않는다면, 해당 클래스는 추상클래스가 된다.
- 즉, TV(인터페이스)에 구현 된 메소드를 몽땅! 전부! 구현해야한다. 하나라도 누락되면 LedTV클래스는 추상클래스가 된다.

```java
public class LedTV implements TV{
    public void on(){
        System.out.println("켜다");
    }
    
    public void off(){
        System.out.println("끄다");
    }
    
    public void voulume(int value){
        System.out.prinln(value + "로 볼륨을 조절");
    }
    
    public void channel(int number){
        System.out.prinln(number + "로 채널을 조정");
    }
    
}
```

```java
public class LedExam{
    public static void main(String[] args){
        TV tv = new LedTV();
        tv.on();
        tv.volume(50);
        tv.channel(11);
        tv.off();
    }
}
```

- 참조변수의 타입으로 인터페이스를 사용할 수 있다. ( = 인터페이스도 타입이 될 수 있다.)
- 이 경우에는 인터페이스가 가진 메소드만 사용 할 수 있다.
  - TV라는 인터페이스는 타입이 될 수 있으나, TV가 가지고 있는 메소드만 사용 할 수 있다.

- 만약 TV 인터페이스를 구현하는 LcdTV를 만들었다면, 위의 코드에서 new LcdTV(); 로 생성자를 변경하여도 프로그램은 똑같이 동작한다. 
- 동일한 인터페이스를 구현한다 = 클래스 사용법이 같다.
  - 클래스는 이러한 인터페이스를 여러개 구현 할 수 있다.



#### 3. 인터페이스의 Default메소드

-  Java8이 등장하면서, 인터페이스 정의가 약간 달라짐

##### 1) default 메소드

```java
public interface Calculator{
    public int plus(int i, int j);
    public int multiple(int i, int j);
    
    default int exec(int i, int j){
        return i+j;
    }
}
```

```java
public class MyCalculator implements Calculator{
    @Override
    public int plus(int i, int j){
        return i+j;
    }
    @Override
    public int multiple(int i. int j){
        return i * j;
    }
}
```

```java
public class MyCalculatorExam{
    public static void main(String[] args){
        Calculator cal = new MyCalculator();
        int value = cal.exec(5,10);
        System.out.println(value);
    }
}
```

- default: 인터페이스는 본래 추상 메소드와 상수를 정의할 수 있지만, Java8 부터 default 키워드를 이용하여, 메소드를 구현 할 수 있다.
  - 기존방식은, 인터페이스가 변경 되면 인터페이스를 구현하는 모든 클래스들이 해당 메소드를 구현해야 하는 문제점이 있었다. 이런 문제를 해결하기 위해, 인터페이스에 메소드를 구현 해 놓을 수 있도록 하였다.
- 또한, 이를 구현하는 클래스는 default메소드를 오버라이딩 할 수 있다.



##### 2) static 메소드

```java
public interface Calculator{
    public int plus(int i, int j);
    public int multiple(int i, int j);
    
    default int exec(int i, int j){
        return i + j;
    }
    static int exec(int i, int j){
        return i * j;
    }
}
```

```java
public class MyCalculatorExam{
    public static void main(String[] args){
        Calculator cal = new MyCalculator();
        int value = cal.exec(5, 10);
        System.out.println(value);
        
        int value2 = Calculator.exec(5, 10); // static 메소드 호출
        System.out.println(value2);
    }
}
```

- 인터페이스에서 정의한 statuc 메소드는 반드시, **인터페이스명.메소드** 형식으로 호출해야 한다.
- 인터페이스에 static 메소드를 선언함으로써, 인터페이스를 이용하여 간단한 기능을 가지는, 유틸리티성 인터페이스를 만들 수 있게 되었다.
- Calculator cal = new Calculator(); 하면 컴파일 오류가 발생한다. 인터페이스로 인스턴스화 할 수 없다.
