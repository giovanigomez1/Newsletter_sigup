const form = document.querySelector('.signup__intro-form')
const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const input = form.querySelector('.signup__intro-form--input-field')
const errMgs = form.querySelector('.signup__intro-form--input-title_err')
const success = document.querySelector('.signup__success')
const successEmail = document.querySelector('.success--container--email')
const dismissMsg = document.querySelector('.success--container--btn')


const clean = () => {
  errMgs.classList.add('hidden')
  input.classList.remove('inputText')
  input.style.backgroundColor = 'hsl(0, 0%, 100%)'
  input.style.border = '1px solid hsl(231, 7%, 60%)'
  input.style.color = 'hsl(234, 29%, 20%)'
}

const timer = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res(clean())
    }, 1000)
  })
}


form.addEventListener('submit', async function(e) {
  e.preventDefault()
  if(input.value === '' || !validEmail.test(input.value)) {
    errMgs.classList.remove('hidden')
    input.style.backgroundColor = 'hsla(4, 100%, 67%, 0.247)'
    input.style.border = '1px solid hsl(4, 100%, 67%)'
    input.classList.add('inputText')
    input.style.color = 'hsl(4, 100%, 67%)'
  } else {
    await timer()
    successEmail.textContent = input.value
    success.classList.remove('hidden')
  }
})


dismissMsg.addEventListener('click', function() {
  input.value = ''
  success.classList.add('hidden')
})