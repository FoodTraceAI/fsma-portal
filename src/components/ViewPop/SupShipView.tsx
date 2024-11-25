import "./SupShipView.css";
import { supShipCTE } from "../../types/types";

interface Props {
  supShip: supShipCTE | null;
  onClose: () => void;
  isVisible: boolean;
}

const SupShipView = ({ supShip, onClose, isVisible }: Props) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <h1>{supShip?.ftlItem}</h1>
          <h2>{supShip?.foodDesc}</h2>

          <p>*Receiving CTE will be created once shipment is scanned.</p>

          <h3>Shipping Key Data Elements (KDEs)</h3>
          <hr />
          <table>
            <tbody>
              <tr>
                <td>Traceability Lot Code (TLC)</td>
                <td>{supShip?.tlcId}</td>
              </tr>
              <tr>
                <td>Quantity & UOM</td>
                <td>{`${supShip?.quantity} ${supShip?.unitOfMeasure}`}</td>
              </tr>
              <tr>
                <td>Ship from location</td>
                <td>{supShip?.shipFromLocationId}</td>
              </tr>
              <tr>
                <td>Ship to location</td>
                <td>{supShip?.shipToLocationId}</td>
              </tr>
              <tr>
                <td>Ship Date</td>
                <td>{supShip?.shipDate}</td>
              </tr>
              <tr>
                <td>TLC Source</td>
                <td>{supShip?.tlcSourceId}</td>
              </tr>
              <tr>
                <td>TLC source reference</td>
                <td>{supShip?.tlcSourceReference || "---"}</td>
              </tr>
              <tr>
                <td>Reference document type and number</td>
                <td>{`${supShip?.referenceDocumentType}~${supShip?.referenceDocumentNum}`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupShipView;
