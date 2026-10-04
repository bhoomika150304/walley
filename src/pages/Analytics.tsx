import { useState } from "react";
import { TrendingDown } from "lucide-react";
import { MONTHS, inr, type Cat } from "../data";
import { Bar, CatBadge, Chips, Head, catVar, cssVars } from "../components/ui";
import "./Analytics.css";

const RANGES = ["Daily", "Weekly", "Monthly"] as const;
const DATA: { c: Cat; v: number }[] = [{ c: "Bills", v: 5100 }, { c: "Food", v: 4200 }, { c: "Shopping", v: 3200 }, { c: "Travel", v: 2800 }];
const TOTAL = DATA.reduce((s, d) => s + d.v, 0);

function Donut() {
  const R = 60, C = 2 * Math.PI * R;
  let off = 0;
  return (
    <div className="an-donut">
      <svg viewBox="0 0 160 160" role="img" aria-label="Spending by category">
        <g transform="rotate(-90 80 80)">
          {DATA.map((d) => {
            const len = (d.v / TOTAL) * C;
            const el = <circle key={d.c} cx="80" cy="80" r={R} fill="none" stroke={catVar(d.c)} strokeWidth="24" strokeDasharray={`${len - 2} ${C - len + 2}`} strokeDashoffset={-off} />;
            off += len;
            return el;
          })}
        </g>
      </svg>
      <span>{inr(TOTAL)}</span>
    </div>
  );
}

export default function Analytics() {
  const [range, setRange] = useState<(typeof RANGES)[number]>("Monthly");
  const mult = range === "Daily" ? 0.8 : range === "Weekly" ? 0.95 : 1;
  return (
    <div className="an">
      <Head title="Analytics" sub="Understand your patterns and trends."><Chips items={RANGES} value={range} onChange={setRange} /></Head>
      <div className="an-grid">
        <section className="an-card">
          <h3>Spending by month</h3>
          <div className="an-cols">{MONTHS.map((m) => <div key={m.m}><i style={cssVars({ "--h": `${m.v * mult}%` })} />{m.m}</div>)}</div>
        </section>
        <section className="an-card">
          <h3>Category comparison</h3>
          <Donut />
          <div className="an-key">{DATA.map((d) => <span key={d.c}><i style={cssVars({ "--c": catVar(d.c) })} />{d.c} {Math.round((d.v / TOTAL) * 100)}%</span>)}</div>
        </section>
        <section className="an-card">
          <h3>Highest spending categories</h3>
          {DATA.slice(0, 3).map((d) => (
            <div className="an-cat" key={d.c}><CatBadge cat={d.c} /><div><div><span>{d.c}</span><b>{inr(d.v)}</b></div><Bar v={(d.v / 5100) * 100} color={catVar(d.c)} /></div></div>
          ))}
        </section>
        <section className="an-card an-trend">
          <TrendingDown size={32} />
          <h3>Spending trend</h3>
          <p>Your spending is <b>down 9%</b> vs August, mostly from lower travel costs. Food is the only category trending up.</p>
        </section>
      </div>
    </div>
  );
}
