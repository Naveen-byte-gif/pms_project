"use client";

import Link from "next/link";

export default function DashboardPage() {
  const stats = [
    { label: "Offices", value: "12", sub: "+2 this month", subColor: "text-success", icon: "bi-building", bg: "bg-primary" },
    { label: "Units", value: "48", sub: "+5 this month", subColor: "text-success", icon: "bi-buildings", bg: "bg-success" },
    { label: "Watchmen", value: "24", sub: "20 on duty", subColor: "text-primary", icon: "bi-eye", bg: "bg-warning" },
    { label: "Visitors Today", value: "156", sub: "+12% vs yesterday", subColor: "text-success", icon: "bi-people", bg: "bg-info" },
  ];

  const recentVisitors = [
    { name: "Ankit Sharma", location: "Block A-204 · Tech Park Tower", time: "10:32 AM", status: "Inside" },
    { name: "Priya Singh", location: "Block B-102 · Business Hub", time: "10:15 AM", status: "Inside" },
    { name: "Rahul Verma", location: "Block A-301 · Tech Park Tower", time: "09:48 AM", status: "Checked Out" },
    { name: "Sneha Gupta", location: "Block C-105 · Enterprise Centre", time: "09:30 AM", status: "Inside" },
  ];

  const quickActions = [
    { label: "Add Office", desc: "Register new property", icon: "bi-plus-lg", href: "/admin/offices" },
    { label: "Manage Watchmen", desc: "View and assign", icon: "bi-person-plus", href: "/admin/watchmen" },
    { label: "Visitor Logs", desc: "Today's entries", icon: "bi-card-list", href: "/admin/visitors" },
  ];

  return (
    <div className="container-fluid py-2">
      {/* Stats Row */}
      <div className="row g-4 mb-4">
        {stats.map((stat, idx) => (
          <div className="col-md-6 col-lg-3" key={idx}>
            <div className="card border rounded-3 h-100 p-4 bg-white position-relative overflow-hidden">
              <i className="bi bi-graph-up-arrow position-absolute top-0 end-0 m-3 text-success opacity-50"></i>
              <div className={`${stat.bg} bg-opacity-10 text-${stat.bg.replace('bg-', '')} rounded d-flex align-items-center justify-content-center mb-3`} style={{ width: '40px', height: '40px' }}>
                <i className={`bi ${stat.icon} fs-5`}></i>
              </div>
              <h2 className="fw-bold mb-1">{stat.value}</h2>
              <p className="text-muted small fw-medium mb-2">{stat.label}</p>
              <p className={`small mb-0 fw-medium ${stat.subColor}`}>{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">
        {/* Recent Visitors */}
        <div className="col-lg-8">
          <div className="card border rounded-3 bg-white h-100">
            <div className="card-header bg-white border-bottom-0 p-4 d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-0 fw-bold">Recent Visitors</h5>
                <p className="text-muted small mb-0">Across all buildings</p>
              </div>
              <Link href="/admin/visitors" className="btn btn-link text-decoration-none fw-medium p-0">View all &rarr;</Link>
            </div>
            <div className="card-body p-0">
              <ul className="list-group list-group-flush">
                {recentVisitors.map((visitor, idx) => (
                  <li className="list-group-item p-4 border-light d-flex align-items-center justify-content-between" key={idx}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                        <i className="bi bi-person fs-5"></i>
                      </div>
                      <div>
                        <p className="mb-0 fw-bold text-dark">{visitor.name}</p>
                        <p className="mb-0 text-muted small">{visitor.location}</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <p className="mb-1 fw-bold text-dark small">{visitor.time}</p>
                      <span className={`badge ${visitor.status === 'Inside' ? 'bg-success bg-opacity-10 text-success' : 'bg-secondary bg-opacity-10 text-secondary'} rounded-pill fw-medium`}>
                        {visitor.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Actions & System Status */}
        <div className="col-lg-4 d-flex flex-column gap-4">
          <div>
            <h6 className="fw-bold mb-3">Quick Actions</h6>
            <div className="d-flex flex-column gap-3">
              {quickActions.map((action, idx) => (
                <Link href={action.href} key={idx} className="text-decoration-none">
                  <div className="card border flex-row align-items-center p-3 rounded-3 hover-bg-light transition-colors">
                    <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                      <i className={`bi ${action.icon}`}></i>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0 fw-bold text-dark">{action.label}</p>
                      <p className="mb-0 text-muted small">{action.desc}</p>
                    </div>
                    <i className="bi bi-chevron-right text-muted"></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="card border-0 bg-blue-gradient text-white rounded-3 p-4 mt-auto">
            <div className="d-flex align-items-center gap-3 mb-2">
              <i className="bi bi-activity fs-3"></i>
              <h5 className="mb-0 fw-bold">System Healthy</h5>
            </div>
            <p className="mb-0 text-white-50 small">All offices reporting normally.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
