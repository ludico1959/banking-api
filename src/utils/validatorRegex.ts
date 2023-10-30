export function validateAccount(account: string): boolean {
  const regex = /^\d{7}-\d{1}$/i;

  return regex.test(account);
}

export function validateBranchAndCvv(digits: string): boolean {
  const regex = /^\d{3}$/i;

  return regex.test(digits);
}

export function validateCardNumber(number: string): boolean {
  const regex = /^\d{4} \d{4} \d{4} \d{4}$/i;

  return regex.test(number);
}
