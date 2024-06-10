/*import java.util.Scanner;

public class Function7 {
    public static void printMyName(String name){
        System.out.println(name);
        return ;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        String name = sc.next();
        printMyName(name);

        sc.close();
    }
}
*/

/*import java.util.Scanner;

public class Function7{
    public static int calculateSum(int a,int b){
        int sum=a+b;
        return sum;
    }


    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int a=sc.nextInt();
        int b=sc.nextInt();
        int sum=calculateSum(a, b);
        System.out.println("The Sum of Two Numbers is:"+sum);
        sc.close();
    }
} */

import java.util.Scanner;

public class Function7{
    // public static int calculateProduct(int a, int b){
    //     return a*b;
    public static void calculateFactorial(int n){
        //loop
        int factorial=1;
        for(int i=n;i>=1;i--){
            factorial=factorial*i;
        }
        System.out.println(factorial);
        return;
    }
    
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        // int a=sc.nextInt();
        // int b=sc.nextInt();
        // System.out.println("The Product of Two Number is:"+calculateProduct(a, b));
        // sc.close();
        int n=sc.nextInt();
        calculateFactorial(n);
        sc.close();
    }
}