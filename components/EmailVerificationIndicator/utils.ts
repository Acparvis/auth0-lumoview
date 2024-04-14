export const checkEmailUrl = (whiteListedAddress?: string, email?: string) => {
  if (!email || !whiteListedAddress) return false;
  const emailDomain = email.split('@')[1];
  return emailDomain === whiteListedAddress;
};
