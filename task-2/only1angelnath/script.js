/**
 * Zcash Address Identifier
 * Only identifies the format. Never requests or handles private keys / seeds.
 */

const addressInput = document.getElementById("addressInput");
const identifyBtn = document.getElementById("identifyBtn");
const resultBox = document.getElementById("result");
const resultType = document.getElementById("resultType");
const resultPrivacy = document.getElementById("resultPrivacy");
const errorBox = document.getElementById("error");

function clearMessages() {
  resultBox.classList.add("hidden");
  errorBox.classList.add("hidden");
  resultType.textContent = "";
  resultPrivacy.textContent = "";
  errorBox.textContent = "";
}

function showError(message) {
  clearMessages();
  errorBox.textContent = message;
  errorBox.classList.remove("hidden");
}

function showResult(type, privacyText, color) {
  clearMessages();
  resultType.textContent = type;
  resultType.style.color = color;
  resultPrivacy.textContent = privacyText;
  resultBox.classList.remove("hidden");
}

/**
 * Very simple, educational address-format detection.
 * Real production wallets use proper decoding libraries.
 * We only look at prefixes for learning purposes.
 */
function identifyAddress(raw) {
  const address = raw.trim();

  if (!address) {
    showError("Please enter a Zcash address.");
    return;
  }

  // Transparent addresses (Base58Check)
  // Mainnet P2PKH starts with t1, P2SH with t3
  if (address.startsWith("t1") || address.startsWith("t3")) {
    showResult(
      "Transparent Address",
      "Fully public. Sender, receiver and amount are visible on the blockchain (similar to Bitcoin). Offers no privacy.",
      "#f5a623" // warning / orange
    );
    return;
  }

  // Sapling shielded addresses (Bech32)
  if (address.startsWith("zs1") || address.startsWith("zs")) {
    showResult(
      "Sapling Shielded Address",
      "Strong privacy. Sender, receiver and amount are hidden using zero-knowledge proofs (zk-SNARKs). One of the classic shielded address types in Zcash.",
      "#3ecf8e" // success / green
    );
    return;
  }

  // Unified Addresses (Bech32m) – most modern format
  // Mainnet usually starts with u1
  if (address.startsWith("u1") || address.startsWith("u")) {
    showResult(
      "Unified Address",
      "Modern format that can contain multiple receiver types (Orchard, Sapling, and optionally transparent) in a single string. Wallets automatically choose the most private receiver both parties support. Best privacy and compatibility for new users.",
      "#3ecf8e"
    );
    return;
  }

  // Legacy Sprout (rarely used now)
  if (address.startsWith("zc")) {
    showResult(
      "Sprout Address (Legacy)",
      "Original shielded address type from the 2016 launch. The Sprout pool is largely deprecated for new value. Most modern wallets no longer encourage its use.",
      "#9aa8bc"
    );
    return;
  }

  // Testnet examples (just for completeness)
  if (
    address.startsWith("tm") ||
    address.startsWith("ztestsapling") ||
    address.startsWith("utest")
  ) {
    showResult(
      "Testnet Address",
      "This looks like a Zcash testnet address. Testnet coins have no real value. The same privacy rules apply as on mainnet for the corresponding type.",
      "#9aa8bc"
    );
    return;
  }

  // Everything else
  showError(
    "Unknown or unsupported address format. Supported mainnet prefixes: t1/t3 (transparent), zs (Sapling), u1 (Unified)."
  );
}

// Event listeners
identifyBtn.addEventListener("click", () => {
  identifyAddress(addressInput.value);
});

addressInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    identifyAddress(addressInput.value);
  }
});