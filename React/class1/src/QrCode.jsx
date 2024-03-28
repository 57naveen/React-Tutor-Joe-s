import { useState } from "react"

export const QrCode = () => {

  const[img,setimg]=useState("");
  const[loading,setloading]=useState(false);
  const[qrData,setQrData]=useState("https://youtube.com/");
  const[qrSize,setQrSize]=useState("150");

  async function generateQR()
  {
    setloading(true);
    try{
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      setimg(url);
    }catch (error){
      console.log("Error generating QR code",error)
    }
    finally{
        setloading(false);
    }

  }

  function downLoadQR()
  {
      fetch(img)
      .then((response)=>response.blob())
      .then((blob)=>
      {
        const link = document.createElement("a");
        link.href=URL.createObjectURL(blob);
        link.download="qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error)=>
      {
        console.log("Error downloading QR code",error)
      });
  }
  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>Please wait...</p>}
      {img && <img src={img} className="gr-code-image"/> }
      
      <div>
        <label htmlFor="dataInput" className="input-label" >Data for QR code: </label>
        <input type="text" value={qrData} onChange={(e)=> setQrData(e.target.value)} id="dataInput" placeholder="Enter data for QR code" />
        <label htmlFor="sizeInput" className="input-label" >Image size (e.g.. 150):</label>
        <input type="text" id="sizeInput" value={qrSize} onChange={(e)=> setQrSize(e.target.value)} placeholder="Enter image size "/>
        <button className="generate-button" disabled={loading} onClick={generateQR} >Generate QR Code</button>
        <button className="download-button" onClick={downLoadQR}>Download QR Code</button>
      </div>
    </div>
  )
}
