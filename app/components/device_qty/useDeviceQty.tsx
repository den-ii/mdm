import { useState } from "react";

function useDeviceQty() {
  const [deviceNo, setDeviceNo] = useState(0);

  function increaseDevice() {
    setDeviceNo((deviceNo) => deviceNo + 1);
  }

  function decreaseDevice() {
    if (deviceNo <= 0) return;
    setDeviceNo((deviceNo) => deviceNo - 1);
  }

  function handleDeviceChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDeviceNo(parseInt(e.target.value));
  }

  function submitRequest() {
    //apiCall
    console.log(deviceNo);
  }

  return {
    deviceNo,
    increaseDevice,
    decreaseDevice,
    handleDeviceChange,
    submitRequest,
  };
}

export default useDeviceQty;
