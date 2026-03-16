import { useState } from "react";
import { authStyles } from "../authStyles";

export default function LoginPage() {
  const [role, setRole] = useState("temple");
  const [form, setForm] = useState({ email: "", password: "" });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login as", role, form);
    // TODO: POST to /api/auth/login
  };

  return (
    <>
      <style>{authStyles}</style>

      <div className="auth-blob b1" />
      <div className="auth-blob b2" />

      <div className="auth-bg">
        <div className="auth-card" style={{ maxWidth: "420px" }}>
          <a href="/" className="auth-logo">Flora<em>Cycle</em></a>
          <p className="auth-subtitle">Welcome back — sign in to continue</p>

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
                ? "Signing in as a Temple partner"
                : "Signing in as a Vendor partner"}
            </span>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="field">
              <label>Email Address</label>
              <input name="email" type="email" value={form.email} onChange={handle}
                placeholder="you@example.com" required />
            </div>

            <div className="field">
              <label>Password</label>
              <input name="password" type="password" value={form.password} onChange={handle}
                placeholder="••••••••" required />
            </div>

            <div style={{ textAlign: "right", marginTop: "-4px" }}>
              <a href="/forgot-password" style={{ fontSize: "0.75rem", color: "#9050c8", textDecoration: "none" }}>
                Forgot password?
              </a>
            </div>

            <button type="submit" className="auth-submit">
              ✦ Sign in as {role === "temple" ? "Temple" : "Vendor"}
            </button>
          </form>

          <p className="auth-footer">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </>
  );
}
