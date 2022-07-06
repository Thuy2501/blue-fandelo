var postsApi = 'https://test.fandelo.com/api/portal/fan/home'
var datalocal = localStorage.getItem('eko-user')
var checklocal = JSON.parse(datalocal).access_token

console.log(checklocal)
//fandelo123@
axios
  .post(
    postsApi, "", {
    headers: {
      Authorization: `token ${datalocal.access_token}`
    }
  })
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.error(error)
  })