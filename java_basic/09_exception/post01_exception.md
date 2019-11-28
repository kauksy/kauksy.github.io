> 제가 현재 작성하고 있는 내용은  [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.



## 예외처리

### Exception

- 프로그램 실행 중, 예기치 못한 사건(예외)에 대한 처리

  

#### 1. 예외상황의 예

- Java는 정수를 정수로 나눌 때,  0으로 나누면 오류 발생(Arithmetic Exception)
- 프로그래머는 아래 코드의 J라는 변수에 0이 들어오는 예외상황을 미리 예측하고 처리 할 수 있다.

```java
public class ExceptionExam{
    public static void main(String[] args){
        int i = 0;
        int j = 3;
        int k = i/j;    
        
        System.out.println(k);
        System.out.printl("main exit");
    }
}
```



#### 2. 예외 처리하는 문법(try~catch~finally)

- 오류가 발생할 것이라 예상되는 try 라는 블록으로 감싼 후, 발생 할 오류와 관련 된 Exception을 catch블록에서 처리
- 오류가 발생했든 안했든 무조건 실행되는 finally라는 블록을 사용 할 수도 있다.
- finally 블록은 생략가능

```java
public class ExceptionExam{
    public static void main(String[] args){
        int i = 10;
        int j = 0;
        
        try{
            int k = i/j;
            System.out.println(k);
        }catch(ArithmeticException e){
            System.out.println("0으로 나눌 수 없습니다: " + e.toString());
        }finally{
            System.out.println("오류 발생 여부와 상관 없이 무조건 실행되는 블록");
        }
    }
}
```

- 실행결과

  - 0으로 나눌 수 없습니다: java.lang.ArithmeticException: /by Zero

    오류 발생 여부와 상관 없이 무조건 실행되는 블록

- Exception 처리하지 않았을 때는 Exception 발생한 시점부터 프로그램이 강제 종료 되었는데, catch라는 블록으로 Exception을 처리하니, 강제 종료되지 않고 실행이 잘 된다.

- try블록에서 여러종류의 Exception 발생 시, catch 블록을 여러개 두어 처리 가능하다.

- 모든  exception의 상위 클래스인 Exception 클래스

  - ~Exception의 이름을 가진 클래스들은 모두 Exception 클래스를 상속 받으므로, 예외 클래스에 Exception을 두게 되면 어떤 오류가 발생하든 하나의 catch블록에서 모든 오류가 처리 가능하다.

#### 3. Throws

- 예외가 발생했을 때, 예외를 호출한 쪽에서 처리하도록 던져준다.
- Exception 처리를 무시한다. 내가 exception 처리를 하지 않고, 나를 호출한 쪽에서 처리하라고 던져준다.

```java
public class ExceptionExam2{
    public static void main(String[] args){
        int i = 10;
        int j = 0;
        int k = divide(i, j);
        System.out,println(k);
    }
    
    public static int divide(int i, int j) throws ArithmeticException{
        int k = i/j;
        return k;
    }
}
```

- throws ArithmeticException 이라고 기재했지만, 사실은 Exception을 여러가지 기재 가능하다. 아예 최상위 클래스인 Exception을 사용해도 무방하다.
- throws: 메소드를 수행하다가 발생한 오류에 대해서 저는 처리하지 않아요! <u>나를 호출한 쪽</u>에서 처리해주세요!
  - 나를 호출한 쪽: divide 메소드를 호출한 부분
  - 그렇다면 위 소스코드를 수정 할 필요가 있겠다.

```java
public class ExceptionExam2{
    public static void main(String[] args){
        int i = 0;
        int j = 0;
        
        try{
            int k = divide(i, j);
            System.out.println(k);
        }catch(ArithmeticException e){
            System.out.println("0으로 나눌 수 없습니다.")
        }
    }
    
     public static int divide(int i, int j) throws ArithmeticException{
        int k = i/j;
        return k;
    }
}
```



#### 4. Exception  발생시키기

- 강제로 오류를 발생시키는 throw: 보통 오류를 떠넘기는 throws와 함께 사용된다.

```java
public class ExceptionExam{
    public static void main(String[] args){
        int i = 10;
        int j = 0;
        int k = divide(i,j);
        System.out.println(k);
    }
    public static int divide(int i, int j){
        int k = i/j;
        return k;
    }
}
```

- divide 메소드에서 0으로 나누기가 수행 되기 때문에 예외가 발생한다. 그래서 한번 수정해보기로 했다

  ```java
  public static int divide(int i, int j){
      if(j == 0){
          System.out.println("2번째 매개변수는 0불가");
          return 0;
      }
      int k = i.j;
      return k;
  }
  ```

- return o; : 결국, 0을 반환하게 되는데 실제 연산한 값이 0이 아니기 때문에, 해당 값으로 리턴 했다가는 더 큰 문제가 발생 할 수 있다. 그러므로 코드 재수정을 해보도록하겠다.

  ```java
  public static int divide(int i, int j) throws IllegalArgumentException{
      if(j == 0){
          throw new IllegalArgumentException("0으로 나눌 수 없어요.");
      }
      return i/j;
  }
  ```

- j가 0일 경우, new 연산자를 통하여 IllegalArgumentException 객체가 만들어진다. throw는 해당 라인에서 Exception이 발생함을 의미한다. 즉, 해당라인에서 '0으로 나눌 수 없어요.' 라는 오류가 발생한 것이다.

- IllegalArgumentException 이라는 클래스의 이름만 보아도, Argument가 잘못되었기 때문에 발생한 오류라는 것을 알 수 있다.

------

- divide 메소드를 호출한 쪽에서 오류처리

```java
public class ExceptionExam3{
    public static void main(String[] args){
        int i = 10;
        int j = 0;
    }
    try{
        int k = divide(i, j);
        System.out.println(k);
    }catch(IllegalArgumentException e){
        System.out.println("0으로 나누면 안됩니다.");
    }
    
    public static int divide(int i, int j) throws IllegalArgumentException{
        if(j == 0){
            throw new IllegalArgumentException("0으로 나눌 수 없어요.");
        }
        return i/j;
    }
}
```



#### 5. 사용자 정의 Exception

- Exception이나 RuntimeException을 상속받아서, Exception을 사용자가 정의해서 사용할 수 있다.
- 예

```java
public class ClassName extends Exception{
    // 이런 형태로 가능하다.
}
```

- checkedException: Exception 클래스를 상속받아 정의함
  - 반드시, 오류를 처리해야하는 Exception이 필요하다.
  - 예외처리 하지 않으면, 컴파일 오류를 발생시킨다.
- uncheckedException: RuntimeException 클래스를 상속 받아 정의함
  - 예외처리하지 않아도 컴파일시에는 오류를 발생시키지 않는다.
- 왜, 사용자 정의 Exception을 사용할까? : **코드의 직관성을 높여주기 위해**
  - 사용자 정의 Exception이 어떤 특별한 일을 해내는 것은 아니나, 클래스 이름만으로도 어떤 오류가 발생했는지 알려주어 코드의 직관성을 높여준다. 
- 예: RuntimeException을 상속 받은 **BizException** 객체(Exception 객체에서는 생성자만 지정해주면 됨)

```java
public class BizException extends RuntimeException{
    public BizException(String msg){
        super(msg);
    }
    
   public BizException(Exception ex){
       super(ex);
   }
}
```

- 이미 부모클래스가 같은 기능을 가지고 있는 생성자가 있기 때문에, 사용자가 정의한 exception객체에서 따로 해줄일은 없다. 해당 생성자를 부모의 생성자에게 전달만 시켜주면 된다.
- 업무를 처리하는데 필요한, 메소드를 가진 **BizService**클래스

```java
public class BizService{
    public void bixMethod(int i) throws BizException{
        System.out.println("비즈니스 로직이 시작 됨");
        if(i < 0){
           throw new BizException ("매개변수 i는 0 이상이어야 함")
        }
        System.out.println("비즈니스로직이 종료");
    }
}
```

- BizService를 이용하는 BizExam크래스

```java
public class BizExam{
    public static void main(String[] args){
        BizService biz = new BizService();
        biz.bizMethod(5);
        
        try{
            biz.bizMethod(-3); // 코드설명 참고
        }catch(Exception ex){
            ex.printStackTrace();
        }
    }
}
```

- 0 이하의 매개변수 값을 넘길 때, Exception이 발생기 때문에 try ~ catch 블록으로 처리한다.

  - 실행결과

  - 비즈니스 로직이 시작 됨

    비즈니스 로직이 종료

    비즈니스 로직이 시작 됨

    javaStudy.BizException: 매개변수 i는 0 이상이어야 함

    at javaStudy,BizService.bizMethod(BizService.java: 7)

    at javaStudy.BizExam.main(BizExam.java: 9)
