"use client";

import { useState, useEffect } from "react";

interface TowerConfig {
  id: string;
  name: string;
  floors: number;
  units: number;
}

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (property: any) => void;
  editData?: any;
}

export default function PropertyModal({ isOpen, onClose, onSave, editData }: PropertyModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "IT Park",
    location: "",
    region: "APAC",
    status: "Active"
  });

  const [towers, setTowers] = useState<TowerConfig[]>([
    { id: '1', name: 'Tower A', floors: 10, units: 100 }
  ]);

  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name || "",
        type: editData.type || "IT Park",
        location: editData.location || "",
        region: editData.region || "APAC",
        status: editData.status || "Active"
      });
      setTowers(editData.towerConfigs || [{ id: '1', name: 'Tower A', floors: 10, units: 100 }]);
    } else {
      setFormData({
        name: "",
        type: "IT Park",
        location: "",
        region: "APAC",
        status: "Active"
      });
      setTowers([{ id: '1', name: 'Tower A', floors: 10, units: 100 }]);
    }
  }, [editData, isOpen]);

  if (!isOpen) return null;

  const handleAddTower = () => {
    const nextChar = String.fromCharCode(65 + towers.length);
    setTowers([...towers, { id: Date.now().toString(), name: `Tower ${nextChar}`, floors: 10, units: 100 }]);
  };

  const handleRemoveTower = (id: string) => {
    if (towers.length > 1) {
      setTowers(towers.filter(t => t.id !== id));
    }
  };

  const updateTower = (id: string, field: keyof TowerConfig, value: any) => {
    setTowers(towers.map(t => t.id === id ? { ...t, [field]: value } : t));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const totalUnits = towers.reduce((sum, t) => sum + t.units, 0);
    onSave({ ...formData, towerConfigs: towers, towers: towers.length, totalUnits });
    setIsSubmitting(false);
    onClose();
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
        .tower-row:hover .remove-btn { opacity: 1; }
        .remove-btn { opacity: 0; transition: opacity 0.2s; }
      `}</style>
      
      <div className="modal-dialog modal-lg w-100 mx-3" style={{ maxWidth: '850px', animation: 'slideUp 0.3s ease-out' }}>
        <div className="modal-content border-0 rounded-xl shadow-2xl overflow-hidden bg-white">
          <div className="modal-header border-bottom-0 p-4 bg-light d-flex justify-content-between align-items-center">
            <h5 className="modal-title fw-bold" style={{ fontSize: '1.1rem' }}>Property Configuration</h5>
            <button type="button" className="btn-close shadow-none" onClick={onClose}></button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="modal-body p-4 pt-2" style={{ maxHeight: '65vh', overflowY: 'auto' }}>
              <div className="row g-4 mb-5">
                <div className="col-md-8">
                  <label className="form-label fw-bold text-muted text-uppercase mb-2" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Property Name</label>
                  <input 
                    type="text" className="form-control bg-light border-0" required 
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Emerald Tech Park"
                    style={{ fontSize: '0.8rem', padding: '0.6rem 1rem', borderRadius: '0.75rem' }}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-bold text-muted text-uppercase mb-2" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Property Type</label>
                  <select 
                    className="form-select bg-light border-0"
                    value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}
                    style={{ fontSize: '0.8rem', padding: '0.6rem 1rem', borderRadius: '0.75rem' }}
                  >
                    <option>IT Park</option>
                    <option>Commercial</option>
                    <option>Mixed Use</option>
                    <option>Residential</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold text-muted text-uppercase mb-2" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Location</label>
                  <input 
                    type="text" className="form-control bg-light border-0" required 
                    value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="City, Country"
                    style={{ fontSize: '0.8rem', padding: '0.6rem 1rem', borderRadius: '0.75rem' }}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold text-muted text-uppercase mb-2" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Region</label>
                  <select 
                    className="form-select bg-light border-0"
                    value={formData.region} onChange={(e) => setFormData({...formData, region: e.target.value})}
                    style={{ fontSize: '0.8rem', padding: '0.6rem 1rem', borderRadius: '0.75rem' }}
                  >
                    <option>APAC</option>
                    <option>EMEA</option>
                    <option>US / AMER</option>
                  </select>
                </div>
              </div>

              {/* Tower Specific Configuration */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-bold mb-0" style={{ fontSize: '0.9rem' }}>Tower & Vertical Configuration</h6>
                  <button type="button" onClick={handleAddTower} className="btn btn-primary btn-sm rounded-pill px-3 fw-bold" style={{ fontSize: '0.7rem' }}>
                    <i className="bi bi-plus-lg me-1"></i> Add Tower
                  </button>
                </div>
                
                <div className="bg-light rounded-xl p-4">
                  <div className="row g-3">
                    {towers.map((tower, index) => (
                      <div key={tower.id} className="col-md-6 tower-row">
                        <div className="bg-white p-3 rounded-lg border shadow-sm position-relative">
                          <div className="row g-2 align-items-center">
                            <div className="col-5">
                              <label className="x-small fw-bold text-muted text-uppercase mb-1" style={{ fontSize: '0.65rem' }}>Tower Name</label>
                              <input 
                                type="text" className="form-control form-control-sm border-0 bg-light"
                                value={tower.name} onChange={(e) => updateTower(tower.id, 'name', e.target.value)}
                                style={{ fontSize: '0.75rem' }}
                              />
                            </div>
                            <div className="col-3">
                              <label className="x-small fw-bold text-muted text-uppercase mb-1" style={{ fontSize: '0.65rem' }}>Floors</label>
                              <input 
                                type="number" className="form-control form-control-sm border-0 bg-light"
                                value={tower.floors} onChange={(e) => updateTower(tower.id, 'floors', parseInt(e.target.value) || 0)}
                                style={{ fontSize: '0.75rem' }}
                              />
                            </div>
                            <div className="col-4">
                              <label className="x-small fw-bold text-muted text-uppercase mb-1" style={{ fontSize: '0.65rem' }}>Units</label>
                              <input 
                                type="number" className="form-control form-control-sm border-0 bg-light"
                                value={tower.units} onChange={(e) => updateTower(tower.id, 'units', parseInt(e.target.value) || 0)}
                                style={{ fontSize: '0.75rem' }}
                              />
                            </div>
                          </div>
                          {towers.length > 1 && (
                            <button 
                              type="button" 
                              onClick={() => handleRemoveTower(tower.id)}
                              className="btn btn-link text-danger p-0 position-absolute top-0 end-0 mt-2 me-2 remove-btn"
                              style={{ fontSize: '1rem' }}
                            >
                              <i className="bi bi-x-circle-fill"></i>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-12">
                  <label className="form-label fw-bold text-muted text-uppercase mb-2" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Operational Status</label>
                  <select 
                    className="form-select bg-light border-0"
                    value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})}
                    style={{ fontSize: '0.8rem', padding: '0.6rem 1rem', borderRadius: '0.75rem' }}
                  >
                    <option>Active</option>
                    <option>Maintenance</option>
                    <option>Pre-Launch</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="modal-footer border-top-0 p-4 pt-2 d-flex gap-3">
              <button 
                type="button" className="btn btn-outline-secondary rounded-pill px-5 flex-grow-1 fw-bold" 
                onClick={onClose} disabled={isSubmitting} style={{ fontSize: '0.8rem', height: '42px' }}
              >
                Discard Changes
              </button>
              <button 
                type="submit" className="btn rounded-pill px-5 flex-grow-1 fw-bold shadow-sm text-white"
                disabled={isSubmitting}
                style={{ fontSize: '0.8rem', height: '42px', backgroundColor: '#10B981', border: 'none' }}
              >
                {isSubmitting ? "Saving..." : "Save Configuration"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
