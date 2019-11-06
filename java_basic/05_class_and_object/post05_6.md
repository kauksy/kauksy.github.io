> 제가 현재 작성하고 있는 내용은  [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.



## 클래스와 객체

### 변수의 scope와 static

#### 1. 변수의 scope

- 프로그램상에서 사용되는 변수들은 사용 가능한 범위를 가진다.
- 그 범위를 '변수의 scope' 라고 한다.



#### 2. 변수가 선언 된 블럭이 그 변수의 scope

```java
public class VariableScopeExam{
	int globalScope = 10;  //globalScope의 사용범위는 클래스 전체
    
    public void scopeTest(int value){  //int value는 scopeTest메소드 안에서만 사용가능
    	int localScope = 10;		   //localScope도 scopeTest메소드 안에서만 사용가능
        
        System.out.println(globalScope);
        System.out.println(localScope)
        System.out.println(value)
    }
}
```

- 즉, 클래스 속성으로 선언 된 변수의 scope: 클래스 전체
- 매개변수로 받은 변수의 scope: 메소드 내부
- 메소드 블럭 내 변수의 scope: 메소드 내부
- 변수가 선언 된 블럭이 그 변수의 scope이다. 사용가능 한 범위이다.



#### 3. main 메소드 에서 사용하기

```java
public VariableScopeExam2{
    int globalScope = 10;
    
    public static void main(String[] arge){ // main 메소드 안에 있는 내용 모두 오류 발생
        System.out.println(globalScope);
        System.out.println(localScope);
        System.out.println(value);
    }
    
    public void scopeTest(int value){
        int localScope = 20;
        ...(중략)...
    }
}
```

- main은 static한 메소드이다. 

- <u>static한 메소드는 static하지 않은 필드를 사용 할 수 없다.</u>

- 같은 클래스 안에 선언 된 globalScope 마저 사용이 불가하다.

- Static한 필드와 변수는 static하지 않은 메소드에서 사용가능하다.

  ![image-20191102102121792](https://user-images.githubusercontent.com/14012780/68064094-98907a00-fd5a-11e9-8854-1dbc980a13f4.png)
  
  #### 4. static

- main은 static한 메소드이다. static한 메소드는 static하지 않은 필드를 사용 할 수 없다.

- 그렇다면 static하지 않은 변수들을 static한 메소드 안에서 사용하려면 어떻게하면 될까?

  : 객체를 생성하고 사용하면 된다.

  ```java
   VariableScopeExam v1 = new VariableScopeExam();
   VariableScopeExam v2 = new VariableScopeExam(); // reference 변수 v1, v2
  ```

- static한 필드나 메소드는 클래스가 인스턴스화 되지 않아도 사용 할 수 있다.

  (= 객체를 생성하지 않아도 사용 할 수 있다.)

- static한 변수는 공유된다

  : static하게 선언 된 변수는 값을 저장 할 수 있는 공간이 하나만 생성된다.

  그러므로, 인스턴스가 여러개 생성 되어도 static한 변수는 하나다.

- static 변수 = class변수

  : 값을 저장 할 수 있는 공간이 하나 밖에 없어서 값을 공유한다.

  : static 변수는 인스턴스가 아닌 클래스에 귀속 된다. 

  따라서, 인스턴스가 여러개 여러개 생성 되어도 static한 변수는 오직 하나다.

```java
public class VariableScopeExam{
    int globalScope = 10;
    static int staticVal = 7;
    
    public static void main(String[] args){
        VariableScopeExam v1 = new VariableScopeExam();
        VariableScopeExam v2 = new VariableScopeExam(); // reference 변수 v1, v2
        
        v1.globalScope = 20;
        v2.globalScope = 30;
        
        System.out.println(v1.globalScope +", "+ v2.globalScope);
        
        v1.staticVal = 10;
        v2.staticVal = 20;
        
        System.out.println(v1.staticVal +", "+ v2.staticVal);
    }
}
```

- 실행결과

```
20, 30
20, 20
```

- 클래스 변수는 인스턴스를 생성하지 않아도 사용 할 수 있기 때문에, '레퍼런스변수명.~'하고 사용하기 보다는 **'클래스명.변수명'**으로 사용하는 것이 더 바람직하다.

  ```java
  v1.staticVal = 10;
  VariableScopeExam.staticVal = 10; // 클래스명을 이용한 표현이 더 바람직하다.
  ```

- VariableScopeExam을 인스턴스화한 v1과 v2는 각각 만들어 질 때, globalScope로 저장 할 수 있는 공간이 하나씩 만들어진다. 즉, v1의 globalScope 1개. v2의 globalScope 1개로 총 2개.

  ▶ globalScope는 인스턴스 변수이다. 각 객체마다 하나씩 가지는 변수이다.

- static변수( =클래스변수): 인스턴스화 할 필요가 없다. 저장공간이 하나여서, 값을 공유한다.
