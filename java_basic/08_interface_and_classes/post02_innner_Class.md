> 제가 현재 작성하고 있는 내용은  [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.



## 인터페이스와 다른 형식의 클래스

### 내부 클래스

- 내부 클래스: 클래스 안에 선언 된 클래스

- 내부 클래스는 선언하는 위치에 따라 4가지 형태가 있다.

  


#### 1. 중첩 클래스(= 인스턴스 클래스)

- 클래스 안에 인쇼턴스 변수, 즉 필드를 선언하는 위치에 선언 되는 경우

```java
public class InnerExam1{
    class Cal{
        int value = 0;
        public void plus(){
            value++;
        }
    }
    public static void main(String[] args){
        InnerExam1 t = new InnerExam1();
        InnerExam1.Cal cal = t.new Cal();
        
        cal.plus();
        System.out.println(cal.value);
    }
}
```

- Cal 클래스를 사용하기 위해서는 외부에 있는 InnerExam1의 객체를 만든 후에, 하기 코드와 같은 방법으로 Cal 객체를 생성한 후 사용 가능하다. 혼자 독자적으로 사용 될 수 없다.

  ``` java
  InnerExam1.Cal cal = t.new Cal();
  ```



#### 2. 정적 중첩 클래스 (= static 클래스)

- 내부 클래스가 static으로 정의 된 경우

```java
public class InnerExam2{
    static class Cal{
        int value = 0;
        public void plus(){
            value++;
        }
    }
  public static void main(String[] args){
      InnerExam2.Cal cal = new InnerExam2.Cal();
      
      cal.plus();
      System.out.println(cal.value);
  }
}
```

- 필드를 static으로 선언한 것과 같다. (공유)
- 이 경우에는 InnerExam2 객체를 생성 할 필요없이 'new InnerExam2.Cal();'으로 객체를 생성 할 수 있다.
  - static한 필드에 접근 할 때도 classdlfma.필드로 접근했었다.



#### 3. 지역중첩 클래스(= 지역 클래스)

- 메소드 안에 클래스를 선언한 경우

```java
public class InnerExam3{
    public void exec(){
        class Cal{
            int value = 0;
            public void plus(){
                value++;
            }
        }
        Cal cal = new Cal();
        cal.plus();
        System.out.println(cal.value);
    }
    publc static void main(String[] args){
        InnerExam3 t = new InnerExam3();
        t.exec();
    }
}
```

- 메소드 안에서 내부 클래스를 이용 할 수 있다.
- InnerExam3의 객체만 만들면 바로 사용 할 수 있다.



#### 4. 익명 클래스(= 익명 중첩클래스/ 익명 내부 클래스)

```java
public abstract class Action{
    public abstract void exec();
}
```

```java
public class MyAction extends Action{
    public void exec(){
        System.out.println("exec");
    }
}
```

- 여기까지가 일반적인 구현 형태

```java
public class MyActionExam{
    public static void main(String[] args){
        Action action = new MyAction();
        action.exec();
    }
}
```

- MyAction을 사용하지 않고, Action을 상속 받는 익명 클래스를 만들어서 사용

```java
public class MyActionExam{
    public static void main(String[] args){
        Action action = new Action(){	// 설명1
            public void exec(){		// 설명2
                System.out.println("exec");
            }
        };
        action.exec(); // exec 메소드 호출
    }
}
```

- 설명1: 생성자 다음에 중괄호를 열고, 닫는 것이 나온다.
  - 이것은 해당 생성자 이름에 해당하는 클래스를 상속받는 이름 없는 객체를 만든다는 것을 뜻한다.
  - 이렇게 되면 MyAction 클래스를 아예 만들 필요가 없어진다.

- 설명2: 이 중괄호 안에는 메소드를 구현하거나, 메소드를 추가 할 수 있다.
  - 이렇게 생성 된  이름 없는 객체를 action이라는 참조변수가 참조하게 하고, exec() 메소드를 호출한다.
- **익명클래스를 만들어서 사용하는 경우**
  - 익명클래스를 만드는 이유는 Action을 상속받는 클래스를 만들 필요가 없을 경우를 대비한 것이다.
  - Action을 상속 받는 클래스가 해당 클래스에서만 사용되고, 다른 클래스에서는 사용되지 않는 경우에 익명 클래스를 만든다.
