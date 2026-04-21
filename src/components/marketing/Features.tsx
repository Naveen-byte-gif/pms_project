import FeatureCard from './FeatureCard';

export default function Features() {
  const features = [
    {
      icon: "bi-building",
      title: "Multi-building management",
      description: "Control access and view logs across multiple office buildings from a single, unified dashboard."
    },
    {
      icon: "bi-person-check-fill",
      title: "Fast visitor check-in",
      description: "Reduce lobby wait times with digital check-in flows, QR codes, and instant notifications."
    },
    {
      icon: "bi-calendar-week",
      title: "Watchman roster",
      description: "Schedule shifts, track attendance, and ensure you always have the right security coverage."
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Visitor analytics",
      description: "Gain insights into peak visitor hours, frequent guests, and overall foot traffic trends."
    },
    {
      icon: "bi-bell-fill",
      title: "Real-time alerts",
      description: "Receive instant push or SMS notifications for VIP arrivals, blacklisted individuals, or security breaches."
    },
    {
      icon: "bi-shield-lock",
      title: "Role-based access",
      description: "Give specific permissions to super admins, office owners, and watchmen based on their needs."
    }
  ];

  return (
    <section id="features" className="py-5 bg-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Everything you need to run office security</h2>
          <p className="lead text-muted max-w-md mx-auto">Powerful features wrapped in an easy-to-use interface.</p>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
