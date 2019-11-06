> 제가 현재 작성하고 있는 내용은  [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.



## 클래스와 객체

### 열거형(Enum)

- 특정 값만 가져야 한다면 열거형을 사용해라.
- 하드코딩을 하지 않기 위해, 상수 값을 사용하면 더 많은 상수 값이 발생한다. 자바의 enum을 활용하여 상수 값을 제거한다.
- 열거형은 JDK5에서 추가 되었다. JDK5 이전에는 static final 로 상수를 열거형 대신으로 사용했다.



-  < JDK5 이전, 열거형이 없어 상수를 사용하는 코드>

```java
public class EnumExam{
    public static final String MALE = "MALE";
    public static final String FEMALE = "FEMALE";
    
    public static void main(String args){
        String gender1;
        gender1 = EnumExam.MALE;
        gender1 = EnumExam.FEMALE;
        // gender1 = "예삐"; 이런식으로 변경이 가능
    }
}
```

- 상수를 사용했을 때의 문제점

  : String으로 선언 된 gender1에는 MALE, FEMALE 둘 중 한가지 값을 가지길 원한다.

  그렇지만,  gender1의 type이 String이기 때문에 <u>gender1 = "예삐"; 라는 코드를 수행하여도 전혀 문제가 되지 않는다.</u>  즉, 실행할 때 원했던 값이 아닌 다른 값이 들어오게 되므로 문제가 된다.

- 이런 문제를 발생시키지 않게 하기 위해서, 열거형을 쓴다.



- < 열거형을 사용한 코드 >

```java
enum Gender {
	MALE, FEMALE
}
```

- <열거형 사용방벙>

```java
// ..코드 중략..
Gender gender2;
gender2 = Gender.MALE;
gender2 = Gender.FEMALE;
```

- 해당 내용을 main 메서드 안에 기재해서 사용 할 수 있다. 이렇게 하면 상수를 사용했을 때와는 달리, 

  gener2 ="예삐"; 이런 식의 값 변경 코드는 컴파일 에러가 발생한다.

- enum Gender에 MALE과 FEMALE만 기재해 두었다. 따라서, Gender 타입의 변수에는 MALE이나 FEMALE만 대입이 가능하다. 다른 값은 저장 할 수가 없다.

- enum 자체가 타입이 된다. Gender를 그냥 가져다 쓰면 된다.

