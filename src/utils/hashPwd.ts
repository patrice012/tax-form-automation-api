export function encodePassword(password: string): string {
  const encoded = [];
  let key = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

  for (const char of password) {
    const currentAscii = char.charCodeAt(0) + key;
    encoded.push(currentAscii);
  }
  encoded.push(key);

  return encoded.join("-");
}

export function decodePassword(encodedPassword: string): string {
  const encodedValues = encodedPassword.split("-").map(Number);
  let key = encodedValues.pop() as number;
  let decodedPassword = "";

  for (const value of encodedValues) {
    const charCode = value - key;
    decodedPassword += String.fromCharCode(charCode);
  }

  return decodedPassword;
}
