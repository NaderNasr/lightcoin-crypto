class Account {
  constructor(username) {
    this.username = username;
    //New account === balance 0$

    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (let t of this.transactions) {
      balance += t.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    this.time = new Date();
    this.account.addTransaction(this);
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}
// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

let newUser = new Account('The-Anonymous-Cow');

let t1;
let t2;

t1 = new Withdrawal(50.25, newUser);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, newUser);
t2.commit();
console.log('Transaction 2:', t2);

t1 = new Deposit(1000.00, newUser);
t1.commit();
console.log('Deposit 1:', t1);
console.log('Balance: ', newUser.balance);
