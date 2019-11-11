제가 현재 작성하고 있는 내용은  [프로그래머스]( https://programmers.co.kr/learn ) 사이트의 자바입문/중급 강의를 직접 듣고 정리한 내용입니다.



## 상속

### 접근제한자(Access Modifier)

- 클래스 내에서 멤버의 접근을 제한하는 역할을 함

  ​    

#### 1. 접근제한자의 종류

- public > protected > default > private

  |         public          |                          protected                           |                  default                  |       private        |
  | :---------------------: | :----------------------------------------------------------: | :---------------------------------------: | :------------------: |
  | 어떤 클래스든 접근 가능 | 자기자신/ 패키지 허용, 서로다른 패키지 일지라도 상속받은 자식 클래스내에서는 접근 가능 | 자기 자신과 같은 패키지에서만 접근이 가능 | 자기자신만 접근 가능 |

- 접근 제한자 예시 코드

  - 아래 AccessObj, AccessObjExam1 클래스는 같은 패키지에 들어있다.

```java
public class AccessObj{
    private int i = 1;
    int k = 2;	// default 접근지정자
    public int p =3;
    protected int p2 = 4;
}
```

```java
public class AccessObjExam1{
    public static void main(String[] args){
        AccessObj po = new AccessObj();
        // 아래 코드는 모두 컴파일 에러 발생
        System.out.println(po.i);
        System.out.println(po.k);
        System.out.println(po.p);
        System.out.println(po.p2);
    }
}
```

- AccessObjExam1 클래스를 다른 패키지로 옮기고, import AccessObj를 하면, public으로 한정 된 변수 外 모두 컴파일 에러가 발생한다.

  - AccessObjExam1에 상속관계를 추가 했을 때(패키지 위치는 다름)

  ```java
  import javaStudy.AccessObj;
  
  public class AccessObjExam1 extends AccessObj{
      public static void main(String[]args){
          AccessObjExam1 po = new AccessObjExam1();
          
          // private는 자기자신만 접근 가능하므로 컴파일 에러
          System.out.println(po.i); 
          // default는 자기자신과 같은 패키지에서만 가능하므로 컴파일 에러
          System.out.println(po.k); 
          
          System.out.println(po.p);
          System.out.println(po.p2);
      }
  }
  ```
