export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Set up your buildings",
      description: "Add your office buildings and configure entry points in minutes."
    },
    {
      step: 2,
      title: "Onboard watchmen",
      description: "Invite your security staff and assign them to specific shifts and locations."
    },
    {
      step: 3,
      title: "Start tracking visitors",
      description: "Watchmen log visitors instantly, and you get real-time analytics."
    }
  ];

  return (
    <section id="how-it-works" className="py-5" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Up and running in an afternoon</h2>
        </div>
        
        <div className="row g-4">
          {steps.map((s, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 border-0 bg-transparent">
                <div className="card-body text-center px-4">
                  <div className="bg-blue-gradient text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 custom-shadow fs-3 fw-bold" style={{ width: '60px', height: '60px' }}>
                    {s.step}
                  </div>
                  <h4 className="fw-bold mb-3">{s.title}</h4>
                  <p className="text-muted">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
