import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import "./Admin.css";

function Admin() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [applications, setApplications] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  if (!user || user.role !== "admin") {
    return <h2 className="admin-denied">Only Admin Allowed</h2>;
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      const [appRes, contactRes] = await Promise.all([
        API.get("/admin/applications"),
        API.get("/admin/contacts"),
      ]);

      setApplications(appRes.data || []);
      setContacts(contactRes.data || []);
    } catch (err) {
      console.error("Admin fetch error:", err);
      setError("Failed to load admin data.");
    } finally {
      setLoading(false);
    }
  };

  const deleteApplication = async (id) => {
    const confirmDelete = window.confirm("Delete this application?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/admin/applications/${id}`);
      setApplications((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Delete application error:", err);
      alert("Failed to delete application");
    }
  };

  const deleteContact = async (id) => {
    const confirmDelete = window.confirm("Delete this contact message?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/admin/contacts/${id}`);
      setContacts((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Delete contact error:", err);
      alert("Failed to delete contact message");
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-overlay"></div>

      <div className="admin-topbar">
        <h2 className="admin-title">Admin Dashboard</h2>
        <button className="admin-refresh-btn" onClick={fetchData}>
          Refresh
        </button>
      </div>

      {loading && <p className="admin-status">Loading data...</p>}
      {error && <p className="admin-error">{error}</p>}

      {!loading && !error && (
        <>
          <div className="admin-section">
            <h3 className="admin-heading">Applications</h3>

            {applications.length === 0 ? (
              <p className="admin-empty">No applications found.</p>
            ) : (
              <div className="admin-grid">
                {applications.map((a) => (
                  <div key={a._id} className="admin-card">
                    <div className="admin-card-content">
                      <p><span>Name:</span> {a.name}</p>
                      <p><span>Email:</span> {a.email}</p>
                      <p><span>Phone:</span> {a.phone}</p>
                      <p><span>Course:</span> {a.course}</p>
                      {a.message && <p><span>Message:</span> {a.message}</p>}
                    </div>

                    <button
                      className="admin-delete-btn"
                      onClick={() => deleteApplication(a._id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="admin-section">
            <h3 className="admin-heading">Contact Messages</h3>

            {contacts.length === 0 ? (
              <p className="admin-empty">No contact messages found.</p>
            ) : (
              <div className="admin-grid">
                {contacts.map((c) => (
                  <div key={c._id} className="admin-card">
                    <div className="admin-card-content">
                      <p><span>Name:</span> {c.name}</p>
                      {c.email && <p><span>Email:</span> {c.email}</p>}
                      {c.phone && <p><span>Phone:</span> {c.phone}</p>}
                      <p><span>Message:</span> {c.message}</p>
                    </div>

                    <button
                      className="admin-delete-btn"
                      onClick={() => deleteContact(c._id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Admin;