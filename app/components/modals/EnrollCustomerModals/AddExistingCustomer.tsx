import React from "react";

function AddCustomer() {
  return (
    <div className="w-full">
      <div>
        <label className="mb-2">Customer's Phone Number</label>
        <input
          className="block w-full border border-[#DADAE8] p-2 rounded-lg focus:outline-1 
        focus:outline-primary-700 placeholder:font-light"
          type="text"
          placeholder="Enter phone number"
        />
      </div>
    </div>
  );
}

export default AddCustomer;
