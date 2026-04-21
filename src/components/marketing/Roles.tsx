export default function Roles() {
  const roles = [
    {
      title: "Super Admin",
      description: "Complete control over the entire system and billing.",
      icon: "bi-shield-check",
      features: [
        "Manage all buildings",
        "Billing & subscriptions",
        "Global analytics",
        "System settings"
      ]
    },
    {
      title: "Office Owner",
      description: "Manage specific offices within a building.",
      icon: "bi-briefcase-fill",
      features: [
        "View office visitors",
        "Pre-register guests",
        "Receive arrival alerts",
        "Manage employees"
      ]
    },
    {
      title: "Watchman",
      description: "Streamlined interface for lobby operations.",
      icon: "bi-person-badge",
      features: [
        "Fast visitor entry",
        "ID verification",
        "Emergency alerts",
        "Shift management"
      ]
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">One platform, three optimized roles</h2>
        </div>
        
        <div className="row g-4 justify-content-center">
          {roles.map((role, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 border-0 custom-shadow rounded-xl hover-lift p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '48px', height: '48px' }}>
                    <i className={`bi ${role.icon} fs-4`}></i>
                  </div>
                  <h4 className="fw-bold mb-0">{role.title}</h4>
                </div>
                <p className="text-muted mb-4">{role.description}</p>
                <ul className="list-unstyled mb-0">
                  {role.features.map((feature, idx) => (
                    <li className="mb-2 d-flex align-items-center" key={idx}>
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span className="fw-medium text-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
