// form to ship a received CTE. needs fixes for 
// null value error and submit handler.

import React, { useState } from "react";
import { cteReceive } from "../../types/types";
// import "./ReceiveCteView.css";

interface ReceiveCTE {
  ftlItem: string;
  tlcId: number;
  quantity: number;
  unitOfMeasure: string;
  prodDesc: string;
  variety: string;
  shipToLocationId?: number | null;
  locationId: number;
  shipDate?: string | null;
  shipTime?: string | null;
  referenceDocumentType: string;
  referenceDocumentNum: string;
}

interface Props {
  receiveCTE: cteReceive;
  onClose: () => void;
  isVisible: boolean;
  onSave: (updatedCTE: ReceiveCTE) => void;
}

const RecToShip = ({ receiveCTE , onClose, isVisible, onSave }: Props) => {
  const [formData, setFormData] = useState<ReceiveCTE>(receiveCTE);

  if (!isVisible) {
    return null;
  }

  console.log(formData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div>
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <h2>Edit Receiving CTE</h2>
          <form>
            <label>
              FTL Item:
              <input
                type="text"
                name="ftlItem"
                value={formData.ftlItem}  // TODO: Fix null value error
                onChange={handleChange}
              />
            </label>
            <label>
              TLC ID:
              <input
                type="number"
                name="tlcId"
                value={formData.tlcId}
                onChange={handleChange}
              />
            </label>
            <label>
              Quantity:
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </label>
            <label>
              Unit of Measure:
              <input
                type="text"
                name="unitOfMeasure"
                value={formData.unitOfMeasure}
                onChange={handleChange}
              />
            </label>
            <label>
              Product Description:
              <input
                type="text"
                name="prodDesc"
                value={formData.prodDesc}
                onChange={handleChange}
              />
            </label>
            <label>
              Variety:
              <input
                type="text"
                name="variety"
                value={formData.variety}
                onChange={handleChange}
              />
            </label>
            <label>
              Ship to Location ID:
              <input
                type="number"
                name="shipToLocationId"
                value={formData.shipToLocationId || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Location ID:
              <input
                type="number"
                name="locationId"
                value={formData.locationId}
                onChange={handleChange}
              />
            </label>
            <label>
              Ship Date:
              <input
                type="date"
                name="shipDate"
                value={formData.shipDate || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Ship Time:
              <input
                type="time"
                name="shipTime"
                value={formData.shipTime || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Reference Document Type:
              <input
                type="text"
                name="referenceDocumentType"
                value={formData.referenceDocumentType}
                onChange={handleChange}
              />
            </label>
            <label>
              Reference Document Number:
              <input
                type="text"
                name="referenceDocumentNum"
                value={formData.referenceDocumentNum}
                onChange={handleChange}
              />
            </label>
            <button type="button" onClick={handleSave}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecToShip;
