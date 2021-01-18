const CryptocurrencyLaundererDetector = artifacts.require("CryptocurrencyLaundererDetector");

contract("Good-day Behaviour", function(accounts){

   it("Account 1: Deposit 5 ether", async () => {
      const bank = await CryptocurrencyLaundererDetector.deployed();
      bank.deposit({from: accounts[1], value: 5 * 10**18});
   });

   it("Account 2: Deposit 4 ether", async () => {
      const bank = await CryptocurrencyLaundererDetector.deployed();
      bank.deposit({from: accounts[2], value: 4 * 10**18});
   });

   it("Check transactions that the value are more than threshold value", async() =>{
      const bank = await CryptocurrencyLaundererDetector.deployed();

      let potentialLaunder, amountExceed = await bank.getExceedTransacctions();
      
         console.log(potentialLaunder);
         console.log(amountExceed);
   });

   it("Check balance that are more than the threshold and get the potential launderer", async() =>{
      const bank = await CryptocurrencyLaundererDetector.deployed();

      let potentialLaunderer = await bank.getLaunder();

      console.log(potentialLaunderer);
   });
   
   it("SC Balance", async() =>{
      const bank = await LaundererDetector.deployed();
      
      let bal = await bank.getBalance();
      bal = Number(bal);
      
      console.log(bal);
   });
});

contract("Deposits Exceed Threshold Value", function(accounts){

   it("Account 3: Deposit 15 ether", async () => {
      const bank = await CryptocurrencyLaundererDetector.deployed();
      bank.deposit({from: accounts[3], value: 15 * 10**18});
   });

   it("Account 4: Deposit 17 ether", async () => {
      const bank = await CryptocurrencyLaundererDetector.deployed();
      bank.deposit({from: accounts[4], value: 17 * 10**18});
   });

   it("Check transactions that the value are more than threshold value", async() =>{
      const bank = await CryptocurrencyLaundererDetector.deployed();

      let potentialLaunder, amountExceed = await bank.getExceedTransacctions();
         
         console.log(potentialLaunder);
         console.log(amountExceed);
   });

   it("Check balance that are more than the threshold and get the potential launderer", async() =>{
      const bank = await CryptocurrencyLaundererDetector.deployed();

      let potentialLaunderer = await bank.getLaunder();

      console.log(potentialLaunderer);
   });

   it("SC Balance", async() =>{
      const bank = await CryptocurrencyLaundererDetector.deployed();
      
      let bal = await bank.getBalance();
      bal = Number(bal);
      
      console.log(bal);
   });
});

contract("SC Balance Exceed Threshold Value", function(accounts){
   it("Account 1: Deposit 10 ether", async () => {
      const bank = await CryptocurrencyLaundererDetector.deployed();
      bank.deposit({from: accounts[1], value: 10 * 10**18});
   });

   it("Account 2: Withdraw 9 ether", async () => {
      const bank = await CryptocurrencyLaundererDetector.deployed();
      bank.withdraw(9, {from: accounts[2]});
   });

   it("Account 2: Deposit 10 ether", async () => {
      const bank = await CryptocurrencyLaundererDetector.deployed();
      bank.deposit({from: accounts[2], value: 10 * 10**18});
   });

   it("Account 1: Deposit 28 ether", async () => {
      const bank = await CryptocurrencyLaundererDetector.deployed();
      bank.deposit({from: accounts[1], value: 28 * 10**18});
   });

   it("Account 2: Withdraw 5 ether", async () => {
      const bank = await CryptocurrencyLaundererDetector.deployed();
      bank.withdraw(5, {from: accounts[2]});
   });

   it("Account 3: Deposit 31 ether", async () => {
      const bank = await CryptocurrencyLaundererDetector.deployed();
      bank.deposit({from: accounts[3], value: 31 * 10**18});
   });

   it("Check transactions that the value are more than threshold value", async() =>{
      const bank = await CryptocurrencyLaundererDetector.deployed();

      let potentialLaunder, amountExceed = await bank.getExceedTransacctions();
         
         console.log(potentialLaunder);
         console.log(amountExceed);
   });

   it("Check balance that are more than the threshold and get the potential launderer", async() =>{
      const bank = await CryptocurrencyLaundererDetector.deployed();

      let potentialLaunderer = await bank.getLaunder();

      console.log(potentialLaunderer);;
   });

   it("SC Balance", async() =>{
      const bank = await CryptocurrencyLaundererDetector.deployed();
      
      let bal = await bank.getBalance();
      bal = Number(bal);
      
      console.log(bal);
   });
});