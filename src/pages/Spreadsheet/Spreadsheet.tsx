import './Spreadsheet.css'

const Spreadsheet = () => {
  return (
    <div className="base">
      <div className="ss-form-container">
        <h2>Generate Sortable Spreadsheets</h2>
        <p>
          Search and filter for specified criteria to generate sortable
          spreadsheets.
        </p>
        <form className="ss-form">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="FTL">Food Tracebility List (FTL)</label>
              <select name="FTL" id="ftl-drop">
                <option value="blank"></option>
                <option value="cucumber">Cucumber (fresh)</option>
                <option value="fruits">Fruits (fresh-cut)</option>
                <option value="herbs">Herbs (fresh)</option>
                <option value="leafy-greens">Leafy Greens (fresh)</option>
                <option value="melons">Melons (fresh)</option>
                <option value="nut-butters">Nut Butters</option>
                <option value="peppers">Peppers (fresh)</option>
              </select>
            </div>
            <div className="form-column">
              <label htmlFor="food-type">Food Type</label>
              <select name="food-type" id="food-type-select">
                <option value="blank"></option>
                <option value="slice">Sliced</option>
                <option value="diced">Diced</option>
                <option value="whole">Whole</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="TLC">Traceability Lot Code</label>
              <input type="text" id="TLC" name="TLC" />
            </div>
            <div className="form-column">
              <label htmlFor="s-location">Previous Source Location</label>
              <input type="text" id="s-location" name="s-location" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="from-date">Starting Date</label>
              <input type="date" id="from-date" name="from-date" />
            </div>
            <div className="form-column">
              <label htmlFor="to-date">Ending Date</label>
              <input type="date" id="to-date" name="to-date" />
            </div>
          </div>
          <button type="submit" className="ss-submit">
            Generate
          </button>
        </form>
      </div>
    </div>
  );
}

export default Spreadsheet