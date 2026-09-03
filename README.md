# ZDR-001: Blockchain Fundamentals

Simple educational blockchain written in Python that demonstrates how blocks are linked by cryptographic hashes and why the structure is considered immutable.

## 1. What is a Blockchain?

A blockchain is a distributed, append-only ledger made of blocks that are cryptographically linked together. Each new block contains the hash of the previous block, forming a chain. Once data is written and confirmed by the network, it becomes extremely difficult to alter.

## 2. Why does each block contain the previous block’s hash?

This creates a cryptographic link. If anyone changes the data (or any other field) in an earlier block, that block’s hash changes. Because the next block stores the old hash, the link is broken and every subsequent block becomes invalid. This is the foundation of blockchain immutability  concept and its biggest advantage.

## 3. What happens when data inside an existing block changes?

The hash of that block changes completely. All later blocks still reference the old hash, so the chain is broken. In a real network the altered chain would be rejected by honest nodes thereby rendering it useless.

## 4. Difference between a centralized and a decentralized network

- **Centralized**: One entity (a company, bank, or server) controls the data and has the power to change or censor it.
- **Decentralized**: Many independent nodes hold a copy of the ledger and must reach consensus. No single party can unilaterally change history.

## 5. One major difference between Bitcoin and Zcash

Bitcoin transactions are transparent — anyone can see the amounts and the addresses involved on the public ledger.  
Zcash offers optional (and strong) privacy through zero-knowledge proofs (zk-SNARKs), allowing users to shield transaction details while still proving validity.

## 6. What is a UTXO?

UTXO stands for Unspent Transaction Output. It is the model Bitcoin (and Zcash) use to track ownership of coins. Instead of account balances, the ledger keeps a set of unspent outputs. A new transaction consumes some UTXOs as inputs and creates new UTXOs as outputs.

## 7. How to run the program

```bash
python blockchain.py
```

## 8. Language used

Python: It requires Python 3.6 or later.