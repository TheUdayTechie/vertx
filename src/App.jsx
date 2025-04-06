import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import OverviewTab from "./components/OverviewTab";
import DemographicsTab from "./components/DemographicsTab";
import MobileNavigation from "./components/MobileNavigation";
import assets from "./assets/assets";

const App = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6 bg-black overflow-y-auto">
            {/* Tabs */}
            <div className="flex space-x-8 border-b border-gray-800 mb-6">
              {["overview", "demographics"].map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 px-1 text-lg font-semibold ${activeTab === tab ? "border-b-2 border-white text-white" : "text-gray-400"
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            {activeTab === "overview" ? <OverviewTab /> : <DemographicsTab />}
          </main>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden h-screen">


        {/* Tabs */}
        <div className="border-b border-gray-800 flex space-x-8 px-4">
          {["overview", "demographics"].map((tab) => (
            <button
              key={tab}
              className={`py-3 px-1 text-base font-semibold ${activeTab === tab ? "border-b-2 border-white text-white" : "text-gray-400"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Content */}
        <main className="flex-1 p-4 bg-black overflow-y-auto">
          {activeTab === "overview" ? <OverviewTab isMobile={true} /> : <DemographicsTab isMobile={true} />}
        </main>

        {/* Bottom Navigation Bar */}
        <MobileNavigation />
      </div>
    </div>
  );
};

export default App;
