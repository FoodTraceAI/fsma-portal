import "./Transformation.css";

const Transformation = () => {
  return (
    <div className="Dashboard">
      <div className="detail-container">
        <div className="header">
          <p>Transformation CTEs</p>
        </div>
        <div className="detail-table">
          <div className="table-topper">Receiving CTEs</div>
          <table className="details">
            <thead className="table-head">
              <tr className="table-head-row">
                <th className="details-head">Quantity & UOM</th>
                <th className="details-head">Product Description</th>
                <th className="details-head">Source Location</th>
                <th className="details-head">Received Date</th>
                <th className="details-head">Actions</th>
                <th className="details-head"></th>
              </tr>
            </thead>
            <tbody className="table-body">
              <tr className="table-body-row">
                <td className="details-body">8 cases</td>
                <td className="details-body">
                  Rutabaga/Rutabaga Sliced 4EA x 2.5LB
                </td>
                <td className="details-body">Prime Produce - San Francisco</td>
                <td className="details-body">Jan 2, 2024</td>
                <td className="details-body">
                  <button className="action-btn">View</button>
                </td>
                <td className="details-body">
                  <button className="prep-btn">Prep food</button>
                </td>
              </tr>
              <tr className="table-body-row">
                <td className="details-body">10 cases</td>
                <td className="details-body">
                  Carrots/Carottes Baby 4EA x 3LB
                </td>
                <td className="details-body">Fresh Produce Co - Sacremento</td>
                <td className="details-body">Jan 3, 2024</td>
                <td className="details-body">
                  <button className="action-btn">View</button>
                </td>
                <td className="details-body">
                  <button className="prep-btn">Prep food</button>
                </td>
              </tr>
              <tr className="table-body-row">
                <td className="details-body">15 cases</td>
                <td className="details-body">
                  Squash/Courge Butternut 5EA x 4LB
                </td>
                <td className="details-body">Fruit Farm - Los Angeles</td>
                <td className="details-body">Jan 3, 2024</td>
                <td className="details-body">
                  <button className="action-btn">View</button>
                </td>
                <td className="details-body">
                  <button className="prep-btn">Prep food</button>
                </td>
              </tr>
              <tr className="table-body-row">
                <td className="details-body">20 cases</td>
                <td className="details-body">Peas/Pois Snap 6EA x 5LB</td>
                <td className="details-body">Tropical Fruits - Miami</td>
                <td className="details-body">Jan 5, 2024</td>
                <td className="details-body">
                  <button className="action-btn">View</button>
                </td>
                <td className="details-body">
                  <button className="prep-btn">Prep food</button>
                </td>
              </tr>
              <tr className="table-body-row">
                <td className="details-body">12 cases</td>
                <td className="details-body">Corn/Mais Sweet 4EA x 3LB</td>
                <td className="details-body">Citrus Grove - Orlando</td>
                <td className="details-body">Jan 6, 2024</td>
                <td className="details-body">
                  <button className="action-btn">View</button>
                </td>
                <td className="details-body">
                  <button className="prep-btn">Prep food</button>
                </td>
              </tr>
              <tr className="table-body-row">
                <td className="details-body">18 cases</td>
                <td className="details-body">Kale/Chou Frisé Baby 5EA x 2LB</td>
                <td className="details-body">Vineyard - Napa Valley</td>
                <td className="details-body">Jan 8, 2024</td>
                <td className="details-body">
                  <button className="action-btn">View</button>
                </td>
                <td className="details-body">
                  <button className="prep-btn">Prep food</button>
                </td>
              </tr>
              <tr className="table-body-row">
                <td className="details-body">25 cases</td>
                <td className="details-body">
                  Strawberries/Strawberries Fresh 6EA x 1LB
                </td>
                <td className="details-body">Berry Farm - Santa Cruz</td>
                <td className="details-body">Jan 8, 2024</td>
                <td className="details-body">
                  <button className="action-btn">View</button>
                </td>
                <td className="details-body">
                  <button className="prep-btn">Prep food</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transformation;
