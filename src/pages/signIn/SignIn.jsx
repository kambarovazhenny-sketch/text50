import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from  "../../firebase";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Ийгиликтүү кирдиң!");
    } catch (err) {
      setError("Email же пароль туура эмес");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 space-y-4">
      <input
        type="email"
        placeholder="Gmail"
        className="w-full border px-3 py-2 rounded"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Пароль"
        className="w-full border px-3 py-2 rounded"
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        onClick={handleSignIn}
        className="bg-gray-900 text-white px-8 py-2.5 text-sm rounded-md hover:bg-gray-800 transition-all duration-200 w-full"
      >
        Sign In
      </button>
    </div>
  );
}
