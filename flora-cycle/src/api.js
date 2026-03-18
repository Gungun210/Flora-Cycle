//All Api calls to backend Happens here
const BASE_URL = "http://localhost:5000/api";

export const getToken = () => localStorage.getItem("fc_token");
export const getUser = () => JSON.parse(localStorage.getItem("fc_user") || "{}");
export const getRole = () => localStorage.getItem("fc_role");

export const logout = () => {
  localStorage.removeItem("fc_token");
  localStorage.removeItem("fc_user");
  localStorage.removeItem("fc_role");
  window.location.href = "/";
};

export const register = async (role, formData) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ role, ...formData }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Registration failed");
  localStorage.setItem("fc_token", data.token);
  localStorage.setItem("fc_user", JSON.stringify(data.user));
  localStorage.setItem("fc_role", data.role);
  return data;
};

export const login = async (role, identifier, password) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ role, identifier, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Login failed");
  localStorage.setItem("fc_token", data.token);
  localStorage.setItem("fc_user", JSON.stringify(data.user));
  localStorage.setItem("fc_role", data.role);
  return data;
};

export const getDashboard = async () => {
  const res = await fetch(`${BASE_URL}/dashboard`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
};