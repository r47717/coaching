import React from "react";
import moment from "moment";
import "moment/locale/ru";
import InputMoment from "../InputMoment";
import { EnrollContainer } from "./styled";

moment.locale("ru");

class Enroll extends React.Component {
  // input-moment does not like hooks for some reason
  constructor() {
    super();
    this.state = {
      m: moment(),
    };
  }

  render() {
    return (
      <>
        <h2>Записаться</h2>
        <EnrollContainer>
          <InputMoment
            moment={this.state.m}
            onChange={(data) => {
              this.setState({ m: data });
            }}
            onSave={() => {
              console.log(this.state.m);
            }}
          />
        </EnrollContainer>
      </>
    );
  }
}

export default Enroll;
