> 제가 현재 작성하고 있는 내용은  [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.



## 클래스 다듬기

### this

- 객체 자신을 참조하는 키워드 'this'

- '내 구성요소! 내꺼!' 라는 의미이다.

- 현재 객체·자기자신을 나타낸다.  

    

#### 1. this의 사용

```java
public class Car{
	String name;
    int number;
    
    public Car(String n){	// 매개변수 n을 name으로 바꾼다.
        name = n;		// this.name = name; 으로 바꾼다.
    }
}
```

- Car 클래스의 생성자를 보면, 매개변수의 'n'이 무엇을 의미하는지 한눈에 파악하기 어렵다.
- 변수의 이름은 한눈에 알아볼 수 있도록 정하는게 바람직하므로 'n'을 'name' 으로 변경한다.
- 그렇게 되면, 'name = n;' 의 코드가 'name = name;' 으로 바뀌게 된다.
- 'name = n;' 의 코드는 Car 클래스의 필드인 name을, 매개변수로 넘어온 n의 값으로 하고 싶은 것이기 때문에 'name = name;' 으로 코드를 변경하면 다시 의미가 모호해지는 코드가 생긴다.
- 모호해진 'name = name;'을 명확히 할 필요가 있다.
- So, this를 쓴다. 컴파일러와 JVM이 알아들을 수 있도록 '이 클래스에서 사용하는걸 가리키는거야!' 라고 말하는 것이다.

```java
public class Car{
	String name;
    int number;
    
    public Car(String name){
        this.name = name;
    }
}
```

- this.name 은 Car클래스 필드의 name을 말한다.
- '=' 뒤에 있는 name은 매개변수 name을 말한다.
- 클래스 안에서 자기 자신이 가지고 있는 메소드를 사용할 때도 this.메소드명()으로 호출 할 수 있다.

