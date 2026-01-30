// modular binary exponentiation 
export const binexpmod = (a: bigint,b: bigint,m: bigint): bigint => {
  a = a % m;
  let res = 1n;
  while(b > 0n) {
    if (b & 1n) {
      res = (res * a) % m;
    }
    a = (a * a) % m;
    b >>= 1n;
  }
  return res;
}
