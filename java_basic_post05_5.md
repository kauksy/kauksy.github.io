> 제가 현재 작성하고 있는 내용은  [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.



## 클래스와 객체

### 메소드

- 메소드 선언 방법은 자명히 알고 있는 내용이라 포스팅은 생략
- 혹시라도 필요하신분은 [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문 강의를 참고하시면 됩니다.



#### 1. 메소드는

- 메소드는 클래스가 가지고 있는 기능으로 클래스 안에 선언된다.
- 메소드는 입력 값이 있고, 그 입력 값을 받아 무언가 한 다음, 결과를 도출해 내는 수학의 함수와 비슷한 개념이다.
- 입력값: 매개변수, 결과값: 리턴값
- 인자(Argument): 어떤 함수 호출시, 전달되는 값
- 매개변수(Parameter): 전달 된 인자를 받아들이는 변수





#### 2. 메소드의 사용

```java
public class MyClass{
	public void method1{
        System.out.println("method1 의 실행")
    }
    
    public int method2(int x, int y){
        System.out.println(x + "와 " + y + "를 이용하는 method2")
        return 10; 
    }
}
```

```java
public class MyClassExam{
    public static void main(String[] args){
        MyClass my = new MyClass();
        
        my.method1();
        int x =my.method2(3,4);
        System.out.println(x);
    }
}
```

- 실행결과

  ```
  method1 의 실행
  3와 4를 이용하는 method2
  10
  ```

- 메소드를 사용하기 위해서는 메소드가 정의 된 클래스인 MyClass가 생성되어야 한다.

  ```java
  MyClass my = new MyClass();
  ```

  MyClass 안의 것을 가져다 쓰려면, MyClass 인스턴스를 메모리에 올려야 한다.

  my에 MyClass 객체를 넣어서 생성해준다.

- 객체를 생성할 때는 new 연산자를 이용한다.
  - new 연산자: '클래스를 메모리에 올려주세요' 요청하는 것.
  - 위의 코드에서 my는 메모리에 올라간 MyClass를 참조하는 레퍼런스 변수이다.

- 메소드를 사용 할 때는 생성 된 클래스를 참조하는 '레퍼런스 변수.메소드명()' 으로 사용할 수 있다.
