// form to create a new supplier shipping CTE

import { useState } from "react";
import { supShipCTE } from "../../types/types";
import "./CreateSupShip.css";
import axios from "../../api/axios";
import Cookies from "js-cookie";

interface Props {
  onClose: () => void;
  isVisible: boolean;
}

const CreateSupShip = ({ onClose, isVisible }: Props) => {
  const [formData, setFormData] = useState<supShipCTE>({
    sscc: "",
    logSerialNo: "",
    supCteStatus: "",
    ftlItem: "",
    variety: "",
    tlcId: 0,
    quantity: 0,
    unitOfMeasure: "",
    prodDesc: "",
    shipFromLocationId: 0,
    shipToLocationId: 0,
    shipDate: new Date(),
    tlcSourceId: 0,
    tlcSourceReference: "",
    referenceDocumentType: "",
    referenceDocumentNum: "",
  });

  if (!isVisible) {
    return null;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prevShip) => {
      if (!prevShip) return prevShip; // If prevShip is null, don't update

      return {
        ...prevShip,
        [name]:
          type === "number"
            ? Number(value) || 0
            : type === "date"
              ? new Date(value)
              : value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      alert("Please fill all the fields.");
      return;
    }
    console.log("Form Data:", formData);
    try {
      await axios.post("/supshipcte", formData, {
        headers: {
          Authorization: `${Cookies.get("tokenType")} ${Cookies.get("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div>
      <div className="form-overlay">
        <form
          className="create-supShip-form"
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
        >
          <button className="supShip-form-close-button" onClick={onClose}>
            &times;
          </button>
          <h3>Create a new supplier shipping CTE</h3>
          <hr />
          <div className="supShip-form-group">
            <table className="createSupShipFormTable">
              <tbody>
                <tr className="supShipFormTableRow">
                  <td className="supShipFormDetail">
                    <label htmlFor="sscc">SSCC:</label>
                    <input
                      type="text"
                      id="sscc"
                      name="sscc"
                      placeholder="sscc"
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td className="supShipFormDetail">
                    <label htmlFor="logSerialNo">Logistic Serial Number:</label>
                    <input
                      type="text"
                      id="logSerialNo"
                      name="logSerialNo"
                      placeholder="logSerialNo"
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>

                <tr className="supShipFormTableRow">
                  <td className="shupShipFormDetail">
                    <label htmlFor="supCteStatus">CTE Status:</label>
                    <select
                      id="supCteStatus"
                      name="supCteStatus"
                      onChange={handleChange}
                      style={{ width: "fit-content" }}
                      required
                    >
                      <option value="">Select CTE Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Received">Received</option>
                    </select>
                  </td>
                  <td className="shupShipFormDetail">
                    <label htmlFor="ftlItem">FTL Item:</label>
                    <input
                      type="text"
                      id="ftlItem"
                      name="ftlItem"
                      placeholder="FTL Item"
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>

                <tr className="supShipFormTableRow">
                  <td className="supShipFormDetail">
                    <label htmlFor="variety">Variety:</label>
                    <input
                      type="text"
                      id="variety"
                      name="variety"
                      placeholder="Variety"
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td className="supShipFormDetail">
                    <label htmlFor="tlcId">TLC ID:</label>
                    <input
                      type="text"
                      id="tlcId"
                      name="tlcId"
                      placeholder="TLC ID"
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>

                <tr className="supShipFormTableRow">
                  <td className="supShipFormDetail">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      placeholder="Quantity"
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td className="supShipFormDetail">
                    <label htmlFor="unitOfMeasure">Unit of Measure:</label>
                    <input
                      type="text"
                      id="unitOfMeasure"
                      name="unitOfMeasure"
                      placeholder="Unit of Measure"
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>

                <tr className="supShipFormTableRow">
                  <td className="supShipFormDetail">
                    <label htmlFor="prodDesc">Product Description:</label>
                    <input
                      type="text"
                      id="prodDesc"
                      name="prodDesc"
                      placeholder="Product Description"
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td className="supShipFormDetail">
                    <label htmlFor="shipFromLocationId">Ship From:</label>
                    <input
                      type="text"
                      id="shipFromLocationId"
                      name="shipFromLocationId"
                      placeholder="Ship From Location"
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>

                <tr className="supShipFormTableRow">
                  <td className="supShipFormDetail">
                    <label htmlFor="shipToLocationId">Ship To:</label>
                    <input
                      type="text"
                      id="shipToLocationId"
                      name="shipToLocationId"
                      placeholder="Ship To Location"
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td className="supShipFormDetail">
                    <label htmlFor="shipDate">Ship Date:</label>
                    <input
                      type="date"
                      id="shipDate"
                      name="shipDate"
                      placeholder="Ship Date"
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>

                <tr className="supShipFormTableRow">
                  <td className="supShipFormDetail">
                    <label htmlFor="tlcSourceId">TLC Source ID:</label>
                    <input
                      type="text"
                      id="tlcSourceId"
                      name="tlcSourceId"
                      placeholder="TLC Source ID"
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td className="supShipFormDetail">
                    <label htmlFor="tlcSourceReference">
                      TLC Source Reference:
                    </label>
                    <input
                      type="text"
                      id="tlcSourceReference"
                      name="tlcSourceReference"
                      placeholder="TLC Source Reference"
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>

                <tr className="supShipFormTableRow">
                  <td className="supShipFormDetail">
                    <label htmlFor="referenceDocumentType">
                      Reference Document Type:
                    </label>
                    <input
                      type="text"
                      id="referenceDocumentType"
                      name="referenceDocumentType"
                      placeholder="Reference Document Type"
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td className="supShipFormDetail">
                    <label htmlFor="referenceDocumentNum">
                      Reference Document Number:
                    </label>
                    <input
                      type="text"
                      id="referenceDocumentNum"
                      name="referenceDocumentNum"
                      placeholder="Reference Document Number"
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="form-submit-btn-wrapper">
              <button className="create-supShip-btn">Create</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSupShip;
