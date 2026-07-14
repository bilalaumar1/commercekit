export type Purchase = {
  id: string;
  title: string;
  price: string;
  txHash: string;
  date: string;
  download?: string;
};

function getStorageKey(address: string) {
  return `arc-commerce-${address.toLowerCase()}`;
}

export function getPurchases(address: string): Purchase[] {
  const data = localStorage.getItem(getStorageKey(address));

  if (!data) return [];

  return JSON.parse(data);
}

export function savePurchase(
  address: string,
  purchase: Purchase
) {
  const purchases = getPurchases(address);

  purchases.unshift(purchase);

  localStorage.setItem(
    getStorageKey(address),
    JSON.stringify(purchases)
  );
}