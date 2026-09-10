# Task 2 Submission — Adediran Nathaniel

**Interactive Zcash Architecture and Address Guide**

A beginner-friendly single-page web application that explains the origins of Zcash, its network architecture, full-node options, and how to identify different address types.

---

## Project Summary

This educational tool helps someone who has never used Zcash understand:

1. The historical path from Zerocoin → Zerocash → Zcash and major shielded upgrades
2. How full nodes, light-client indexers and wallets work together
3. The difference between the main full-node implementations (Zebra and Zakura)
4. How to recognise Transparent, Sapling and Unified Addresses and what privacy each offers
5. Where to find reliable learning resources

The application is purely client-side. It never requests private keys, seed phrases, spending keys or any sensitive wallet information.

---

## Technologies Used

- HTML5
- CSS3 (responsive, mobile-friendly)
- Vanilla JavaScript (no frameworks, no build step)

---

## Features Completed

- [x] Interactive Zcash Origins Timeline (Zerocoin, Zerocash, Launch, Sapling, Orchard/Unified Addresses, modern node era)
- [x] Visual Network Architecture section with clear flow explanation (Full Node → Light Client/Indexer → Wallet)
- [x] Full-Node Comparison table (Zebra vs Zakura) covering purpose, requirements, storage and benefits
- [x] Zcash Address Identifier with format detection and privacy explanations
- [x] Learning Resources section with official links
- [x] Responsive design that works on desktop and mobile
- [x] Clean, organised code and helpful error messages
- [x] Strict security: no private keys / seeds / sensitive data handling

---

## How to Run the Project

1. Navigate to the folder:
   ```bash
   cd task-2/only1angelnath
   ```
   
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari…).

    No installation, no server, no dependencies required.

    Alternatively you can serve it with a simple local server:

    ```bash
    python -m http.server 8000
    ```

    Then visit `http://localhost:8000`.

---

## Short Explanation of the Zcash Architecture Represented

A Zcash full node (Zebra or Zakura) downloads and independently validates the entire blockchain.  
Light-client services (such as lightwalletd or Zaino) connect to full nodes, extract compact block data, and expose a lightweight API.  
Wallets and applications connect to these light-client services so users can send and receive shielded payments without running a full node themselves.  
This layered design keeps the network secure while making private transactions practical on mobile devices.

---

## What I Learned

- The historical progression from academic research (Zerocoin/Zerocash) to a live privacy-focused cryptocurrency.
- How Zcash’s layered architecture (full node → indexer → wallet) enables both strong security and good user experience.
- The practical differences between archival full nodes (Zebra) and pruned/high-performance nodes (Zakura).
- How Zcash address formats encode different privacy guarantees and why Unified Addresses are the recommended modern format.
- The importance of never handling private keys or seeds in educational tools.

---

## Difficulties / Challenges Encountered

- Clarifying the correct name and current status of the second full-node implementation (the task mentioned “Sakura”; research showed the project is called **Zakura**).
- Keeping the address detector educational and simple while still accurate about prefixes and privacy properties.
- Designing a clean visual flow for the architecture section that works well on both desktop and mobile screens.
- Meeting the submission deadline (this is a late submission).

---

## Sources Used to Verify Technical Information

- ZecHub – https://zechub.wiki/
- Zcash Improvement Proposals (ZIPs) – https://zips.z.cash/
- Zcash Protocol Documentation – https://zcash.readthedocs.io/
- Zebra Book – https://zebra.zfnd.org/
- Zakura announcements and repository – https://zakura.com/ and https://github.com/zakura-core/zakura
- Zcash Foundation blog posts on Zebra and node diversity
- Official address encoding documentation and ZIP 316 (Unified Addresses)

---

## Security Reminder

This application **only** identifies address formats.  
It does **not** request, process or store private keys, seed phrases, spending keys or any other sensitive wallet information.

---

**Late Submission Note**  
The original deadline was 3:00 PM WAT on Saturday, 5 September 2026. This submission is being made after the deadline.
