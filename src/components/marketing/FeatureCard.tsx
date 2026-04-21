export default function FeatureCard({ icon, title, description }: { icon: string, title: string, description: string }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 p-4 border-0 custom-shadow rounded-xl hover-lift">
        <div className="bg-blue-gradient text-white rounded d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '50px', height: '50px' }}>
          <i className={`bi ${icon} fs-4`}></i>
        </div>
        <h4 className="fw-bold mb-2">{title}</h4>
        <p className="text-muted mb-0">{description}</p>
      </div>
    </div>
  );
}
