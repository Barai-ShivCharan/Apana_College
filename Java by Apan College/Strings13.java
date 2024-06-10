public class Strings13 {
    public  static void main(String args[]){
        StringBuilder sb=new StringBuilder("Tony");
        System.out.println(sb);

        //char at index 0
        System.out.println(sb.charAt(0));


        //set char at index0
        sb.setCharAt(0,'p');
        System.out.println(sb);


        //insert
        sb.insert(0,'s');
        System.out.println(sb);

        //delete the Extra 'n'
        sb.delete(2,3);
    System.out.println(sb);    }

    //append() means add in last
    //.lenght()

    
}
