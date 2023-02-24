import React from 'react';
import './App.css';

const App = () => {
  return (
    <div class="container">   
    <div class="row">
      <div class="col-md-6 offset-md-3">
      
        <form action="" class="Signup">
          <h3>Formulaire d'inscription</h3>
          <div class="form-group">
              <label for="name">Nom</label>
            <input type="text" class="form-control" placeholder=" Nom" name="nom" required/>
          </div>
          <div class="form-group">
              <label for="email">Email</label>
            <input type="text" class="form-control" placeholder="Enter Email" name="email" required/>
          </div>      
          <div class="form-group">
              <label for="psw">Mot de pass</label>
            <input type="password" class="form-control" placeholder="Entrer mot de passe" name="psw" required/> 
          </div>   
          <div class="form-group">
            <label for="psw-repeat">Repeter mot de pass</label>
            <input type="password" class="form-control" placeholder="Repeat Password" name="psw-repeat" required/>
          </div>
          <div class="form-group">
            <label>Photo de profile</label>
            <input type="file" id="Profile-pic" name="channel-img" class="form-control"/>
            <label for="Profile-pic" class="choose-icon"><i class="fa fa-camera" aria-hidden="true"></i></label>
          </div>
          <div class="form-group">
            <label class="term-policy"><input type="checkbox"/> Crée le compte en acceptant nos conditions d'utilisations  <a href="#">Terms & Privacy</a>.</label>
          </div>
          <button type="submit" class="btn btn-success">Signup</button>
          <label><input type="checkbox" checked="checked" name="remember"/> Remember me</label>
          <hr/>
          <div class="form-group">
            <p class="not-yet">Already have an account? <a href="#">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default App;