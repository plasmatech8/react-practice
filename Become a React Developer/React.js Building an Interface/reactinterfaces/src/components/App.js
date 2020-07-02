import React, { Component } from 'react';
import {without} from 'lodash';
import '../css/App.css';

import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';

class App extends Component {
  constructor(){
    super();
    this.state = {
      myAppointments: [],
      lastIndex: 0,

      formDisplay: true, // AddAppointments

      orderBy: 'petName', // SearchAppointments/ListAppointments
      orderDir: 'asc'
    }
  }

  changeOrder = (order, dir) => {
    this.setState({orderBy: order, orderDir: dir});
  }

  toggleForm = () => {
    this.setState({formDisplay: !this.state.formDisplay});
  }

  addAppointment = (apt) => {
    let tempApts = this.state.myAppointments;
    apt.aptId = this.state.lastIndex;
    tempApts.unshift(apt); // add to start of the array
    this.setState({
      myAppointments: tempApts,
      lastIndex: apt.aptId
    });
  }

  deleteAppointment = (apt) => {
    let tempApts = this.state.myAppointments;
    tempApts = without(tempApts, apt);
    this.setState({myAppointments: tempApts});
  }

  componentDidMount(){
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map((item, ) => {
          item.aptId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 })
          return item;
        })
        this.setState({myAppointments: apts});
      });
  }

  render() {
    // Sort appointments array
    let order = this.state.orderDir === 'asc' ? 1 : -1;
    let filteredApts = this.state.myAppointments;
    filteredApts.sort((a,b) => {
      if (a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()){
        return order * -1;
      } else {
        return order * 1;
      }
    });

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  addAppointment={this.addAppointment}
                />
                <SearchAppointments
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  changeOrder={this.changeOrder}
                />
                <ListAppointments
                  appointments={filteredApts}
                  deleteAppointment={this.deleteAppointment}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
