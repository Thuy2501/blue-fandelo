const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const errorMsg = document.getElementsByClassName('error')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInputs()
})

function checkInputs() {
  // trim to remove the whitespaces
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()

  //check email
  if (emailValue === '') {
    setErrorFor(email,0, 'Email cannot be blank')
  } else if (!isEmail(emailValue)) {
    setErrorFor(email,0, 'Not a valid email')
  }

  //check password
  if (passwordValue === '') {
    setErrorFor(password,1, 'Password cannot be blank')
  } else if (!isPassword(passwordValue)) {
    setErrorFor(
      password,
      1,
      'Password must be at least 8 characters and include a mix of uppercase letters, lowercase letters and numbers'
    )
  } 

  axios
    .post('https://test.fandelo.com/api/portal/app/login', {
      username: emailValue,
      password: passwordValue
    })
    .then((res) => {
      const data = res.data.responseData
      if (data) {
        localStorage.setItem('eko-user', JSON.stringify(data))
        window.location.href = '../index.html'
      } else {
        alert(res.data.error.message)
      }
    })
    .then()
    .catch((error) => console.log(error))
}


function setErrorFor(input,serial, message) {
  errorMsg[serial].innerHTML = message
  input.style.border = '1px solid red'
}

function setSuccessFor(input, serial, message) {
  errorMsg[serial].innerHTML = message
  input.style.border = '1px solid green'
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}

function isPassword(password) {
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/.test(password)
}