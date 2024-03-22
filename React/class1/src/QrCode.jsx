
export const QrCode = () => {
  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      <img src="../images/1.JPG" className="gr-code-image"/>
      <div>
        <label htmlFor="dataInput" className="input-label" >Data for QR code: </label>
        <input type="text" id="dataInput" placeholder="Enter data for QR code" />
        <label htmlFor="sizeInput" className="input-label" >Image size (e.g.. 150):</label>
        <input type="text" id="sizeInput" placeholder="Enter image size "/>
        <button className="generate-button">Generate QR Code</button>
        <button className="download-button">Download QR Code</button>
      </div>
    </div>
  )
}
