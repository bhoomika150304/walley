import { BarChart3, Banknote, Coins, PiggyBank, Receipt, Target, TrendingUp, Wallet } from "lucide-react";
import { INSIGHTS } from "../data";
import { Coin, Insight } from "../components/ui";
import "./Landing.css";

const FEATS = [
  [Wallet, "Overview", "Balance, income vs expenses, recent transactions and a live monthly graph at a glance."],
  [Banknote, "Spending", "Add expenses in seconds, categorise, search, filter by date and automate recurring costs."],
  [BarChart3, "Analytics", "Daily, weekly and monthly trends with category comparisons and top spending areas."],
  [Target, "Budgets", "Set category limits, watch progress bars fill and get warned before you overspend."],
  [PiggyBank, "Goals", "Save for a laptop, a trip or an emergency fund with targets and finish-date forecasts."],
  [Receipt, "Bills", "Rent, electricity, Netflix, insurance — every subscription and due date in one place."],
] as const;
const STEPS = [
  ["Log it", "Record income and expenses manually, or set them to repeat automatically."],
  ["Organise it", "Walley groups everything by category and date, and measures it against your budgets."],
  ["Understand it", "Money Insights spot changes, warn you early and forecast when goals will land."],
];

export default function Landing() {
  return (
    <div className="lp">
      <div className="lp-wrap">
        <header className="lp-top">
          <a className="lp-logo" href="#home"><Coins size={22} strokeWidth={2.4} />Walley</a>
          <nav>
            <a href="#features">Features</a><a href="#how">How it works</a>
            <a href="#overview" className="lp-btn gold">Open dashboard</a>
          </nav>
        </header>
        <section className="lp-hero">
          <div>
            <span className="lp-tag"><TrendingUp size={16} /> Smart money tracking for everyone</span>
            <h1>Know where your money goes before it's gone.</h1>
            <p className="lp-lead">Walley turns everyday expenses into clear insights. Track spending, set budgets, chase goals and never miss a bill — all in one calm dashboard.</p>
            <div className="lp-cta">
              <a href="#overview" className="lp-btn gold">Get started free</a>
              <a href="#how" className="lp-btn">See how it works</a>
            </div>
          </div>
          <div className="lp-stage">
            <div className="lp-note">
              <small>Total balance</small>
              <div className="lp-big">₹26,580</div>
              <span className="lp-up">+12% vs last month</span>
              <svg viewBox="0 0 400 110" aria-hidden="true">
                <path className="l" d="M0 85 C50 78 70 40 120 50 S200 95 250 60 330 15 400 22" fill="none" stroke="#f6c33f" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <div className="lp-serial">WLY 0026 5800</div>
            </div>
            <div className="lp-pig"><PiggyBank size={44} strokeWidth={2} /></div>
            <div className="lp-c1"><Coin size={54} /></div>
            <div className="lp-c2"><Coin size={38} /></div>
            <div className="lp-float"><b>Money insight</b><br />You spent ₹2,140 more on food this month.</div>
          </div>
        </section>
      </div>

      <section className="lp-sec" id="features">
        <div className="lp-wrap">
          <h2>Everything you need to master your money</h2>
          <p className="lp-sub">From the first coffee you log to the laptop you finally afford.</p>
          <div className="lp-feats">
            {FEATS.map(([I, t, d]) => (
              <div className="lp-feat" key={t}><div className="lp-ic"><I size={26} strokeWidth={2.2} /></div><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-sec" id="how">
        <div className="lp-wrap">
          <h2>How Walley handles your expenses</h2>
          <p className="lp-sub">Three simple steps, then the numbers do the talking.</p>
          <div className="lp-steps">
            {STEPS.map(([t, d], i) => (
              <div className="lp-step" key={t}><Coin size={46}>{String(i + 1)}</Coin><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
          <div className="lp-ins">{INSIGHTS.map((i) => <Insight key={i.title} {...i} />)}</div>
        </div>
      </section>

      <div className="lp-wrap">
        <div className="lp-band">
          <Coin size={56} />
          <h2>Ready for a clearer financial life?</h2>
          <p>Start tracking in under a minute. No spreadsheets required.</p>
          <a href="#overview" className="lp-btn gold">Open Walley</a>
        </div>
        <footer className="lp-foot">© 2026 Walley. Built for people who want their money to make sense.</footer>
      </div>
    </div>
  );
}
