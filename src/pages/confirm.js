import "./confirm.css";

/**
 * 
 * @param {*} prop, which has the followng 2 functions and 1 parameter: 
 * function confirm2Go(value), save the data if YES, otherwise do nothing
 * function setDisplay, set the state display
 * parameter display, "none", "block", style display type
 * @returns 
 */

function Confirm(prop) {
  const handleConfirmationBox = (value) => {
    prop.confirm2Go(value); //do whatever if confirmed to go
    prop.setDisplay("none"); //close the pop up window
  };

  return (
    <div className="container" style={{"display":prop.display}}>
      <div className="confirmation-text">Do you really want to submit?</div>
      <div className="button-container">
        <button
          className="cancel-button"
          onClick={() => handleConfirmationBox(false)}
        >
          Cancel
        </button>
        <button
          className="confirmation-button"
          onClick={() => handleConfirmationBox(true)}
        >
          YES
        </button>
      </div>
      {/* <div className="confirm-bg" onClick={() => handleConfirmationBox()}>
        
      </div> */}
    </div>
  );
}

export default Confirm;
