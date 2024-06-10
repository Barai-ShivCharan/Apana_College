import java.util.Scanner;

public class Pattern5 {
    public static void main(String[] args){
        //Question No:1
    //  int n=4;
    //     int m=5;
    //     for(int i=1; i<=n;i++){
    //         for(int j=1;j<=m;j++){
    //             System.out.print("*");
    //         }
    //         System.out.println();
    //     }
        

        //Queston No:2
   int n=4;
        int m=5;
        //for outer loop
        for(int i=1;i<=n;i++){
            //for Inner Loop
            for(int j=1;j<=m;j++){
                //cell  ->(i ,j)
                if(i==1 ||j==1 ||i==n ||j==m){
                    System.out.print("*");
                }
                else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
       
        // Question Self Practice QN:1
       /* Scanner sc=new Scanner(System.in);
       int n=sc.nextInt();
       int m=sc.nextInt();
         for(int i=1;i<=n;i++){
            for(int j=1;j<=m;j++){
                System.out.print("*");
            }
            System.out.println();
         }
         sc.close();
         */

        // Practice  QN0:2
        /*Scanner sc=new Scanner(System.in);
        int a=sc.nextInt();
        int b=sc.nextInt();
        for(int i=1;i<=a;i++){
            for(int j=1;j<=b;j++){
                if(i==1 || j==1|| i==a || j==b){
                    System.out.print("*");
                }
                else{
                    System.out.print(" ");
                }
              
            }
          System.out.println();
        }

        sc.close();
        */
        // Question No :3
      /*   Scanner sc=new Scanner(System.in);
        int n=4;
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
        */
        // Queston No:-4
        // int n=4;
        // for(int i=n;i>=1;i--){
        //     for(int j=1;j<=i;j++){
        //         System.out.print("*");
        //     }
            
        //  System.out.println();
        // }

        // Question NO:-5
        /*int n=4;
        for(int i=1;i<=n;i++){
            //inner loop->Space print
            for(int j=1;j<=n-i;j++){
                System.out.print(" ");
            }
            //inerr loop ->Star print
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }*/

        // int n=5;
        // for(int i=1; i<=n;i++){
        //     for(int j=1;j<=i;j++){
        //         System.out.print(j+" ");
        //     }
        //     System.out.println();
        // }



         
    }
}
