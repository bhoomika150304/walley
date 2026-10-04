import { Plus, Target } from "lucide-react";
import { GOALS, inr } from "../data";
import { Head, cssVars } from "../components/ui";
import "./Goals.css";

export default function Goals() {
  return (
    <div className="go">
      <Head title="Goals" sub="Save toward the things that matter."><button className="go-new"><Plus size={18} /> New goal</button></Head>
      <div className="go-grid">
        {GOALS.map((g) => {
          const p = Math.round((g.saved / g.target) * 100);
          return (
            <section className="go-card" key={g.name}>
              <div className="go-jar" style={cssVars({ "--p": `${p}%` })} role="img" aria-label={`${p}% saved`}>
                <div className="go-fill" /><span>{p}%</span>
              </div>
              <div className="go-info">
                <h3><Target size={18} /> {g.name}</h3>
                <b>{inr(g.saved)} <small>/ {inr(g.target)}</small></b>
                <p>Target: {g.due}</p>
                {g.note && <span className={`go-note ${g.tone}`}>{g.note}</span>}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
