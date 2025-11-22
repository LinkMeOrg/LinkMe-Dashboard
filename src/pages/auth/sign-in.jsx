import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/auth/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      const token = data.token;
      localStorage.setItem("token", token);

      // Success notification
      alert("Login successful!");

      // In real app: navigate("/dashboard/home");
      console.log("Redirecting to dashboard...");
    } catch (err) {
      alert(err.message || "Login failed");
    }
  };

  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-gray-900">
            Sign In
          </h2>
          <p className="text-lg font-normal text-blue-gray-600">
            Enter your email and password to Sign In.
          </p>
        </div>
        <div className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <div>
              <label className="block text-sm font-medium text-blue-gray-700 mb-2">
                Your email
              </label>
              <input
                type="email"
                size="lg"
                placeholder="name@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-3 text-sm border border-blue-gray-200 rounded-lg focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  size="lg"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-3 pr-10 text-sm border border-blue-gray-200 rounded-lg focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-gray-500 hover:text-blue-gray-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-6 w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-[40rem] w-full object-cover rounded-3xl"
          alt="Sign in visual"
        />
      </div>
    </section>
  );
}

export default SignIn;
