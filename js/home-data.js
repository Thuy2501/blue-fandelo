$(document).ready(function (e) {
  jsonObject.products.forEach((i) => loadProducts(i))
})

function loadProducts(data) {
  var div = document.createElement('div')

    div.innerHTML = `
      <figure class="card bg-light mb-3 mx-1 bg-body border-0">
        <img class="rounded-top" src="${data.image}" alt="Sunset and boats" />
        <div class="card-body pt-2 pb-4">
          <h6 class="card-title text-uppercase ">${data.title}</h6>
          <div class="d-flex">
            <div class="d-flex align-items-center pe-3">
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 0C4.81331 0 3.65328 0.351894 2.66658 1.01118C1.67989 1.67047 0.910851 2.60754 0.456725 3.7039C0.00259973 4.80025 -0.11622 6.00665 0.115291 7.17054C0.346802 8.33443 0.918247 9.40352 1.75736 10.2426C2.59648 11.0818 3.66557 11.6532 4.82946 11.8847C5.99335 12.1162 7.19974 11.9974 8.2961 11.5433C9.39246 11.0891 10.3295 10.3201 10.9888 9.33342C11.6481 8.34673 12 7.18669 12 6C11.9981 4.40928 11.3654 2.88424 10.2406 1.75943C9.11576 0.63462 7.59072 0.00187662 6 0V0ZM8.022 8.022C7.91971 8.12426 7.781 8.1817 7.63636 8.1817C7.49173 8.1817 7.35302 8.12426 7.25073 8.022L5.61436 6.38564C5.51207 6.28337 5.45458 6.14465 5.45455 6V2.72727C5.45455 2.58261 5.51201 2.44387 5.61431 2.34158C5.7166 2.23929 5.85534 2.18182 6 2.18182C6.14466 2.18182 6.2834 2.23929 6.3857 2.34158C6.48799 2.44387 6.54546 2.58261 6.54546 2.72727V5.77418L8.022 7.25073C8.12426 7.35301 8.1817 7.49173 8.1817 7.63636C8.1817 7.781 8.12426 7.91971 8.022 8.022V8.022Z"
                  fill="#C6C6CF" />
              </svg>
              <span class="ps-1">${data.date.time}</span>
            </div>
            <div class="d-flex align-items-center">
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.55261 2.05464C7.82433 0.797824 6.53077 0.0299878 5.09229 0.000644043C5.03089 -0.000621582 4.96908 -0.000621582 4.90765 0.000644043C3.4692 0.0299878 2.17564 0.797824 1.44734 2.05464C0.702919 3.33929 0.682552 4.88242 1.39285 6.18252L4.36854 11.6291C4.36988 11.6315 4.37122 11.6339 4.3726 11.6363C4.50352 11.8639 4.73806 11.9997 5.00002 11.9997C5.26196 11.9997 5.4965 11.8638 5.6274 11.6363C5.62878 11.6339 5.63011 11.6315 5.63145 11.6291L8.60715 6.18252C9.3174 4.88242 9.29703 3.33929 8.55261 2.05464ZM4.99997 5.43721C4.06948 5.43721 3.31247 4.6802 3.31247 3.74971C3.31247 2.81921 4.06948 2.06221 4.99997 2.06221C5.93047 2.06221 6.68747 2.81921 6.68747 3.74971C6.68747 4.6802 5.93049 5.43721 4.99997 5.43721Z"
                  fill="#C6C6CF" />
              </svg>
              <span class="ps-1">${data.lotification.map}</span>
            </div>
          </div>
          <h5 class="card-title">${data.description}</h5>
        </div>
        <div class="card-footer bg-light d-flex">
          <div>
           <span class="text-black-50 fw-semibold">${
             data.timeold ? data.timeold : ''
           }</span>
            <span class="badge border border-dark-50 text-dark p-2 text-uppercase">tickets</span>
          </div>
          <div class="ms-auto align-items-center">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 14.5L5.985 13.4929C2.38 9.92998 0 7.58011 0 4.69618C0 2.34632 1.694 0.5 3.85 0.5C5.068 0.5 6.237 1.11798 7 2.09455C7.763 1.11798 8.932 0.5 10.15 0.5C12.306 0.5 14 2.34632 14 4.69618C14 7.5801 11.62 9.92997 8.015 13.5005L7 14.5Z"
                fill="#C6C6CF" />
            </svg>
            <span class="ps-1">100</span>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.03836 14.5H1.04638L1.74782 13.7033C2.12602 13.2738 2.3622 12.7151 2.42569 12.109C0.806073 10.9018 0 9.15304 0 7.31964C0 3.93729 2.7371 0.5 7.02372 0.5C11.5649 0.5 14 3.66294 14 7.02331C14 10.4058 11.5392 13.5667 7.02372 13.5667C6.23272 13.5667 5.40731 13.4467 4.67038 13.2267C3.97278 14.0393 3.02759 14.5 2.03835 14.5L2.03836 14.5Z"
                fill="#C6C6CF" />
            </svg>
            <span class="ps-1 ">21</span>
          </div>
      </figure>
        `
  document.getElementById('home_product').appendChild(div)
}