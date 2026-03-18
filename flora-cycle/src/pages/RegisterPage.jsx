import { useState } from "react";
import { register } from "../api";


export default function RegisterPage() {
  const [role, setRole] = useState("temple");

  const [temple, setTemple] = useState({
    name: "", contact: "", phone: "", email: "",
    address: "", city: "", state: "", pin: "",
    type: "Large", waste: "", password: ""
  });

  const [vendor, setVendor] = useState({
    company: "", owner: "", phone: "", email: "",
    address: "", city: "", state: "", pin: "",
    capacity: "", password: ""
  });

  const ht = (e) => setTemple({ ...temple, [e.target.name]: e.target.value });
  const hv = (e) => setVendor({ ...vendor, [e.target.name]: e.target.value });

 

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const data = role === "temple"
      ? { ...temple, type: temple.type, waste: temple.waste }
      : { ...vendor };
    await register(role, data);
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

        .reg-blob {
          position: fixed; border-radius: 50%;
          filter: blur(90px); opacity: 0.45;
          pointer-events: none; z-index: 0;
        }
        .rb1 {
          width: 650px; height: 650px; top: -200px; left: -180px;
          background: radial-gradient(circle, #e2ccf8 0%, #d4baf2 45%, transparent 70%);
          animation: rb1 20s ease-in-out infinite alternate;
        }
        .rb2 {
          width: 500px; height: 600px; bottom: -120px; right: -120px;
          background: radial-gradient(circle, #efe4ff 0%, #ccb2ee 55%, transparent 75%);
          animation: rb2 15s ease-in-out infinite alternate;
        }
        @keyframes rb1 { from{transform:translate(0,0)} to{transform:translate(55px,35px)} }
        @keyframes rb2 { from{transform:translate(0,0)} to{transform:translate(-45px,-45px)} }

        .reg-page {
          min-height: 100vh;
          background: #faf7ff;
          position: relative;
          display: flex; flex-direction: column;
        }

        /* Navbar */
        .reg-nav {
          position: relative; z-index: 30;
          display: flex; justify-content: space-between; align-items: center;
          padding: 1.4rem 4rem;
          background: rgba(250,247,255,0.8);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(180,140,220,0.12);
        }
        .reg-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.45rem; font-weight: 500;
          color: #2a0a40; text-decoration: none;
        }
        .reg-logo em { font-style: italic; color: #8040b8; }
        .reg-nav-link {
          font-size: 0.78rem; color: #7030a8;
          border: 1.5px solid rgba(112,48,168,0.25);
          padding: 7px 18px; border-radius: 50px;
          text-decoration: none; font-weight: 500;
          background: rgba(255,255,255,0.4);
          backdrop-filter: blur(8px); transition: all 0.25s;
        }
        .reg-nav-link:hover { background: rgba(112,48,168,0.07); }

        /* Body */
        .reg-body {
          flex: 1;
          display: flex; align-items: center; justify-content: center;
          padding: 3rem 2rem;
          position: relative; z-index: 1;
        }

        /* Card */
        .reg-card {
          width: 100%; max-width: 520px;
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

        .reg-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem; font-weight: 400;
          color: #1e0535; letter-spacing: -0.02em; margin-bottom: 0.3rem;
        }
        .reg-sub {
          font-size: 0.82rem; color: #9878b8;
          font-weight: 300; margin-bottom: 1.8rem;
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
        .form-row { display: flex; gap: 1rem; }
        .form-row .field { flex: 1; }

        .field { display: flex; flex-direction: column; gap: 5px; margin-bottom: 1rem; }
        .field label {
          font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #6a4888;
        }
        .field input, .field select {
          padding: 12px 15px;
          border: 1.5px solid rgba(180,130,240,0.22);
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem; color: #2a0a40;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          transition: all 0.2s; outline: none; width: 100%;
        }
        .field input::placeholder { color: #c0a8d8; }
        .field select {
          cursor: pointer; appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239050c8' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 14px center;
          padding-right: 36px; background-color: rgba(255,255,255,0.7);
        }
        .field input:focus, .field select:focus {
          border-color: rgba(140,70,210,0.5);
          background: rgba(255,255,255,0.95);
          box-shadow: 0 0 0 3px rgba(140,70,210,0.09);
        }

        .reg-submit {
          width: 100%; padding: 14px;
          border: none; border-radius: 50px; margin-top: 0.4rem;
          background: linear-gradient(135deg, #6020a0 0%, #9050c8 60%, #b070e0 100%);
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; font-weight: 500;
          letter-spacing: 0.07em; cursor: pointer;
          box-shadow: 0 8px 28px rgba(96,32,160,0.32);
          transition: all 0.28s ease;
        }
        .reg-submit:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(96,32,160,0.42); }

        .reg-footer {
          text-align: center; margin-top: 1.4rem;
          font-size: 0.78rem; color: #9878b8;
        }
        .reg-footer a { color: #7030a8; text-decoration: none; font-weight: 500; }
        .reg-footer a:hover { text-decoration: underline; }

        @media (max-width: 580px) {
          .reg-card { padding: 2rem 1.6rem; }
          .reg-nav { padding: 1.3rem 1.5rem; }
          .form-row { flex-direction: column; gap: 0; }
        }
      `}</style>

      <div className="reg-blob rb1" />
      <div className="reg-blob rb2" />

      <div className="reg-page">

        <nav className="reg-nav">
          <a href="/" className="reg-logo">Flora<em>Cycle</em></a>
          <a href="/login" className="reg-nav-link">Sign In</a>
        </nav>

        <div className="reg-body">
          <div className="reg-card">

            <h1 className="reg-title">Create Account</h1>
            <p className="reg-sub">Fill in your details to get started.</p>

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

              {/* ── TEMPLE ── */}
              {role === "temple" && (
                <>
                  <div className="form-row">
                    <div className="field">
                      <label>Temple Name</label>
                      <input name="name" value={temple.name} onChange={ht} placeholder="Shri Siddhivinayak Temple" required />
                    </div>
                    <div className="field">
                      <label>Contact Person</label>
                      <input name="contact" value={temple.contact} onChange={ht} placeholder="Full name" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="field">
                      <label>Phone Number</label>
                      <input name="phone" type="tel" value={temple.phone} onChange={ht} placeholder="+91 00000 00000" required />
                    </div>
                    <div className="field">
                      <label>Email ID</label>
                      <input name="email" type="email" value={temple.email} onChange={ht} placeholder="temple@example.com" required />
                    </div>
                  </div>

                  <div className="field">
                    <label>Temple Address</label>
                    <input name="address" value={temple.address} onChange={ht} placeholder="Street address" required />
                  </div>

                  <div className="form-row">
                    <div className="field">
                      <label>City</label>
                      <input name="city" value={temple.city} onChange={ht} placeholder="Mumbai" required />
                    </div>
                    <div className="field">
                      <label>State</label>
                      <input name="state" value={temple.state} onChange={ht} placeholder="Maharashtra" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="field">
                      <label>PIN Code</label>
                      <input name="pin" value={temple.pin} onChange={ht} placeholder="400001" required />
                    </div>
                    <div className="field">
                      <label>Temple Type</label>
                      <select name="type" value={temple.type} onChange={ht}>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label>Daily Flower Waste Estimate (kg)</label>
                    <input name="waste" type="number" value={temple.waste} onChange={ht} placeholder="e.g. 10" required />
                  </div>

                  <div className="field">
                    <label>Password</label>
                    <input name="password" type="password" value={temple.password} onChange={ht} placeholder="Create a strong password" required />
                  </div>
                </>
              )}

              {/* ── VENDOR ── */}
              {role === "vendor" && (
                <>
                  <div className="form-row">
                    <div className="field">
                      <label>Company Name</label>
                      <input name="company" value={vendor.company} onChange={hv} placeholder="EcoBloom Pvt. Ltd." required />
                    </div>
                    <div className="field">
                      <label>Owner Name</label>
                      <input name="owner" value={vendor.owner} onChange={hv} placeholder="Full name" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="field">
                      <label>Phone Number</label>
                      <input name="phone" type="tel" value={vendor.phone} onChange={hv} placeholder="+91 00000 00000" required />
                    </div>
                    <div className="field">
                      <label>Email ID</label>
                      <input name="email" type="email" value={vendor.email} onChange={hv} placeholder="vendor@example.com" required />
                    </div>
                  </div>

                  <div className="field">
                    <label>Company Address</label>
                    <input name="address" value={vendor.address} onChange={hv} placeholder="Street address" required />
                  </div>

                  <div className="form-row">
                    <div className="field">
                      <label>City</label>
                      <input name="city" value={vendor.city} onChange={hv} placeholder="Pune" required />
                    </div>
                    <div className="field">
                      <label>State</label>
                      <input name="state" value={vendor.state} onChange={hv} placeholder="Maharashtra" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="field">
                      <label>PIN Code</label>
                      <input name="pin" value={vendor.pin} onChange={hv} placeholder="411001" required />
                    </div>
                    <div className="field">
                      <label>Capacity per Day (kg)</label>
                      <input name="capacity" type="number" value={vendor.capacity} onChange={hv} placeholder="e.g. 50" required />
                    </div>
                  </div>

                  <div className="field">
                    <label>Password</label>
                    <input name="password" type="password" value={vendor.password} onChange={hv} placeholder="Create a strong password" required />
                  </div>
                </>
              )}

              <button type="submit" className="reg-submit">
                Create Account →
              </button>
            </form>

            <p className="reg-footer">
              Already registered? <a href="/login">Sign in</a>
            </p>

          </div>
        </div>
      </div>
    </>
  );
}