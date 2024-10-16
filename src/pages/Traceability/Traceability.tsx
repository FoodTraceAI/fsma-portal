import './Traceability.css'

const Traceability = () => {
  return (
    <div className="base">
      <div className="plan-container">
        <div className="header">
          <p>Traceability Plan</p>
          <div className="btn-container">
            <button className="pdf-btn">Export PDF</button>
            <button className="edit-btn">Edit</button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-header">
            <div className="business-details">
              <h2>Riverside Grill</h2>
              <p>Address: 123 River Street, Riverside, CA 92501</p>
            </div>
            <div className="version-info">
              <p>Version 1</p>
              <p>Current</p>
            </div>
          </div>
          <div className="card-meta">
            <p>
              <strong>Issue date:</strong> July 22, 2024
            </p>
            <p>
              <strong>Supersedes:</strong> ---
            </p>
          </div>
          <hr />
          <div className="card-section">
            <h3>Procedures to Maintain the Records</h3>
            <p>
              At Riverside Grill, we keep detailed records for food
              traceability. We scan and store hard copies of invoices and bills
              of lading electronically, along with digital advance shipment
              notices. All records are retained for two years for traceability
              and compliance.
            </p>
          </div>
          <div className="card-section">
            <h3>Procedures to Identify FTL Foods</h3>
            <p>
              Riverside Grill needs suppliers to provide records showing any FTL
              foods in shipments. These records can be paper copies at receipt
              or electronic records sent before shipment to ensure traceability.
            </p>
          </div>
          <div className="card-section">
            <h3>Assigning Traceability Lot Codes</h3>
            <p>
              Riverside Grill does not utilize Traceability Lot Codes (TLCs) for
              foods on the Food Traceability List (FTL).
            </p>
          </div>
          <div className="card-section">
            <h3>Point of Contact</h3>
            <p>
              Jane Doe, the Manager at Riverside Grill. Jane can be contacted at
              555-123-4567 or via email at jane.doe@riversidegrill.com.
            </p>
          </div>
          <div className="card-section">
            <h3>Traceability Plan Updates</h3>
            <p>
              Our traceability plan is reviewed annually to stay current and
              compliant with regulations. Updates are made as needed, and
              previous versions are kept on our local system for at least two
              years.
            </p>
          </div>
        </div>
      </div>
      {/* <p className='creation'>Date & Time Created: <span className='td-exacts'>July 22, 2024 8AM</span></p> */}
      <footer className='creation-footer'>
        Date & Time Created:
        <span className="td-exacts">July 22, 2024 8AM</span>
      </footer>
    </div>
  );
}

export default Traceability