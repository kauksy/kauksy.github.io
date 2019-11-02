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
