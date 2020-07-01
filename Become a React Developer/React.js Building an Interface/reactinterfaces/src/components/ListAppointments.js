import React, {Component} from 'react';
import {FaTimes} from 'react-icons/fa';
import Moment from 'react-moment';

class ListAppointments extends Component {
  render(){
    const listItems = this.props.appointments.map(item => {
      return (
        <div className="pet-item col media py-3" key={item.aptId}>
          <div className="mr-3">
            <button className="pet-delete btn btn-sm btn-danger"
                    onClick={() => this.props.deleteAppointment(item)}>
              <FaTimes/>
            </button>
          </div>

          <div className="pet-info media-body">
            <div className="pet-head d-flex">
              <span className="pet-name">{item.aptId} - {item.petName}</span>
              <span className="apt-date ml-auto">
                <Moment date={item.aptDate}
                        parse="YYY-MM-dd hh:mm"
                        format="D MMMM, h:MMa"/>
              </span>
            </div>

            <div className="owner-name">
              <span className="label-item">Owner: </span>
              <span>{item.ownerName}</span>
            </div>
            <div className="apt-notes">{item.aptNotes}</div>
          </div>
        </div>
      )
    });

    return (
      <div className="appointment-list item-list mb-3">
        {listItems}
      </div>
    )
  }
}

export default ListAppointments;
