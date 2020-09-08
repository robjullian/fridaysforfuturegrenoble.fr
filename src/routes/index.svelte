<style>
.home {
  background: linear-gradient(rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.95)), url(/img/bg.jpg) center fixed;
  background-size: cover;
  display: flex;
	flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

@media only screen and (max-width: 700px) {
  .home .text {
    border: none !important;
  }
}

.home img {
  max-width: 100%;
  height: auto;
}

.home .logo {
	width: 25vw;
  min-width: 300px;
	padding: 20px;
}

.home .text {
  background: transparent;
  color: white;
  padding: 0px;
  border: solid 5px #1DA64A;
  max-width: 550px;
  min-width: 400px;
}

.home .text .title {
  font-weight: bolder;
  color: white;
  padding: 40px;
  font-size: 40px;
  text-align: left;
  line-height: 34px;
  padding-bottom: 0;
  margin: 0;
}

.home .text .subtitle {
  font-weight: inherit;
  color: white;
  padding-left: 42px;
  font-size: 15px;
  text-align: left;
  line-height: 34px;
  font-style: italic;
  margin: 0;
}

.home h1 {
	margin-top: 0;
}

.linkslist > * {
	display: inline-block;
	margin: 5px 30px;
}

.social {
  text-decoration: none;
  font-size: 40px;
}

.social.twitter {
  color: white;
  transition-duration: .2s;
}

.social.twitter:hover {
  color: #00acee;
}

.social.instagram {
  color: white;
  transition-duration: .2s;
}

.social.instagram:hover {
  color: #fb3958;
}

.social.facebook {
  color: white;
  transition-duration: .2s;
}

.social.facebook:hover {
  color: #3C5A99;
}
</style>
<section class="fullpage home">
  <img src="img/logo.png" class="logo" alt="logo">
  <div class="text">
    <h1 class="title">FRIDAYS<br>FOR FUTURE<br><span class="green">GRENOBLE</span></h1>
    <p class="subtitle">Nous sommes l'avenir d'un monde à l'agonie</p>
    <br>
    <div class="center">
      <div class="separator">Liens utile</div>

      <a href="https://discord.gg/yzQjqY5" target="_blank">Notre Discord</a> <span class="green">/</span> <a href="https://youthforclimate.fr/qui-sommes-nous/charte-de-grenoble/" target="_blank">Nos valeurs</a>

      <div class="separator">Actions</div>

      <a href="/action">Inscription 25 Septembre</a> 

      <div class="separator">Réseaux sociaux</div>
      <div class="linkslist">
        <a href="https://www.instagram.com/fff.grenoble/" target="_blank" class="social instagram"><i class="icon ion-logo-instagram"></i></a>
        <a href="https://twitter.com/fff_grenoble" target="_blank" class="social twitter"><i class="icon ion-logo-twitter"></i></a>
        <a href="https://www.facebook.com/FridaysForFutureGrenoble/" target="_blank" class="social facebook"><i class="icon ion-logo-facebook"></i></a>  
      </div>
      <br>
    </div>
  </div>
</section>