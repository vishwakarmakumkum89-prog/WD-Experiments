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