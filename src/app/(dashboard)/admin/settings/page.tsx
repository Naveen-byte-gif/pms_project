"use client";

export default function SettingsPage() {
  const sections = [
    { title: "General Settings", desc: "Global platform configuration and branding.", icon: "bi-gear-wide" },
    { title: "Security & Authentication", desc: "JWT tokens, MFA, and audit logging.", icon: "bi-shield-lock" },
    { title: "Notifications", desc: "Email, SMS, and Push notification triggers.", icon: "bi-bell" },
    { title: "Billing & Subscription", desc: "Manage your enterprise plan and usage.", icon: "bi-credit-card" },
  ];

  return (
    <div className="container-fluid py-2">
      <div className="mb-4">
        <h2 className="fw-extrabold fs-3 mb-1">System Settings</h2>
        <p className="text-muted small">Configure global platform behavior and security protocols.</p>
      </div>

      <div className="row g-4">
        <div className="col-lg-4">
          <div className="d-flex flex-column gap-3">
            {sections.map(s => (
              <div key={s.title} className="card border-0 shadow-sm p-4 rounded-xl hover-bg-light cursor-pointer transition-all">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 px-3 fw-bold">
                    <i className={`bi ${s.icon}`}></i>
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">{s.title}</h6>
                    <p className="text-muted x-small mb-0">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-xl p-5 bg-white">
            <h5 className="fw-bold mb-4">General Platform Configuration</h5>
            <div className="row g-4">
              <div className="col-md-6">
                <label className="form-label small fw-bold text-muted text-uppercase">Platform Name</label>
                <input type="text" className="form-control" defaultValue="PMS Global Enterprise" />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-bold text-muted text-uppercase">Support Email</label>
                <input type="email" className="form-control" defaultValue="support@pms-global.com" />
              </div>
              <div className="col-md-12">
                <label className="form-label small fw-bold text-muted text-uppercase">Default Timezone</label>
                <select className="form-select">
                  <option>UTC (Coordinated Universal Time)</option>
                  <option>IST (India Standard Time)</option>

                </select>
              </div>
            </div>
            <hr className="my-5 opacity-10" />
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-outline-light border text-dark rounded-pill px-4">Discard Changes</button>
              <button className="btn btn-primary rounded-pill px-4">Save Configuration</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
