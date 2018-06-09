import React, { Component } from "react";
import Button from "./Button";
import "./Horloge.css";

class Horloge extends Component {
  constructor(props) {
    super(props);
    this.state = { time: "", day: "", on: 0 };
    this.heure = this.heure.bind(this);
    this.switcher = this.switch.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let all = this.heure();
      // console.log("re re re");
      this.setState({ time: all.time, day: all.day });
    }, 1000);
  }
  switch() {
    let number = this.state.on + 1;
    this.setState({ on: number });
    console.log(this.state.on);
  }
  heure() {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let date = new Date();
    let heure = date.getHours();
    let min = date.getMinutes();
    let secondes = date.getSeconds();
    let time = `${heure}:${min}:${secondes}`;
    let day = weekday[date.getDay()];
    let jour = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let fullDay = `${day} ${jour} ${month} ${year}`;
    let all = { time: time, day: fullDay };
    // console.log("heure")
    return all;
  }

  render() {
    let switched = this.state.on
    
    return <div>
        <div className="row offset-5 col-4">
          <Button switcher={this.switcher} />
          <p>
            :
            <i class="far fa-calendar-alt" />
          </p>
        </div>
        <div className="row offset-4 col-4 ">
          <div className="container horloge tictac">
            <p className="text">{this.state.time}</p>
            {switched % 2 === 0 ? null : <p className="text">
                {this.state.day}
              </p>}
          </div>
        </div>
      </div>;
  }
}

export default Horloge;
