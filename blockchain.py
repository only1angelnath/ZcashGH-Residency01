import hashlib
from datetime import datetime

class Block:
    def __init__(self, index: int, data: str, previous_hash: str):
        self.index = index
        self.timestamp = str(datetime.now())
        self.data = data
        self.previous_hash = previous_hash
        self.hash = self.calculate_hash()

    def calculate_hash(self) -> str:
        """
        Create a SHA-256 hash of the block contents.
        We deliberately include every field so that changing any of them
        produces a completely different hash.
        """
        block_string = (
            str(self.index) +
            self.timestamp +
            self.data +
            self.previous_hash
        )
        return hashlib.sha256(block_string.encode()).hexdigest()

    def __str__(self):
        return (
            f"Block {self.index}\n"
            f"  Timestamp      : {self.timestamp}\n"
            f"  Data           : {self.data}\n"
            f"  Previous Hash  : {self.previous_hash}\n"
            f"  Current Hash   : {self.hash}\n"
        )


def create_genesis_block() -> Block:
    return Block(0, "Genesis Block", "0")


def create_next_block(previous_block: Block, data: str) -> Block:
    return Block(previous_block.index + 1, data, previous_block.hash)


def main():
    print("=" * 60)
    print("SIMPLE BLOCKCHAIN DEMONSTRATION")
    print("=" * 60)

    # 1. Create the chain (Genesis + 2 more blocks)
    blockchain = [create_genesis_block()]
    blockchain.append(create_next_block(blockchain[-1], "First transaction: Musa sends 10 ZEC to Jide"))
    blockchain.append(create_next_block(blockchain[-1], "Second transaction: Jide sends 3 ZEC to Uche"))

    print("\n--- ORIGINAL BLOCKCHAIN ---")
    for block in blockchain:
        print(block)

    # Save original hashes for comparison later
    original_hashes = [block.hash for block in blockchain]

    # 2. Tamper with Block 1 (index 1)
    print("\n--- TAMPERING WITH BLOCK 1 ---")
    print("Changing data of Block 1...")
    blockchain[1].data = "TAMPERED DATA: Musa sends 1000 ZEC to Uche"   # attacker changes the data
    blockchain[1].hash = blockchain[1].calculate_hash()                 # recalculate its own hash

    print("\n--- BLOCKCHAIN AFTER TAMPERING ---")
    for block in blockchain:
        print(block)

    # 3. Show the difference
    print("\n--- HASH COMPARISON (Immutability Demo) ---")
    print(f"Block 0 (Genesis) original hash : {original_hashes[0]}")
    print(f"Block 0 (Genesis) current  hash : {blockchain[0].hash}")
    print()
    print(f"Block 1 original hash           : {original_hashes[1]}")
    print(f"Block 1 new hash after tamper   : {blockchain[1].hash}")
    print()
    print(f"Block 2 original hash           : {original_hashes[2]}")
    print(f"Block 2 current hash            : {blockchain[2].hash}")
    print()
    print("Notice:")
    print("• Block 1's hash completely changed.")
    print("• Block 2 still points to the OLD hash of Block 1 → the chain is broken.")
    print("• In a real blockchain this would be instantly detectable by every node.")


if __name__ == "__main__":
    main()