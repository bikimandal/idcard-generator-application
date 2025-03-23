import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { IdCard, Settings, PanelLeftOpen, LogOut, PanelLeftClose } from "lucide-react";

const SideNavbar = () => {
  const [collapsed, setCollapsed] = useState(
    localStorage.getItem("sidebar-collapsed") === "true"
  );

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", collapsed);
  }, [collapsed]);

  return (
    <div
      className={`sticky top-0 h-screen bg-gray-900 text-white flex flex-col border-r border-gray-700 px-2 
  transition-all duration-300 ${collapsed ? "w-15" : "w-40"}`}
    >



      <div className="w-full flex items-center h-20 relative">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-2 rounded-lg cursor-pointer transition-transform duration-300 transform hover:text-yellow-300
      ${collapsed ? "translate-x-0" : "translate-x-25"}`}
        >
          {collapsed ? <PanelLeftOpen size={24} /> : <PanelLeftClose size={24} />}
        </button>
      </div>




      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <NavItem to="/idcard" icon={<IdCard size={24} />} text="Id Card" collapsed={collapsed} />
        {/* <NavItem to="/settings" icon={<Settings size={24} />} text="Settings" collapsed={collapsed} /> */}
        {/* <NavItem to="/logout" icon={<LogOut size={24} />} text="Logout" collapsed={collapsed} /> */}
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon, text, collapsed }) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to); // Active if path starts with 'to'

  return (
    <Link to={to} className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all 
        ${isActive ? "bg-gray-700 text-yellow-300" : "hover:bg-gray-700"} 
        ${collapsed ? "justify-center" : ""}`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <span
        className={`text-md transition-all duration-300 overflow-hidden whitespace-nowrap ${collapsed ? "opacity-0 w-0 hidden" : "opacity-100 w-auto"
          }`}
      >
        {text}
      </span>
    </Link>
  );
};


export default SideNavbar;
