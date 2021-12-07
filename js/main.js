console.log('Starting up');

$(document).ready(initPage);
$('.submit').click(onEmailSubmit);

function initPage() {
    console.log('Init...');
    $('.email-submit-button').click(onSubmit);
    renderProjectsDescription()
    renderProjectsModals()
}

function renderProjectsDescription() {
    const projs = getProjects()
    console.log('projs:', projs);
    const strHTMLs = projs.map(function(project, idx) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" onclick="renderModal('${project.id}')" data-toggle="modal" href="#portfolioModal1">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/${project.img}" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${project.name}</h4>
                        <p class="text-muted">${project.title}</p>
                        </div>
                        </div>
                        `
    })
    $(`.main-grid`).html(strHTMLs)

}

function renderModal(projectId) {
    const selectedProject = getProjectById(projectId)
    const strHTMLs = `
        <!-- Project Details Go Here -->
                                    <h2>${selectedProject.name}</h2>
                                    <p class="item-intro text-muted">${selectedProject.title}</p>
                                    <img class="img-fluid d-block mx-auto" src="img/portfolio/${selectedProject.img}">
                                    <p>${selectedProject.desc}</p>
                                    <button class="btn btn-primary" onclick="onCheckingProject('${selectedProject.name}')" type="button">Checkout Project</button><br>
                                    <ul class="list-inline">
                                        <li>Date: ${selectedProject.publishedAt}</li>
                                        <li>Client: Threads</li>
                                        <li>Category: Illustration</li>
                                    </ul>
                                    
                                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                                <i class="fa fa-times"></i>
                                Close Project</button>
                        `

    $(`.modal-body`).html(strHTMLs)
}

function onSubmit() {
    console.log('Submitting...')
}

function onEmailSubmit() {
    const email = $('#email').val()
    const subject = $('#subject').val()
    const messege = $('#messege').val()
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=benamram.ori@gmail.com&su=${subject}&body=${messege}`)
}

function onCheckingProject(project) {
    console.log('project name:', project);

}