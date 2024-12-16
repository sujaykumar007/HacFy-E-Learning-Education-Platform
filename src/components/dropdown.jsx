import { useState, useEffect } from "react";

const Dropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");

    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // Clear user data
    window.location.href = "/"; // Redirect to homepage or login page
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        <img
          src="/profile.png" // Placeholder profile image
          alt="profile"
          className="w-8 h-8 rounded-full object-contain"
        />
        Profile
      </button>

      {isDropdownVisible && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
          <div className="px-4 py-2 text-gray-700">{Name || "Guest"}</div>
          <div className="px-4 py-2 text-gray-500 text-xs">{email || "Guest"}</div>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
