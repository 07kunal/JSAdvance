// Create multiple instance using class method . 
//  User can deposit and withdraw the money, 

class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountHolder = accountHolder,
            this.accountNumber = accountNumber,
            this.balance = balance
    }
    depositAmount(amt) {
        if (amt < 0) {
            console.log("Negative balance can not be allowed");
        } else {
            this.balance += amt
             console.log(`Deposit balance: ${amt} , Total balance: ${this.balance}`);
        }
    }
    withdraw(amt) {
        if(0 <= amt <= this.balance) {
            this.balance -= amt
             console.log(`Withdraw amount: ${amt}, Total balance: ${this.balance}`)
        }
    }
}

const userData1 = new BankAccount (1233,'kunal');
userData1.depositAmount(45);
userData1.withdraw(20);
console.log('userData1',userData1);