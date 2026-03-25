import React, { useState, useRef, useEffect } from "react";
import { Mail, Lock, Eye, EyeOff, User, ShieldCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import GlobalLogo from "../../assets/Global.png";
import { ROUTES } from "../../core/constants/routes.constant";

const languages = [
  { name: "Arabic", flag: "🇦🇪" },
  { name: "Spanish", flag: "🇪🇸" },
  { name: "French", flag: "🇫🇷" },
  { name: "German", flag: "🇩🇪" },
  { name: "Hindi", flag: "🇮🇳" },
  { name: "Korean", flag: "🇰🇷" },
];

const Login = () => {
  const [accountType, setAccountType] = useState("User");
  const [showPassword, setShowPassword] = useState(false);

  // ✅ NEW STATE (LANGUAGE)
  const [showLang, setShowLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Select Language");

  const langRef = useRef();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    rememberMe: false,
  });

  // ✅ CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setShowLang(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ ADMIN LOGIN CONDITION (ADDED)
   if (formData.emailOrPhone === "admin@123" && formData.password === "123") {
  localStorage.setItem("accountType", "admin"); // ✅ VERY IMPORTANT
  navigate(ROUTES.ADMIN_DASHBOARD); // ✅ use constant
  return;
}

    // ORIGINAL FLOW (UNCHANGED)
    const roleMap = {
      User: "user",
      Detective: "detective",
      Admin: "admin",
    };

    localStorage.setItem("accountType", roleMap[accountType]);
    navigate(ROUTES.OTP);
  };

  return (
    <div className="min-h-screen flex font-montserrat bg-[#D92B3A]">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/3 bg-[#D9D9D9] items-center justify-center relative overflow-hidden rounded-br-[200px]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="z-10 text-center flex flex-col items-center">
          <div className="bg-[#40080C] p-4 rounded-full mb-6">
            <img
              src={GlobalLogo}
              alt="Logo"
              className="w-24 h-24 object-contain"
            />
          </div>
          <h1 className="text-[#D92B3A] text-2xl font-bold leading-tight uppercase text-center">
            Universal Detective <br /> pvt ltd
          </h1>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-12 relative">
        <div className="w-full max-w-md space-y-6 relative">
          {/* ✅ LANGUAGE BUTTON (ADDED ONLY) */}
          <div ref={langRef} className="absolute -top-2 right-0">
            <button
              onClick={() => setShowLang(!showLang)}
              className="bg-white text-[#D92B3A] px-3 py-1 rounded-md text-xs font-medium shadow"
            >
              {selectedLang}
            </button>

            {showLang && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg p-2 z-50 max-h-72 overflow-y-auto no-scrollbar">
                {/* SEARCH */}
                <input
                  placeholder="Search"
                  className="w-full mb-2 px-3 py-2 text-sm border rounded-lg outline-none"
                />

                {/* LANG LIST */}
                {languages.map((lang, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedLang(lang.name);
                      setShowLang(false);
                    }}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
                      selectedLang === lang.name ? "bg-gray-200" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </div>

                    {/* CHECK ICON */}
                    {selectedLang === lang.name && (
                      <div className="w-4 h-4 bg-[#D92B3A] rounded-full flex items-center justify-center text-white text-[10px]">
                        ✓
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Heading */}
          <div className="text-white text-center">
            <h2 className="text-3xl font-bold mb-1">Log In</h2>
            <p className="text-xs opacity-90">
              Choose your account type and login
            </p>
          </div>

          {/* Account Type */}
          <div className="flex gap-3">
            <button
              onClick={() => setAccountType("User")}
              className={`flex-1 flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
                accountType === "User"
                  ? "bg-white/30 border-white"
                  : "bg-transparent border-white/40"
              }`}
            >
              <div
                className={`p-2 rounded-lg mb-1 ${
                  accountType === "User"
                    ? "bg-white text-[#D92B3A]"
                    : "bg-white/20 text-white"
                }`}
              >
                <User size={20} />
              </div>
              <span className="text-white text-sm">User</span>
            </button>

            <button
              onClick={() => setAccountType("Detective")}
              className={`flex-1 flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
                accountType === "Detective"
                  ? "bg-white/30 border-white"
                  : "bg-transparent border-white/40"
              }`}
            >
              <div
                className={`p-2 rounded-lg mb-1 ${
                  accountType === "Detective"
                    ? "bg-white text-[#D92B3A]"
                    : "bg-white/20 text-white"
                }`}
              >
                <ShieldCheck size={20} />
              </div>
              <span className="text-white text-sm">Detective</span>
            </button>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-white text-xs">
                Email or Phone number
              </label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80">
                  <Mail size={16} />
                </span>
                <input
                  type="text"
                  name="emailOrPhone"
                  placeholder="Enter your email/ phone number"
                  className="w-full bg-transparent border border-white/60 rounded-lg py-2 pl-9 pr-3 text-white text-sm placeholder:text-white/60 focus:outline-none focus:border-white"
                  value={formData.emailOrPhone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label className="text-white text-xs">Password/ OTP</label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80">
                  <Lock size={16} />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full bg-transparent border border-white/60 rounded-lg py-2 pl-9 pr-9 text-white text-sm placeholder:text-white/60 focus:outline-none focus:border-white"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-white cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="w-3 h-3 accent-white"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-white hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFF2EF] text-[#D92B3A] py-2 rounded-lg text-sm font-semibold hover:bg-white"
            >
              Log In as {accountType}
            </button>
          </form>
           {/* Social */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex-1 border-t border-white/40"></div>
              <span className="text-white text-[10px]">Or continue with</span>
              <div className="flex-1 border-t border-white/40"></div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 flex justify-center py-2 bg-white rounded-md">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" />
              </button>
              <button className="flex-1 flex justify-center py-2 bg-white rounded-md">
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-4 h-4" />
              </button>
              <button className="flex-1 flex justify-center py-2 bg-white rounded-md">
                <img src="https://www.svgrepo.com/show/442911/apple-logo.svg" className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-center text-white text-xs">
            Don't have an account?{' '}
            <Link to={ROUTES.SIGNUP} className="font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Decorative Strip */}
      <div className="hidden lg:block lg:w-12 bg-[#D9D9D9] rounded-bl-[200px]" />
    </div>
     

      
  );
};

export default Login;
