import React, { useState } from "react";
import { supabase } from "./supabase";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  async function handleSignUp() {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) alert(error.message);
    else setUser(data.user);
  }

  async function handleSignIn() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert(error.message);
    else setUser(data.user);
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    setUser(null);
  }

  return (
    <div>
      <h1>Authentification avec Supabase</h1>
      {user ? (
        <div>
          <p>Bienvenue, {user.email} !</p>
          <button onClick={handleSignOut}>Se déconnecter</button>
        </div>
      ) : (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>Connexion</button>
          <button onClick={handleSignUp}>Inscription</button>
        </div>
      )}
    </div>
  );
}

export default App;
