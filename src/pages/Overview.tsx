import { ArrowDownLeft, ArrowUpRight, Banknote, Lightbulb, PiggyBank, TrendingDown, Wallet } from "lucide-react";
import { INSIGHTS, inr, type Cat, type Txn } from "../data";
import { Bar, CatBadge, Head, Insight, catVar } from "../components/ui";
import "./Overview.css";

const LINE = "M30 150 C80 140 100 90 150 100 S230 160 280 110 350 40 400 70 480 120 530 60 570 40 590 35";
const TOTALS: { c: Cat; v: number }[] = [{ c: "Food", v: 4200 }, { c: "Travel", v: 2800 }, { c: "Shopping", v: 3200 }, { c: "Bills", v: 5100 }];

export default function Overview({ txns }: { txns: Txn[] }) {
  return (
    <div className="ov">
      <Head title="Hello, Bhoomika" sub="Here's how your money is doing this month." />
      <div className="ov-stats">
        <div className="ov-stat"><span className="ov-si"><Banknote size={24} /></span><div><small>Income</small><b>{inr(45000)}</b><em>Salary credited</em></div></div>
        <div className="ov-stat"><span className="ov-si warn"><TrendingDown size={24} /></span><div><small>Spent</small><b>{inr(18420)}</b><em>41% of income</em></div></div>
        <div className="ov-stat bal"><span className="ov-si gold"><Wallet size={24} /></span><div><small>Balance</small><b>{inr(26580)}</b><em>Healthy</em></div></div>
      </div>
      <div className="ov-row">
        <section className="ov-card">
          <div className="ov-h"><h3>Spending this month</h3><span className="ov-pill">September</span></div>
          <svg viewBox="0 0 600 210" role="img" aria-label="Monthly spending line chart">
            <defs><linearGradient id="ovg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--note)" stopOpacity=".35" /><stop offset="1" stopColor="var(--note)" stopOpacity="0" /></linearGradient></defs>
            <path d="M30 20H590M30 70H590M30 120H590M30 170H590" stroke="var(--line)" strokeDasharray="4 6" />
            <path d={`${LINE} V180 H30Z`} fill="url(#ovg)" />
            <path d={LINE} fill="none" stroke="var(--note)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="590" cy="35" r="8" fill="#f6c33f" stroke="#c9961a" strokeWidth="3" />
            <g fill="var(--mut)" fontSize="11"><text x="30" y="200">1 Sep</text><text x="290" y="200">14 Sep</text><text x="545" y="200">28 Sep</text></g>
          </svg>
        </section>
        <section className="ov-card">
          <h3>Categories</h3>
          {TOTALS.map(({ c, v }) => (
            <div className="ov-cat" key={c}><CatBadge cat={c} /><div><div className="ov-cl"><span>{c}</span><b>{inr(v)}</b></div><Bar v={(v / 5100) * 100} color={catVar(c)} /></div></div>
          ))}
        </section>
      </div>
      <div className="ov-row two">
        <section className="ov-card ov-receipt">
          <div className="ov-h"><h3>Recent transactions</h3><a className="ov-pill" href="#spending">View all</a></div>
          <div className="ov-tx"><span className="ov-dir in"><ArrowDownLeft size={18} /></span><div><b>Salary</b><small>1 Sep · Income</small></div><b className="up">+₹45,000</b></div>
          {txns.slice(0, 4).map((t) => (
            <div className="ov-tx" key={t.id}><span className="ov-dir"><ArrowUpRight size={18} /></span><div><b>{t.name}</b><small>{t.date} · {t.cat}</small></div><b className="dn">−{inr(t.amt)}</b></div>
          ))}
        </section>
        <div className="ov-side">
          <div className="ov-jar"><PiggyBank size={30} /><div><small>Saved this month</small><b>{inr(26580)}</b></div></div>
          <h3><Lightbulb size={18} /> Money insights</h3>
          {INSIGHTS.map((i) => <Insight key={i.title} {...i} />)}
        </div>
      </div>
    </div>
  );
}
