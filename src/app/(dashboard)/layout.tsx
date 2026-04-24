import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="d-flex" style={{ backgroundColor: 'var(--color-bg-dashboard)', minHeight: '100vh', fontFamily: 'var(--font-geist-sans)' }}>
      {/* Fixed Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-grow-1" style={{ marginLeft: '280px' }}>
        <Header />
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
