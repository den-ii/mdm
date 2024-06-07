import React from "react";

function AddCustomer() {
  return (
    <div className="w-full">
      <div>
        <label className="mb-2">Customer's NIN</label>
        <input className="block w-full border border-[#DADAE8] p-2 rounded-lg focus:outline-1 focus:outline-primary-700" />
      </div>
      <div className="mt-3">
        <label className="mb2">Customer's BVN</label>
        <input className="block w-full border border-[#DADAE8] p-2 rounded-lg focus:outline-1 focus:outline-primary-700" />
      </div>
    </div>
  );
}

export default AddCustomer;
