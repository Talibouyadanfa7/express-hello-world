function changeContent(page) {
    // Récupérer le conteneur du contenu principal
    var mainContent = document.getElementById('main_content');

    // Effacer le contenu actuel
    mainContent.innerHTML = '';

    // Charger le nouveau contenu en fonction de la page cliquée
    switch (page) {
        case 'Cours Video':
            mainContent.innerHTML = '\t\t\t\t<div class="card bg-transparent border rounded-3">\n' +
                '\t\t\t\t\t<!-- Card header START -->\n' +
                '\t\t\t\t\t<div class="card-header bg-transparent border-bottom">\n' +
                '\t\t\t\t\t\t<h3 class="mb-0">Tous les cours</h3>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t<!-- Card header END -->\n' +
                '\n' +
                '\t\t\t\t\t<!-- Card body START -->\n' +
                '\t\t\t\t\t<div class="card-body">\n' +
                '\n' +
                '\t\t\t\t\t\t<!-- Search and select START -->\n' +
                '\t\t\t\t\t\t<div class="row g-3 align-items-center justify-content-between mb-4">\n' +
                '\t\t\t\t\t\t\t<!-- Content -->\n' +
                '\t\t\t\t\t\t\t<div class="col-md-7">\n' +
                '\t\t\t\t\t\t\t\t<form class="rounded position-relative">\n' +
                '\t\t\t\t\t\t\t\t\t<input class="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search">\n' +
                '\t\t\t\t\t\t\t\t\t<button class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">\n' +
                '\t\t\t\t\t\t\t\t<i class="fas fa-search fs-6 "></i>\n' +
                '\t\t\t\t\t\t\t</button>\n' +
                '\t\t\t\t\t\t\t\t</form>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<div class="col-md-1">\n' +

                '\t\t\t\t\t\t\t\t\t<a href="admin-create-course" class="btn btn-success-soft mb-2 mb-sm-0">Ajouter un Cours</a>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Select option -->\n' +
                '\t\t\t\t\t\t\t<div class="col-md-3">\n' +
                '\t\t\t\t\t\t\t\t<!-- Short by filter -->\n' +
                '\t\t\t\t\t\t\t\t<form>\n' +
                '\t\t\t\t\t\t\t\t\t<select class="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm">\n' +
                '\t\t\t\t\t\t\t\t\t\t<option value="">Sort by</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t<option>Free</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t<option>Newest</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t<option>Most popular</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t<option>Most Viewed</option>\n' +
                '\t\t\t\t\t\t\t\t\t</select>\n' +
                '\t\t\t\t\t\t\t\t</form>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Search and select END -->\n' +
                '\n' +
                '\t\t\t\t\t\t<!-- Course list table START -->\n' +
                '\t\t\t\t\t\t<div class="table-responsive border-0">\n' +
                '\t\t\t\t\t\t\t<table class="table table-dark-gray align-middle p-4 mb-0 table-hover">\n' +
                '\t\t\t\t\t\t\t\t<!-- Table head -->\n' +
                '\t\t\t\t\t\t\t\t<thead>\n' +
                '\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0 rounded-start">Course Title</th>\n' +
                '\t\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0">Total Lectures</th>\n' +
                '\t\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0">Completed Lecture</th>\n' +
                '\t\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0 rounded-end">Action</th>\n' +
                '\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\t\t\t\t\t\t\t\t</thead>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t<!-- Table body START -->\n' +
                '\t\t\t\t\t\t\t\t<tbody>\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table item -->\n' +
                '\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Image -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="w-100px">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="assets/images/courses/4by3/08.jpg" class="rounded" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="mb-0 ms-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Title -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<h6><a href="#">Building Scalable APIs with GraphQL</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 text-end">85%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>56</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>40</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0"><i class="bi bi-play-circle me-1"></i>Continue</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table item -->\n' +
                '\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Image -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="w-100px">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="assets/images/courses/4by3/03.jpg" class="rounded" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="mb-0 ms-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Title -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<h6><a href="#">Create a Design System in Figma</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 text-end">100%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>42</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>42</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<button class="btn btn-sm btn-success me-1 mb-1 mb-x;-0 disabled"><i class="bi bi-check me-1"></i>Complete</button>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-light me-1"><i class="bi bi-arrow-repeat me-1"></i>Restart</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table item -->\n' +
                '\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Image -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="w-100px">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="assets/images/courses/4by3/05.jpg" class="rounded" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="mb-0 ms-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Title -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<h6><a href="#">The Complete Web Development in python</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 text-end">60%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>28</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>12</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0"><i class="bi bi-play-circle me-1"></i>Continue</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table item -->\n' +
                '\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Image -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="w-100px">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="assets/images/courses/4by3/01.jpg" class="rounded" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="mb-0 ms-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Title -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<h6><a href="#">Digital Marketing Masterclass</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 text-end">40%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>32</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>18</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0"><i class="bi bi-play-circle me-1"></i>Continue</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table item -->\n' +
                '\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Image -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="w-100px">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="assets/images/courses/4by3/02.jpg" class="rounded" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="mb-0 ms-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Title -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<h6><a href="#">Graphic Design Masterclass</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 text-end">90%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>16</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>14</td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0"><i class="bi bi-play-circle me-1"></i>Continue</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\t\t\t\t\t\t\t\t</tbody>\n' +
                '\t\t\t\t\t\t\t\t<!-- Table body END -->\n' +
                '\t\t\t\t\t\t\t</table>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Course list table END -->\n' +
                '\n' +
                '\t\t\t\t\t\t<!-- Pagination START -->\n' +
                '\t\t\t\t\t\t<div class="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">\n' +
                '\t\t\t\t\t\t\t<!-- Content -->\n' +
                '\t\t\t\t\t\t\t<p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>\n' +
                '\t\t\t\t\t\t\t<!-- Pagination -->\n' +
                '\t\t\t\t\t\t\t<nav class="d-flex justify-content-center mb-0" aria-label="navigation">\n' +
                '\t\t\t\t\t\t\t\t<ul class="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">\n' +
                '\t\t\t\t\t\t\t\t\t<li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1"><i class="fas fa-angle-left"></i></a></li>\n' +
                '\t\t\t\t\t\t\t\t\t<li class="page-item mb-0"><a class="page-link" href="#">1</a></li>\n' +
                '\t\t\t\t\t\t\t\t\t<li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>\n' +
                '\t\t\t\t\t\t\t\t\t<li class="page-item mb-0"><a class="page-link" href="#">3</a></li>\n' +
                '\t\t\t\t\t\t\t\t\t<li class="page-item mb-0"><a class="page-link" href="#"><i class="fas fa-angle-right"></i></a></li>\n' +
                '\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t</nav>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Pagination END -->\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t<!-- Card body START -->\n' +
                '\t\t\t\t</div>';
            break;
        case 'Dashboard':
            mainContent.innerHTML = '\t<!-- Title -->\n' +
                '\t\t<div class="row">\n' +
                '\t\t\t<div class="col-12 mb-3">\n' +
                '\t\t\t\t<h1 class="h3 mb-2 mb-sm-0">Dashboard</h1>\n' +
                '\t\t\t</div>\n' +
                '\t\t</div>\n' +
                '\n' +
                '\t\t<!-- Counter boxes START -->\n' +
                '\t\t<div class="row g-4 mb-4">\n' +
                '\t\t\t<!-- Counter item -->\n' +
                '\t\t\t<div class="col-md-6 col-xxl-3">\n' +
                '\t\t\t\t<div class="card card-body bg-warning bg-opacity-15 p-4 h-100">\n' +
                '\t\t\t\t\t<div class="d-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t<!-- Digit -->\n' +
                '\t\t\t\t\t\t<div>\n' +
                '\t\t\t\t\t\t\t<h2 class="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="1958" data-purecounter-delay="200">0</h2>\n' +
                '\t\t\t\t\t\t\t<span class="mb-0 h6 fw-light">Completed Courses</span>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Icon -->\n' +
                '\t\t\t\t\t\t<div class="icon-lg rounded-circle bg-warning text-white mb-0"><i class="fas fa-tv fa-fw"></i></div>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t</div>\n' +
                '\n' +
                '\t\t\t<!-- Counter item -->\n' +
                '\t\t\t<div class="col-md-6 col-xxl-3">\n' +
                '\t\t\t\t<div class="card card-body bg-purple bg-opacity-10 p-4 h-100">\n' +
                '\t\t\t\t\t<div class="d-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t<!-- Digit -->\n' +
                '\t\t\t\t\t\t<div>\n' +
                '\t\t\t\t\t\t\t<h2 class="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="1600"\tdata-purecounter-delay="200">0</h2>\n' +
                '\t\t\t\t\t\t\t<span class="mb-0 h6 fw-light">Enrolled Courses</span>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Icon -->\n' +
                '\t\t\t\t\t\t<div class="icon-lg rounded-circle bg-purple text-white mb-0"><i class="fas fa-user-tie fa-fw"></i></div>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t</div>\n' +
                '\n' +
                '\t\t\t<!-- Counter item -->\n' +
                '\t\t\t<div class="col-md-6 col-xxl-3">\n' +
                '\t\t\t\t<div class="card card-body bg-primary bg-opacity-10 p-4 h-100">\n' +
                '\t\t\t\t\t<div class="d-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t<!-- Digit -->\n' +
                '\t\t\t\t\t\t<div>\n' +
                '\t\t\t\t\t\t\t<h2 class="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="1235"\tdata-purecounter-delay="200">0</h2>\n' +
                '\t\t\t\t\t\t\t<span class="mb-0 h6 fw-light">Course In Progress</span>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Icon -->\n' +
                '\t\t\t\t\t\t<div class="icon-lg rounded-circle bg-primary text-white mb-0"><i class="fas fa-user-graduate fa-fw"></i></div>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t</div>\n' +
                '\n' +
                '\t\t\t<!-- Counter item -->\n' +
                '\t\t\t<div class="col-md-6 col-xxl-3">\n' +
                '\t\t\t\t<div class="card card-body bg-success bg-opacity-10 p-4 h-100">\n' +
                '\t\t\t\t\t<div class="d-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t<!-- Digit -->\n' +
                '\t\t\t\t\t\t<div>\n' +
                '\t\t\t\t\t\t\t<div class="d-flex">\n' +
                '\t\t\t\t\t\t\t\t<h2 class="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="845"\tdata-purecounter-delay="200">0</h2>\n' +
                '\t\t\t\t\t\t\t\t<span class="mb-0 h2 ms-1">hrs</span>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<span class="mb-0 h6 fw-light">Total Watch Time</span>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Icon -->\n' +
                '\t\t\t\t\t\t<div class="icon-lg rounded-circle bg-success text-white mb-0"><i class="bi bi-stopwatch-fill fa-fw"></i></div>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t</div>\n' +
                '\t\t</div>\n' +
                '\t\t<!-- Counter boxes END -->\n' +
                '\n' +
                '\t\t<!-- Chart and Ticket START -->\n' +
                '\t\t<div class="row g-4 mb-4">\n' +
                '\n' +
                '\t\t\t<!-- Chart START -->\n' +
                '\t\t\t<div class="col-xxl-8">\n' +
                '\t\t\t\t<div class="card shadow h-100">\n' +
                '\n' +
                '\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t<div class="card-header p-4 border-bottom">\n' +
                '\t\t\t\t\t\t<h5 class="card-header-title">Earnings</h5>\n' +
                '\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t<!-- Card body -->\n' +
                '\t\t\t\t\t<div class="card-body">\n' +
                '\t\t\t\t\t\t<!-- Apex chart -->\n' +
                '\t\t\t\t\t\t<div id="ChartPayout"></div>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t</div>\n' +
                '\t\t\t<!-- Chart END -->\n' +
                '\n' +
                '\t\t\t<!-- Ticket START -->\n' +
                '\t\t\t<div class="col-xxl-4">\n' +
                '\t\t\t\t<div class="card shadow h-100">\n' +
                '\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t<div class="card-header border-bottom d-flex justify-content-between align-items-center p-4">\n' +
                '\t\t\t\t\t\t<h5 class="card-header-title">Support Requests</h5>\n' +
                '\t\t\t\t\t\t<a href="#" class="btn btn-link p-0 mb-0">View all</a>\n' +
                '\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t<!-- Card body START -->\n' +
                '\t\t\t\t\t<div class="card-body p-4">\n' +
                '\n' +
                '\t\t\t\t\t\t<!-- Ticket item START -->\n' +
                '\t\t\t\t\t\t<div class="d-flex justify-content-between position-relative">\n' +
                '\t\t\t\t\t\t\t<div class="d-sm-flex">\n' +
                '\t\t\t\t\t\t\t\t<!-- Avatar -->\n' +
                '\t\t\t\t\t\t\t\t<div class="avatar avatar-md flex-shrink-0">\n' +
                '\t\t\t\t\t\t\t\t\t<img class="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar">\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-2 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#" class="stretched-link">Lori Stevens</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t<p class="mb-0">New ticket #759 from Lori Stevens for General Enquiry</p>\n' +
                '\t\t\t\t\t\t\t\t\t<span class="small">8 hour ago</span>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Ticket item END -->\n' +
                '\n' +
                '\t\t\t\t\t\t<hr><!-- Divider -->\n' +
                '\n' +
                '\t\t\t\t\t\t<!-- Ticket item START -->\n' +
                '\t\t\t\t\t\t<div class="d-flex justify-content-between position-relative">\n' +
                '\t\t\t\t\t\t\t<div class="d-sm-flex">\n' +
                '\t\t\t\t\t\t\t\t<!-- Avatar -->\n' +
                '\t\t\t\t\t\t\t\t<div class="avatar avatar-md flex-shrink-0">\n' +
                '\t\t\t\t\t\t\t\t\t<div class="avatar-img rounded-circle bg-purple bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t<span class="text-purple position-absolute top-50 start-50 translate-middle fw-bold">DB</span>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-2 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#" class="stretched-link">Dennis Barrett</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t<p class="mb-0">Comment from Billy Vasquez on ticket #659</p>\n' +
                '\t\t\t\t\t\t\t\t\t<span class="small">8 hour ago</span>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Ticket item END -->\n' +
                '\n' +
                '\t\t\t\t\t\t<hr><!-- Divider -->\n' +
                '\n' +
                '\t\t\t\t\t\t<!-- Ticket item START -->\n' +
                '\t\t\t\t\t\t<div class="d-flex justify-content-between position-relative">\n' +
                '\t\t\t\t\t\t\t<div class="d-sm-flex">\n' +
                '\t\t\t\t\t\t\t\t<!-- Avatar -->\n' +
                '\t\t\t\t\t\t\t\t<div class="avatar avatar-md flex-shrink-0">\n' +
                '\t\t\t\t\t\t\t\t\t<div class="avatar-img rounded-circle bg-orange bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t<span class="text-orange position-absolute top-50 start-50 translate-middle fw-bold">WB</span>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-2 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#" class="stretched-link">Dennis Barrett</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t<p class="mb-0"><b>Webestica</b> assign you a new ticket for <b>Eduport theme</b></p>\n' +
                '\t\t\t\t\t\t\t\t\t<span class="small">5 hour ago</span>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Ticket item END -->\n' +
                '\n' +
                '\t\t\t\t\t\t<hr><!-- Divider -->\n' +
                '\n' +
                '\t\t\t\t\t\t<!-- Ticket item START -->\n' +
                '\t\t\t\t\t\t<div class="d-flex justify-content-between position-relative">\n' +
                '\t\t\t\t\t\t\t<div class="d-sm-flex">\n' +
                '\t\t\t\t\t\t\t\t<!-- Avatar -->\n' +
                '\t\t\t\t\t\t\t\t<div class="avatar avatar-md flex-shrink-0">\n' +
                '\t\t\t\t\t\t\t\t\t<img class="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar">\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-2 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#" class="stretched-link">Dennis Barrett</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t<p class="mb-0">Thanks for contact us with your issues.</p>\n' +
                '\t\t\t\t\t\t\t\t\t<span class="small">9 hour ago</span>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Ticket item END -->\n' +
                '\t\t\t\t\t\t\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t<!-- Card body END -->\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t</div>\n' +
                '\t\t\t<!-- Ticket END -->\n' +
                '\t\t</div>\n' +
                '\t\t<!-- Chart and Ticket END -->\n' +
                '\n' +
                '\t\t<!-- Top listed Cards START -->\n' +
                '\t\t<div class="row g-4">\n' +
                '\n' +
                '\t\t\t<!-- Top instructors START -->\n' +
                '\t\t\t<div class="col-lg-6 col-xxl-4">\n' +
                '\t\t\t\t<div class="card shadow h-100">\n' +
                '\n' +
                '\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t<div class="card-header border-bottom d-flex justify-content-between align-items-center p-4">\n' +
                '\t\t\t\t\t\t<h5 class="card-header-title">Top Instructors</h5>\n' +
                '\t\t\t\t\t\t<a href="#" class="btn btn-link p-0 mb-0">View all</a>\n' +
                '\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t<!-- Card body START -->\n' +
                '\t\t\t\t\t<div class="card-body p-4">\n' +
                '\n' +
                '\t\t\t\t\t\t<!-- Instructor item START -->\n' +
                '\t\t\t\t\t\t<div class="d-sm-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t\t<!-- Avatar and info -->\n' +
                '\t\t\t\t\t\t\t<div class="d-sm-flex align-items-center mb-1 mb-sm-0">\n' +
                '\t\t\t\t\t\t\t\t<!-- Avatar -->\n' +
                '\t\t\t\t\t\t\t\t<div class="avatar avatar-md flex-shrink-0">\n' +
                '\t\t\t\t\t\t\t\t\t<img class="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar">\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-2 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t<h6 class="mb-1">Lori Stevens<i class="bi bi-patch-check-fill text-info small ms-1"></i></h6>\n' +
                '\t\t\t\t\t\t\t\t\t<ul class="list-inline mb-0 small">\n' +
                '\t\t\t\t\t\t\t\t\t\t<li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-book text-purple me-1"></i>25 Courses</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t<li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-star text-warning me-1"></i>4.5/5.0</li>\n' +
                '\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Button -->\n' +
                '\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-light mb-0">View</a>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Instructor item END -->\n' +
                '\n' +
                '\t\t\t\t\t\t<hr><!-- Divider -->\n' +
                '\n' +
                '\t\t\t\t\t\t<!-- Instructor item START -->\n' +
                '\t\t\t\t\t\t<div class="d-sm-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t\t<!-- Avatar and info -->\n' +
                '\t\t\t\t\t\t\t<div class="d-sm-flex align-items-center mb-1 mb-sm-0">\n' +
                '\t\t\t\t\t\t\t\t<!-- Avatar -->\n' +
                '\t\t\t\t\t\t\t\t<div class="avatar avatar-md flex-shrink-0">\n' +
                '\t\t\t\t\t\t\t\t\t<img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar">\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-2 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t<h6 class="mb-1">Dennis Barrett</h6>\n' +
                '\t\t\t\t\t\t\t\t\t<ul class="list-inline mb-0 small">\n' +
                '\t\t\t\t\t\t\t\t\t\t<li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-book text-purple me-1"></i>18 Courses</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t<li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-star text-warning me-1"></i>4.5/5.0</li>\n' +
                '\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Button -->\n' +
                '\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-light mb-0">View</a>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Instructor item END -->\n' +
                '\n' +
                '\t\t\t\t\t\t<hr><!-- Divider -->\n' +
                '\n' +
                '\t\t\t\t\t\t<!-- Instructor item START -->\n' +
                '\t\t\t\t\t\t<div class="d-sm-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t\t<!-- Avatar and info -->\n' +
                '\t\t\t\t\t\t\t<div class="d-sm-flex align-items-center mb-1 mb-sm-0">\n' +
                '\t\t\t\t\t\t\t\t<!-- Avatar -->\n' +
                '\t\t\t\t\t\t\t\t<div class="avatar avatar-md flex-shrink-0">\n' +
                '\t\t\t\t\t\t\t\t\t<img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar">\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-2 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t<h6 class="mb-1">Jacqueline Miller<i class="bi bi-patch-check-fill text-info small ms-1"></i></h6>\n' +
                '\t\t\t\t\t\t\t\t\t<ul class="list-inline mb-0 small">\n' +
                '\t\t\t\t\t\t\t\t\t\t<li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-book text-purple me-1"></i>21 Courses</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t<li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-star text-warning me-1"></i>4.8/5.0</li>\n' +
                '\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Button -->\n' +
                '\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-light mb-0">View</a>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Instructor item END -->\n' +
                '\n' +
                '\t\t\t\t\t\t<hr><!-- Divider -->\n' +
                '\n' +
                '\t\t\t\t\t\t<!-- Instructor item START -->\n' +
                '\t\t\t\t\t\t<div class="d-sm-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t\t<!-- Avatar and info -->\n' +
                '\t\t\t\t\t\t\t<div class="d-sm-flex align-items-center mb-1 mb-sm-0">\n' +
                '\t\t\t\t\t\t\t\t<!-- Avatar -->\n' +
                '\t\t\t\t\t\t\t\t<div class="avatar avatar-md flex-shrink-0">\n' +
                '\t\t\t\t\t\t\t\t\t<img class="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar">\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-2 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t<h6 class="mb-1">Billy Vasquez</h6>\n' +
                '\t\t\t\t\t\t\t\t\t<ul class="list-inline mb-0 small">\n' +
                '\t\t\t\t\t\t\t\t\t\t<li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-book text-purple me-1"></i>15 Courses</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t<li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-star text-warning me-1"></i>4.5/5.0</li>\n' +
                '\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Button -->\n' +
                '\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-light mb-0">View</a>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Instructor item END -->\n' +
                '\n' +
                '\t\t\t\t\t\t<hr><!-- Divider -->\n' +
                '\n' +
                '\t\t\t\t\t\t<!-- Instructor item START -->\n' +
                '\t\t\t\t\t\t<div class="d-sm-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t\t<!-- Avatar and info -->\n' +
                '\t\t\t\t\t\t\t<div class="d-sm-flex align-items-center mb-1 mb-sm-0">\n' +
                '\t\t\t\t\t\t\t\t<!-- Avatar -->\n' +
                '\t\t\t\t\t\t\t\t<div class="avatar avatar-md flex-shrink-0">\n' +
                '\t\t\t\t\t\t\t\t\t<img class="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar">\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-2 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t<h6 class="mb-1">Amanda Reed<i class="bi bi-patch-check-fill text-info small ms-1"></i></h6>\n' +
                '\t\t\t\t\t\t\t\t\t<ul class="list-inline mb-0 small">\n' +
                '\t\t\t\t\t\t\t\t\t\t<li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-book text-purple me-1"></i>29 Courses</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t<li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-star text-warning me-1"></i>4.5/5.0</li>\n' +
                '\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Button -->\n' +
                '\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-light mb-0">View</a>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Instructor item END -->\n' +
                '\t\t\t\t\t\t\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t<!-- Card body END -->\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t</div>\n' +
                '\t\t\t<!-- Top instructors END -->\n' +
                '\n' +
                '\t\t\t<!-- Notice Board START -->\n' +
                '\t\t\t<div class="col-lg-6 col-xxl-4">\n' +
                '\t\t\t\t<div class="card shadow h-100">\n' +
                '\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t<div class="card-header border-bottom p-4">\n' +
                '\t\t\t\t\t\t<h5 class="card-header-title">Notice board</h5>\n' +
                '\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t<!-- Card body START -->\n' +
                '\t\t\t\t\t<div class="card-body p-4">\n' +
                '\t\t\t\t\t\t<div class="custom-scrollbar h-300px">\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Notice Board item START -->\n' +
                '\t\t\t\t\t\t\t<div class="d-flex justify-content-between position-relative">\n' +
                '\t\t\t\t\t\t\t\t<div class="d-sm-flex">\n' +
                '\t\t\t\t\t\t\t\t\t<div class="icon-lg bg-purple bg-opacity-10 text-purple rounded-2 flex-shrink-0"><i class="fas fa-user-tie fs-5"></i></div>\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-3 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#" class="stretched-link">Join New Instructor</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t<p class="mb-0">Amongst moments do in arrived Fat weddings believed prospect</p>\n' +
                '\t\t\t\t\t\t\t\t\t\t<span class="small">5 min ago</span>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Notice Board item END -->\n' +
                '\n' +
                '\t\t\t\t\t\t\t<hr><!-- Divider -->\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Notice Board item START -->\n' +
                '\t\t\t\t\t\t\t<div class="d-flex justify-content-between position-relative">\n' +
                '\t\t\t\t\t\t\t\t<div class="d-sm-flex">\n' +
                '\t\t\t\t\t\t\t\t\t<div class="icon-lg bg-orange bg-opacity-10 text-orange rounded-2 flex-shrink-0"><i class="fas fa-book-open fs-5"></i></div>\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-3 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#" class="stretched-link">Update New Course</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t<p class="mb-0">Arrived Fat weddings believed prospect</p>\n' +
                '\t\t\t\t\t\t\t\t\t\t<span class="small">4 hour ago</span>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Notice Board item END -->\n' +
                '\n' +
                '\t\t\t\t\t\t\t<hr><!-- Divider -->\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Notice Board item START -->\n' +
                '\t\t\t\t\t\t\t<div class="d-flex justify-content-between position-relative">\n' +
                '\t\t\t\t\t\t\t\t<div class="d-sm-flex">\n' +
                '\t\t\t\t\t\t\t\t\t<div class="icon-lg bg-info bg-opacity-10 text-info rounded-2 flex-shrink-0"><i class="fas fa-book fs-5"></i></div>\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-3 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#" class="stretched-link">Update Syllabus</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t<p class="mb-0">Arrived Fat weddings believed prospect</p>\n' +
                '\t\t\t\t\t\t\t\t\t\t<span class="small">2 days ago</span>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Notice Board item END -->\n' +
                '\n' +
                '\t\t\t\t\t\t\t<hr><!-- Divider -->\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Notice Board item START -->\n' +
                '\t\t\t\t\t\t\t<div class="d-flex justify-content-between position-relative">\n' +
                '\t\t\t\t\t\t\t\t<div class="d-sm-flex">\n' +
                '\t\t\t\t\t\t\t\t\t<div class="icon-lg bg-danger bg-opacity-10 text-danger rounded-2 flex-shrink-0"><i class="fas fa-globe fs-5"></i></div>\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-3 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#" class="stretched-link">Update New Feature</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t<p class="mb-0">Arrived Fat weddings believed prospect</p>\n' +
                '\t\t\t\t\t\t\t\t\t\t<span class="small">3 days ago</span>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Notice Board item END -->\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t<!-- Card body END -->\n' +
                '\n' +
                '\t\t\t\t\t<!-- Card footer START -->\n' +
                '\t\t\t\t\t<div class="card-footer border-top">\n' +
                '\t\t\t\t\t\t<div class="alert alert-success d-flex align-items-center mb-0 py-2">\n' +
                '\t\t\t\t\t\t\t<div>\n' +
                '\t\t\t\t\t\t\t\t<small class="mb-0">45 more notices listed</small>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<div class="ms-auto">\n' +
                '\t\t\t\t\t\t\t\t<a class="btn btn-sm btn-success-soft mb-0" href="#!"> View all </a>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t<!-- Card footer START -->\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t</div>\n' +
                '\t\t\t<!-- Notice Board END -->\n' +
                '\n' +
                '\t\t\t<!-- Traffic sources START -->\n' +
                '\t\t\t<div class="col-lg-6 col-xxl-4">\n' +
                '\t\t\t\t<div class="card shadow h-100">\n' +
                '\n' +
                '\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t<div class="card-header border-bottom d-flex justify-content-between align-items-center p-4">\n' +
                '\t\t\t\t\t\t<h5 class="card-header-title">Traffic Sources</h5>\n' +
                '\t\t\t\t\t\t<a href="#" class="btn btn-link p-0 mb-0">View all</a>\n' +
                '\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t<!-- Card body START -->\n' +
                '\t\t\t\t\t<div class="card-body p-4">\n' +
                '\t\t\t\t\t\t<!-- Chart -->\n' +
                '\t\t\t\t\t\t<div class="col-sm-6 mx-auto">\n' +
                '\t\t\t\t\t\t\t<div id="ChartTrafficViews"></div>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t<!-- Content -->\n' +
                '\t\t\t\t\t\t<ul class="list-group list-group-borderless mt-3">\n' +
                '\t\t\t\t\t\t\t<li class="list-group-item"><i class="text-primary fas fa-circle me-2"></i>Create a Design System in Figma</li>\n' +
                '\t\t\t\t\t\t\t<li class="list-group-item"><i class="text-success fas fa-circle me-2"></i>The Complete Digital Marketing Course - 12 Courses in 1</li>\n' +
                '\t\t\t\t\t\t\t<li class="list-group-item"><i class="text-warning fas fa-circle me-2"></i>Google Ads Training: Become a PPC Expert</li>\n' +
                '\t\t\t\t\t\t\t<li class="list-group-item"><i class="text-danger fas fa-circle me-2"></i>Microsoft Excel - Excel from Beginner to Advanced</li>\n' +
                '\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t\t<!-- Card body END -->\n' +
                '\t\t\t</div>\n' +
                '\t\t\t<!-- Traffic sources END -->\n' +
                '\n' +
                '\t\t</div>\n' +
                '\t\t<!-- Top listed Cards END -->';
            break;
        case 'Commandes':
            mainContent.innerHTML = '\t\t\t<!-- Title -->\n' +
                '\t\t\t<div class="row mb-3">\n' +
                '\t\t\t\t<div class="col-12">\n' +
                '\t\t\t\t\t<h1 class="h3 mb-0">Earnings</h1>\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t</div>\n' +
                '\n' +
                '\t\t\t<div class="row g-4 mb-4">\n' +
                '\t\t\t\t<!-- Earning item -->\n' +
                '\t\t\t\t<div class="col-sm-6 col-lg-4">\n' +
                '\t\t\t\t\t<div class="p-4 bg-primary bg-opacity-10 rounded-3">\n' +
                '\t\t\t\t\t\t<h6>Sales this month</h6>\n' +
                '\t\t\t\t\t\t<h2 class="mb-0 fs-1 text-primary">$899.95</h2>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t<!-- Earning item -->\n' +
                '\t\t\t\t<div class="col-sm-6 col-lg-4">\n' +
                '\t\t\t\t\t<div class="p-4 bg-purple bg-opacity-10 rounded-3">\n' +
                '\t\t\t\t\t\t<h6>To be paid\n' +
                '\t\t\t\t\t\t\t<a tabindex="0" class="h6 mb-0" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" data-bs-content="After US royalty withholding tax" data-bs-original-title="" title="">\n' +
                '\t\t\t\t\t\t\t\t<i class="bi bi-info-circle-fill small"></i>\n' +
                '\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t</h6>\n' +
                '\t\t\t\t\t\t<h2 class="mb-0 fs-1 text-purple">$750.35</h2>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t<!-- Earning item -->\n' +
                '\t\t\t\t<div class="col-sm-6 col-lg-4">\n' +
                '\t\t\t\t\t<div class="p-4 bg-orange bg-opacity-10 rounded-3">\n' +
                '\t\t\t\t\t\t<h6>Lifetime Earnings</h6>\n' +
                '\t\t\t\t\t\t<h2 class="mb-0 fs-1 text-orange">$4882.65</h2>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t</div> <!-- Row END -->\n' +
                '\t\t\t\n' +
                '\t\t\t<!-- All review table START -->\n' +
                '\t\t\t<div class="card bg-transparent border">\n' +
                '\n' +
                '\t\t\t\t<!-- Card header START -->\n' +
                '\t\t\t\t<div class="card-header bg-light border-bottom">\n' +
                '\t\t\t\t\t<h5 class="mb-0">Invoice History</h5>\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t\t<!-- Card header END -->\n' +
                '\n' +
                '\t\t\t\t<!-- Card body START -->\n' +
                '\t\t\t\t<div class="card-body pb-0">\n' +
                '\t\t\t\t\t<!-- Table START -->\n' +
                '\t\t\t\t\t<div class="table-responsive border-0">\n' +
                '\t\t\t\t\t\t<table class="table table-dark-gray align-middle p-4 mb-0 table-hover">\n' +
                '\t\t\t\t\t\t\t<!-- Table head -->\n' +
                '\t\t\t\t\t\t\t<thead>\n' +
                '\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0 rounded-start">Invoice ID</th>\n' +
                '\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0">Course Name</th>\n' +
                '\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0">Date</th>\n' +
                '\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0">Payment Method</th>\n' +
                '\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0">Amount</th>\n' +
                '\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0">Status</th>\n' +
                '\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0 rounded-end">Action</th>\n' +
                '\t\t\t\t\t\t\t\t</tr>\n' +
                '\t\t\t\t\t\t\t</thead>\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Table body START -->\n' +
                '\t\t\t\t\t\t\t<tbody>\n' +
                '\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>#254684</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<h6 class="table-responsive-title mb-0"><a href="#">Create a Design System in Figma</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>29 Aug 2021</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<img src="assets/images/client/mastercard.svg" class="h-50px" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>$3,999\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Dropdown icon -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="h6 mb-0" role="button" id="dropdownShare1" data-bs-toggle="dropdown" aria-expanded="false">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-info-circle-fill"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Dropdown items -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare1">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="small">Commission</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="h6 mb-0 small">$86</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<hr class="my-1"> <!-- Divider -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="me-4 small">Us royalty withholding</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-danger small">-$0.00</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<hr class="my-1"> <!-- Divider -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="small">Earning</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="h6 mb-0 small">$86</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="badge bg-success bg-opacity-10 text-success">Paid</div>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Download" aria-label="Download">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-download"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>#125464</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<h6 class="table-responsive-title mb-0">Sketch from A to Z: for app designer</h6>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>26 Aug 2021</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<img src="assets/images/client/paypal.svg" class="w-80px" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>$4,201\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Dropdown icon -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="h6 mb-0" role="button" id="dropdownShare2" data-bs-toggle="dropdown" aria-expanded="false">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-info-circle-fill"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Dropdown items -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="small">Commission</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="h6 mb-0 small">$86</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<hr class="my-1"> <!-- Divider -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="me-4 small">Us royalty withholding</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-danger small">-$0.00</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<hr class="my-1"> <!-- Divider -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="small">Earning</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="h6 mb-0 small">$86</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="badge bg-success bg-opacity-10 text-success">Paid</div>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Download" aria-label="Download">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-download"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>#123546</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<h6 class="table-responsive-title mb-0">The Complete Web Development in python</h6>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>18 July 2021</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<img src="assets/images/client/paypal.svg" class="w-80px" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>$1,032\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Dropdown icon -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="h6 mb-0" role="button" id="dropdownShare3" data-bs-toggle="dropdown" aria-expanded="false">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-info-circle-fill"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Dropdown items -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="small">Commission</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="h6 mb-0 small">$86</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<hr class="my-1"> <!-- Divider -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="me-4 small">Us royalty withholding</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-danger small">-$0.00</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<hr class="my-1"> <!-- Divider -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="small">Earning</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="h6 mb-0 small">$86</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="badge bg-orange bg-opacity-10 text-orange">Pending</div>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Download" aria-label="Download">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-download"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>#1235698</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<h6 class="table-responsive-title mb-0">Deep Learning with React-Native</h6>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>09 July 2021</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<img src="assets/images/client/mastercard.svg" class="h-50px" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>$6,548\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Dropdown icon -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="h6 mb-0" role="button" id="dropdownShare4" data-bs-toggle="dropdown" aria-expanded="false">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-info-circle-fill"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Dropdown items -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare4">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="small">Commission</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="h6 mb-0 small">$86</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<hr class="my-1"> <!-- Divider -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="me-4 small">Us royalty withholding</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-danger small">-$0.00</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<hr class="my-1"> <!-- Divider -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="small">Earning</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="h6 mb-0 small">$86</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="badge bg-success bg-opacity-10 text-success">Paid</div>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Download" aria-label="Download">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-download"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>#132456</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<h6 class="table-responsive-title mb-0">Microsoft Excel - Excel from Beginner to Advanced</h6>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>21 June 2021</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<img src="assets/images/client/paypal.svg" class="w-80px" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>$2,546\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Dropdown icon -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="h6 mb-0" role="button" id="dropdownShare5" data-bs-toggle="dropdown" aria-expanded="false">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-info-circle-fill"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Dropdown items -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare5">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="small">Commission</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="h6 mb-0 small">$86</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<hr class="my-1"> <!-- Divider -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="me-4 small">Us royalty withholding</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-danger small">-$0.00</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<hr class="my-1"> <!-- Divider -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="small">Earning</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="h6 mb-0 small">$86</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="badge bg-orange bg-opacity-10 text-orange">Pending</div>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Download" aria-label="Download">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-download"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>#145623</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<h6 class="table-responsive-title mb-0">Twitter Marketing & Twitter Ads For Beginners</h6>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>05 June 2021</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<img src="assets/images/client/mastercard.svg" class="h-50px" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>$4,258\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Dropdown icon -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="h6 mb-0" role="button" id="dropdownShare6" data-bs-toggle="dropdown" aria-expanded="false">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-info-circle-fill"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Dropdown items -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare6">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="small">Commission</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="h6 mb-0 small">$86</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<hr class="my-1"> <!-- Divider -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="me-4 small">Us royalty withholding</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-danger small">-$0.00</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<hr class="my-1"> <!-- Divider -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="small">Earning</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="h6 mb-0 small">$86</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="badge bg-danger bg-opacity-10 text-danger">Cancel</div>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Download" aria-label="Download">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-download"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>#154632</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<h6 class="table-responsive-title mb-0">The Complete Digital Marketing Course - 12 Courses in 1</h6>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>15 April 2021</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<img src="assets/images/client/paypal.svg" class="w-80px" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>$854\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Dropdown icon -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="h6 mb-0" role="button" id="dropdownShare7" data-bs-toggle="dropdown" aria-expanded="false">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-info-circle-fill"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Dropdown items -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare7">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="small">Commission</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="h6 mb-0 small">$86</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<hr class="my-1"> <!-- Divider -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="me-4 small">Us royalty withholding</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-danger small">-$0.00</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<hr class="my-1"> <!-- Divider -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="small">Earning</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="h6 mb-0 small">$86</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="badge bg-orange bg-opacity-10 text-orange">Pending</div>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Download" aria-label="Download">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-download"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>#165423</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<h6 class="table-responsive-title mb-0">Create a Design System in Figma</h6>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>02 Jan 2021</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<img src="assets/images/client/mastercard.svg" class="h-50px" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>$965\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Dropdown icon -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="h6 mb-0" role="button" id="dropdownShare8" data-bs-toggle="dropdown" aria-expanded="false">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-info-circle-fill"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Dropdown items -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare8">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="small">Commission</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="h6 mb-0 small">$86</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<hr class="my-1"> <!-- Divider -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="me-4 small">Us royalty withholding</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-danger small">-$0.00</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<hr class="my-1"> <!-- Divider -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="small">Earning</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="h6 mb-0 small">$86</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="badge bg-success bg-opacity-10 text-success">Paid</div>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Download" aria-label="Download">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-download"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t</tbody>\n' +
                '\t\t\t\t\t\t\t<!-- Table body END -->\n' +
                '\t\t\t\t\t\t</table>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t<!-- Table END -->\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t\t<!-- Card body END -->\n' +
                '\n' +
                '\t\t\t\t<!-- Card footer START -->\n' +
                '\t\t\t\t<div class="card-footer bg-transparent">\n' +
                '\t\t\t\t\t<!-- Pagination START -->\n' +
                '\t\t\t\t\t<div class="d-sm-flex justify-content-sm-between align-items-sm-center">\n' +
                '\t\t\t\t\t\t<!-- Content -->\n' +
                '\t\t\t\t\t\t<p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>\n' +
                '\t\t\t\t\t\t<!-- Pagination -->\n' +
                '\t\t\t\t\t\t<nav class="d-flex justify-content-center mb-0" aria-label="navigation">\n' +
                '\t\t\t\t\t\t\t<ul class="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">\n' +
                '\t\t\t\t\t\t\t\t<li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1"><i class="fas fa-angle-left"></i></a></li>\n' +
                '\t\t\t\t\t\t\t\t<li class="page-item mb-0"><a class="page-link" href="#">1</a></li>\n' +
                '\t\t\t\t\t\t\t\t<li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>\n' +
                '\t\t\t\t\t\t\t\t<li class="page-item mb-0"><a class="page-link" href="#">3</a></li>\n' +
                '\t\t\t\t\t\t\t\t<li class="page-item mb-0"><a class="page-link" href="#"><i class="fas fa-angle-right"></i></a></li>\n' +
                '\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t</nav>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t<!-- Pagination END -->\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t\t<!-- Card footer END -->\n' +
                '\t\t\t</div>\n' +
                '\t\t\t<!-- All review table END -->\n' +
                '\t\t</div>\n' +
                '\t\t<!-- Page main content END -->';
            break;
        case 'Produits':
            mainContent.innerHTML = '\n' +
                '\t\t<!-- Title -->\n' +
                '\t\t<div class="row">\n' +
                '\t\t\t<div class="col-12">\n' +
                '\t\t\t\t<h1 class="h3 mb-2 mb-sm-0">Students</h1>\n' +
                '\t\t\t</div>\n' +
                '\t\t</div>\n' +
                '\t\t\t\n' +
                '\t\t<div class="card bg-transparent">\n' +
                '\n' +
                '\t\t\t<!-- Card header START -->\n' +
                '\t\t\t<div class="card-header bg-transparent border-bottom px-0">\n' +
                '\t\t\t\t<!-- Search and select START -->\n' +
                '\t\t\t\t<div class="row g-3 align-items-center justify-content-between">\n' +
                '\n' +
                '\t\t\t\t\t<!-- Search bar -->\n' +
                '\t\t\t\t\t<div class="col-md-8">\n' +
                '\t\t\t\t\t\t<form class="rounded position-relative">\n' +
                '\t\t\t\t\t\t\t<input class="form-control bg-transparent" type="search" placeholder="Search" aria-label="Search">\n' +
                '\t\t\t\t\t\t\t<button class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">\n' +
                '\t\t\t\t\t\t\t\t<i class="fas fa-search fs-6 "></i>\n' +
                '\t\t\t\t\t\t\t</button>\n' +
                '\t\t\t\t\t\t</form>\n' +
                '\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t<!-- Tab button -->\n' +
                '\t\t\t\t\t<div class="col-md-3">\n' +
                '\t\t\t\t\t\t<!-- Tabs START -->\n' +
                '\t\t\t\t\t\t<ul class="list-inline mb-0 nav nav-pills nav-pill-dark-soft border-0 justify-content-end" id="pills-tab" role="tablist">\n' +
                '\t\t\t\t\t\t\t<!-- Grid tab -->\n' +
                '\t\t\t\t\t\t\t<li class="nav-item">\n' +
                '\t\t\t\t\t\t\t\t<a href="#nav-preview-tab-1" class="nav-link mb-0 me-2 active" data-bs-toggle="tab">\n' +
                '\t\t\t\t\t\t\t\t\t<i class="fas fa-fw fa-th-large"></i>\n' +
                '\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t\t<!-- List tab -->\n' +
                '\t\t\t\t\t\t\t<li class="nav-item">\n' +
                '\t\t\t\t\t\t\t\t<a href="#nav-html-tab-1" class="nav-link mb-0" data-bs-toggle="tab">\n' +
                '\t\t\t\t\t\t\t\t\t<i class="fas fa-fw fa-list-ul"></i>\n' +
                '\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t</li>\n' +
                '\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t<!-- Tabs end -->\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t\t<!-- Search and select END -->\n' +
                '\t\t\t</div>\n' +
                '\t\t\t<!-- Card header END -->\n' +
                '\n' +
                '\t\t\t<!-- Card body START -->\n' +
                '\t\t\t<div class="card-body px-0">\n' +
                '\n' +
                '\t\t\t\t<!-- Tabs content START -->\n' +
                '\t\t\t\t<div class="tab-content">\n' +
                '\n' +
                '\t\t\t\t\t<!-- Tabs content item START -->\n' +
                '\t\t\t\t\t<div class="tab-pane fade show active" id="nav-preview-tab-1">\n' +
                '\t\t\t\t\t\t<div class="row g-4">\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Card item START -->\n' +
                '\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t<div class="card bg-transparent border h-100"> \n' +
                '\t\t\t\t\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-header bg-transparent border-bottom d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-sm-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Avatar -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="avatar avatar-md flex-shrink-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-2 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h5 class="mb-0"><a href="#">Carolyn Ortiz</a></h5>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-body small"><i class="fas fa-fw fa-map-marker-alt me-1 mt-1"></i>Mumbai</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Edit dropdown -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="dropdown text-end">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare2" data-bs-toggle="dropdown" aria-expanded="false">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-three-dots fa-fw"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- dropdown button -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<li><a class="dropdown-item" href="#"><i class="bi bi-pencil-square fa-fw me-2"></i>Edit</a></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<li><a class="dropdown-item" href="#"><i class="bi bi-trash fa-fw me-2"></i>Remove</a></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-body">\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Payments -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between align-items-center mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i class="bi bi-currency-dollar fa-fw"></i></div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 ms-2 fw-light">Payments</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<span class="mb-0 fw-bold">$6,205</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Total courses -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between align-items-center mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i class="fas fa-book fa-fw"></i></div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 ms-2 fw-light">Total Course</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<span class="mb-0 fw-bold">21</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Progress -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0">85%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Card footer -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-footer bg-transparent border-top">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-sm-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Rating star -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-2 mb-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-calendar fa-fw text-orange me-2"></i><span class="text-body">Join at:</span> 29 Aug 2021\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Buttons -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="text-end text-primary-hover">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Message" aria-label="Message">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-envelope-fill"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Block" aria-label="Block">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-ban"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Card item END -->\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Card item START -->\n' +
                '\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t<div class="card bg-transparent border h-100"> \n' +
                '\t\t\t\t\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-header bg-transparent border-bottom d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-sm-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Avatar -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="avatar avatar-md flex-shrink-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<img class="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-2 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h5 class="mb-0"><a href="#">Billy Vasquez</a></h5>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-body small"><i class="fas fa-fw fa-map-marker-alt me-1 mt-1"></i>Delhi</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Edit dropdown -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="dropdown text-end">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare1" data-bs-toggle="dropdown" aria-expanded="false">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-three-dots fa-fw"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- dropdown button -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare1">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<li><a class="dropdown-item" href="#"><i class="bi bi-pencil-square fa-fw me-2"></i>Edit</a></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<li><a class="dropdown-item" href="#"><i class="bi bi-trash fa-fw me-2"></i>Remove</a></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-body">\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Payments -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between align-items-center mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i class="bi bi-currency-dollar fa-fw"></i></div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 ms-2 fw-light">Payments</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<span class="mb-0 fw-bold">$1,256</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Total courses -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between align-items-center mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i class="fas fa-book fa-fw"></i></div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 ms-2 fw-light">Total Course</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<span class="mb-0 fw-bold">16</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Progress -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0">60%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Card footer -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-footer bg-transparent border-top">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-sm-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Rating star -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-2 mb-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-calendar fa-fw text-orange me-2"></i><span class="text-body">Join at:</span> 15 July 2021\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Buttons -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="text-end text-primary-hover">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Message" aria-label="Message">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-envelope-fill"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Block" aria-label="Block">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-ban"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Card item END -->\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Card item START -->\n' +
                '\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t<div class="card bg-transparent border h-100"> \n' +
                '\t\t\t\t\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-header bg-transparent border-bottom d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-sm-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Avatar -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="avatar avatar-md flex-shrink-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-2 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h5 class="mb-0"><a href="#">Dennis Barrett</a></h5>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-body small"><i class="fas fa-fw fa-map-marker-alt me-1 mt-1"></i>New york</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Edit dropdown -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="dropdown text-end">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare3" data-bs-toggle="dropdown" aria-expanded="false">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-three-dots fa-fw"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- dropdown button -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<li><a class="dropdown-item" href="#"><i class="bi bi-pencil-square fa-fw me-2"></i>Edit</a></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<li><a class="dropdown-item" href="#"><i class="bi bi-trash fa-fw me-2"></i>Remove</a></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-body">\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Payments -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between align-items-center mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i class="bi bi-currency-dollar fa-fw"></i></div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 ms-2 fw-light">Payments</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<span class="mb-0 fw-bold">$9,256</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Total courses -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between align-items-center mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i class="fas fa-book fa-fw"></i></div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 ms-2 fw-light">Total Course</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<span class="mb-0 fw-bold">38</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Progress -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0">74%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 74%" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Card footer -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-footer bg-transparent border-top">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-sm-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Rating star -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-2 mb-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-calendar fa-fw text-orange me-2"></i><span class="text-body">Join at:</span> 22 June 2021\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Buttons -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="text-end text-primary-hover">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Message" aria-label="Message">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-envelope-fill"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Block" aria-label="Block">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-ban"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Card item END -->\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Card item START -->\n' +
                '\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t<div class="card bg-transparent border h-100"> \n' +
                '\t\t\t\t\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-header bg-transparent border-bottom d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-sm-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Avatar -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="avatar avatar-md flex-shrink-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<img class="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-2 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h5 class="mb-0"><a href="#">Lori Stevens</a></h5>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-body small"><i class="fas fa-fw fa-map-marker-alt me-1 mt-1"></i>California</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Edit dropdown -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="dropdown text-end">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare4" data-bs-toggle="dropdown" aria-expanded="false">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-three-dots fa-fw"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- dropdown button -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare4">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<li><a class="dropdown-item" href="#"><i class="bi bi-pencil-square fa-fw me-2"></i>Edit</a></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<li><a class="dropdown-item" href="#"><i class="bi bi-trash fa-fw me-2"></i>Remove</a></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-body">\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Payments -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between align-items-center mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i class="bi bi-currency-dollar fa-fw"></i></div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 ms-2 fw-light">Payments</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<span class="mb-0 fw-bold">$10,688</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Total courses -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between align-items-center mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i class="fas fa-book fa-fw"></i></div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 ms-2 fw-light">Total Course</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<span class="mb-0 fw-bold">38</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Progress -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0">45%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 45%" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Card footer -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-footer bg-transparent border-top">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-sm-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Rating star -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-2 mb-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-calendar fa-fw text-orange me-2"></i><span class="text-body">Join at:</span> 18 April 2021\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Buttons -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="text-end text-primary-hover">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Message" aria-label="Message">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-envelope-fill"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Block" aria-label="Block">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-ban"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Card item END -->\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Card item START -->\n' +
                '\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t<div class="card bg-transparent border h-100"> \n' +
                '\t\t\t\t\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-header bg-transparent border-bottom d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-sm-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Avatar -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="avatar avatar-md flex-shrink-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<img class="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-2 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h5 class="mb-0"><a href="#">Jacqueline Miller</a></h5>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-body small"><i class="fas fa-fw fa-map-marker-alt me-1 mt-1"></i>Chennai</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Edit dropdown -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="dropdown text-end">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare5" data-bs-toggle="dropdown" aria-expanded="false">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-three-dots fa-fw"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- dropdown button -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare5">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<li><a class="dropdown-item" href="#"><i class="bi bi-pencil-square fa-fw me-2"></i>Edit</a></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<li><a class="dropdown-item" href="#"><i class="bi bi-trash fa-fw me-2"></i>Remove</a></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-body">\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Payments -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between align-items-center mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i class="bi bi-currency-dollar fa-fw"></i></div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 ms-2 fw-light">Payments</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<span class="mb-0 fw-bold">$856</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Total courses -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between align-items-center mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i class="fas fa-book fa-fw"></i></div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 ms-2 fw-light">Total Course</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<span class="mb-0 fw-bold">05</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Progress -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0">90%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Card footer -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-footer bg-transparent border-top">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-sm-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Rating star -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-2 mb-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-calendar fa-fw text-orange me-2"></i><span class="text-body">Join at:</span> 05 Aug 2021\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Buttons -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="text-end text-primary-hover">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Message" aria-label="Message">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-envelope-fill"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Block" aria-label="Block">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-ban"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Card item END -->\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Card item START -->\n' +
                '\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t<div class="card bg-transparent border h-100"> \n' +
                '\t\t\t\t\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-header bg-transparent border-bottom d-flex justify-content-between">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-sm-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Avatar -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="avatar avatar-md flex-shrink-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<img class="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Info -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="ms-0 ms-sm-2 mt-2 mt-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h5 class="mb-0"><a href="#">Samuel Bishop</a></h5>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-body small"><i class="fas fa-fw fa-map-marker-alt me-1 mt-1"></i>Canada</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Edit dropdown -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="dropdown text-end">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare6" data-bs-toggle="dropdown" aria-expanded="false">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-three-dots fa-fw"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- dropdown button -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare6">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<li><a class="dropdown-item" href="#"><i class="bi bi-pencil-square fa-fw me-2"></i>Edit</a></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<li><a class="dropdown-item" href="#"><i class="bi bi-trash fa-fw me-2"></i>Remove</a></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-body">\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Payments -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between align-items-center mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i class="bi bi-currency-dollar fa-fw"></i></div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 ms-2 fw-light">Payments</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<span class="mb-0 fw-bold">$3,578</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Total courses -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between align-items-center mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i class="fas fa-book fa-fw"></i></div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0 ms-2 fw-light">Total Course</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<span class="mb-0 fw-bold">14</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Progress -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0">30%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Card footer -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-footer bg-transparent border-top">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-sm-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Rating star -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-2 mb-sm-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-calendar fa-fw text-orange me-2"></i><span class="text-body">Join at:</span> 18 Jan 2021\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Buttons -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="text-end text-primary-hover">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Message" aria-label="Message">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-envelope-fill"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Block" aria-label="Block">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-ban"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Card item END -->\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t<!-- Tabs content item END -->\n' +
                '\n' +
                '\t\t\t\t\t<!-- Tabs content item START -->\n' +
                '\t\t\t\t\t<div class="tab-pane fade" id="nav-html-tab-1">\n' +
                '\t\t\t\t\t\t<div class="table-responsive border-0">\n' +
                '\t\t\t\t\t\t\t<table class="table table-dark-gray align-middle p-4 mb-0 table-hover">\n' +
                '\t\t\t\t\t\t\t\t<!-- Table head -->\n' +
                '\t\t\t\t\t\t\t\t<thead>\n' +
                '\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0 rounded-start">Instructor name</th>\n' +
                '\t\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0">Join date</th>\n' +
                '\t\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0">Progress</th>\n' +
                '\t\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0">Courses</th>\n' +
                '\t\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0">Payments</th>\n' +
                '\t\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0 rounded-end">Action</th>\n' +
                '\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\t\t\t\t\t\t\t\t</thead>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t<!-- Table body START -->\n' +
                '\t\t\t\t\t\t\t\t<tbody>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center position-relative">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Image -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="avatar avatar-md">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="assets/images/avatar/09.jpg" class="rounded-circle" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="mb-0 ms-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Title -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#" class="stretched-link">Lori Stevens</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-body small"><i class="fas fa-fw fa-map-marker-alt me-1 mt-1"></i>Mumbai</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>29 Aug 2021</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td class="text-center text-sm-start">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0">85%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>21</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>$6,205</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="View">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-eye"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-envelope"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<button class="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Block">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-ban"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</button>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center position-relative">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Image -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="avatar avatar-md">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="assets/images/avatar/04.jpg" class="rounded-circle" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="mb-0 ms-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Title -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#" class="stretched-link">Billy Vasquez</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-body small"><i class="fas fa-fw fa-map-marker-alt me-1 mt-1"></i>Delhi</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>15 July 2021</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td class="text-center text-sm-start">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0">60%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>16</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>$1,256</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="View">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-eye"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-envelope"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<button class="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Block">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-ban"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</button>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center position-relative">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Image -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="avatar avatar-md">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="assets/images/avatar/03.jpg" class="rounded-circle" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="mb-0 ms-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Title -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#" class="stretched-link">Dennis Barrett</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-body small"><i class="fas fa-fw fa-map-marker-alt me-1 mt-1"></i>New york</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>22 June 2021</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td class="text-center text-sm-start">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0">74%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 74%" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>38</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>$9,256</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="View">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-eye"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-envelope"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<button class="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Block">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-ban"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</button>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center position-relative">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Image -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="avatar avatar-md">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="assets/images/avatar/09.jpg" class="rounded-circle" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="mb-0 ms-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Title -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#" class="stretched-link">Lori Stevens</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-body small"><i class="fas fa-fw fa-map-marker-alt me-1 mt-1"></i>California</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>18 April 2021</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td class="text-center text-sm-start">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0">45%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 45%" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>07</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>$10,688</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="View">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-eye"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-envelope"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<button class="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Block">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-ban"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</button>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center position-relative">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Image -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="avatar avatar-md">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="assets/images/avatar/05.jpg" class="rounded-circle" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="mb-0 ms-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Title -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#" class="stretched-link">Jacqueline Miller</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-body small"><i class="fas fa-fw fa-map-marker-alt me-1 mt-1"></i>Chennai</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>05 Aug 2021</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td class="text-center text-sm-start">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0">90%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>05</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>$856</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="View">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-eye"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-envelope"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<button class="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Block">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-ban"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</button>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center position-relative">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Image -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="avatar avatar-md">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="assets/images/avatar/02.jpg" class="rounded-circle" alt="">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="mb-0 ms-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Title -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#" class="stretched-link">Samuel Bishop</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="text-body small"><i class="fas fa-fw fa-map-marker-alt me-1 mt-1"></i>Canada</span></div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>18 Jan 2021</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td class="text-center text-sm-start">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="overflow-hidden">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0">30%</h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress progress-sm bg-primary bg-opacity-10">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>14</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>$3,578</td>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="View">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-eye"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="bi bi-envelope"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<button class="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Block">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-ban"></i>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</button>\n' +
                '\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t</tbody>\n' +
                '\t\t\t\t\t\t\t\t<!-- Table body END -->\n' +
                '\t\t\t\t\t\t\t</table>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t<!-- Tabs content item END -->\n' +
                '\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t\t<!-- Tabs content END -->\n' +
                '\t\t\t</div>\n' +
                '\t\t\t<!-- Card body END -->\n' +
                '\n' +
                '\t\t\t<!-- Card footer START -->\n' +
                '\t\t\t<div class="card-footer bg-transparent pt-0 px-0">\n' +
                '\t\t\t\t<!-- Pagination START -->\n' +
                '\t\t\t\t<div class="d-sm-flex justify-content-sm-between align-items-sm-center">\n' +
                '\t\t\t\t\t<!-- Content -->\n' +
                '\t\t\t\t\t<p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>\n' +
                '\t\t\t\t\t<!-- Pagination -->\n' +
                '\t\t\t\t\t<nav class="d-flex justify-content-center mb-0" aria-label="navigation">\n' +
                '\t\t\t\t\t\t<ul class="pagination pagination-sm pagination-primary-soft mb-0 pb-0 px-0">\n' +
                '\t\t\t\t\t\t\t<li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1"><i class="fas fa-angle-left"></i></a></li>\n' +
                '\t\t\t\t\t\t\t<li class="page-item mb-0"><a class="page-link" href="#">1</a></li>\n' +
                '\t\t\t\t\t\t\t<li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>\n' +
                '\t\t\t\t\t\t\t<li class="page-item mb-0"><a class="page-link" href="#">3</a></li>\n' +
                '\t\t\t\t\t\t\t<li class="page-item mb-0"><a class="page-link" href="#"><i class="fas fa-angle-right"></i></a></li>\n' +
                '\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t</nav>\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t\t<!-- Pagination END -->\n' +
                '\t\t\t</div>\n' +
                '\t\t\t<!-- Card footer END -->\n' +
                '\t\t</div>\n' +
                '\t</div>\n' +
                '\t<!-- Page main content END -->\n';
            break;
        case 'Clients':
            mainContent.innerHTML = '<h2>Page 3</h2><p>Contenu de la page 3.</p>';
            break;
        case 'Parametres':
            mainContent.innerHTML = '\n' +
                '\t\t<!-- Title -->\n' +
                '\t\t<div class="row">\n' +
                '\t\t\t<div class="col-12 mb-3">\n' +
                '\t\t\t\t<h1 class="h3 mb-2 mb-sm-0">Admin Settings</h1>\n' +
                '\t\t\t</div>\n' +
                '\t\t</div>\n' +
                '\n' +
                '\t\t<div class="row g-4">\n' +
                '\t\t\t<!-- Left side START -->\n' +
                '\t\t\t<div class="col-xl-3">\n' +
                '\t\t\t\t<!-- Tab START -->\n' +
                '\t\t\t\t<ul class="nav nav-pills nav-tabs-bg-dark flex-column">\n' +
                '\t\t\t\t\t<li class="nav-item"> <a class="nav-link active" data-bs-toggle="tab" href="#tab-1"><i class="fas fa-globe fa-fw me-2"></i>Website Settings</a> </li>\n' +
                '\t\t\t\t\t<li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#tab-2"><i class="fas fa-cog fa-fw me-2"></i>General Settings</a> </li>\n' +
                '\t\t\t\t\t<li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#tab-3"><i class="fas fa-bell fa-fw me-2"></i>Notification Settings</a> </li>\n' +
                '\t\t\t\t\t<li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#tab-4"><i class="fas fa-user-circle fa-fw me-2"></i>Account Settings</a> </li>\n' +
                '\t\t\t\t\t<li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#tab-5"><i class="fas fa-sliders-h fa-fw me-2"></i>Social Settings</a> </li>\n' +
                '\t\t\t\t\t<li class="nav-item"> <a class="nav-link mb-0" data-bs-toggle="tab" href="#tab-6"><i class="fas fa-envelope-open-text fa-fw me-2"></i>Email Settings</a> </li>\n' +
                '\t\t\t\t</ul>\n' +
                '\t\t\t\t<!-- Tab END -->\n' +
                '\t\t\t</div>\n' +
                '\t\t\t<!-- Left side END -->\n' +
                '\n' +
                '\t\t\t<!-- Right side START -->\n' +
                '\t\t\t<div class="col-xl-9">\n' +
                '\n' +
                '\t\t\t\t<!-- Tab Content START -->\n' +
                '\t\t\t\t<div class="tab-content">\n' +
                '\n' +
                '\t\t\t\t\t<!-- Personal Information content START -->\n' +
                '\t\t\t\t\t<div class="tab-pane show active" id="tab-1">\n' +
                '\t\t\t\t\t\t<div class="card shadow">\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t\t\t<div class="card-header border-bottom">\n' +
                '\t\t\t\t\t\t\t\t<h5 class="card-header-title">Website Settings</h5>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Card body START -->\n' +
                '\t\t\t\t\t\t\t<div class="card-body">\n' +
                '\t\t\t\t\t\t\t\t<form class="row g-4 align-items-center">\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-lg-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Site Name</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" placeholder="Site Name">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="form-text">Enter Website Name. It Display in Website and Email.</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-lg-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Site Copyrights</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" placeholder="Site Copyrights">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="form-text">Using for Contact and Send Email</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-lg-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Site Email</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input type="email" class="form-control" placeholder="Site Email">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="form-text">For Copyrights Text</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Textarea item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-12">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Site Description</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<textarea class="form-control" rows="3"></textarea>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="form-text">For write brief description of your organization, or a Website.</div> \n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-lg-6">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Contact Phone</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" placeholder="Contact Phone">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="form-text">Using for Contact and Support</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-lg-6">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Support Email</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input type="email" class="form-control" placeholder="Support Email">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="form-text">For Support Email</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Radio items -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-lg-6">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Allow Registration</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-sm-flex">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Radio -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="form-check radio-bg-light me-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="flexRadioDefault1">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\tEnable\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Radio -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="form-check radio-bg-light me-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="flexRadioDefault2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\tDisable\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Radio -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="form-check radio-bg-light">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="flexRadioDefault3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\tOn Request\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Textarea item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-12">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Contact Address</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<textarea class="form-control" rows="3"></textarea>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="form-text">Enter support Address</div> \n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Save button -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="d-sm-flex justify-content-end">\n' +
                '\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary mb-0">Update</button>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</form>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Card body END -->\n' +
                '\n' +
                '\t\t\t\t\t\t</div>\t\t\t\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t<!-- Personal Information content END -->\n' +
                '\n' +
                '\t\t\t\t\t<!-- General Settings content START -->\n' +
                '\t\t\t\t\t<div class="tab-pane" id="tab-2">\n' +
                '\n' +
                '\t\t\t\t\t\t<div class="card shadow">\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t\t\t<div class="card-header border-bottom">\n' +
                '\t\t\t\t\t\t\t\t<h5 class="card-header-title">General Settings</h5>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Card body START -->\n' +
                '\t\t\t\t\t\t\t<div class="card-body">\n' +
                '\t\t\t\t\t\t\t\t<form class="row g-4">\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-12">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Main Site URL</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" placeholder="Site URL">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="form-text">Set your main website url.</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Choice item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-lg-6">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Select Currency</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<select class="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<option value="">Select Currency</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<option>USD</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<option>Indian Rupee</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<option>Euro</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<option>British Pound</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t</select>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="form-text">Select currency as per Country</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Choice item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-lg-6">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Select Language</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<select class="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<option value="">Select Language</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<option>English</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<option>Hindi</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<option>German</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<option>Spanish</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t</select>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="form-text">Select language as per Country</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Switch item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-lg-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Maintainance mode</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="form-check form-switch form-check-lg mb-0">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<input class="form-check-input mt-0 price-toggle me-2" type="checkbox" id="flexSwitchCheckDefault">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<label class="form-check-label mt-1" for="flexSwitchCheckDefault">Make Site Offline</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Textarea item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-lg-9">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Maintainance Text</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<textarea class="form-control" rows="3"></textarea>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="form-text">Admin login on maintenance mode:<a href="#" class="ms-2">http://example.xyz/admin/login</a></div> \n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Save button -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="d-sm-flex justify-content-end">\n' +
                '\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary mb-0">Update</button>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</form>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Card body END -->\n' +
                '\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t<!-- General Settings content END -->\n' +
                '\n' +
                '\t\t\t\t\t<!-- Notification setting content START -->\n' +
                '\t\t\t\t\t<div class="tab-pane" id="tab-3">\n' +
                '\t\t\t\t\t\t<!-- Notification START -->\n' +
                '\t\t\t\t\t\t<div class="card shadow">\n' +
                '\t\t\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t\t\t<div class="card-header border-bottom">\n' +
                '\t\t\t\t\t\t\t\t<h5 class="card-header-title">Notifications Settings</h5>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Card body -->\n' +
                '\t\t\t\t\t\t\t<div class="card-body">\n' +
                '\t\t\t\t\t\t\t\t<!-- General nofification -->\n' +
                '\t\t\t\t\t\t\t\t<h6 class="mb-2">Choose type of notifications you want to receive</h6>\n' +
                '\t\t\t\t\t\t\t\t<div class="form-check form-switch form-check-md mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="checkbox" id="checkPrivacy12" checked="">\n' +
                '\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="checkPrivacy12">Withdrawal activity</label>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<div class="form-check form-switch form-check-md mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="checkbox" id="checkPrivacy2">\n' +
                '\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="checkPrivacy2">Weekly report</label>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<div class="form-check form-switch form-check-md mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="checkbox" id="checkPrivacy3" checked="">\n' +
                '\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="checkPrivacy3">Password change</label>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<div class="form-check form-switch form-check-md mb-0">\n' +
                '\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="checkbox" id="checkPrivacy4">\n' +
                '\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="checkPrivacy4">Play sound on a message</label>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t<!-- Instructor notification -->\n' +
                '\t\t\t\t\t\t\t\t<h6 class="mb-2 mt-4">Instructor Related Notification</h6>\n' +
                '\t\t\t\t\t\t\t\t<div class="form-check form-switch form-check-md mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="checkbox" id="checkPrivacy11" checked="">\n' +
                '\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="checkPrivacy5">Joining new instructors</label>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<div class="form-check form-switch form-check-md mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="checkbox" id="checkPrivacy5">\n' +
                '\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="checkPrivacy5">Notify when the instructorss added new courses</label>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<div class="form-check form-switch form-check-md mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="checkbox" id="checkPrivacy6" checked="">\n' +
                '\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="checkPrivacy6">Notify when instructors update courses</label>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<div class="form-check form-switch form-check-md mb-0">\n' +
                '\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="checkbox" id="checkPrivacy7">\n' +
                '\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="checkPrivacy7">Course weekly report</label>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t<!-- Student notification -->\n' +
                '\t\t\t\t\t\t\t\t<h6 class="mb-2 mt-4">Student Related Notification</h6>\n' +
                '\t\t\t\t\t\t\t\t<div class="form-check form-switch form-check-md mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="checkbox" id="checkPrivacy8" checked="">\n' +
                '\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="checkPrivacy8">Joining new student</label>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<div class="form-check form-switch form-check-md mb-3">\n' +
                '\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="checkbox" id="checkPrivacy9">\n' +
                '\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="checkPrivacy9">Notify when students purchase new courses</label>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<div class="form-check form-switch form-check-md mb-0">\n' +
                '\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="checkbox" id="checkPrivacy10">\n' +
                '\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="checkPrivacy10">Course weekly report</label>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Notification START -->\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t<!-- Notification setting content END -->\n' +
                '\n' +
                '\t\t\t\t\t<!-- Account setting content START -->\n' +
                '\t\t\t\t\t<div class="tab-pane" id="tab-4">\n' +
                '\t\t\t\t\t\t<!-- Activity logs -->\n' +
                '\t\t\t\t\t\t<div class="bg-light rounded-3 p-4 mb-3">\n' +
                '\t\t\t\t\t\t\t<div class="d-md-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t\t\t<!-- Content -->\n' +
                '\t\t\t\t\t\t\t\t<div>\n' +
                '\t\t\t\t\t\t\t\t\t<h6 class="h5">Activity Logs</h6>\n' +
                '\t\t\t\t\t\t\t\t\t<p class="mb-1 mb-md-0">You can save your all activity logs including unusual activity detected.</p>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<!-- Switch -->\n' +
                '\t\t\t\t\t\t\t\t<div class="form-check form-switch form-check-md mb-0">\n' +
                '\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="checkbox" id="checkPrivacy1" checked>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t<!-- Change password -->\n' +
                '\t\t\t\t\t\t<div class="bg-light rounded-3 p-4 mb-3">\n' +
                '\t\t\t\t\t\t\t<div class="d-md-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t\t\t<!-- Content -->\n' +
                '\t\t\t\t\t\t\t\t<div>\n' +
                '\t\t\t\t\t\t\t\t\t<h6 class="h5">Change Password</h6>\n' +
                '\t\t\t\t\t\t\t\t\t<p class="mb-1 mb-md-0">Set a unique password to protect your account.</p>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<!-- Button -->\n' +
                '\t\t\t\t\t\t\t\t<div>\n' +
                '\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-primary mb-1" data-bs-toggle="modal" data-bs-target="#changePassword">Change Password</a>\n' +
                '\t\t\t\t\t\t\t\t\t<p class="mb-0 small h6">Last change 10 Aug 2020</p>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t<!-- 2 Step Verification -->\n' +
                '\t\t\t\t\t\t<div class="bg-light rounded-3 p-4">\n' +
                '\t\t\t\t\t\t\t<div class="d-md-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t\t\t<!-- Content -->\n' +
                '\t\t\t\t\t\t\t\t<div>\n' +
                '\t\t\t\t\t\t\t\t\t<h6 class="h5">2 Step Verification</h6>\n' +
                '\t\t\t\t\t\t\t\t\t<p class="mb-1 mb-md-0">Secure your account with 2 Step security. When it is activated you will need to enter not only your password, but also a special code using app. You can receive this code by in mobile app.</p>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<!-- Switch -->\n' +
                '\t\t\t\t\t\t\t\t<div class="form-check form-switch form-check-md mb-0">\n' +
                '\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="checkbox" id="checkPrivacy13" checked>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t<!-- Active Logs START -->\n' +
                '\t\t\t\t\t\t<div class="card border mt-4">\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t\t\t<div class="card-header border-bottom">\n' +
                '\t\t\t\t\t\t\t\t<h5 class="card-header-title">Active Logs</h5>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Card body START -->\n' +
                '\t\t\t\t\t\t\t<div class="card-body">\n' +
                '\t\t\t\t\t\t\t\t<!-- Table START -->\n' +
                '\t\t\t\t\t\t\t\t<div class="table-responsive border-0">\n' +
                '\t\t\t\t\t\t\t\t\t<table class="table table-dark-gray align-middle p-4 mb-0 table-hover">\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table head -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<thead>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0 rounded-start">Browser</th>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0">IP</th>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0">Time</th>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<th scope="col" class="border-0 rounded-end">Action</th>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t</thead>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table body START -->\n' +
                '\t\t\t\t\t\t\t\t\t\t<tbody>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<td>Chrome On Window</td>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<td>173.238.198.108</td>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<td>12 Nov 2021</td>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<button class="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<td>Mozilla On Window</td>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<td>107.222.146.90</td>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<td>08 Nov 2021</td>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<button class="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<td>Chrome On iMac</td>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<td>231.213.125.55</td>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<td>06 Nov 2021</td>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<button class="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Table row -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<td>Mozilla On Window</td>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<td>37.242.105.138</td>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<td>02 Nov 2021</td>\n' +
                '\t\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table data -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t\t<button class="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
                '\t\t\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t</tbody>\n' +
                '\t\t\t\t\t\t\t\t\t\t<!-- Table body END -->\n' +
                '\t\t\t\t\t\t\t\t\t</table>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<!-- Table END -->\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Card body END -->\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<!-- Active Logs END -->\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t<!-- Account setting content END -->\n' +
                '\n' +
                '\t\t\t\t\t<!-- Social Settings content START -->\n' +
                '\t\t\t\t\t<div class="tab-pane" id="tab-5">\n' +
                '\t\t\t\t\t\t<div class="card shadow">\n' +
                '\t\t\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t\t\t<div class="card-header border-bottom d-sm-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t\t\t<h5 class="card-header-title mb-0">Social Media Settings</h5>\n' +
                '\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-primary mb-0">Add new</a>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Card body START -->\n' +
                '\t\t\t\t\t\t\t<div class="card-body">\n' +
                '\t\t\t\t\t\t\t\t<form class="row g-4">\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label"><i class="fab fa-google text-google-icon me-2"></i>Enter google client ID</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input class="form-control" type="text">\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label"><i class="fab fa-google text-google-icon me-2"></i>Enter google API</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input class="form-control" type="text">\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label"><i class="fab fa-facebook text-facebook me-2"></i>Enter facebook client ID</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input class="form-control" type="text">\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label"><i class="fab fa-facebook text-facebook me-2"></i>Enter facebook API</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input class="form-control" type="text">\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Note -->\n' +
                '\t\t\t\t\t\t\t\t\t<p class="mb-0"><b>In your app set all redirect URL like:</b> <u class="text-primary">https://app.eduport.abc/google/callback</u></p>\n' +
                '\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Button -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-end">\n' +
                '\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary mb-0">Update</button>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</form>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Card body END -->\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t<!-- Social Settings content END -->\n' +
                '\n' +
                '\t\t\t\t\t<!-- Email Settings content START -->\n' +
                '\t\t\t\t\t<div class="tab-pane" id="tab-6">\n' +
                '\t\t\t\t\t\t<div class="card shadow">\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Card header -->\n' +
                '\t\t\t\t\t\t\t<div class="card-header border-bottom">\n' +
                '\t\t\t\t\t\t\t\t<h5 class="card-header-title mb-0">Email Settings</h5>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t<!-- Card body START -->\n' +
                '\t\t\t\t\t\t\t<div class="card-body">\n' +
                '\t\t\t\t\t\t\t\t<div class="row g-4">\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Radio group items -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-xl-8">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Choose Email Drive</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="d-sm-flex justify-content-sm-between align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Radio -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="form-check">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="radio" name="flexRadioEmail" id="flexRadioEmail1">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="flexRadioEmail1">Send Mail</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Radio -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="form-check">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="radio" name="flexRadioEmail" id="flexRadioEmail2" checked>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="flexRadioEmail2">SMTP</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<!-- Radio -->\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<div class="form-check">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<input class="form-check-input" type="radio" name="flexRadioEmail" id="flexRadioEmail3">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<label class="form-check-label" for="flexRadioEmail3">Mail</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">SMTP HOST</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control">\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-xl-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">SMTP Port</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control">\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-xl-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">SMTP Secure</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control">\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">SMTP Username</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control">\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">SMTP Passwod</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input type="password" class="form-control">\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Email From Address</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input type="email" class="form-control">\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Email From Name</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input type="email" class="form-control">\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Choice item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-lg-6">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Email Send To</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<select class="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<option value="">Email Send to</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<option>All Admin</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<option>Instructors</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<option>Students</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<option>Visitors</option>\n' +
                '\t\t\t\t\t\t\t\t\t\t</select>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Input item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n' +
                '\t\t\t\t\t\t\t\t\t\t<label class="form-label">Email External Email</label>\n' +
                '\t\t\t\t\t\t\t\t\t\t<input type="email" class="form-control">\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\t\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t<!-- Email Template -->\n' +
                '\t\t\t\t\t\t\t\t<div class="row g-4 mt-4">\n' +
                '\t\t\t\t\t\t\t\t\t<div class="d-sm-flex justify-content-between align-items-center">\n' +
                '\t\t\t\t\t\t\t\t\t\t<h5 class="mb-0">Edit Email Template</h5>\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-primary mb-0">Add Template</a>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Template Item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#">Welcome Email</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i class="far fa-edit fa-fw"></i></a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Template Item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#">Send Email to User</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i class="far fa-edit fa-fw"></i></a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Template Item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#">Password Change</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i class="far fa-edit fa-fw"></i></a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Template Item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#">Unusual Login Email</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i class="far fa-edit fa-fw"></i></a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Template Item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#">Password Reset Email by Admin</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i class="far fa-edit fa-fw"></i></a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Template Item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#">KYC Approve Email</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i class="far fa-edit fa-fw"></i></a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Template Item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#">KYC Reject Email</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i class="far fa-edit fa-fw"></i></a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Template Item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#">KYC Missing Email</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i class="far fa-edit fa-fw"></i></a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Template Item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#">KYC Submitted Email</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i class="far fa-edit fa-fw"></i></a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Template Item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#">Token Purchase - Cancel by User</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i class="far fa-edit fa-fw"></i></a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Template Item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#">Token Purchase - Order Placed</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i class="far fa-edit fa-fw"></i></a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Template Item -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-xxl-4">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h6 class="mb-0"><a href="#">Token Purchase - Order Successfully</a></h6>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i class="far fa-edit fa-fw"></i></a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\n' +
                '\t\t\t\t\t\t\t\t\t<!-- Button -->\n' +
                '\t\t\t\t\t\t\t\t\t<div class="d-flex justify-content-end">\n' +
                '\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary mb-0">Update</button>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<!-- Card body END -->\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t<!-- Email Settings content END -->\n' +
                '\n' +
                '\t\t\t\t</div>\n' +
                '\t\t\t\t<!-- Tab Content END -->\n' +
                '\t\t\t</div>\n' +
                '\t\t\t<!-- Right side END -->\n' +
                '\t\t</div> <!-- Row END -->\t\t\n' +
                '\t</div>';
            break;
        default:
            mainContent.innerHTML = '';
    }
}
