export type Cat = "Food" | "Travel" | "Shopping" | "Bills";
export const CATS: Cat[] = ["Food", "Travel", "Shopping", "Bills"];

export interface Txn { id: number; name: string; cat: Cat; date: string; amt: number; rec?: boolean }

export const TXNS: Txn[] = [
  { id: 1, name: "Swiggy", cat: "Food", date: "28 Sep", amt: 420 },
  { id: 2, name: "Uber", cat: "Travel", date: "27 Sep", amt: 260 },
  { id: 3, name: "Airtel Recharge", cat: "Bills", date: "26 Sep", amt: 399, rec: true },
  { id: 4, name: "Myntra", cat: "Shopping", date: "24 Sep", amt: 1799 },
  { id: 5, name: "Big Bazaar", cat: "Shopping", date: "22 Sep", amt: 1240 },
];

export const BUDGETS = [
  { cat: "Food" as Cat, used: 4200, limit: 6000 },
  { cat: "Shopping" as Cat, used: 3200, limit: 3700 },
  { cat: "Bills" as Cat, used: 5100, limit: 4800 },
  { cat: "Travel" as Cat, used: 2800, limit: 6000 },
];

export const GOALS = [
  { name: "Laptop Fund", saved: 32000, target: 60000, due: "December 2026", note: "18 days ahead of schedule", tone: "" },
  { name: "Goa Trip", saved: 9000, target: 30000, due: "March 2027", note: "Save ₹4,200/mo to stay on track", tone: "warn" },
  { name: "Emergency Fund", saved: 80000, target: 100000, due: "November 2026", note: "", tone: "" },
];

export const BILLS = [
  { icon: "home", name: "Rent", sub: "Due 1 Oct · Monthly", when: "In 3 days", amt: 12000, tone: "warn" },
  { icon: "zap", name: "Electricity", sub: "Due 3 Oct · Monthly", when: "In 5 days", amt: 1249, tone: "warn" },
  { icon: "film", name: "Netflix", sub: "Due 8 Oct · Monthly", when: "In 10 days", amt: 499, tone: "" },
  { icon: "phone", name: "Phone", sub: "Due 12 Oct · Monthly", when: "In 14 days", amt: 399, tone: "" },
  { icon: "shield", name: "Insurance", sub: "Due 20 Oct · Quarterly", when: "In 22 days", amt: 3200, tone: "" },
  { icon: "repeat", name: "Other subscriptions", sub: "Spotify · iCloud · Prime", when: "Recurring", amt: 593, tone: "" },
];

export const INSIGHTS = [
  { tone: "", title: "Your spending changed", body: "You spent ₹2,140 more on food this month than last month." },
  { tone: "warn", title: "Budget alert", body: "You've used 87% of your shopping budget with 9 days remaining." },
  { tone: "plum", title: "Goal update", body: "You'll reach your laptop goal 18 days early at this saving rate." },
];

export const MONTHS = [
  { m: "Apr", v: 80 }, { m: "May", v: 62 }, { m: "Jun", v: 70 },
  { m: "Jul", v: 55 }, { m: "Aug", v: 66 }, { m: "Sep", v: 41 },
];

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
