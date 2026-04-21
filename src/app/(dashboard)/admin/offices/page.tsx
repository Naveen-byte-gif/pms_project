"use client";

import { useState } from "react";
import OfficeModal from "@/components/dashboard/OfficeModal";

export default function OfficesPage() {
  const [offices, setOffices] = useState([
    { id: 1, name: "Tech Park Tower", manager: "Rajesh Kumar", phone: "+91 98765 43210", address: "Sector 62, Noida", units: 12, watchmen: 6, visitors: 42, securityLevel: "High", capacity: 15 },
    { id: 2, name: "Business Hub Plaza", manager: "Amit Singh", phone: "+91 87654 32109", address: "MG Road, Gurgaon", units: 8, watchmen: 4, visitors: 28, securityLevel: "Medium", capacity: 10 },
    { id: 3, name: "Enterprise Centre", manager: "Suresh Prabhu", phone: "+91 76543 21098", address: "Whitefield, Bangalore", units: 15, watchmen: 8, visitors: 51, securityLevel: "High", capacity: 20 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  const handleSave = (data: any) => {
    if (editData) {
      setOffices(offices.map(o => o.id === editData.id ? { ...data, id: o.id, units: o.units, watchmen: o.watchmen, visitors: o.visitors } : o));
    } else {
      setOffices([...offices, { 
        ...data, 
        id: Date.now(), 
        units: 0, 
        watchmen: 0, 
        visitors: 0 
      }]);
    }
    setEditData(null);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to remove this office from the system?")) {
      setOffices(offices.filter(o => o.id !== id));
    }
  };

  const openEdit = (office: any) => {
    setEditData(office);
    setIsModalOpen(true);
  };

  return (
    <div className="container-fluid py-2">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-0 text-dark">Office Management</h4>
          <p className="text-muted small mb-0">Total {offices.length} offices registered</p>
        </div>
        <button 
          className="btn btn-primary rounded-pill px-4 fw-bold shadow-sm"
          onClick={() => { setEditData(null); setIsModalOpen(true); }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <i className="bi bi-plus-lg me-2"></i>Add Office
        </button>
      </div>

      <div className="card border rounded-3 bg-white">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="text-muted small fw-bold text-uppercase py-3 px-4 border-bottom-0">Office</th>
                  <th className="text-muted small fw-bold text-uppercase py-3 px-4 border-bottom-0">Manager</th>
                  <th className="text-muted small fw-bold text-uppercase py-3 px-4 border-bottom-0">Security</th>
                  <th className="text-muted small fw-bold text-uppercase py-3 px-4 border-bottom-0">Stats</th>
                  <th className="text-muted small fw-bold text-uppercase py-3 px-4 border-bottom-0 text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {offices.map((off) => (
                  <tr key={off.id}>
                    <td className="px-4 py-3 border-light">
                      <div className="d-flex align-items-center gap-3">
                        <div className="bg-primary bg-opacity-10 text-primary rounded d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                          <i className="bi bi-building fs-5"></i>
                        </div>
                        <div>
                          <p className="fw-bold text-dark mb-0">{off.name}</p>
                          <p className="text-muted small mb-0">{off.address}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border-light">
                      <p className="fw-medium mb-0">{off.manager}</p>
                      <p className="text-muted small mb-0">{off.phone}</p>
                    </td>
                    <td className="px-4 py-3 border-light">
                      <span className={`badge ${off.securityLevel === 'High' || off.securityLevel === 'Restricted' ? 'bg-danger' : 'bg-info'} bg-opacity-10 text-${off.securityLevel === 'High' || off.securityLevel === 'Restricted' ? 'danger' : 'info'} rounded-pill px-3 py-2 fw-medium`}>
                        {off.securityLevel}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-light">
                      <div className="d-flex gap-3">
                        <div className="text-center">
                          <p className="fw-bold mb-0 small">{off.units}</p>
                          <p className="text-muted mb-0" style={{ fontSize: '0.65rem' }}>UNITS</p>
                        </div>
                        <div className="text-center border-start ps-3">
                          <p className="fw-bold mb-0 small">{off.watchmen}</p>
                          <p className="text-muted mb-0" style={{ fontSize: '0.65rem' }}>STAFF</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border-light text-end">
                      <button className="btn btn-sm btn-light rounded-pill me-2" onClick={() => openEdit(off)}>
                        <i className="bi bi-pencil text-primary"></i>
                      </button>
                      <button className="btn btn-sm btn-light rounded-pill" onClick={() => handleDelete(off.id)}>
                        <i className="bi bi-trash text-danger"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <OfficeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSave}
        editData={editData}
      />
    </div>
  );
}
