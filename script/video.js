
const jsonData = [
    {
        "imageSrc": "assets/video/Comment créer une Entreprise individuelle au Sénégal.mp4",
        "ribbonText": "Free",
        "badges": [
            {"text": "Design", "color": "primary"},
            {"text": "Beginner", "color": "dark"}
        ],
        "title": "Comment créer une Entreprise individuelle au Sénégal",
        "rating": {"value": 4.5, "count": 6500},
        "time": {"duration": "6h 56m", "lectures": 82},
        "user": {"avatarSrc": "assets/images/avatar/10.jpg", "name": "Larry Lawson"},
        "price": "4000 FCFA"
    },
    {
        "imageSrc": "assets/video/Comment vendre vos produits en ligne au Sénégal - e-Commerce - jëf jël.mp4",
        "badges": [
            {"text": "Development", "color": "primary"},
            {"text": "All level", "color": "dark"}
        ],
        "title": "Comment vendre vos produits en ligne au Sénégal",
        "rating": {"value": 4.0, "count": 3500},
        "time": {"duration": "12h 45m", "lectures": 65},
        "user": {"avatarSrc": "assets/images/avatar/04.jpg", "name": "Billy Vasquez"},
        "price": "Gratuit"
    },
    {
        "imageSrc": "assets/video/Comment créer une Entreprise individuelle au Sénégal.mp4",
        "badges": [
            {"text": "Design", "color": "primary"},
            {"text": "Beginner", "color": "dark"}
        ],
        "title": "Comment créer une Entreprise individuelle au Sénégal",
        "rating": {"value": 4.5, "count": 2000},
        "time": {"duration": "24h 56m", "lectures": 55},
        "user": {"avatarSrc": "assets/images/avatar/09.jpg", "name": "Lori Stevens"},
        "price": "3000 FCFA"
    },
    {
        "imageSrc": "assets/video/Comment vendre vos produits en ligne au Sénégal - e-Commerce - jëf jël.mp4",
        "badges": [
            {"text": "Design", "color": "primary"},
            {"text": "Beginner", "color": "dark"}
        ],
        "title": "Comment vendre vos produits en ligne au Sénégal",
        "rating": {"value": 4.0, "count": 1200},
        "time": {"duration": "09h 56m", "lectures": 21},
        "user": {"avatarSrc": "assets/images/avatar/01.jpg", "name": "Frances Guerrero"},
        "price": "2000 FCFA"
    }
]


const container = document.querySelector('.tiny-slider-inner');

for (const data of jsonData) {
    const cardDiv = document.createElement('div');
    cardDiv.innerHTML = `
    <div class="card action-trigger-hover border bg-transparent">
        <video width="680" height="320" controls>
        <source class="card-img-top"  src="${data.imageSrc}"  type="video/mp4">
        <!-- Si le navigateur ne supporte pas le format MP4 -->
        Votre navigateur ne supporte pas la lecture de cette vidéo.
        </video>
        
      ${data.ribbonText ? `<div class="ribbon mt-3"><span>${data.ribbonText}</span></div>` : ''}
      <div class="card-body pb-0">
        <div class="d-flex justify-content-between  pe-5 mb-3">
             <div class="d-flex ">
            <div><a href="#" class="badge bg-${data.badges[0].color} bg-opacity-10 text-primary !important">${data.badges[0].text}</a></div>
            <div class="mx-2"><a href="#" class="badge text-bg-dark  !important">${data.badges[1].text}</a></div>
            </div>
          <a href="#" class="h6 fw-light mb-0"><i class="far fa-bookmark"></i></a>
        </div>
        <h5 class="card-title"><a href="#">${data.title}</a></h5>
        <div class="d-flex justify-content-between mb-2">
          <div class="hstack gap-2">
            <p class="text-warning m-0">${data.rating.value}<i class="fas fa-star text-warning ms-1"></i></p>
            <span class="small">(${data.rating.count})</span>
          </div>
          <div class="hstack gap-2">
            <p class="h6 fw-light mb-0 m-0">${data.rating.count}</p>
            <span class="small">(Student)</span>
          </div>
        </div>
        <div class="hstack gap-3">
          <span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>${data.time.duration}</span>
          <span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>${data.time.lectures} lectures</span>
        </div>
      </div>
      <div class="card-footer pt-0 bg-transparent">
        <hr>
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <div class="avatar avatar-sm">
              <img class="avatar-img rounded-1" src="${data.user.avatarSrc}" alt="avatar">
            </div>
            <p class="mb-0 ms-2"><a href="#" class="h6 fw-light mb-0">${data.user.name}</a></p>
          </div>
          <div>
            <h4 class="text-success mb-0 item-show">${data.price}</h4>
            <a href="#" class="btn btn-sm btn-success-soft item-show-hover"><i class="fas fa-shopping-cart me-2"></i>Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  `;
    container.appendChild(cardDiv);
}


