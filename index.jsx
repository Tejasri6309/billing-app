import './index.css'

const BillingForm = () => {
  return (
    <div className="form-container">
      <h1>Review your details</h1>

      <div className="input-group">
        <input placeholder="Company Name" />
        <input placeholder="Email" />
      </div>

      <div className="input-group">
        <input placeholder="GST Number" />
        <input placeholder="PAN Number" />
      </div>

      <div className="input-group">
        <input placeholder="Street" />
        <input placeholder="City" />
      </div>

      <div className="input-group">
        <input placeholder="Country" />
        <input placeholder="Pincode" />
      </div>

      <div className="button-container">
        <button className="cancel-btn">Cancel</button>

        <button className="save-btn">
          Save Details
        </button>
      </div>
    </div>
  )
}

export default BillingForm