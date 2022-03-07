

const updatePriceLimitDisplay = () => {
    const slider = document.getElementById('price-slider');
    const silderDisplay = document.getElementById('price-limit-display');

    silderDisplay.innerHTML = slider.value
}

const FilterContainer = (props) => {
        return (
            <div>
                <div>
                    <label for="customRange3" className="form-label">Max Price: <label id="price-limit-display"></label></label>
                    <input type="range" defaultValue={100000} onInput={updatePriceLimitDisplay} className="form-range" min="0" max="100000" step="500" id="price-slider"></input>
                </div>
            </div>
          
        );
  }

export default FilterContainer