"use client";

import styles from "@/styles/modules/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Left: Tenant Switcher */}
      <div className="d-flex align-items-center gap-3">
        <div className={styles.tenantSwitcher}>
          <i className="bi bi-geo-alt-fill text-primary"></i>
          <span>Global Properties (All Regions)</span>
          <i className="bi bi-chevron-down ms-1 small text-muted"></i>
        </div>
      </div>
      
      {/* Middle: Global Search */}
      <div className={styles.searchContainer}>
        <i className={`bi bi-search ${styles.searchIcon}`}></i>
        <input 
          type="text" 
          className={styles.searchInput} 
          placeholder="Search properties, tenants, or visitors..." 
        />
      </div>

      {/* Right: Actions */}
      <div className={styles.actions}>
        <div className="dropdown">
          <button className={styles.quickAction} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-plus-lg"></i>
            <span>Quick Action</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0 rounded-xl mt-2 p-2">
            <li>
              <Link className="dropdown-item rounded-lg py-2" href="/admin/properties?action=add">
                <i className="bi bi-building me-2"></i>Add Property
              </Link>
            </li>
            <li>
              <Link className="dropdown-item rounded-lg py-2" href="/admin/helpdesk?action=add">
                <i className="bi bi-ticket-perforated me-2"></i>Create Ticket
              </Link>
            </li>
            <li>
              <Link className="dropdown-item rounded-lg py-2" href="/admin/people?action=add">
                <i className="bi bi-person-plus me-2"></i>Invite User
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button className={styles.actionButton}>
            <i className="bi bi-bell fs-5"></i>
            <span className={styles.badge}></span>
          </button>
          
          <button className={styles.actionButton}>
            <i className="bi bi-question-circle fs-5"></i>
          </button>
          
          <div className="ms-2 ps-3 border-start">
            <div className="d-flex align-items-center gap-2">
              <div className="text-end d-none d-xl-block">
                <p className="mb-0 fw-bold small" style={{ lineHeight: 1.2 }}>Admin User</p>
                <p className="mb-0 text-muted small" style={{ fontSize: '0.7rem' }}>Super Admin</p>
              </div>
              <div className={styles.actionButton} style={{ background: 'var(--bg-app)' }}>
                <i className="bi bi-person-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
