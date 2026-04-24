"use client";

import styles from "@/styles/modules/Dashboard.module.css";
import Link from "next/link";

export default function DashboardPage() {
  const stats = [
    { label: "Total Properties", value: "24", trend: "+2 this month", trendUp: true, icon: "bi-building", color: "var(--primary)" },
    { label: "Active Units", value: "1,248", trend: "+45 this month", trendUp: true, icon: "bi-grid-3x3-gap", color: "#3B82F6" },
    { label: "Visitors Today", value: "382", trend: "-5% vs yesterday", trendUp: false, icon: "bi-people", color: "#8B5CF6" },
    { label: "SLA Adherence", value: "98.4%", trend: "+1.2% vs last week", trendUp: true, icon: "bi-check-circle", color: "#10B981" },
  ];

  const criticalIssues = [
    { id: "T-892", subject: "Main Gate Scanner Malfunction", priority: "Critical", status: "Open", assigned: "Rahul V." },
    { id: "T-895", subject: "CCTV Blind Spot - Block B", priority: "High", status: "In Progress", assigned: "Ankit S." },
  ];

  return (
    <div className={styles.dashboard}>
      {/* Top Stats Grid */}
      <div className={styles.statsGrid}>
        {stats.map((stat, idx) => (
          <div className={styles.statCard} key={idx}>
            <div className={styles.statHeader}>
              <div className={styles.statIcon} style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                <i className={`bi ${stat.icon}`}></i>
              </div>
              <span className={`${styles.statTrend} ${stat.trendUp ? "text-success" : "text-danger"}`}>
                <i className={`bi bi-graph-${stat.trendUp ? "up" : "down"}`}></i>
                {stat.trend}
              </span>
            </div>
            <p className={styles.statLabel}>{stat.label}</p>
            <h3 className={styles.statValue}>{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className={styles.mainGrid}>
        {/* Recent Operations Panel */}
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h5 className={styles.panelTitle}>Operational Intelligence</h5>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-light border text-dark btn-sm rounded-pill">Export PDF</button>
              <button className="btn btn-primary btn-sm rounded-pill">View All</button>
            </div>
          </div>
          <div className={styles.panelBody}>
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.th}>Ticket ID</th>
                    <th className={styles.th}>Issue Subject</th>
                    <th className={styles.th}>Priority</th>
                    <th className={styles.th}>Status</th>
                    <th className={styles.th}>Assigned To</th>
                  </tr>
                </thead>
                <tbody>
                  {criticalIssues.map((issue) => (
                    <tr key={issue.id}>
                      <td className={styles.td}><span className="fw-bold text-primary">{issue.id}</span></td>
                      <td className={styles.td}>{issue.subject}</td>
                      <td className={styles.td}>
                        <span className={`badge bg-${issue.priority === 'Critical' ? 'danger' : 'warning'} bg-opacity-10 text-${issue.priority === 'Critical' ? 'danger' : 'warning'} rounded-pill`}>
                          {issue.priority}
                        </span>
                      </td>
                      <td className={styles.td}>{issue.status}</td>
                      <td className={styles.td}>{issue.assigned}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* System Health / Quick Insights */}
        <div className="d-flex flex-column gap-4">
          <div className={styles.panel} style={{ background: 'linear-gradient(135deg, var(--primary-dark) 0%, #065F46 100%)' }}>
            <div className="p-4 text-white">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-white bg-opacity-20 rounded-circle p-2">
                  <i className="bi bi-shield-check fs-4"></i>
                </div>
                <h5 className="mb-0 fw-bold">Platform Status</h5>
              </div>
              <p className="text-white text-opacity-75 small mb-4">All global regions are currently operational. No active breaches reported.</p>
              <div className="d-flex justify-content-between align-items-center bg-white bg-opacity-10 rounded-pill p-2 px-3">
                <span className="small fw-medium">Active Watchmen</span>
                <span className="badge bg-white text-dark rounded-pill">1,240</span>
              </div>
            </div>
          </div>

          <div className={styles.panel}>
            <div className="p-4">
              <h6 className="fw-bold mb-3">Global Occupancy</h6>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="flex-grow-1">
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-primary" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <span className="small fw-bold">82%</span>
              </div>
              <p className="text-muted small mb-0">Total capacity across all managed buildings worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
