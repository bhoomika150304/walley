import { useState } from "react";
import { BellRing, Mail, UserRound } from "lucide-react";
import { Head, Toggle } from "../components/ui";
import "./Settings.css";

export default function Settings() {
  const [prefs, setPrefs] = useState([
    { k: "Budget alerts", d: "Warn me at 80% of a limit", on: true },
    { k: "Bill reminders", d: "3 days before due date", on: true },
    { k: "Weekly summary", d: "Email every Monday", on: false },
  ]);
  return (
    <div className="se">
      <Head title="Settings" sub="Make Walley yours." />
      <div className="se-grid">
        <section className="se-card">
          <h3><UserRound size={20} /> Profile</h3>
          <label>Name<input defaultValue="Bhoomika" /></label>
          <label>Email<input type="email" defaultValue="bhoomika@example.com" /></label>
          <label>Currency<select><option>₹ INR</option><option>$ USD</option></select></label>
        </section>
        <section className="se-card">
          <h3><BellRing size={20} /> Preferences</h3>
          {prefs.map((p, i) => (
            <div className="se-row" key={p.k}>
              <Mail size={20} />
              <div><b>{p.k}</b><small>{p.d}</small></div>
              <Toggle on={p.on} label={p.k} onClick={() => setPrefs(prefs.map((x, j) => (j === i ? { ...x, on: !x.on } : x)))} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
