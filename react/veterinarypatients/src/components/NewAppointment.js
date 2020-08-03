import React, { Component } from 'react';

class NewAppointment extends Component {
  state = {

  }
  render() {
    return (
      <div className = "card mt-5 p-5">
        <h2 className = 'card-tittle text-center mb-5'>Fill out the form to create an appointment</h2>

        <form>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label text-center">Name Pet</label>
            <div className="col-sm-8 col-lg-10 pr-5">
              <input 
              type="text" className="form-control"
              placeholder = 'Name Pet'
              name = 'pet'
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label text-center">Owner</label>
            <div className="col-sm-8 col-lg-10 pr-5">
              <input 
              type="text" className="form-control"
              placeholder = 'Owner Pet'
              name = 'owner'
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label text-center">Data</label>
            <div className="col-sm-8 col-lg-4 pr-5">
              <input 
              type="date" className="form-control"
              name = 'date'
              />
            </div>
          
            <label className="col-sm-4 col-lg-2 col-form-label text-center">Hour</label>
            <div className="pr-5 col-sm-8 col-lg-4">
              <input 
              type="time" className="form-control"
              placeholder = 'Owner Pet'
              name = 'hour'
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label text-center">Symptoms</label>
            <div className="col-sm-8 col-lg-10 pr-5">
              <textarea 
                className="form-control"
                name="symptoms"
                placeholder="Describes the symptoms"
              ></textarea>
            </div>
          </div>

          <div className="pr-5 pl-5">
            <input type="submit" className="btn btn-success btn-block" value="New Appoointment"/>
          </div>
        </form>
      </div>
    );
  }
}

export default NewAppointment;