import { useState } from "react";
import { User, Lock, Bell, Palette, Key } from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "security", label: "Security", icon: Lock },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "api", label: "API Keys", icon: Key },
  ];

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-bold">Settings</h1>
        <p className="text-gray-400">
          Manage your account, security and system preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* SIDEBAR SETTINGS */}
        <div className="bg-[#0F172A] border border-gray-800 rounded-2xl p-4 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-gray-800"
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* CONTENT AREA */}
        <div className="lg:col-span-3 bg-[#0F172A] border border-gray-800 rounded-2xl p-6">

          {/* PROFILE */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Profile Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="bg-gray-900 p-3 rounded-xl border border-gray-700"
                  placeholder="First Name"
                />
                <input
                  className="bg-gray-900 p-3 rounded-xl border border-gray-700"
                  placeholder="Last Name"
                />
                <input
                  className="bg-gray-900 p-3 rounded-xl border border-gray-700 md:col-span-2"
                  placeholder="Email"
                />
              </div>

              <button className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500">
                Save Changes
              </button>
            </div>
          )}

          {/* SECURITY */}
          {activeTab === "security" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Security</h2>

              <input
                type="password"
                className="w-full bg-gray-900 p-3 rounded-xl border border-gray-700"
                placeholder="Current Password"
              />

              <input
                type="password"
                className="w-full bg-gray-900 p-3 rounded-xl border border-gray-700"
                placeholder="New Password"
              />

              <button className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500">
                Update Password
              </button>
            </div>
          )}

          {/* NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Notifications</h2>

              {["Email Alerts", "SMS Alerts", "System Updates"].map((item) => (
                <label key={item} className="flex items-center justify-between bg-gray-900 p-4 rounded-xl border border-gray-700">
                  <span>{item}</span>
                  <input type="checkbox" className="w-5 h-5" />
                </label>
              ))}
            </div>
          )}

          {/* APPEARANCE */}
          {activeTab === "appearance" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Appearance</h2>

              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700">
                  Dark Mode
                </button>

                <button className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700">
                  Light Mode
                </button>
              </div>
            </div>
          )}

          {/* API KEYS */}
          {activeTab === "api" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">API Keys</h2>

              <div className="bg-gray-900 p-4 rounded-xl border border-gray-700">
                <p className="text-sm text-gray-400">Production Key</p>
                <p className="font-mono">sk_live_****************************</p>
              </div>

              <button className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500">
                Generate New Key
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Settings;