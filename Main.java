abstract class BankAccount{

    double balance;

    public BankAccount(double balance){

        this.balance = balance;
    }

    public double getBalance(){

        return balance;
    }

    abstract void calculateInterest();
}

class SavingsAccount extends BankAccount{

    public SavingsAccount(double balance){

        super(balance);
    }

    void calculateInterest(){

        double interest =
            getBalance() * 0.05;

        System.out.println(
            "Savings Interest = " + interest
        );
    }
}

class CurrentAccount extends BankAccount{

    public CurrentAccount(double balance){

        super(balance);
    }

    void calculateInterest(){

        double interest =
            getBalance() * 0.02;

        System.out.println(
            "Current Interest = " + interest
        );
    }
}

public class Main{

    public static void main(String[] args){

        SavingsAccount s1 =
            new SavingsAccount(50000);

        CurrentAccount c1 =
            new CurrentAccount(40000);

        s1.calculateInterest();

        c1.calculateInterest();
    }
}