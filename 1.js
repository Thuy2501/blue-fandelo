var postsApi = 'https://test.fandelo.com/api/portal/fan/home'
var datalocal = localStorage.getItem('eko-user')
var checklocal = JSON.parse(datalocal).responseData.access_token
var pageIndex = 1
var loadBtn = document.querySelector('.btn-load')
var listData = []
;[...checklocal, ...checklocal]
const handleGetData = (loadmore) => {
  fetch(postsApi, {
    method: '0',
    body: JSON.stringify({
      status: 0,
      pageSize: 50,
      pageIndex: loadmore ? pageIndex++ : 1
    }),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${checklocal}`
    }
  })
    .then((response) => response.json())
    .then((listpost) => {
      listData = [...listData, ...listpost.responseData.data]
      var htmls = listData.map((post) => {
        const dateObject = new Date(post.createdDate)
        const humanDateFormat =
          dateObject.getDate() +
          ' ' +
          String(dateObject.getMonth() + 1) +
          ' ' +
          dateObject.getFullYear()
        return `
                <div class="brick list_post" key=${post.id}>
                <img src=${post.thumbnail.cdnLarge || post.thumbnail.cdnOrigin}>
                <div class="list_post1">
                <h4>${post.talent.displayName}</h4>
                <div class="list_post2">
                <span><i class="fa-solid fa-clock"></i> ${humanDateFormat}</span>
                <span class="${
                  post.location ? '' : 'item-location'
                }"><i class="fa-solid fa-location-dot"></i> ${
          post?.location
        }</span>
                </div>
                <h2>${post.title}</h2>
                <a href=${post.link}>${post?.link?.substr(9, 10)}</a>
                </div>  
                <div class="list_posts">
                     <div class="list-button list-posts-left">
                     <div class="list-icon icon-btn">
                     <span class="data-title">${moment(
                       dateObject
                     ).fromNow()}</span> 
                        </div>
                     </div>
                     <div class="list-button list-posts-right">
                     <div class="list-icon">
                     <span class="bt active-icon"><i class="fa-solid fa-heart"></i> ${
                       post.totalComment
                     }</span>
                     <span class="bt active-icon"><i class="fa-solid fa-comment"></i> ${
                       post.totalEmotion.totalLove
                     }</span>
                  </div>
                     </div>
                  </div>
                  </div>
                `
      })
      var html = htmls.join('')
      document.querySelector('.masonry').innerHTML = html
    })
    .catch((err) => console.error('error processing'))
}
handleGetData()
loadBtn.addEventListener('click', () => {
  handleGetData(true)
})
