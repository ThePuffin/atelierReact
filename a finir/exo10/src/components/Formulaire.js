import React, {
  Component
} from "react";
import {
  ToastContainer,
  toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import validator from 'validator';

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sexe: "",
      username: "",
      age: "",
      tel: "",
      email: "",
      password: "",
      password2: "",
      hobbies: "",
      sports: "",
      error: "veuillez remplir ce champ"
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.validation = this.validation.bind(this);

  }

  validation(name, value) {

   
    //test username
    console.log(value);
    (name === "username") ?(value.length < 6) ? this.setState({error: "nom trop court"}): this.setState({error: ""}): null;

    //test age
    (name === "age") ? ((value > 18 && value < 99) ? this.setState({
      error: ""
    }) : this.setState({
      error: "vous n'avez pas l'âge requis"
    })) : null;

    //test telephone
    (name === "tel") ? (((/(\d){10}/).test(value)) ? this.setState({
      error: ""
    }) : this.setState({
      error: "le numéro n'est pas valable"
    })) : null;

    //test mail
    (name === "mail") ? (((/^\w+@\w+.\w{2,3}$/).test(value)) ? this.setState({
      error: ""
    }) : this.setState({
      error: "l'adresse n'est pas valable"
    })) : null;

    //test password
    (name === "password") ? (((/\w{5,}\W+/gi).test(value)) ? this.setState({
      error: ""
    }) : this.setState({
      error: "mot de passe trop court"
    })) : null;
  }

  handleUserInput(e) {
    const name = e.target.name;
    let value = e.target.value;
    const check = e.target.checked;
    // (check === true)?value=true: value=false;
    this.setState({
      [name]: value
    });
    this.validation(name, value)
  }



  notify = () => {

    (this.state.error !== "") ? toast(this.state.error): null;
    this.setState({
      error: "veuillez remplir ce champ"
    })
  };

  render() {
    return <div >
      <
      div className = "container" >
      <
      ToastContainer / >
      <
      form onChange = {
        event => this.handleUserInput(event)
      } >

      <
      fieldset class = "form-group" >
      <
      div class = "row" >
      <
      legend class = "col-form-label col-sm-2 pt-0" > Sexe < /legend> <
    div class = "col-sm-10" >
      <
      div class = "form-check" >
      <
      input class = "form-check-input"
    type = "radio"
    name = "sexe"
    id = "sexe1"
    value = "homme"
     / >
      <
      label class = "form-check-label"
    for = "sexe1" >
    Homme
      <
      /label> < /
    div > <
      div class = "form-check" >
      <
      input class = "form-check-input"
    type = "radio"
    name = "sexe"
    id = "sexe2"
    value = "femme" / >
      <
      label class = "form-check-label"
    for = "sexe2" >
    Femme
      <
      /label> < /
    div > <
      div class = "form-check" >
      <
      input class = "form-check-input"
    type = "radio"
    name = "sexe"
    id = "sexe3"
    value = "autre" / >
      <
      label class = "form-check-label"
    for = "sexe3" >
    Autre
      <
      /label> < /
    div > <
      /div> < /
    div > <
      /fieldset> <
    div class = "form-group row" >
      <
      label
    for = "name"
    class = "col-sm-2 col-form-label" >
      Name <
      /label> <
    div class = "col-sm-10" >
      <
      input type = "text"
    class = "form-control"
    id = "name"
    placeholder = ""
    value = {
      this.state.name
    }
    name = "username"
    onChange = {
      event => this.handleUserInput(event)
    }
    onBlur = {
      this.notify
    }
    onFocus = {
      this.validation("usename", this.state.username)
    }
    /> < /
    div > <
      /div> <
    div class = "form-group row" >
      <
      label
    for = "name"
    class = "col-sm-2 col-form-label" >
      Age <
      /label> <
    div class = "col-sm-10" >
      <
      input type = "number"
    class = "form-control"
    id = "age"
    placeholder = ""
    value = {
      this.state.age
    }
    name = "age"
    onChange = {
      event => this.handleUserInput(event)
    }
    onBlur = {
      this.notify
    }
    onFocus = {
      this.validation
    }
    /> < /
    div > <
      /div> <
    div class = "form-group row" >
      <
      label
    for = "name"
    class = "col-sm-2 col-form-label" >
      Telephone <
      /label> <
    div class = "col-sm-10" >
      <
      input type = "tel"
    class = "form-control"
    id = "phone"
    placeholder = ""
    value = {
      this.state.tel
    }
    name = "tel"
    onChange = {
      event => this.handleUserInput(event)
    }
    onBlur = {
      this.notify
    }
    onFocus = {
      this.validation
    }
    /> < /
    div > <
      /div> <
    div class = "form-group row" >
      <
      label
    for = "inputEmail3"
    class = "col-sm-2 col-form-label" >
      Email <
      /label> <
    div class = "col-sm-10" >
      <
      input type = "email"
    class = "form-control"
    id = "inputEmail"
    placeholder = "mail"
    value = {
      this.state.mail
    }
    name = "email"
    onChange = {
      event => this.handleUserInput(event)
    }
    onBlur = {
      this.notify
    }
    onFocus = {
      this.validation
    }
    /> < /
    div > <
      /div> <
    div class = "form-group row" >
      <
      label
    for = "inputPassword3"
    class = "col-sm-2 col-form-label" >
      Password <
      /label> <
    div class = "col-sm-10" >
      <
      input type = "password"
    class = "form-control"
    id = "inputPassword"
    placeholder = "Password"
    value = {
      this.state.password
    }
    name = "password"
    onChange = {
      event => this.handleUserInput(event)
    }
    onBlur = {
      this.notify
    }
    onFocus = {
      this.validation
    }
    /> < /
    div > <
      /div> <
    div class = "form-group row" >
      <
      label
    for = "inputPassword3"
    class = "col-sm-2 col-form-label" >
      Password check <
      /label> <
    div class = "col-sm-10" >
      <
      input type = "password"
    class = "form-control"
    id = "inputPassword2"
    placeholder = "Password"
    value = {
      this.state.password
    }
    name = "password2"
    onChange = {
      event => this.handleUserInput(event)
    }
    onBlur = {
      this.notify
    }
    onFocus = {
      this.validation
    }
    /> < /
    div > <
      /div>


    { /* les checkbox et radio ne sont pas en onchange , pas de name et pas de value */ } <
    div class = "form-group row" >
      <
      div class = "col-sm-2" > Hobbies < /div> <
    div class = "col-sm-4" >
      <
      div class = "form-check" >
      <
      div className = "col-1" >
      <
      input class = "form-check-input"
    type = "checkbox"
    id = "Manger" / >
      <
      label class = "form-check-label"
    for = "gridCheck1" >
    Manger
      <
      /label> < /
    div > <
      div className = "col-1" >
      <
      input class = "form-check-input"
    type = "checkbox"
    id = "Dormir" / >
      <
      label class = "form-check-label"
    for = "gridCheck1" >
    Dormir
      <
      /label> < /
    div > <
      div className = "col-1" >
      <
      input class = "form-check-input"
    type = "checkbox"
    id = "Voyager" / >
      <
      label class = "form-check-label"
    for = "gridCheck1" >
    Voyager
      <
      /label> < /
    div > <
      /div> < /
    div > <
      div class = "col-sm-2" > Sport < /div> <
    div class = "col-sm-4" >
      <
      div class = "form-check" >
      <
      div className = "col-1" >
      <
      input class = "form-check-input"
    type = "checkbox"
    id = "Hockey" / >
      <
      label class = "form-check-label"
    for = "gridCheck1" >
    Hockey
      <
      /label> < /
    div > <
      div className = "col-1" >
      <
      input class = "form-check-input"
    type = "checkbox"
    id = "Rugby" / >
      <
      label class = "form-check-label"
    for = "gridCheck1" >
    Rugby
      <
      /label> < /
    div > <
      div className = "col-1" >
      <
      input class = "form-check-input"
    type = "checkbox"
    id = "Hurling" / >
      <
      label class = "form-check-label"
    for = "gridCheck1" >
    Hurling
      <
      /label> < /
    div > <
      /div> < /
    div > <
      /div> <
    div class = "form-group row" >
      <
      div class = "col-sm-10" >
      <
      button type = "submit"
    class = "btn btn-primary" >
      Sign in
      <
      /button> < /
    div > <
      /div> < /
    form > <
      /div>; < /
    div >
  }
}

export default Formulaire;