"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/modules/Sidebar.module.css";
import LogoutModal from "@/components/dashboard/LogoutModal";

export default function Sidebar() {
  const pathname = usePathname();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    // Implement actual logout logic here
    console.log("Logging out...");
    window.location.href = "/login"; // Redirect example
  };

  const menuGroups = [
    {
      label: "Main",
      items: [
        { name: "Dashboard", path: "/admin/dashboard", icon: "bi-grid-1x2-fill" },
        { name: "Properties", path: "/admin/properties", icon: "bi-building-fill" },
        { name: "Space Management", path: "/admin/space", icon: "bi-layers-fill" },
      ]
    },
    {
      label: "Operations",
      items: [
        { name: "Visitors", path: "/admin/visitors", icon: "bi-person-badge-fill" },
        { name: "Helpdesk", path: "/admin/helpdesk", icon: "bi-headset" },
        { name: "Security", path: "/admin/security", icon: "bi-shield-lock-fill" },
      ]
    },
    {
      label: "Assets & Finance",
      items: [
        { name: "Inventory", path: "/admin/assets", icon: "bi-box-seam-fill" },
        { name: "Vendors", path: "/admin/vendors", icon: "bi-truck" },
        { name: "Finance", path: "/admin/finance", icon: "bi-cash-stack" },
      ]
    },
    {
      label: "Intelligence",
      items: [
        { name: "Reports", path: "/admin/reports", icon: "bi-bar-chart-line-fill" },
        { name: "Settings", path: "/admin/settings", icon: "bi-gear-wide-connected" },
      ]
    }
  ];

  return (
    <aside className={styles.sidebar}>
      {/* Brand */}
      <div className={styles.brand}>
        <div className={styles.brandIcon}>
          <i className="bi bi-shield-check"></i>
        </div>
        <span className={styles.brandName}>PMS Global</span>
      </div>

      {/* Navigation */}
      <nav className={styles.navSection}>
        {menuGroups.map((group) => (
          <div key={group.label} className={styles.navGroup}>
            <p className={styles.navLabel}>{group.label}</p>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-1">
              {group.items.map((item) => {
                const isActive = pathname.startsWith(item.path);
                return (
                  <li key={item.name}>
                    <Link 
                      href={item.path} 
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                    >
                      <i className={`bi ${item.icon} ${styles.navIcon}`}></i>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className={styles.userProfile}>
        <div className={styles.userCard}>
          <div className={styles.avatar}>A</div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>Admin User</p>
            <p className={styles.userRole}>Super Admin</p>
          </div>
          <button 
            className="btn btn-link text-muted p-0 shadow-none"
            onClick={() => setIsLogoutModalOpen(true)}
          >
            <i className="bi bi-box-arrow-right"></i>
          </button>
        </div>
      </div>

      <LogoutModal 
        isOpen={isLogoutModalOpen} 
        onClose={() => setIsLogoutModalOpen(false)} 
        onConfirm={handleLogout} 
      />
    </aside>
  );
}
