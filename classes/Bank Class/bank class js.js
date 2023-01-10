class Bank {
    constructor(balance) {
      this.balance = balance;
    }
  
    withdrawl(amount) {
      if (this.balance - amount < 0) {
        console.log("❌ You can't withdraw this much amount");
        console.log({ balance: this.balance });
        return
      }
      this.balance -= amount;
      console.log("withdrawn: " + `$${amount}`)
      console.log({ balance: this.balance });
  
  
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log("deposited: " + `$${amount}`)
      console.log({ balance: this.balance });
  
    }
  }
  
  const ksdChecksIn = new Bank(150);
  console.log(ksdChecksIn.balance);
  ksdChecksIn.deposit(50);
  ksdChecksIn.withdrawl(30);
  ksdChecksIn.withdrawl(3);
  ksdChecksIn.withdrawl(3458);
  ksdChecksIn.withdrawl(38);
  ksdChecksIn.withdrawl(382);
  ksdChecksIn.withdrawl(384);
  ksdChecksIn.withdrawl(30);
  ksdChecksIn.deposit(500);
  
  const depositButton = document.getElementById('deposit');
  const withdrawButton = document.getElementById('withdraw');
  const amountInput = document.getElementById('amount');
  const balanceDiv = document.getElementById('balance');
  
  depositButton.onclick = () => {
    const amount = Number(amountInput.value);
    ksdChecksIn.deposit(amount);
    // console.log(amountInput.value);
    balanceDiv.innerText = `Balance: ${ksdChecksIn.balance}`;
   }
  
  withdrawButton.onclick = () => {
    const amount = Number(amountInput.value)
    ksdChecksIn.withdrawl(amount);
    // check spelling
    // console.log(amountInput.value);
    balanceDiv.innerText = `Balance: ${ksdChecksIn.balance}`;
    
   }
  