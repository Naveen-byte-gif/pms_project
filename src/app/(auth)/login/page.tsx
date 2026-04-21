"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("super_admin");
  const [email, setEmail] = useState("admin@pms.com");
  const [password, setPassword] = useState("password123");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setIsLoading(true);

    // Simulate network delay for authentication
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (selectedRole === "super_admin" || selectedRole === "office_owner") {
       router.replace('/admin/dashboard');
    } else {
       setIsLoading(false);
       setError("Watchman dashboard is currently under development.");
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light" style={{ backgroundColor: '#ECFDF5' }}>
      {/* Header / Logo Area */}
      <div className="text-center mb-5">
        <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm" style={{ width: '72px', height: '72px' }}>
          <i className="bi bi-shield-check" style={{ fontSize: '2.5rem' }}></i>
        </div>
        <h2 className="fw-bold mb-1" style={{ fontSize: '2rem', color: '#064E3B' }}>PMS Security</h2>
        <p className="text-muted small fw-medium">OFFICE SECURITY MANAGEMENT SYSTEM</p>
      </div>

      {/* Login Form Container */}
      <div className="w-100 px-3" style={{ maxWidth: '440px' }}>
        <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
          <form onSubmit={handleLogin}>
            {/* Role Selection */}
            <div className="mb-4 text-center">
              <label className="text-muted small fw-bold mb-3 d-block text-uppercase tracking-wider">Select Your Role</label>
              <div className="d-flex gap-2">
                {/* Super Admin */}
                <button 
                  type="button" 
                  onClick={() => setSelectedRole('super_admin')}
                  className={`btn flex-grow-1 border d-flex flex-column align-items-center py-3 px-2 transition-all ${selectedRole === 'super_admin' ? 'border-primary bg-primary bg-opacity-10 text-primary' : 'bg-white text-muted hover-bg-light'}`}
                  style={{ borderRadius: '1rem' }}
                >
                  <i className={`bi bi-shield fs-4 mb-1`}></i>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>ADMIN</span>
                </button>

                {/* Office Owner */}
                <button 
                  type="button" 
                  onClick={() => setSelectedRole('office_owner')}
                  className={`btn flex-grow-1 border d-flex flex-column align-items-center py-3 px-2 transition-all ${selectedRole === 'office_owner' ? 'border-primary bg-primary bg-opacity-10 text-primary' : 'bg-white text-muted hover-bg-light'}`}
                  style={{ borderRadius: '1rem' }}
                >
                  <i className={`bi bi-building fs-4 mb-1`}></i>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>OWNER</span>
                </button>

                {/* Watchman */}
                <button 
                  type="button" 
                  onClick={() => setSelectedRole('watchman')}
                  className={`btn flex-grow-1 border d-flex flex-column align-items-center py-3 px-2 transition-all ${selectedRole === 'watchman' ? 'border-primary bg-primary bg-opacity-10 text-primary' : 'bg-white text-muted hover-bg-light'}`}
                  style={{ borderRadius: '1rem' }}
                >
                  <i className={`bi bi-eye fs-4 mb-1`}></i>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>STAFF</span>
                </button>
              </div>
            </div>

            {/* Inputs */}
            <div className="mb-3">
              <label className="form-label text-muted small fw-bold mb-1 ms-1">EMAIL ADDRESS</label>
              <input 
                type="email" 
                className="form-control form-control-lg border-light bg-light" 
                placeholder="admin@pms.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ fontSize: '0.95rem', padding: '0.85rem 1.25rem', borderRadius: '0.85rem' }} 
                required 
              />
            </div>

            <div className="mb-4">
              <label className="form-label text-muted small fw-bold mb-1 ms-1">PASSWORD</label>
              <input 
                type="password" 
                className="form-control form-control-lg border-light bg-light" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ fontSize: '0.95rem', padding: '0.85rem 1.25rem', borderRadius: '0.85rem' }} 
                required 
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="alert alert-danger py-2 small fw-medium mb-4" role="alert" style={{ borderRadius: '0.85rem' }}>
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                {error}
              </div>
            )}

            {/* Submit */}
            <button 
              type="submit" 
              className="btn btn-primary btn-lg w-100 fw-bold py-3 shadow-sm hover-glow transition-all" 
              style={{ borderRadius: '0.85rem' }}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <span className="spinner-border spinner-border-sm" role="status"></span>
                  <span>Verifying...</span>
                </div>
              ) : (
                "SIGN IN TO SYSTEM"
              )}
            </button>
          </form>

          <div className="text-center mt-5">
            <p className="text-muted small mb-0">Authorized personnel only. Access is monitored.</p>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <Link href="/" className="text-decoration-none text-muted small hover-text-primary">
            <i className="bi bi-arrow-left me-1"></i> Back to main site
          </Link>
        </div>
      </div>
    </div>
  );
}
