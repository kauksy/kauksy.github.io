> 제가 현재 작성하고 있는 내용은  [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.
  


## 상속

### 추상 클래스(Abstract Class)

- 구체적이지 않은 클래스

  ​    

#### 1. 추상 클래스란?

- 추상 클래스는 클래스 앞에 abstract 키워드를 이용해서 정의

- 추상 클래스는 미완성의 추상 메소드를 포함 할 수 있다.

  - 추상메소드: 내용이 없는 메소드, 구현되지 않는 메소드
  - 추상메소드는 리턴 타입 앞에 abstract이라는 키워드를 붙여야 한다.

- 추상 클래스는 인스턴스를 생성 할 수 없다.

  - 부모로서의 역할은 수행 할 수 있지만, 객체는 될 수 없다. 객체는 구체적인 것들만 가능하다.

- 추상 클래스는 추상적이고 모호하지만, 추상 클래스를 상속 받게 될 보다 구체적인 클래스들의 공통점을 뽑아서 모아둘 수 있다.

  - 예: 음식 추상클래스 - 음식명, 칼로리, 가격 등/  새 추상클래스 - 서식지, 먹이, 울음소리 등

      

#### 2. 추상 클래스 정의하기

```java
public abstract clss Bird{
    public abstract void sing();
    public void fly(){
        System.out.println("날다");
    }
}
```

- 메소드가 하나라도 추상 메소드인 경우, 해당 클래스는 추상 클래스이다.

- 새가 어떻게 우는지 잘 모르겠다. 어떻게 구현 할 지 모르겠다. → 추상 메소드로 만든다.

    

- 새(Bird) 클래스를 상속받는 클래스 만들기

```java
public class Duck extends Bird{
	@Override
    public void sing(){
        System.out.println("꽥꽥");
    }
}
```

- Duck 클래스 테스트하기

```java
public class DuckExam{
	public static void main(String[] args){
        Duck duck = new Duck();
        duck.sing();	// '날다' 출력
        duck.fly();	// '꽥꽥' 출력
    }
}
```

- DuckExam 클래스에서, 'Bird bird = new Bird();'로 Bird 클래스를 인스턴스화 할 수 없다.
- Bird와 같은 추상 클래스는 부모로서의 역할은 하지만, 추상 클래스 자체를 이용해서 객체를 생성하는 등의 방법으로는 사용이 불가하다.
