"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "bi-grid-1x2" },
    { name: "Offices", path: "/admin/offices", icon: "bi-building" },
    { name: "Watchmen", path: "/admin/watchmen", icon: "bi-person-badge" },
    { name: "Visitors", path: "/admin/visitors", icon: "bi-people" },
    { name: "Profile", path: "#", icon: "bi-person" },
  ];

  return (
    <aside className="bg-white border-end d-flex flex-column" style={{ width: '260px', height: '100vh', position: 'fixed', left: 0, top: 0, zIndex: 1000 }}>
      {/* Brand */}
      <div className="p-4 d-flex align-items-center gap-2 mb-4">
        <div className="bg-primary text-white rounded d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
          <i className="bi bi-shield-check fs-6"></i>
        </div>
        <span className="fw-bold fs-5 text-dark" style={{ letterSpacing: '-0.02em' }}>PMS Security</span>
      </div>

      {/* Navigation */}
      <nav className="flex-grow-1 px-3">
        <ul className="list-unstyled mb-0 d-flex flex-column gap-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.path) && item.path !== "#";
            return (
              <li key={item.name}>
                <Link 
                  href={item.path} 
                  className={`d-flex align-items-center gap-3 px-3 py-2 rounded-3 text-decoration-none transition-colors ${isActive ? 'bg-primary text-white fw-medium' : 'text-muted hover-bg-light hover-text-dark'}`}
                  style={{ fontSize: '0.95rem' }}
                >
                  <i className={`bi ${item.icon} fs-5 ${isActive ? 'text-white' : ''}`}></i>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile Summary */}
      <div className="p-4 border-top mt-auto">
        <div className="d-flex align-items-center gap-3">
          <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
            <i className="bi bi-person fs-5"></i>
          </div>
          <div className="flex-grow-1 overflow-hidden">
            <p className="mb-0 fw-bold text-dark text-truncate" style={{ fontSize: '0.9rem' }}>Admin User</p>
            <p className="mb-0 text-muted small text-truncate" style={{ fontSize: '0.75rem' }}>Super Admin</p>
          </div>
          <button className="btn btn-link text-muted p-0 text-decoration-none hover-text-dark">
            <i className="bi bi-box-arrow-right fs-5"></i>
          </button>
        </div>
      </div>
    </aside>
  );
}
