import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from "axios";
import Swal from 'sweetalert2';

import { dateTimeSeperator } from "../../util/dateTimeSperator";

export const ScannerPage = () => {
  const [scanResult, setScanResult] = useState(null);
  const [scanning, setScanning] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 350,
        height: 350,
      },
      fps: -10,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
      console.log(scanResult);
      setScanning(false);
      submitHandler();
      setTimeout(() => {
        setScanning(true); 
      }, 10000);
      scanner.resume()
    }

    function error(err) {
      //console.warn(err)
    }
  }, [scanning]);

  async function submitHandler() {
    if (!scanResult) return;
    try {
      const qr = await axios.post("http://localhost:5000/qrscan", {
        Reg: scanResult,
      });

      if (qr.data === "Student does not exists") {
        alert("Student does not exist");
      } 
      else if(qr.data.str==="Student Updated Sucessfully"){
        //alert(qr.data.name+" is out");
        Swal.fire({
          position: "top",
          icon: "info",
          title: qr.data.name+" is out",
          showConfirmButton: false,
          timer: 1500
        });
        console.log(qr.data);
      }
      else {
        //alert(qr.data.name+" is in");
        Swal.fire({
          position: "top",
          icon: "success",
          title: qr.data.name+" is In",
          showConfirmButton: false,
          timer: 1500
        });
        console.log(qr.data);
      }
      console.log(qr);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Attendance Scanner</h1>
      <div className="flex-1"id="reader"></div>
      {scanResult ? (
        <div>
          Success: <a href={scanResult}>{scanResult}</a>Loading please wait...
          {}
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  );
};
