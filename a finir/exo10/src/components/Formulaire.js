import React, { Component } from "react";
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
      password2:"",
      hobbies: "",
      sports: ""
    };
    this.handleUserInput=this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  render() {
    return <div className="container">
        <form>
          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-2 pt-0">Sexe</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="sexe" id="sexe1" value="option1" checked />
                  <label class="form-check-label" for="sexe1">
                    Homme
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="sexe" id="sexe2" value="option2" />
                  <label class="form-check-label" for="sexe2">
                    Femme
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="sexe" id="sexe3" value="option3" />
                  <label class="form-check-label" for="sexe3">
                    Autre
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">
              Name
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="name" placeholder="" value={this.state.name} name="name" onChange={event => this.handleUserInput(event)} />
            </div>
          </div>
          <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">
              Age
            </label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="age" placeholder="" value={this.state.age} name="age" onChange={event => this.handleUserInput(event)} />
            </div>
          </div>
          <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">
              Telephone
            </label>
            <div class="col-sm-10">
              <input type="tel" class="form-control" id="phone" placeholder="" value={this.state.tel} name="tel" onChange={event => this.handleUserInput(event)} />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail" placeholder="mail" value={this.state.mail} name="email" onChange={event => this.handleUserInput(event)} />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword" placeholder="Password" value={this.state.password} name="password" onChange={event => this.handleUserInput(event)} />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Password check
            </label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword2" placeholder="Password" value={this.state.password} name="password2" onChange={event => this.handleUserInput(event)} />
            </div>
          </div>


{/* les checkbox et radio ne sont pas en onchange , pas de name et pas de value */}
          <div class="form-group row">
            <div class="col-sm-2">Hobbies</div>
            <div class="col-sm-4">
              <div class="form-check">
                <div className="col-1">
                  <input class="form-check-input" type="checkbox" id="Manger" />
                  <label class="form-check-label" for="gridCheck1">
                    Manger
                  </label>
                </div>
                <div className="col-1">
                  <input class="form-check-input" type="checkbox" id="Dormir" />
                  <label class="form-check-label" for="gridCheck1">
                    Dormir
                  </label>
                </div>
                <div className="col-1">
                  <input class="form-check-input" type="checkbox" id="Voyager" />
                  <label class="form-check-label" for="gridCheck1">
                    Voyager
                  </label>
                </div>
              </div>
            </div>
            <div class="col-sm-2">Sport</div>
            <div class="col-sm-4">
              <div class="form-check">
                <div className="col-1">
                  <input class="form-check-input" type="checkbox" id="Hockey" />
                  <label class="form-check-label" for="gridCheck1">
                    Hockey
                  </label>
                </div>
                <div className="col-1">
                  <input class="form-check-input" type="checkbox" id="Rugby" />
                  <label class="form-check-label" for="gridCheck1">
                    Rugby
                  </label>
                </div>
                <div className="col-1">
                  <input class="form-check-input" type="checkbox" id="Hurling" />
                  <label class="form-check-label" for="gridCheck1">
                    Hurling
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>;
  }
}

export default Formulaire;
