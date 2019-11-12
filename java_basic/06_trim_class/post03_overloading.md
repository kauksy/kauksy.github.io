> 제가 현재 작성하고 있는 내용은  [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.



## 클래스 다듬기

### 오버로딩(Overloading)

- 이름은 같지만, 매개변수 타입이나 개수, 리턴타입이 다른 메소드를 여러개 만들 수 있다. ▷메소드 오버로딩

- 매개변수의 개수나 타입이 다르면, 여러개의 생성자를 만들 수 있다. ▷생성자 오버로딩  

  ​    

#### 1. 메소드 오버로딩

- 매개변수의 유형과 개수를 다르게하여, 같은 이름의 메소드를 여러 개 가질 수 있게 하는 기술
- 메소드 오버로딩의 예

```java
public class MyClass2{
    
	public int plus(int x, int y){
        return x + y;
    }
    
    public int plus(int x, int y, int z){
        return x + y + z;
    }
    
    public String plus(String x, Strnig y){
        return x + y;
    }
    
    // 잘못 된 메소드 오버로딩
    public int plus(int number1, int number2){
       return number1 + number2;
    }
}
```

- 메소드 오버로딩은 매개변수가 달라야 한다. 변수명이 다르다고 해서 매개변수가 다른 것이 아니다. 따라서, 아래코드는 메소드 오버로딩이라고 볼 수 없다.  

  <u>매개변수의 타입  or 매개변수의 개수가 달라야 메소드 오버로딩이다.</u>

  ```java
  public int plus(int x, int y){
          return x + y;
      }
  ```

  ```java
  public int plus(int number1, int number2){
  		return number1 + number2;
  	}
  ```

  

#### 2. 생성자 오버로딩과 this

- **생성자 오버로딩**: 메소드와 마찬가지로 매개변수의 수와 타입이 다르면, 여러개의 생성자를 선언 할 수 있다.

- 생성자 특징 中 '프로그래머가 하나라도 생성자를 만들었다면, 기본 생성자는 자동으로 만들어지지 않는다.'

  - Q. 그러면 기본 생성자를 못쓰는걸까? 아니! 선언해서 쓸 수 있다!

  - 아래 코드를 참고해보자

    ```java
    public class Car{
        String name;
        int number;
        
    	public Car(){
            
        }
        
        // Car의 생성자가 오버로딩 되었다.
        public Car(String name){
            this.name = name;
        }
        
    	public Car(String name, int number){
            this.name = name;
            this.number =number;
        }
    }
    ```

    - 결국, **생성자도 오버로딩이 가능하다**는 것이다.
    - <u>매개변수의 수와 타입이 다르면 여러개의 생성자를 선언 할 수 있다.</u>

  - Car 클래스의 생성자 사용의 예

    ```java
    public class CarExam3{
        public static void main(String[] args){
            Car c1 = new Car("소방차");
            Car c2 = new Car(); // Car클래스에 기본생성자를 만들어 두었으므로 컴파일에러 없음
        }
    }
    ```

- **자기 자신의 생성자를 호출하는 this**  

  : 'this( )'는 자신의 생성자를 호출하는 것이다.  

  : 자기 자신의 생성자를 호출함으로써, 비슷한 코드가 중복되서 나오는 것을 방지 할 수 있다.

  - 예: 기본생성자 Car()를 호출했을 때, name은 "이름없음", number는 "0"으로 초기화 하기

  - 위에 기재한 Car 클래스를 이용한다.

    ```java
    public Car(){
        this.name = "이름없음";
        this.number = 0;
    }
    ```

    - 이렇게 작성할 경우, <u>기본 생성자 Car()의 코드는 public Car(String name, int number)의 생성자와 중복된다.</u> 이와 같은 **코드 중복은 this를 이용하여 해결** 할 수 있다.

    ```java
    public Car{
        this("이름없음", 0);
    }
    ```

    - 'this( )'는 자기 자신의 생성자를 호출한다.
