"use client";

import { useState } from "react";

export default function VisitorsPage() {
  const [filter, setFilter] = useState("All");

  const visitors = [
    { name: "Ankit Sharma", phone: "+91 99887 76655", office: "Block A-204", purpose: "Meeting", entry: "10:32 AM", exit: "—", status: "Inside" },
    { name: "Priya Singh", phone: "+91 88776 65544", office: "Block B-102", purpose: "Delivery", entry: "10:15 AM", exit: "—", status: "Inside" },
    { name: "Rahul Verma", phone: "+91 77665 54433", office: "Block A-301", purpose: "Interview", entry: "09:48 AM", exit: "10:20 AM", status: "Left" },
    { name: "Sneha Gupta", phone: "+91 66554 43322", office: "Block C-105", purpose: "Client Visit", entry: "09:30 AM", exit: "—", status: "Inside" },
    { name: "Vikash Patel", phone: "+91 55443 32211", office: "Block A-204", purpose: "Maintenance", entry: "09:00 AM", exit: "09:45 AM", status: "Left" },
    { name: "Neha Reddy", phone: "+91 44332 21100", office: "Block B-201", purpose: "Meeting", entry: "08:45 AM", exit: "09:30 AM", status: "Left" },
  ];

  const filteredVisitors = filter === "All" ? visitors : visitors.filter(v => v.status === filter || (filter === "Checked Out" && v.status === "Left"));

  return (
    <div className="container-fluid py-2">
      {/* Filters & Search */}
      <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
        <div className="position-relative" style={{ width: '400px' }}>
          <i className="bi bi-search position-absolute top-50 translate-middle-y text-muted" style={{ left: '1.25rem' }}></i>
          <input 
            type="text" 
            className="form-control border-0 rounded-pill bg-white" 
            placeholder="Search visitors..." 
            style={{ 
              paddingLeft: '3rem', 
              height: '48px', 
              fontSize: '0.95rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
            }}
          />
        </div>
        <div className="btn-group bg-white rounded-pill p-1 border" style={{ height: '48px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <button 
            className={`btn btn-sm rounded-pill px-4 fw-medium ${filter === 'All' ? 'btn-primary shadow-sm' : 'btn-light bg-transparent border-0 text-muted hover-text-dark'}`}
            onClick={() => setFilter('All')}
            style={{ fontSize: '0.9rem' }}
          >All</button>
          <button 
            className={`btn btn-sm rounded-pill px-4 fw-medium ${filter === 'Inside' ? 'btn-primary shadow-sm' : 'btn-light bg-transparent border-0 text-muted hover-text-dark'}`}
            onClick={() => setFilter('Inside')}
            style={{ fontSize: '0.9rem' }}
          >Inside</button>
          <button 
            className={`btn btn-sm rounded-pill px-4 fw-medium ${filter === 'Checked Out' ? 'btn-primary shadow-sm' : 'btn-light bg-transparent border-0 text-muted hover-text-dark'}`}
            onClick={() => setFilter('Checked Out')}
            style={{ fontSize: '0.9rem' }}
          >Checked Out</button>
        </div>
      </div>

      {/* Table */}
      <div className="card border rounded-3 bg-white">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="text-muted small fw-bold text-uppercase py-3 px-4 border-bottom-0" style={{ letterSpacing: '0.05em' }}>Visitor</th>
                  <th className="text-muted small fw-bold text-uppercase py-3 px-4 border-bottom-0" style={{ letterSpacing: '0.05em' }}>Office</th>
                  <th className="text-muted small fw-bold text-uppercase py-3 px-4 border-bottom-0" style={{ letterSpacing: '0.05em' }}>Purpose</th>
                  <th className="text-muted small fw-bold text-uppercase py-3 px-4 border-bottom-0" style={{ letterSpacing: '0.05em' }}>Entry</th>
                  <th className="text-muted small fw-bold text-uppercase py-3 px-4 border-bottom-0" style={{ letterSpacing: '0.05em' }}>Exit</th>
                  <th className="text-muted small fw-bold text-uppercase py-3 px-4 border-bottom-0" style={{ letterSpacing: '0.05em' }}>Status</th>
                  <th className="border-bottom-0"></th>
                </tr>
              </thead>
              <tbody>
                {filteredVisitors.map((visitor, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-3 border-light">
                      <div className="d-flex flex-column">
                        <span className="fw-bold text-dark">{visitor.name}</span>
                        <span className="text-muted small">{visitor.phone}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 border-light text-muted">{visitor.office}</td>
                    <td className="px-4 py-3 border-light text-muted">{visitor.purpose}</td>
                    <td className="px-4 py-3 border-light fw-medium">{visitor.entry}</td>
                    <td className="px-4 py-3 border-light fw-medium">{visitor.exit}</td>
                    <td className="px-4 py-3 border-light">
                      {visitor.status === 'Inside' ? (
                        <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-2 fw-medium border border-success border-opacity-25" style={{ fontSize: '0.75rem' }}>Inside</span>
                      ) : (
                        <span className="badge bg-secondary bg-opacity-10 text-secondary rounded-pill px-3 py-2 fw-medium border border-secondary border-opacity-25" style={{ fontSize: '0.75rem' }}>Left</span>
                      )}
                    </td>
                    <td className="px-4 py-3 border-light text-end">
                      {visitor.status === 'Inside' ? (
                        <button className="btn btn-warning text-white fw-bold btn-sm rounded-pill px-3" style={{ backgroundColor: '#f59e0b', borderColor: '#f59e0b' }}>
                          Check Out
                        </button>
                      ) : (
                        <span className="px-4"></span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
