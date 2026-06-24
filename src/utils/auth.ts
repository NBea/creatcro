import { users as demoUsers, type User } from "../data/users";

export function updateUser(updatedUser: any) {
  const storedUsers = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  const updatedList = storedUsers.map((u: any) =>
    u.id === updatedUser.id ? updatedUser : u
  );

  localStorage.setItem("users", JSON.stringify(updatedList));

  // update logged user if it's current one
  const current = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  if (current?.id === updatedUser.id) {
    localStorage.setItem("user", JSON.stringify(updatedUser));
  }

  window.dispatchEvent(new Event("authChange"));
}
/* ---------------------------
   GET CURRENT USER
---------------------------- */
export function getUser(): User | null {
  const user = localStorage.getItem("user");

  if (!user) return null;

  try {
    return JSON.parse(user);
  } catch {
    localStorage.removeItem("user");
    return null;
  }
}

/* ---------------------------
   REGISTER
---------------------------- */
type RegisterData = {
  username: string;
  email: string;
  password: string;
};

export function register(user: RegisterData) {
  const storedUsers = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  const exists = storedUsers.some(
    (u: any) =>
      u.username === user.username ||
      u.email === user.email
  );

  if (exists) return false;

  const newUser = {
    id: Date.now(), // 🔥 KLJUČNO
    username: user.username,
    email: user.email,
    password: user.password,
    avatar: null,
  };

  storedUsers.push(newUser);

  localStorage.setItem("users", JSON.stringify(storedUsers));

  return true;
}

/* ---------------------------
   LOGIN
---------------------------- */
export function login(input: {
  username: string;
  password: string;
}) {
  const storedUsers = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  const allUsers = [...demoUsers, ...storedUsers];

  const foundUser = allUsers.find(
    (u: any) =>
      u.username === input.username &&
      u.password === input.password
  );

  if (!foundUser) {
    alert("Wrong username or password");
    return false;
  }

  const safeUser = {
    id: foundUser.id,
    username: foundUser.username,
    avatar: foundUser.avatar ?? null,
  };

  localStorage.setItem("user", JSON.stringify(safeUser));
  window.dispatchEvent(new Event("authChange"));

  return true;
}

/* ---------------------------
   LOGOUT
---------------------------- */
export function logout() {
  localStorage.removeItem("user");
  window.dispatchEvent(new Event("authChange"));
}