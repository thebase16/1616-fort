import React, { Component } from "react";
import "./number-picker.css";
import fortuneJSON from "../../Assets/Icons/data/fortunes.json";

class NumberPicker extends Component {
  constructor(){
    super();
    this.state = {
      prevColorSelected:""
    }
    // eslint-disable-next-line
    let pickRandomFortune = this.pickRandomFortune.bind(this);
  }
  // Logic to pick parse random fortune when color is picked
  pickRandomFortune = () =>{
    let oddIndex = [7,2,3,6];
    let evenIndex = [0,1,4,5];
    let fortuneSelected = [];
    // console.log("This selected color is: ",this.props.location.state);
    
    let parseIndex = (this.props.location.state.colorSelected.length % 2 !== 0)?oddIndex:evenIndex;
    
    parseIndex.forEach((index)=>{
      fortuneSelected.push(fortuneJSON.fortunes[index]);
    this.setState({fortune:fortuneSelected,numberIndex:parseIndex,prevColorSelected:this.props.location.state.colorSelected});
    });
    // console.log("The fortunes are: ",fortuneSelected);
  }

  render() {
    if (this.props.location.state.colorSelected !== this.state.prevColorSelected){
      this.pickRandomFortune();
      console.log(this.props.numberIndex);
    }
    
    return (
      <div
        id="numberpickerdiv"
        style={{
          display:"flex",
          height: "87vh",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
          <div
            id="number-div"
            style={{
              alignSelf: "center",
              color: "green",
              fontFamily: "Bungee Shade, cursive",
              fontSize: "40px",
            }}
          >
            <div
              id="col1"
              style={{
                display: "flex",
                alignSelf: "center",
              }}
            >
              <div
                id="number1"
                style={{
                  border: "2px solid #7400B8",
                  height: "30vh",
                  width: "30vh",
                  margin: "5px",
                }}
                >
                <h1>{(this.state.numberIndex === undefined)?"Wait":this.state.numberIndex[0]}</h1>
              </div>
              <div
                id="number2"
                style={{
                  border: "2px solid #7400B8",
                  height: "30vh",
                  width: "30vh",
                  margin: "5px",
                }}
                >
                <h1>{(this.state.numberIndex === undefined)?"Wait":this.state.numberIndex[1]}</h1>
              </div>
            </div>
            <div
              id="col2"
              style={{
                display: "flex",
                alignSelf: "center",
              }}
            >
              <div
                id="number3"
                style={{
                  border: "2px solid #7400B8",
                  height: "30vh",
                  width: "30vh",
                  margin: "5px",
                }}
                >
                <h1>{(this.state.numberIndex === undefined)?"Wait":this.state.numberIndex[2]}</h1>
              </div>
              <div
                id="number4"
                style={{
                  border: "2px solid #7400B8",
                  height: "30vh",
                  width: "30vh",
                  margin: "5px",
                }}
                >
                <h1>{(this.state.numberIndex === undefined)?"Wait":this.state.numberIndex[3]}</h1>
              </div>
            </div>
          </div>
          <div
            style={{ color: "white", alignSelf: "center", fontSize: "40px" }}
          >
            <h1>Choose A Number</h1>
          </div>
      </div>
    );
  }
}
export default NumberPicker;
