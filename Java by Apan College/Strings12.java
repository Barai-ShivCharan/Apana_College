import java.util.Scanner;

public  class Strings12 {
    public static void main(String args[]){
     //compare
     String name1="Tony";
     String name2="Tony";
     //1 s1>s2:+ve value
     //2s1==s2:0
     //3 s1<s2:-ve value

     if(name1.compareTo(name2)==0){
        System.out.println("Strings are Equal");
     }
     else{
        System.out.println("Strings are ot Equall");
     }
     if(new String("Tony")==new String("Tony")){
        System.out.println("Strings are Equal");
        

     }else{
        System.out.println("Strings are not equall");
     }
    }
    
}
