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

ul {
  list-style-type: none;
  padding-left: 5px;
}

.list {
  list-style-type: disc !important;
  padding-left: 25px;
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

.form hr {
  width: 60%;
  margin-top: 40px;
  margin-bottom: 40px;
}

.input {
  margin-top: 20px;
}

.input input[type=text] {
  margin-top: 5px;
  padding: 8px;
  background-color: transparent;
  border: 3px solid white;
  color: white;
  height: 40px;
  width: 60%;
}

.validate {
  text-align: center;
  display: block;
  margin-top: 45px;
  padding: 8px;
  background-color: transparent;
  border: 3px solid #1DA64A;
  color: white;
  width: 60%;
  transition-duration: .3s;
}

.validate:hover {
  background-color: #1DA64A;
}

.opt {
  color: gray;
  margin-left: 5px;
  font-size: 14px;
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

  .input input[type=text] {
    width: 100%;
  }

  .validate {
    width: 100%;
  }
}
</style>

<div class="fullpage">
  <a href="/" class="back"><i class="icon ion-ios-arrow-round-back"></i></a>
  <div class="form">
    <h1>[NOTRE AVENIR, NOS DÉCISIONS]</h1>
    <p>Le 25 septembre aura lieu une journée internationale d'action, à cette occasion nous organisons une action de désobéissance civile !</p>
    <p>Après la pandémie de  covid-19, il est nécessaire de changer notre manière de voir le monde et de l'organiser, de cesser d'encourager des décisions motivées uniquement par des préoccupations économiques, pour enfin prendre en compte notre vulnérabilité face aux crises à venir.</p>
    <p>Pour rappel l'inscription est OBLIGATOIRE pour pouvoir participer à l'action</p>
    <p>⚠️ Fermeture des inscriptions dimanche 20 septembre à 23h59</p><br>
    <p>Voici quelques informations utiles :</p>
    <ul class="list">
      <li>L'action aura lieu le vendredi 25 septembre après-midi</li><br>
      <li>Ce n'est pas un jeu, il s'agit d'une action <strong>illégale</strong>, qui, par conséquent comporte certains risques. Nous faisons cela parce que c'est NÉCESSAIRE et non pas pour nous amuser ou simplement sécher les cours</li><br>
      <li>La veille de l'action, nous t'enverrons un SMS pour te communiquer le lieu et l'heure de RDV pour un BRIEFING</li><br>
      <li>Il y aura donc un briefing où tout te sera expliqué (heure de l'action, attitude à adopter, ect)</li><br>
      <li>Lors du briefing - le jour même - on t'expliqueras tout les aboutissants de l'action à savoir : comment réagir en cas de présence policière, la notion de non-violence</li><br>
      <li>L'action, bien qu'illégale sera non-violente (sauf cas de légitime défense, tout sera détaillé lors du briefing) conformément à nos <a href="https://youthforclimate.fr/qui-sommes-nous/charte-de-grenoble/">valeurs et principes</a></li>
    </ul>

    <hr>

    <div class="input">
      <label for="username">Ton prénom et initiale de ton nom de famille (ou pseudo si tu souhaites assurer ta défense juridique seul)*</label><br>
      <input type="text" name="username" bind:value={form.username}>
    </div>
    <br>

    <div class="input">
      <label for="phone">Numéro de téléphone* <span class="opt">(pour te communiquer le lieu et l'heure du briefing)</span></label><br>
      <input type="text" name="phone" bind:value={form.phone}>
    </div>
    <br>

    <div class="input">
      <label for="alreadyBePart">As tu déjà participé à une action de désobéissance civile ?*</label><br>
      <ul>
        <li>
          <input type="radio" name="alreadyBePartSelector" bind:group={form.alreadyBePart} value={'oui'} />
          <label for="alreadyBePartSelector">Oui</label>
        </li>
        <li>
          <input type="radio" name="alreadyBePartSelector" bind:group={form.alreadyBePart} value={'non'} />
          <label for="alreadyBePartSelector">Non</label>
        </li>
      </ul>
    </div>
    <br>

    <div class="input">
      <label for="emergencyPhone">Numéro de téléphone d'un proche en cas d'urgence*</label><br>
      <input type="text" name="emergencyPhone" bind:value={form.emergencyPhone}>
    </div>
    <br>

    <div class="input">
      <label for="formed">Quel âge auras-tu le 25 septembre ?</label><br>
      <ul>
        <li>
          <input type="radio" name="ageSelector" bind:group={form.age} value={'-16'} />
          <label for="ageSelector">- de 16 ans</label>
        </li>
        <li>
          <input type="radio" name="ageSelector" bind:group={form.age} value={'16-18'} />
          <label for="ageSelector">16 à 18 ans</label>
        </li>
        <li>
          <input type="radio" name="ageSelector" bind:group={form.age} value={'+18'} />
          <label for="ageSelector">+ de 18 ans</label>
        </li>
      </ul>
    </div>
    <br>

    <div class="input">
      <label for="formed">As-tu été formé-e à la désobéissance civile ?*</label><br>
      <ul>
        <li>
          <input type="radio" name="alreadyTrainedSelector" bind:group={form.alreadyTrained} value={'oui'} />
          <label for="alreadyTrainedSelector">oui</label>
        </li>
        <li>
          <input type="radio" name="alreadyTrainedSelector" bind:group={form.alreadyTrained} value={'non'} />
          <label for="alreadyTrainedSelector">non</label>
        </li>
      </ul>
    </div>
    <br>

    <div class="input">
      <label for="risk">Quel niveau de risque juridique es-tu prêt-es à prendre lors de l'action ?* <span class="opt">(⚠️ Un seul choix possible)</span></label><br>
      <ul>
        <li>
          <input type="radio" name="riskSelector" bind:group={form.risk} value={'Faible'} />
          <label for="riskSelector">Faible <span class="opt">simple contrôle d'identité au maximum.</span></label>
        </li>
        <li>
          <input type="radio" name="riskSelector" bind:group={form.risk} value={'Moyen'} />
          <label for="riskSelector">Moyen <span class="opt">garde à vue possible, même si peu probable.</span></label>
        </li>
        <li>
          <input type="radio" name="riskSelector" bind:group={form.risk} value={'Fort'} />
          <label for="riskSelector">Élevé <span class="opt">garde à vue possible et risque de procès</span></label>
        </li>
      </ul>
    </div>
    <br>

    <div class="input">
      <label for="roles">Rôles <span class="opt">pour le bon déroulement de l'action des rôles seront distribués, choisis ceux que tu penses pouvoir faire</span></label><br>
      <ul>
        <li>
          <input type="checkbox" name="roleMedic" bind:group={form.roles} value={'Medic'} />
          <label for="roleMedic">Street Medic <span class="opt">une personne formée au millieu médical pour aider en cas de problèmes sur le lieux de l'action</span></label>
        </li>
        <li>
          <input type="checkbox" name="roleMedia" bind:group={form.roles} value={'Mediactivist'} />
          <label for="roleMedic">Mediactiviste <span class="opt">s'occupe de prendre des photos et des vidéos pour y remonter a l'équipe de communication</span></label>
        </li>
        <li>
          <input type="checkbox" name="rolePK" bind:group={form.roles} value={'Peace Keeper'} />
          <label for="roleMedic">Peace keeper <span class="opt">le but du peace keeper est d'expliquer et rassurer les passant.es, employé.e.s, etc</span></label>
        </li>
        <li>
          <input type="checkbox" name="roleSimple" bind:group={form.roles} value={'Simple participant-e'} />
          <label for="roleMedic">Participant-e/Activiste <span class="opt">participe a l'action, aide sur le terrain</span></label>
        </li>
      </ul>
    </div>
    <br>

    <div class="input">
      <label for="medicsProblems">Des problèmes médicaux/remarques à nous signaler ?</label><br>
      <input type="text" name="medicsProblems" bind:value={form.medicsProblems}>
    </div>
    <br>

    <p>Voilà il ne te reste plus qu'à valider le formulaire ! Si tu as des questions tu peux nous contacter via notre adresse mail <a href="mailto:fffgrenoble@riseup.net">fffgrenoble@riseup.net</a> ou sur les réseaux sociaux.</p>
  
    <a href="#" on:click={send} class="validate">Envoyer</a>
  </div>
</div>