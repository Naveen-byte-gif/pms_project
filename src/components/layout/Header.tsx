"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  
  // Format the title based on the pathname
  const getTitleInfo = () => {
    if (pathname.includes('/dashboard')) return { pre: "WELCOME BACK, ADMIN USER", title: "Admin Dashboard" };
    if (pathname.includes('/offices')) return { pre: "4 REGISTERED", title: "Offices" };
    if (pathname.includes('/watchmen')) return { pre: "5 REGISTERED", title: "Watchmen" };
    if (pathname.includes('/visitors')) return { pre: "3 CURRENTLY INSIDE", title: "Visitors" };
    return { pre: "", title: "Admin" };
  };

  const { pre, title } = getTitleInfo();

  return (
    <header className="bg-white border-bottom px-4 py-3 d-flex align-items-center justify-content-between position-sticky top-0" style={{ zIndex: 999 }}>
      <div>
        <p className="mb-0 text-primary fw-bold small text-uppercase" style={{ letterSpacing: '0.05em', fontSize: '0.7rem' }}>{pre}</p>
        <h1 className="m-0 fw-bold text-dark" style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}>{title}</h1>
      </div>
      
      <div className="d-flex align-items-center gap-4">
        {/* Search */}
        <div className="position-relative d-none d-md-block">
          <i className="bi bi-search position-absolute top-50 translate-middle-y text-muted" style={{ left: '1rem' }}></i>
          <input 
            type="text" 
            className="form-control bg-light border-0 rounded-pill" 
            placeholder="Search..." 
            style={{ paddingLeft: '2.5rem', width: '250px' }}
          />
        </div>
        
        {/* Notifications */}
        <button className="btn btn-link text-muted p-0 position-relative hover-text-dark">
          <i className="bi bi-bell fs-5"></i>
          <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
            <span className="visually-hidden">New alerts</span>
          </span>
        </button>


      </div>
    </header>
  );
}
