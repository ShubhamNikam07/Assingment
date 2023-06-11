import React from 'react';
export default function Form()
{
  
    return(
        <>
        <form className="row g-3">
  <div>
    <label for="inputCity" className="form-label" >City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div >
    <label for="inputState" className="form-label">Select location</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div>
    <p style={{textAlign:'center'}}><b>OR</b></p>
  </div>
  <div className="col-md-4" >
    <label for="inputZip" className="form-label">Longitude</label>
    <input type="number" className="form-control" id="inputZip"/>
  </div>
  <div className="col-md-4">
    <label for="inputZip" className="form-label">Lattitude</label>
    <input type="number" className="form-control" id="inputZip"/>
  </div>
  <div>
    <a  type="submit" class="btn btn-success" style={{marginLeft:'20px'}} href='https://www.google.co.in/maps/@18.3499443,74.0417624,15z?entry=ttu/'> submit</a>
  </div>
</form>  
        </>
    )
}