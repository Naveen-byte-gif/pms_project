"use client";

import styles from "@/styles/modules/Dashboard.module.css";

export default function ReportsPage() {
  return (
    <div className={styles.dashboard}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div>
          <h2 className="fw-extrabold fs-3 mb-1">Global Intelligence</h2>
          <p className="text-muted small">Cross-property analytics, revenue distribution, and operational efficiency reports.</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary rounded-pill px-4">Custom Report</button>
          <button className="btn btn-primary rounded-pill px-4"><i className="bi bi-download me-2"></i>Export All Data</button>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h5 className={styles.panelTitle}>Occupancy Trends (12 Months)</h5>
              <select className="form-select form-select-sm w-auto border-0 bg-light">
                <option>All Properties</option>
              </select>
            </div>
            <div className="p-5 text-center bg-light bg-opacity-50">
              <i className="bi bi-bar-chart-fill fs-1 text-primary opacity-25 mb-3 d-block"></i>
              <p className="text-muted small">Interactive occupancy chart visualization will be rendered here.</p>
              <div className="d-flex justify-content-center gap-4 mt-4">
                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle bg-primary" style={{ width: '12px', height: '12px' }}></div>
                  <span className="x-small fw-bold">Actual</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle bg-secondary" style={{ width: '12px', height: '12px' }}></div>
                  <span className="x-small fw-bold">Projected</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h5 className={styles.panelTitle}>Revenue by Region</h5>
            </div>
            <div className="p-5 text-center">
              <div className="position-relative d-inline-block">
                <i className="bi bi-circle-fill fs-1 text-primary opacity-10" style={{ fontSize: '120px !important' }}></i>
                <i className="bi bi-pie-chart-fill position-absolute top-50 start-50 translate-middle fs-1 text-primary"></i>
              </div>
              <div className="mt-4 d-flex flex-column gap-2 text-start">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="small fw-medium">APAC</span>
                  <span className="fw-bold">64%</span>
                </div>
                <div className="progress" style={{ height: '4px' }}>
                  <div className="progress-bar bg-primary" style={{ width: '64%' }}></div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span className="small fw-medium">EMEA</span>
                  <span className="fw-bold">28%</span>
                </div>
                <div className="progress" style={{ height: '4px' }}>
                  <div className="progress-bar bg-info" style={{ width: '28%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
