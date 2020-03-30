const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = "843GA04GAML1TA"
const currentBlockData = [
  {
    amount: 10,
    sender: "GA4GA",
    recepient: "O5G9K"
  },
  {
    amount: 2000,
    sender: "GJ5OGA",
    recepient: "BJ34AJ"
  },
  {
    amount: 100000,
    sender: "PLKFPEARFG",
    recepient: "R31O5G9RAK"
  }
]
const nonce = 1000

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
