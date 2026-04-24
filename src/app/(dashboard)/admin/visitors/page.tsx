"use client";

import styles from "@/styles/modules/Operations.module.css";
import { useState } from "react";

export default function VisitorsPage() {
  const [selectedTower, setSelectedTower] = useState("All Towers");
  const [selectedOffice, setSelectedOffice] = useState("All Offices");

  const towers = ["All Towers", "Tower A", "Tower B", "Tower C"];
  const offices = ["All Offices", "1001 (Premium)", "902 (Standard)", "803 (Standard)", "701 (Standard)"];

  const visitors = [
    { name: "Rahul Mehta", company: "Infosys", tower: "Tower A", office: "1001", host: "Ankit", type: "Business", time: "10:30 AM", status: "Checked In" },
    { name: "Priya Das", company: "Zomato", tower: "Tower B", office: "902", host: "Sneha", type: "Delivery", time: "10:45 AM", status: "Inside" },
    { name: "Kevin Hart", company: "Microsoft", tower: "Tower A", office: "803", host: "John", type: "Business", time: "09:15 AM", status: "Checked Out" },
    { name: "Delivery Partner", company: "Amazon", tower: "Tower C", office: "701", host: "Reception", type: "Parcel", time: "11:00 AM", status: "Checked In" },
    { name: "Amit Shah", company: "TCS", tower: "Tower B", office: "902", host: "Vikram", type: "Business", time: "11:15 AM", status: "Inside" },
  ];

  const filteredVisitors = visitors.filter(v => {
    const towerMatch = selectedTower === "All Towers" || v.tower === selectedTower;
    const officeMatch = selectedOffice === "All Offices" || v.office === selectedOffice.split(" ")[0];
    return towerMatch && officeMatch;
  });

  return (
    <div className="container-fluid p-0">
      {/* Global Header Section */}
      <div className="bg-white border-bottom mb-4" style={{ margin: '-1.5rem -1.5rem 2rem -1.5rem', padding: '1.5rem 2.5rem' }}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="fw-bold mb-0 text-dark" style={{ letterSpacing: '-0.02em', fontSize: '1.75rem' }}>Visitor Operations</h1>
            <p className="text-muted small mb-0">Global security command for real-time guest monitoring.</p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary rounded-pill px-3 fw-bold transition-all hover-lift" style={{ fontSize: '0.75rem', height: '38px' }}>
              <i className="bi bi-download me-2"></i>Export Logs
            </button>
            <button className="btn btn-emerald rounded-pill px-4 fw-bold shadow transition-all hover-lift text-white d-flex align-items-center gap-2" style={{ fontSize: '0.75rem', height: '38px', backgroundColor: '#10B981', border: 'none' }}>
              <i className="bi bi-plus-lg"></i><span>New Entry</span>
            </button>
          </div>
        </div>
      </div>

      {/* High-Performance Analytics */}
      <div className="row g-3 mb-4">
        {towers.slice(1).map((tower, idx) => {
          const activeCount = visitors.filter(v => v.tower === tower && v.status !== 'Checked Out').length;
          return (
            <div key={tower} className="col-md-4">
              <div className="bg-white p-3 rounded-xl border shadow-sm position-relative overflow-hidden transition-all hover-lift border-hover-emerald">
                <div className="position-relative z-1 d-flex justify-content-between align-items-center">
                  <div>
                    <div className="text-muted fw-bold text-uppercase mb-1" style={{ fontSize: '0.6rem', letterSpacing: '0.05em' }}>{tower} Live</div>
                    <div className="d-flex align-items-baseline gap-2">
                      <span className="fw-bold text-dark" style={{ fontSize: '1.5rem' }}>{activeCount}</span>
                      <span className="text-success fw-bold" style={{ fontSize: '0.65rem' }}>Active Guests</span>
                    </div>
                  </div>
                  <div className={`rounded-circle p-2 d-flex align-items-center justify-content-center ${idx === 0 ? 'bg-primary-soft' : idx === 1 ? 'bg-emerald-soft' : 'bg-blue-soft'}`} style={{ width: '40px', height: '40px' }}>
                    <i className={`bi bi-people-fill fs-5 ${idx === 0 ? 'text-primary' : idx === 1 ? 'text-emerald' : 'text-blue'}`}></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Smart Command Filter (Glassmorphism) */}
      <div className="glass-panel p-2 mb-4 d-flex gap-3 align-items-center shadow">
        <div className="d-flex align-items-center gap-2 flex-grow-1">
          <div className="bg-white p-2 rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
            <i className="bi bi-funnel-fill text-emerald" style={{ fontSize: '0.8rem' }}></i>
          </div>
          <div className="filter-group d-flex gap-2">
            <select 
              className="form-select border-0 bg-light rounded-pill px-3 shadow-sm" 
              style={{ width: '140px', fontWeight: '700', fontSize: '0.7rem', height: '34px' }}
              value={selectedTower} onChange={(e) => setSelectedTower(e.target.value)}
            >
              {towers.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select 
              className="form-select border-0 bg-light rounded-pill px-3 shadow-sm" 
              style={{ width: '180px', fontWeight: '700', fontSize: '0.7rem', height: '34px' }}
              value={selectedOffice} onChange={(e) => setSelectedOffice(e.target.value)}
            >
              {offices.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        </div>
        <div className="search-container position-relative" style={{ width: '320px' }}>
          <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" style={{ fontSize: '0.7rem' }}></i>
          <input 
            type="text" className="form-control border-0 bg-light rounded-pill ps-5 shadow-sm" 
            placeholder="Search global database..." 
            style={{ fontSize: '0.75rem', height: '34px', fontWeight: '500' }} 
          />
        </div>
      </div>

      {/* Enterprise-Grade Log Table */}
      <div className="bg-white rounded-xl shadow border-0 overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover mb-0 align-middle">
            <thead className="bg-light bg-opacity-50 border-bottom">
              <tr>
                <th className="px-4 py-3 text-uppercase x-small fw-bold text-muted" style={{ fontSize: '0.6rem', letterSpacing: '0.05em' }}>Visitor Identity</th>
                <th className="px-3 text-uppercase x-small fw-bold text-muted" style={{ fontSize: '0.6rem', letterSpacing: '0.05em' }}>Location</th>
                <th className="px-3 text-uppercase x-small fw-bold text-muted" style={{ fontSize: '0.6rem', letterSpacing: '0.05em' }}>Host / Unit</th>
                <th className="px-3 text-uppercase x-small fw-bold text-muted" style={{ fontSize: '0.6rem', letterSpacing: '0.05em' }}>Time</th>
                <th className="px-3 text-uppercase x-small fw-bold text-muted" style={{ fontSize: '0.6rem', letterSpacing: '0.05em' }}>Security Status</th>
                <th className="px-4 text-uppercase x-small fw-bold text-muted text-end" style={{ fontSize: '0.6rem', letterSpacing: '0.05em' }}>Action</th>
              </tr>
            </thead>
            <tbody className="border-top-0">
              {filteredVisitors.map((v, idx) => (
                <tr key={idx} className="transition-all hover-bg-light">
                  <td className="px-4 py-3">
                    <div className="d-flex align-items-center gap-3">
                      <div className="avatar-circle shadow-sm" style={{ backgroundColor: '#f0fdf4', color: '#10B981', width: '32px', height: '32px', fontSize: '0.8rem' }}>
                        {v.name.charAt(0)}
                      </div>
                      <div>
                        <div className="fw-bold text-dark" style={{ fontSize: '0.8rem' }}>{v.name}</div>
                        <div className="text-muted" style={{ fontSize: '0.65rem' }}>{v.company} · <span className="text-emerald fw-bold">{v.type}</span></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3">
                    <span className="badge bg-light text-dark border-0 rounded-lg px-2 py-1 fw-bold" style={{ fontSize: '0.6rem' }}>
                      {v.tower}
                    </span>
                  </td>
                  <td className="px-3">
                    <div className="fw-bold text-dark" style={{ fontSize: '0.75rem' }}>{v.host}</div>
                    <div className="text-muted" style={{ fontSize: '0.65rem' }}>Unit {v.office}</div>
                  </td>
                  <td className="px-3">
                    <div className="d-flex align-items-center gap-2 text-dark fw-medium" style={{ fontSize: '0.75rem' }}>
                      <i className="bi bi-clock text-muted" style={{ fontSize: '0.65rem' }}></i>{v.time}
                    </div>
                  </td>
                  <td className="px-3">
                    <span className={`status-pill ${
                      v.status === 'Inside' || v.status === 'Checked In' ? 'status-active' : 'status-inactive'
                    }`} style={{ padding: '4px 10px', fontSize: '0.6rem' }}>
                      <span className="dot" style={{ width: '4px', height: '4px' }}></span>
                      {v.status}
                    </span>
                  </td>
                  <td className="px-4 text-end">
                    <button className="btn btn-action-circle shadow-none transition-all" style={{ width: '28px', height: '28px' }}><i className="bi bi-three-dots-vertical" style={{ fontSize: '0.8rem' }}></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx global>{`
        .bg-emerald { background-color: #10B981; }
        .text-emerald { color: #10B981; }
        .shadow-emerald { box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.2); }
        .bg-emerald-soft { background-color: #f0fdf4; }
        .bg-primary-soft { background-color: #eff6ff; }
        .bg-blue-soft { background-color: #faf5ff; }
        .text-emerald { color: #10B981; }
        .text-blue { color: #8b5cf6; }
        
        .btn-emerald:hover { background-color: #059669; transform: translateY(-1px); }
        .rounded-2xl { border-radius: 1.5rem !important; }
        .avatar-circle { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; }
        
        .glass-panel { 
          background: rgba(248, 250, 252, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 1);
          border-radius: 1.25rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }
        
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 2rem;
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .status-active { background-color: #f0fdf4; color: #10B981; }
        .status-inactive { background-color: #f1f5f9; color: #64748b; }
        .dot { width: 6px; height: 6px; border-radius: 50%; background-color: currentColor; }
        
        .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important; }
        .border-hover-emerald:hover { border: 1px solid #10B981 !important; }
        .btn-action-circle { width: 36px; height: 36px; border-radius: 50%; border: 1px solid #f1f5f9; background: white; display: flex; align-items: center; justify-content: center; color: #94a3b8; }
        .btn-action-circle:hover { background: #f8fafc; color: #10B981; border-color: #10B981; }
        .opacity-05 { opacity: 0.05; }
        .hover-bg-light:hover { background-color: #f8fafc; }
      `}</style>
    </div>
  );
}
