export const authStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=DM+Sans:wght@200;300;400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { overflow-x: hidden; }

  .auth-bg {
    min-height: 100vh;
    display: flex; align-items: center; justify-content: center;
    font-family: 'DM Sans', sans-serif;
    background: #faf7ff;
    position: relative; overflow: hidden;
    padding: 2rem;
  }

  .auth-blob {
    position: fixed; border-radius: 50%;
    filter: blur(80px); opacity: 0.5;
    pointer-events: none; z-index: 0;
  }
  .b1 {
    width:600px; height:600px; top:-150px; left:-150px;
    background: radial-gradient(circle, #e4d0f8, #d8c4f5 40%, transparent 70%);
    animation: bd1 18s ease-in-out infinite alternate;
  }
  .b2 {
    width:450px; height:550px; bottom:-100px; right:-100px;
    background: radial-gradient(circle, #f0e6ff, #ceb8ee 50%, transparent 70%);
    animation: bd2 14s ease-in-out infinite alternate;
  }
  @keyframes bd1 { from{transform:translate(0,0)} to{transform:translate(50px,40px)} }
  @keyframes bd2 { from{transform:translate(0,0)} to{transform:translate(-40px,-40px)} }

  .auth-card {
    position: relative; z-index: 10;
    background: rgba(255,255,255,0.72);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(180,140,230,0.18);
    border-radius: 24px;
    padding: 2.8rem 3rem;
    width: 100%; max-width: 480px;
    box-shadow: 0 4px 40px rgba(140,80,220,0.1), 0 1px 0 rgba(255,255,255,0.8) inset;
    animation: cardIn 0.7s ease both;
  }
  @keyframes cardIn {
    from { opacity:0; transform:translateY(24px) scale(0.98); }
    to   { opacity:1; transform:translateY(0) scale(1); }
  }

  .auth-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.45rem; font-weight: 500;
    color: #2a0a40; text-decoration: none;
    display: block; text-align: center; margin-bottom: 0.4rem;
  }
  .auth-logo em { font-style: italic; color: #8040b8; }

  .auth-subtitle {
    text-align: center; font-size: 0.78rem;
    color: #9878b8; letter-spacing: 0.06em;
    margin-bottom: 1.8rem; line-height: 1.5;
  }

  .role-toggle {
    display: flex;
    background: rgba(180,130,240,0.08);
    border: 1px solid rgba(180,130,240,0.18);
    border-radius: 50px; padding: 4px;
    margin-bottom: 1rem; position: relative;
  }
  .role-btn {
    flex: 1; padding: 9px 0;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.8rem; font-weight: 500;
    letter-spacing: 0.06em;
    border: none; background: transparent;
    border-radius: 50px; cursor: pointer;
    color: #9878b8; transition: color 0.25s;
    position: relative; z-index: 2;
  }
  .role-btn.active { color: #5a1a90; }
  .role-slider {
    position: absolute; top: 4px; bottom: 4px;
    width: calc(50% - 4px);
    background: white; border-radius: 50px;
    box-shadow: 0 2px 12px rgba(140,80,220,0.15);
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
    z-index: 1;
  }
  .role-slider.vendor { transform: translateX(calc(100% + 8px)); }

  .role-badge {
    display: flex; align-items: center; gap: 8px;
    background: rgba(180,130,240,0.07);
    border: 1px solid rgba(180,130,240,0.15);
    border-radius: 10px; padding: 10px 14px;
    font-size: 0.76rem; color: #7030a8;
    margin-bottom: 1.4rem; line-height: 1.4;
  }

  .auth-form { display: flex; flex-direction: column; gap: 1rem; }

  .form-row { display: flex; gap: 1rem; }
  .form-row .field { flex: 1; }

  .field { display: flex; flex-direction: column; gap: 5px; }
  .field label {
    font-size: 0.68rem; font-weight: 500;
    letter-spacing: 0.1em; text-transform: uppercase; color: #7a5898;
  }
  .field input {
    padding: 11px 14px;
    border: 1.5px solid rgba(180,130,240,0.2);
    border-radius: 12px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem; color: #2a0a40;
    background: rgba(255,255,255,0.6);
    backdrop-filter: blur(8px);
    transition: all 0.2s; outline: none;
  }
  .field input::placeholder { color: #c0a8d8; }
  .field input:focus {
    border-color: rgba(140,70,210,0.45);
    background: rgba(255,255,255,0.9);
    box-shadow: 0 0 0 3px rgba(140,70,210,0.08);
  }

  .auth-divider {
    display: flex; align-items: center; gap: 10px;
    font-size: 0.6rem; color: rgba(160,100,220,0.4);
    letter-spacing: 0.2em; text-transform: uppercase;
  }
  .auth-divider::before, .auth-divider::after {
    content: ''; flex: 1; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(160,100,220,0.2), transparent);
  }

  .auth-submit {
    padding: 13px; border: none; border-radius: 50px;
    background: linear-gradient(135deg, #6020a0 0%, #9050c8 60%, #b070e0 100%);
    color: white;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem; font-weight: 500;
    letter-spacing: 0.06em; cursor: pointer;
    box-shadow: 0 8px 28px rgba(96,32,160,0.32);
    transition: all 0.28s ease; margin-top: 0.4rem;
  }
  .auth-submit:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(96,32,160,0.42); }

  .auth-footer {
    text-align: center; margin-top: 1.4rem;
    font-size: 0.78rem; color: #9878b8;
  }
  .auth-footer a { color: #7030a8; text-decoration: none; font-weight: 500; }
  .auth-footer a:hover { text-decoration: underline; }

  @media (max-width: 520px) {
    .auth-card { padding: 2rem 1.5rem; }
    .form-row { flex-direction: column; gap: 1rem; }
  }
`;
