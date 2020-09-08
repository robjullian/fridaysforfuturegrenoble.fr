import { goto } from '@sapper/app'
  
export const form = {
  username: '', //*
  phone: '', //*
  alreadyBePart: '', //*
  emergencyPhone: '', //*
  age: '',
  alreadyTrained: '', //*
  roles: [],
  risk: '', //*
  medicsProblems: ''
}

//const API_ENDPOINT = 'https://api.fridaysforfuturegrenoble.fr'
const API_ENDPOINT = 'http://localhost:4500'

const v = (s) => {
  return s !== ''
}

export const send = () => {
  console.log(form)
  if (v(form.username) || v(form.phone) && v(form.alreadyBePart) && v(form.emergencyPhone) && v(form.alreadyTrained) && v(form.risk)) {
    fetch(`${API_ENDPOINT}/submit`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(res => {
      if (!res.success) {
        alert(res.message)
      } else {
        alert('Le formulaire a bien été validé ! Merci et a bientôt !')
        goto('/')
      }
    })
    .catch(e => console.log(e))
  } else {
    alert('Veuillez remplire les champs obligatoir !')
  }
}