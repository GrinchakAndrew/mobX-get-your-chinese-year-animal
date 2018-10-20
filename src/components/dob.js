import React, { Component } from "react";
import { observable, action, decorate } from "mobx";
import { observer, inject } from "mobx-react";
import store from "../Store";
import StyledForm from "./form-styles";
import StyledInput from "./input-styled";
import StyledDiv from "./div-styled";
import StyledLi from "./li-styled";
import StyledImg from "./styled-img";

@inject("store")
@observer
class DOB extends React.Component {
  @observable
  name = "";
  @observable
  dob = "";
  @action
  handleNameInputChange = e => {
    this.name = e.target.value;
  };
  @action
  handleDoBInputChange = e => {
    this.dob = e.target.value;
  };
  @action
  handleFormSubmit = e => {
    if (this.name && this.dob) {
      this.props.store.addData({ name: this.name, dob: this.dob });
      this.name = "";
      this.dob = "";
    }
    e.preventDefault();
  };

  animalTypeByYearOfBirth(index) {
    if (store.dataFromStore[index]) {
      let animalIndex =
        store.dataFromStore[index]["diff"] % store.fetchArrayOfAnimals.length;
      let animal =
        store.dataFromStore[index]["diff"] > 0
          ? store.fetchArrayOfAnimals[animalIndex]
          : store.fetchArrayOfAnimals[
              store.fetchArrayOfAnimals.length + animalIndex
            ];
      return animal;
    }
  }
  colorTypeByYearOfBirth(index) {
    if (store.dataFromStore[index]) {
      let colorIndex =
        Math.floor(
          store.numberOfYearsInBigCycle -
            Math.abs(store.dataFromStore[index]["diff"]) / 2
        ) % store.arrayOfcolors.length;
      return store.dataFromStore[index]["diff"] > 0
        ? store.arrayOfcolors[store.arrayOfcolors.length - 1 - colorIndex]
        : store.arrayOfcolors[colorIndex];
    }
  }

  render() {
    let { store } = this.props;
    return (
      <div>
        <StyledForm onSubmit={this.handleFormSubmit}>
          Please, enter Person's Name:
          <StyledInput
            type="text"
            value={this.name}
            onChange={this.handleNameInputChange}
          />
          Please, enter Year of Birth:
          <StyledInput
            type="text"
            value={this.dob}
            onChange={this.handleDoBInputChange}
          />
          <button type="submit">Add Personal Profile To Data Log</button>
        </StyledForm>
        <hr />
        {store.data.length > 0 && (
          <div>
            <ul>
              {store.data.map((profile, index) => (
                <StyledLi key={index}>
                  {profile.name} {"'s Year of Birth is: " + profile.dob}
                  <br />
                  {"Animal is : " + this.animalTypeByYearOfBirth(index)}
                  <br />
                  <StyledDiv color={this.colorTypeByYearOfBirth(index)}>
                    {"Color is : " + this.colorTypeByYearOfBirth(index)}
                  </StyledDiv>
                  <StyledImg
                    animal={this.animalTypeByYearOfBirth(index)}
                    imgcol={store.storeImages}
                  />
                </StyledLi>
              ))}
            </ul>
            <hr />
          </div>
        )}
        {"Total Profiles So Far: " + store.totalProfileInData}
      </div>
    );
  }
}
export default DOB;
