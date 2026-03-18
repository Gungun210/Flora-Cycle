import { useState } from "react";
import { login } from "../api";

export default function LoginPage() {
  const [role, setRole] = useState("temple");
  const [form, setForm] = useState({ identifier: "", password: "" });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await login(role, form.identifier, form.password);
    window.location.href = "/dashboard";
  } catch (err) {
    alert(err.message);
  }
};

  return (
    <>
      <style>{`
       /*Styles Section From Claude*/
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=DM+Sans:wght@200;300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; font-family: 'DM Sans', sans-serif; }

        .login-blob {
          position: fixed; border-radius: 50%;
          filter: blur(90px); opacity: 0.45;
          pointer-events: none; z-index: 0;
        }
        .lb1 {
          width: 650px; height: 650px; top: -200px; left: -180px;
          background: radial-gradient(circle, #e2ccf8 0%, #d4baf2 45%, transparent 70%);
          animation: lb1 20s ease-in-out infinite alternate;
        }
        .lb2 {
          width: 500px; height: 600px; bottom: -120px; right: -120px;
          background: radial-gradient(circle, #efe4ff 0%, #ccb2ee 55%, transparent 75%);
          animation: lb2 15s ease-in-out infinite alternate;
        }
        @keyframes lb1 { from{transform:translate(0,0)} to{transform:translate(55px,35px)} }
        @keyframes lb2 { from{transform:translate(0,0)} to{transform:translate(-45px,-45px)} }

        .login-page {
          min-height: 100vh;
          background: #faf7ff;
          position: relative;
          display: flex; flex-direction: column;
        }

        /* Navbar */
        .login-nav {
          position: relative; z-index: 30;
          display: flex; justify-content: space-between; align-items: center;
          padding: 1.4rem 4rem;
          background: rgba(250,247,255,0.8);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(180,140,220,0.12);
        }
        .login-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.45rem; font-weight: 500;
          color: #2a0a40; text-decoration: none;
        }
        .login-logo em { font-style: italic; color: #8040b8; }
        .login-nav-link {
          font-size: 0.78rem; color: #7030a8;
          border: 1.5px solid rgba(112,48,168,0.25);
          padding: 7px 18px; border-radius: 50px;
          text-decoration: none; font-weight: 500;
          background: rgba(255,255,255,0.4);
          backdrop-filter: blur(8px); transition: all 0.25s;
        }
        .login-nav-link:hover { background: rgba(112,48,168,0.07); }

        /* Body */
        .login-body {
          flex: 1;
          display: flex; align-items: center; justify-content: center;
          padding: 3rem 2rem;
          position: relative; z-index: 1;
        }

        /* Card */
        .login-card {
          width: 100%; max-width: 460px;
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(180,140,230,0.18);
          border-radius: 24px;
          padding: 2.8rem 3rem;
          box-shadow: 0 4px 40px rgba(140,80,220,0.1), 0 1px 0 rgba(255,255,255,0.8) inset;
          animation: cardIn 0.7s ease both;
        }
        @keyframes cardIn {
          from { opacity:0; transform:translateY(22px) scale(0.98); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }

        .login-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.6rem; font-weight: 400;
          color: #1e0535; letter-spacing: -0.02em; margin-bottom: 0.4rem;
        }
        .login-sub {
          font-size: 0.82rem; color: #9878b8;
          font-weight: 300; margin-bottom: 1.8rem; line-height: 1.5;
        }

        /* Role toggle */
        .role-toggle {
          display: flex;
          border: 1.5px solid rgba(180,130,240,0.25);
          border-radius: 50px; overflow: hidden;
          margin-bottom: 1.8rem; position: relative;
          background: rgba(255,255,255,0.5);
        }
        .role-btn {
          flex: 1; padding: 11px 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.84rem; font-weight: 500;
          border: none; cursor: pointer;
          background: transparent; color: #9878b8;
          transition: all 0.28s; position: relative; z-index: 2;
        }
        .role-btn.active { color: white; }
        .role-slider {
          position: absolute; top: 0; bottom: 0; left: 0;
          width: 50%;
          background: linear-gradient(135deg, #6020a0, #9050c8);
          border-radius: 50px;
          transition: transform 0.32s cubic-bezier(0.34,1.2,0.64,1);
          z-index: 1;
          box-shadow: 0 4px 18px rgba(96,32,160,0.3);
        }
        .role-slider.vendor { transform: translateX(100%); }

        /* Fields */
        .field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 1.1rem; }
        .field label {
          font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #6a4888;
        }
        .field input {
          padding: 13px 16px;
          border: 1.5px solid rgba(180,130,240,0.22);
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; color: #2a0a40;
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(8px);
          transition: all 0.2s; outline: none; width: 100%;
        }
        .field input::placeholder { color: #c0a8d8; }
        .field input:focus {
          border-color: rgba(140,70,210,0.5);
          background: rgba(255,255,255,0.96);
          box-shadow: 0 0 0 3px rgba(140,70,210,0.09);
        }

        .forgot-row {
          text-align: right; margin-top: -4px; margin-bottom: 1.4rem;
        }
        .forgot-link {
          font-size: 0.78rem; color: #9050c8;
          text-decoration: none; font-weight: 500;
        }
        .forgot-link:hover { color: #6020a0; }

        .login-submit {
          width: 100%; padding: 14px;
          border: none; border-radius: 50px;
          background: linear-gradient(135deg, #6020a0 0%, #9050c8 60%, #b070e0 100%);
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; font-weight: 500;
          letter-spacing: 0.07em; cursor: pointer;
          box-shadow: 0 8px 28px rgba(96,32,160,0.32);
          transition: all 0.28s ease;
        }
        .login-submit:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(96,32,160,0.42); }

        .login-footer {
          text-align: center; margin-top: 1.4rem;
          font-size: 0.78rem; color: #9878b8;
        }
        .login-footer a { color: #7030a8; text-decoration: none; font-weight: 500; }
        .login-footer a:hover { text-decoration: underline; }

        @media (max-width: 520px) {
          .login-card { padding: 2.2rem 1.6rem; }
          .login-nav { padding: 1.3rem 1.5rem; }
        }
      `}</style>

      <div className="login-blob lb1" />
      <div className="login-blob lb2" />

      <div className="login-page">

        <nav className="login-nav">
          <a href="/" className="login-logo">Flora<em>Cycle</em></a>
          <a href="/register" className="login-nav-link">Register</a>
        </nav>

        <div className="login-body">
          <div className="login-card">

            <h1 className="login-title">Sign In</h1>
            <p className="login-sub">Welcome back! Select your account type to continue.</p>

            <div className="role-toggle">
              <div className={`role-slider ${role === "vendor" ? "vendor" : ""}`} />
              <button className={`role-btn ${role === "temple" ? "active" : ""}`} onClick={() => setRole("temple")}>
                 Temple
              </button>
              <button className={`role-btn ${role === "vendor" ? "active" : ""}`} onClick={() => setRole("vendor")}>
                 Vendor
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>Email / Phone Number</label>
                <input name="identifier" type="text" value={form.identifier}
                  onChange={handle} placeholder="Enter your email or phone" required />
              </div>

              <div className="field">
                <label>Password</label>
                <input name="password" type="password" value={form.password}
                  onChange={handle} placeholder="Your password" required />
              </div>

              <div className="forgot-row">
                <a href="/forgot-password" className="forgot-link">Forgot password?</a>
              </div>

              <button type="submit" className="login-submit">Sign In →</button>
            </form>

            <p className="login-footer">
              Don't have an account? <a href="/register">Create one here</a>
            </p>

          </div>
        </div>
      </div>
    </>
  );
}