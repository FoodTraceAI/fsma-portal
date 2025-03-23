import "./SupShipView.css";
import {
  arrivingShipment,
  receivingShipment,
} from "../../types/types";

type shipView = arrivingShipment | receivingShipment;

interface Props<T extends shipView> {
  supShip: T | null;
  onClose: () => void;
  isVisible: boolean;
}

const SupShipView = <T extends shipView>({
  supShip,
  onClose,
  isVisible,
}: Props<T>) => {
  // const [reShip, setRecShip] = useState(false);

  if (!isVisible) {
    return null;
  }
  console.log(supShip?.type)

  // if (supShip?.type == "receiving") {
  //   setRecShip(true);
  // }

  return (
    <div>
      <div className="popup-overlay-ssc">
        <div className="popup-content-ssc">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <h1>{supShip?.ftlItem}</h1>
          <h2>{supShip?.prodDesc}</h2>

          <p>*Receiving CTE will be created once shipment is scanned.</p>

          <h3>Shipping Key Data Elements (KDEs)</h3>
          <hr />
          <table>
            <tbody>
              <tr>
                <td className="left-row-ssc">Traceability Lot Code (TLC)</td>
                <td className="right-row-ssc">{supShip?.tlcVal}</td>
              </tr>
              <tr>
                <td className="left-row-ssc">Quantity & UOM</td>
                <td className="right-row-ssc">{`${supShip?.quantity} ${supShip?.unitOfMeasure}`}</td>
              </tr>
              <tr>
                <td className="left-row-ssc">Ship from location</td>
                <td className="right-row-ssc">{`${supShip?.shipFromBus}, ${supShip?.shipFromCity}`}</td>
              </tr>
              {supShip?.type === "arriving" && (
                <>
                  <tr>
                    <td className="left-row-ssc">Ship to location</td>

                    <td className="right-row-ssc">{`${supShip?.shipToBus}, ${supShip?.shipToCity}`}</td>
                  </tr>
                  <tr>
                    <td className="left-row-ssc">Ship Date</td>
                    <td className="right-row-ssc">
                      {supShip?.shipDate.toString()}
                    </td>
                  </tr>
                </>
              )}
              {supShip?.type === "receiving" && (
                <>
                  <tr>
                    <td className="left-row-ssc">Receive location</td>

                    <td className="right-row-ssc">{`${supShip?.receiveBus}, ${supShip?.receiveCity}`}</td>
                  </tr>
                  <tr>
                    <td className="left-row-ssc">Receive Date</td>
                    <td className="right-row-ssc">
                      {supShip?.receiveDate.toString()}
                    </td>
                  </tr>
                </>
              )}
              <tr>
                <td className="left-row-ssc">TLC Source</td>
                <td className="right-row-ssc">{supShip?.tlcSrc}</td>
              </tr>
              <tr>
                <td className="left-row-ssc">TLC source reference</td>
                <td className="right-row-ssc">{supShip?.tlcSrcRef || "---"}</td>
              </tr>
              <tr>
                <td className="left-row-ssc">
                  Reference document type and number
                </td>
                <td className="right-row-ssc">{`${supShip?.referenceDocumentType} : ${supShip?.referenceDocumentNum}`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupShipView;
