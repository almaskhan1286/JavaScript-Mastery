                    // Bank Account System using OOP

// This mini app contain features of: 

                    // "creating accounts", 
                    // "depositing money", 
                    // "withdrawing Money",
                    // "checking account balance"

class Account {
    constructor(accountHolderName, accountNumber){
        this.accountHolderName = accountHolderName;
        this.accountNumber = accountNumber;
        this.balance = 0
    }
}

Account.prototype.deposit = function (amount) {
    this.balance += amount;
    console.log(`Deposited ${amount} into account ${this.accountNumber}`)
}

Account.prototype.withdraw = function (amount) {
    if(amount <= this.balance){
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from this account ${this.accountNumber}`)
    }else{
        console.log(`Insufficient balance in account ${this.accountNumber}`)
    }
}

Account.prototype.checkBalance = function (){
    console.log(`Account ${this.accountNumber} balance: ${this.balance}`)
}



// Bank class which hold multiple accounts....

class Bank{
    constructor(){
        this.accounts = {};
        this.nextAccountNumber = 1;
    }

    createAccount(accountHolderName){
        const accountNumber = this.nextAccountNumber++;
        const account = new Account(accountNumber, accountHolderName);
        this.accounts[accountNumber] = account;
        console.log(`Account ${accountNumber} created for ${accountHolderName}.`)
        return accountNumber;
    }

    getAccount(accountNumber){
        return this.accounts[accountNumber];
    }
}


// Create Multiple Account (Instances)

const bankMeezan = new Bank();

const account1 = bankMeezan.createAccount("Almas Khan");


bankMeezan.getAccount(account1).deposit(12000)

bankMeezan.getAccount(account1).withdraw(500);

bankMeezan.getAccount(account1).checkBalance();
