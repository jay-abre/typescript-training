class BankAccount {
    // private variable here
    private _balance: number = 0;
  
  
    deposit(amount: number): void {
      //your logic here
      if (amount <= 0) {
        throw new Error("Deposit amount must be positive");
      }
      this._balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this._balance}`);
    }
  
    withdraw(amount: number): void {
      //your logic here
      if (amount <= 0) {
        throw new Error("Withdrawal amount must be positive");
      }
      if (amount > this._balance) {
        throw new Error("Insufficient funds");
      }
      this._balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this._balance}`);
    }
  
    getBalance(): number {
      return this._balance;
    }
  }
  
  let account = new BankAccount();
  account.deposit(1000);
  account.withdraw(500);
  console.log(account.getBalance()); // 500
  // account.withdraw(1000); // This would throw an error