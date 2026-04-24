"use client";

import { useState } from "react";

interface UnitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (unit: any) => void;
  floorLevel: string;
}

export default function UnitModal({ isOpen, onClose, onSave, floorLevel }: UnitModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBulkMode, setIsBulkMode] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    count: 5,
    status: "Occupied",
    type: "Leased",
    owner: ""
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 600));
    
    if (isBulkMode) {
      const prefix = formData.id;
      for (let i = 1; i <= formData.count; i++) {
        onSave({ ...formData, id: `${prefix}-${i}` });
      }
    } else {
      onSave(formData);
    }
    
    setIsSubmitting(false);
    onClose();
    
    setFormData({
      id: "",
      count: 5,
      status: "Occupied",
      type: "Leased",
      owner: ""
    });
  };

  return (
    <div className="modal-overlay" style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 9999,
      backdropFilter: 'blur(8px)', animation: 'fadeIn 0.2s ease-out'
    }}>
      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
      
      <div className="modal-dialog modal-md w-100 mx-3" style={{ maxWidth: '500px', animation: 'slideUp 0.3s ease-out' }}>
        <div className="modal-content border-0 rounded-xl shadow-2xl overflow-hidden bg-white">
          <div className="modal-header border-bottom-0 p-4 bg-light d-flex justify-content-between align-items-center">
            <div>
              <h5 className="modal-title fw-bold fs-4">Add Units</h5>
              <p className="text-muted small mb-0">{floorLevel} · Space Allocation</p>
            </div>
            <div className="form-check form-switch me-3">
              <input 
                className="form-check-input" type="checkbox" role="switch" 
                checked={isBulkMode} onChange={(e) => setIsBulkMode(e.target.checked)} 
              />
              <label className="form-check-label x-small fw-bold text-muted text-uppercase" style={{ fontSize: '0.65rem' }}>Bulk Mode</label>
            </div>
            <button type="button" className="btn-close shadow-none" onClick={onClose}></button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="modal-body p-4">
              <div className="row g-4">
                <div className={isBulkMode ? "col-md-8" : "col-12"}>
                  <label className="form-label small fw-bold text-muted text-uppercase mb-2">
                    {isBulkMode ? "Unit Prefix" : "Unit ID / Number"}
                  </label>
                  <input 
                    type="text" className="form-control form-control-lg bg-light border-0" required 
                    value={formData.id} onChange={(e) => setFormData({...formData, id: e.target.value})}
                    placeholder={isBulkMode ? "e.g. 50" : "e.g. 505"}
                    style={{ fontSize: '1rem' }}
                  />
                </div>
                {isBulkMode && (
                  <div className="col-md-4">
                    <label className="form-label small fw-bold text-muted text-uppercase mb-2">Count</label>
                    <input 
                      type="number" className="form-control form-control-lg bg-light border-0" required 
                      min="1" max="50" value={formData.count}
                      onChange={(e) => setFormData({...formData, count: parseInt(e.target.value) || 1})}
                      style={{ fontSize: '1rem' }}
                    />
                  </div>
                )}
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-muted text-uppercase mb-2">Status</label>
                  <select 
                    className="form-select form-select-lg bg-light border-0"
                    value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})}
                    style={{ fontSize: '1rem' }}
                  >
                    <option>Occupied</option>
                    <option>Available</option>
                    <option>Reserved</option>
                    <option>Maintenance</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-muted text-uppercase mb-2">Type</label>
                  <select 
                    className="form-select form-select-lg bg-light border-0"
                    value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}
                    style={{ fontSize: '1rem' }}
                  >
                    <option>Leased</option>
                    <option>Owned</option>
                    <option>Internal</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label small fw-bold text-muted text-uppercase mb-2">Owner / Tenant Name</label>
                  <input 
                    type="text" className="form-control form-control-lg bg-light border-0" 
                    value={formData.owner} onChange={(e) => setFormData({...formData, owner: e.target.value})}
                    placeholder="e.g. John Doe / TechCorp"
                    style={{ fontSize: '1rem' }}
                  />
                </div>
              </div>
            </div>
            
            <div className="modal-footer border-top-0 p-4 pt-0 d-flex gap-3">
              <button 
                type="button" className="btn btn-light btn-lg rounded-pill px-5 flex-grow-1 fw-bold text-muted" 
                onClick={onClose} disabled={isSubmitting} style={{ fontSize: '0.9rem' }}
              >
                Cancel
              </button>
              <button 
                type="submit" className="btn btn-primary btn-lg rounded-pill px-5 flex-grow-1 fw-bold shadow-lg"
                disabled={isSubmitting} style={{ fontSize: '0.9rem', backgroundColor: '#10B981', border: 'none' }}
              >
                {isSubmitting ? "Processing..." : "Add Unit(s)"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
