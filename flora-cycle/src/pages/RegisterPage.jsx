import { useState } from "react";
import { authStyles } from "../authStyles";

export default function RegisterPage() {
  const [role, setRole] = useState("temple");
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", confirm: "", city: "" });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) { alert("Passwords do not match"); return; }
    console.log("Register as", role, form);
    // TODO: POST to /api/auth/register
  };

  return (
    <>
      <style>{authStyles}</style>

      <div className="auth-blob b1" />
      <div className="auth-blob b2" />

      <div className="auth-bg">
        <div className="auth-card">
          <a href="/" className="auth-logo">Flora<em>Cycle</em></a>
          <p className="auth-subtitle">Create your account to join the circular ecosystem</p>

          {/* Role Toggle */}
          <div className="role-toggle">
            <div className={`role-slider ${role === "vendor" ? "vendor" : ""}`} />
            <button className={`role-btn ${role === "temple" ? "active" : ""}`} onClick={() => setRole("temple")}>
              🛕 Temple
            </button>
            <button className={`role-btn ${role === "vendor" ? "active" : ""}`} onClick={() => setRole("vendor")}>
              🌸 Vendor
            </button>
          </div>

          <div className="role-badge">
            <span>{role === "temple" ? "🛕" : "🌸"}</span>
            <span>
              {role === "temple"
                ? "Registering as a Temple — donate discarded sacred flowers"
                : "Registering as a Vendor — collect & transform flower waste"}
            </span>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label>{role === "temple" ? "Temple Name" : "Business Name"}</label>
                <input name="name" value={form.name} onChange={handle}
                  placeholder={role === "temple" ? "e.g. Shri Ram Mandir" : "e.g. Green Petal Co."} required />
              </div>
              <div className="field">
                <label>City</label>
                <input name="city" value={form.city} onChange={handle} placeholder="e.g. Jodhpur" required />
              </div>
            </div>

            <div className="field">
              <label>Email Address</label>
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="you@example.com" required />
            </div>

            <div className="field">
              <label>Phone Number</label>
              <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="+91 98765 43210" required />
            </div>

            <div className="auth-divider">account security</div>

            <div className="form-row">
              <div className="field">
                <label>Password</label>
                <input name="password" type="password" value={form.password} onChange={handle} placeholder="••••••••" required />
              </div>
              <div className="field">
                <label>Confirm Password</label>
                <input name="confirm" type="password" value={form.confirm} onChange={handle} placeholder="••••••••" required />
              </div>
            </div>

            <button type="submit" className="auth-submit">
              ✦ Create {role === "temple" ? "Temple" : "Vendor"} Account
            </button>
          </form>

          <p className="auth-footer">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </div>
      </div>
    </>
  );
}
