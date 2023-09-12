import "./pnf-logo.css"

function PnfLogo() {
    return (
        <div className="pnf-container">
            <div className="pnf-circle">
                <div className="pnf-base-container">
                    <div className="pnf-base-items">Piano ands Forte</div>
                </div>
            </div>
            <div className="pnf-keys">
                <div className="key white"></div>
                <div className="key black"></div>
                <div className="key white"></div>
                <div className="key black"></div>
                <div className="key white"></div>
            </div>
        </div>
    )
}

export default PnfLogo;