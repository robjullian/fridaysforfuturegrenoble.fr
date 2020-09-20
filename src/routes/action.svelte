<script>
  import { form, send } from '../assets/js/action.js'
</script>

<style>
  .fullpage {
  display: flex;
  justify-content: center;
}

a {
  color: #1DA64A;
}

.back {
  position: fixed;
  left: 50px;
  top: 30px;
  color: #1DA64A;
  width: 50px;
  height: 50px;
}

.back .icon {
  font-size: 50px;
}

.form {
  background: transparent;
  color: white;
  margin: 150px;
  border: solid 5px #1DA64A;
  max-width: 550px;
  min-width: 400px;
  padding: 40px;
}

.form h1 {
  margin: 0;
}

@media only screen and (max-width: 700px) {
  .fullpage {
    border: solid 5px #1DA64A;
  }

  .back {
    top: 0px;
    left: 20px;
    position: absolute !important;
  }

  .form {
    top: unset; left: unset;
    transform: unset;
    position: relative;
    border: none;
    min-width: unset;
    margin-top: 30px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
  }
}
</style>

<div class="fullpage">
  <a href="/" class="back"><i class="icon ion-ios-arrow-round-back"></i></a>
  <div class="form">
    <h1>Les inscriptions sont fermé :c</h1><br>
    <p>Si vous voulez tout de même rejoindre l'action, n'oubliez pas de regarder nos réseaux sociaux !</p>
  </div>
</div>