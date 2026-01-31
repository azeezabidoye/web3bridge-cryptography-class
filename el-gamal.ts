import { gcd, mod, modinverse_un, modinverse } from "./primitives";
import { encode, decode } from "./code.ts";

// const PRIME = 65537n
// const PRIME = 1000000007n
// const PRIME = 1000000000000066600000000000001n;`
const g = 9n;

const a = 8276n;
const a_P = mod(g ** a, PRIME); //50592n

// const k = 938n

const encrypt_message = (msg, g, k, a_P, prime) => {
  return {
    c1: mod(g ** k, prime),
    c2: mod(msg * a_P ** k, prime),
  };
};

const decrypt_message = ({ c1, c2 }, g, a, prime) => {
  return (modinverse(c1 ** a, prime) * c2) % prime;
};

const mssssg = encode("WiseMrMusa");
console.log(mssssg);
let message = decrypt_message(
  encrypt_message(mssssg, g, k, a_P, PRIME),
  g,
  a,
  PRIME,
);
console.log(decode(message));

// console.log(binexpmod(2n,4n,5n))
