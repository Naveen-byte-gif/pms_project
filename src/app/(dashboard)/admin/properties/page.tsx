"use client";

import styles from "@/styles/modules/Properties.module.css";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import PropertyModal from "@/components/dashboard/PropertyModal";
import { useSearchParams } from "next/navigation";

function PropertiesContent() {
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProperty, setEditProperty] = useState<any>(null);

  useEffect(() => {
    if (searchParams.get('action') === 'add') {
      setEditProperty(null);
      setIsModalOpen(true);
    }
  }, [searchParams]);

  const [properties, setProperties] = useState([
    {
      id: "prop-001",
      name: "Emerald Tech Park",
      type: "IT Park",
      location: "Hyderabad, India",
      region: "APAC",
      towers: 4,
      floors: 25,
      totalUnits: 450,
      occupancy: "88%",
      status: "Active",
      icon: "bi-building-gear"
    },
    {
      id: "prop-002",
      name: "Skyline Business Hub",
      type: "Commercial",
      location: "Dubai, UAE",
      region: "EMEA",
      towers: 2,
      floors: 45,
      totalUnits: 120,
      occupancy: "94%",
      status: "Active",
      icon: "bi-building-check"
    },
    {
      id: "prop-003",
      name: "Marina Enterprise Center",
      type: "Mixed Use",
      location: "Singapore",
      region: "APAC",
      towers: 3,
      floors: 18,
      totalUnits: 310,
      occupancy: "72%",
      status: "Maintenance",
      icon: "bi-building-exclamation"
    }
  ]);

  const handleSaveProperty = (propData: any) => {
    if (editProperty) {
      // Update existing
      setProperties(properties.map(p => p.id === editProperty.id ? { ...p, ...propData } : p));
    } else {
      // Add new
      const property = {
        ...propData,
        id: `prop-00${properties.length + 1}`,
        occupancy: "0%",
        icon: "bi-building-plus"
      };
      setProperties([...properties, property]);
    }
    setEditProperty(null);
  };

  const openEditModal = (prop: any) => {
    setEditProperty(prop);
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setEditProperty(null);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <PropertyModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setEditProperty(null);
        }} 
        onSave={handleSaveProperty} 
        editData={editProperty}
      />
      
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h2>Property Master</h2>
          <p>Manage and monitor global real estate assets at scale.</p>
        </div>
        <div className={styles.controls}>
          <button className="btn btn-outline-light border text-dark d-flex align-items-center gap-2">
            <i className="bi bi-map"></i> Map View
          </button>
          <button 
            className="btn btn-primary d-flex align-items-center gap-2"
            onClick={openAddModal}
          >
            <i className="bi bi-plus-lg"></i> Add Property
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <div className={styles.search}>
          <i className={`bi bi-search ${styles.searchIcon}`}></i>
          <input type="text" placeholder="Search by name, ID, or location..." />
        </div>
        <div className="d-flex gap-2">
          <select className="form-select border-0 bg-light rounded-pill px-4" style={{ width: '160px' }}>
            <option>All Regions</option>
            <option>APAC</option>
            <option>EMEA</option>
            <option>US</option>
          </select>
          <select className="form-select border-0 bg-light rounded-pill px-4" style={{ width: '160px' }}>
            <option>All Types</option>
            <option>IT Park</option>
            <option>Commercial</option>
            <option>Mall</option>
          </select>
        </div>
      </div>

      {/* Property Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Property Details</th>
              <th className={styles.th}>Type</th>
              <th className={styles.th}>Region</th>
              <th className={styles.th}>Structure</th>
              <th className={styles.th}>Total Units</th>
              <th className={styles.th}>Occupancy</th>
              <th className={styles.th}>Status</th>
              <th className={styles.th}></th>
            </tr>
          </thead>
          <tbody>
            {properties.map((prop) => (
              <tr key={prop.id} className={styles.tr}>
                <td className={styles.td}>
                  <Link href={`/admin/properties/${prop.id}`} className="text-decoration-none d-block">
                    <div className={styles.propCell}>
                      <div className={styles.propIcon}>
                        <i className={`bi ${prop.icon}`}></i>
                      </div>
                      <div className={styles.propInfo}>
                        <h6>{prop.name}</h6>
                        <p>{prop.location}</p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className={styles.td}><span className="badge bg-light text-dark border rounded-pill px-3 py-2 fw-normal">{prop.type}</span></td>
                <td className={styles.td}><span className="fw-bold text-muted small">{prop.region}</span></td>
                <td className={styles.td}>
                  <div className="d-flex flex-column">
                    <span className="fw-bold" style={{ fontSize: '0.85rem' }}>{prop.towers} Towers</span>
                    <span className="text-muted" style={{ fontSize: '0.7rem' }}>{prop.floors} Floors</span>
                  </div>
                </td>
                <td className={styles.td}><span className="fw-bold">{prop.totalUnits}</span></td>
                <td className={styles.td}>
                  <div className="d-flex align-items-center gap-2">
                    <div className="progress flex-grow-1" style={{ height: '4px', width: '60px', backgroundColor: '#e2e8f0' }}>
                      <div className="progress-bar bg-primary" style={{ width: prop.occupancy, backgroundColor: '#10B981 !important' }}></div>
                    </div>
                    <span className="fw-bold" style={{ fontSize: '0.75rem' }}>{prop.occupancy}</span>
                  </div>
                </td>
                <td className={styles.td}>
                  <span className={`${styles.statusBadge} bg-${prop.status === 'Active' ? 'success' : 'warning'} bg-opacity-10 text-${prop.status === 'Active' ? 'success' : 'warning'}`}>
                    {prop.status}
                  </span>
                </td>
                <td className={styles.td}>
                  <div className="d-flex gap-1 justify-content-end">
                    <div className="dropdown">
                      <button className={styles.actionBtn} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0 rounded-xl p-2">
                        <li>
                          <Link className="dropdown-item rounded-lg py-2 small" href={`/admin/properties/${prop.id}`}>
                            <i className="bi bi-eye me-2"></i>View Details
                          </Link>
                        </li>
                        <li>
                          <button className="dropdown-item rounded-lg py-2 small" onClick={() => openEditModal(prop)}>
                            <i className="bi bi-pencil me-2"></i>Edit Property
                          </button>
                        </li>
                        <li><hr className="dropdown-divider opacity-10" /></li>
                        <li>
                          <button className="dropdown-item rounded-lg py-2 small text-danger">
                            <i className="bi bi-trash me-2"></i>Delete Property
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-emerald" role="status">
          <span className="visually-hidden">Loading Properties...</span>
        </div>
      </div>
    }>
      <PropertiesContent />
    </Suspense>
  );
}
