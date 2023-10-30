export function validateAccount(account: string): boolean {
  const regex = /^[0-9]{7}+-^[0-9]{1}+/i;

  return regex.test(account);
}

export function validateBranchAndCvv(digits: string): boolean {
  const regex = /^[0-9]{3}/i;

  return regex.test(digits);
}
