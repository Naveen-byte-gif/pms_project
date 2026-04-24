"use client";

import { useState, use } from "react";
import Link from "next/link";
import UnitModal from "@/components/dashboard/UnitModal";

export default function PropertyDetailPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const params = use(paramsPromise);
  const propertyId = params.id;
  const [activeTower, setActiveTower] = useState("Tower A");
  const [isUnitModalOpen, setIsUnitModalOpen] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState("");

  const towers = ["Tower A", "Tower B", "Tower C"];

  const [floorData, setFloorData] = useState([
    {
      id: "f1", level: 10, name: "Executive Terrace", units: [
        { id: "1001", status: "Occupied", type: "Premium", owner: "Global Tech CEO" },
        { id: "1002", status: "Available", type: "Executive", owner: "" },
      ]
    },
    {
      id: "f2", level: 9, name: "IT Operations", units: [
        { id: "901", status: "Occupied", type: "Standard", owner: "Cloud Services" },
        { id: "902", status: "Occupied", type: "Standard", owner: "Data Safe" },
        { id: "903", status: "Available", type: "Standard", owner: "" },
      ]
    },
    {
      id: "f3", level: 8, name: "Development Hub", units: [
        { id: "801", status: "Occupied", type: "Standard", owner: "Code Masters" },
        { id: "802", status: "Reserved", type: "Standard", owner: "Startup X" },
        { id: "803", status: "Occupied", type: "Standard", owner: "Logic Soft" },
        { id: "804", status: "Available", type: "Standard", owner: "" },
      ]
    },
    {
      id: "f4", level: 7, name: "Sales & Marketing", units: [
        { id: "701", status: "Occupied", type: "Standard", owner: "Growth Lab" },
        { id: "702", status: "Maintenance", type: "Standard", owner: "" },
        { id: "703", status: "Occupied", type: "Standard", owner: "Brand Boost" },
      ]
    }
  ]);

  const handleAddUnit = (newUnit: any) => {
    const updatedData = floorData.map(floor => {
      if (floor.name === selectedFloor) {
        return { ...floor, units: [...floor.units, newUnit] };
      }
      return floor;
    });
    setFloorData(updatedData);
  };

  return (
    <div className="container-fluid p-0">
      <UnitModal
        isOpen={isUnitModalOpen}
        onClose={() => setIsUnitModalOpen(false)}
        onSave={handleAddUnit}
        floorLevel={selectedFloor}
      />

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb small mb-1">
              <li className="breadcrumb-item"><Link href="/admin/properties" className="text-decoration-none text-muted">Properties</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{propertyId}</li>
            </ol>
          </nav>
          <h2 className="fw-bold mb-0" style={{ letterSpacing: '-0.02em', fontSize: '1.5rem' }}>Floors & Units Management</h2>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm rounded-pill px-3 fw-bold" style={{ fontSize: '0.75rem' }}>
            <i className="bi bi-download me-1"></i> Export Layout
          </button>
          <button className="btn btn-primary btn-sm rounded-pill px-3 shadow-sm fw-bold" style={{ fontSize: '0.75rem', backgroundColor: '#10B981', border: 'none' }}>
            <i className="bi bi-gear-fill me-1"></i> Property Settings
          </button>
        </div>
      </div>

      {/* Tower Selector */}
      <div className="d-flex gap-2 mb-4">
        {towers.map(tower => (
          <button
            key={tower}
            onClick={() => setActiveTower(tower)}
            className={`btn btn-sm rounded-pill px-4 fw-bold transition-all ${activeTower === tower ? 'btn-primary shadow-sm' : 'btn-light text-muted'}`}
            style={activeTower === tower ? { backgroundColor: '#10B981', border: 'none', fontSize: '0.75rem' } : { fontSize: '0.75rem' }}
          >
            {tower}
          </button>
        ))}
      </div>

      {/* Status Legend */}
      <div className="bg-white rounded-xl shadow-sm border p-3 mb-4 d-flex gap-4 align-items-center overflow-x-auto">
        <div className="small fw-bold text-muted text-uppercase me-2" style={{ fontSize: '0.65rem' }}>Status Legend:</div>
        <div className="d-flex align-items-center gap-2">
          <span className="badge rounded-circle p-1" style={{ width: '8px', height: '8px', backgroundColor: '#10B981' }}></span>
          <span className="fw-semibold" style={{ fontSize: '0.75rem' }}>Occupied</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="badge rounded-circle p-1" style={{ width: '8px', height: '8px', backgroundColor: '#F59E0B' }}></span>
          <span className="fw-semibold" style={{ fontSize: '0.75rem' }}>Available</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="badge rounded-circle p-1" style={{ width: '8px', height: '8px', backgroundColor: '#3B82F6' }}></span>
          <span className="fw-semibold" style={{ fontSize: '0.75rem' }}>Reserved</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="badge rounded-circle p-1" style={{ width: '8px', height: '8px', backgroundColor: '#EF4444' }}></span>
          <span className="fw-semibold" style={{ fontSize: '0.75rem' }}>Maintenance</span>
        </div>
      </div>

      {/* Floors List */}
      <div className="d-flex flex-column gap-4">
        {floorData.map((floor) => (
          <div key={floor.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="px-4 py-3 bg-light border-bottom d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-dark text-white rounded px-2 py-1 fw-bold" style={{ fontSize: '0.7rem' }}>
                  LEVEL {floor.level}
                </div>
                <h6 className="mb-0 fw-bold" style={{ fontSize: '0.9rem' }}>{floor.name}</h6>
                <span className="badge bg-white text-muted border rounded-pill fw-normal" style={{ fontSize: '0.65rem' }}>
                  {floor.units.length} Units Defined
                </span>
              </div>
              <button
                className="btn btn-link text-primary p-0 fw-bold text-decoration-none"
                onClick={() => {
                  setSelectedFloor(floor.name);
                  setIsUnitModalOpen(true);
                }}
                style={{ fontSize: '0.75rem', color: '#10B981' }}
              >
                <i className="bi bi-plus-lg me-1"></i> Add Units
              </button>
            </div>

            <div className="p-4">
              <div className="row g-3">
                {floor.units.map((unit, idx) => (
                  <div key={idx} className="col-md-2 col-sm-4 col-6">
                    <div className={`p-3 rounded-lg border-start border-4 shadow-sm h-100 transition-all unit-card ${unit.status === 'Occupied' ? 'border-success bg-success-light' :
                      unit.status === 'Available' ? 'border-warning bg-warning-light' :
                        unit.status === 'Reserved' ? 'border-info bg-info-light' : 'border-danger bg-danger-light'
                      }`} style={{ cursor: 'pointer' }}>
                      <div className="d-flex justify-content-between align-items-start mb-1">
                        <span className="fw-bold" style={{ fontSize: '0.9rem' }}>{unit.id}</span>
                        <i className="bi bi-three-dots text-muted" style={{ fontSize: '0.7rem' }}></i>
                      </div>
                      <div className="fw-bold text-muted text-uppercase mb-1" style={{ fontSize: '0.6rem' }}>{unit.type}</div>
                      {unit.owner && (
                        <div className="text-truncate fw-medium" title={unit.owner} style={{ fontSize: '0.7rem' }}>
                          <i className="bi bi-person me-1"></i>{unit.owner}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Add Unit Placeholder */}
                <div className="col-md-2 col-sm-4 col-6">
                  <div
                    className="p-3 rounded-lg border border-dashed d-flex flex-column align-items-center justify-content-center text-muted h-100"
                    style={{ minHeight: '80px', cursor: 'pointer', backgroundColor: '#fafafa' }}
                    onClick={() => {
                      setSelectedFloor(floor.name);
                      setIsUnitModalOpen(true);
                    }}
                  >
                    <i className="bi bi-plus-circle mb-1" style={{ fontSize: '1.2rem' }}></i>
                    <span className="fw-bold" style={{ fontSize: '0.6rem' }}>ADD UNIT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .bg-success-light { background-color: rgba(16, 185, 129, 0.05); }
        .bg-warning-light { background-color: rgba(245, 158, 11, 0.05); }
        .bg-info-light { background-color: rgba(59, 130, 246, 0.05); }
        .bg-danger-light { background-color: rgba(239, 68, 68, 0.05); }
        .border-success { border-color: #10B981 !important; }
        .border-warning { border-color: #F59E0B !important; }
        .border-info { border-color: #3B82F6 !important; }
        .border-danger { border-color: #EF4444 !important; }
        .unit-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .rounded-xl { border-radius: 1rem !important; }
        .rounded-lg { border-radius: 0.75rem !important; }
      `}</style>
    </div>
  );
}
