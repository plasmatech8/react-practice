import React, { Component } from 'react';
import {without, findIndex} from 'lodash';
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

      orderBy: 'petName', // SearchAppointments
      orderDir: 'asc',
      queryText: ''
    }
  }

  updateInfo = (name, value, id) => {
    let tempApts = this.state.myAppointments;
    let aptIndex = findIndex(this.state.myAppointments, {
      aptId: id
    });
    tempApts[aptIndex][name] = value;
    this.setState({myAppointments: tempApts})
  }

  searchApts = (text) => {
    this.setState({queryText: text});
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
    // Sort and filter the appointments array
    let order = this.state.orderDir === 'asc' ? 1 : -1;
    let filteredApts = this.state.myAppointments;
    filteredApts = filteredApts.sort((a,b) => {
      return (a[this.state.orderBy].toLowerCase() <
              b[this.state.orderBy].toLowerCase()) ? order * -1 : order * 1;
    }).filter(item => {
      return (
        item['petName']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||
        item['ownerName']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||
        item['aptNotes']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase())
      );
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
                  searchApts={this.searchApts}
                />
                <ListAppointments
                  appointments={filteredApts}
                  deleteAppointment={this.deleteAppointment}
                  updateInfo={this.updateInfo}
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
