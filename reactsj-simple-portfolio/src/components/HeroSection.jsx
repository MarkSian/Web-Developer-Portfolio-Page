import profile from "../assets/img/pfp.jpg";

function HeroSection() {
    return (
        <>
        <div class ="container">
            <div class=" full-screen-height row flex-lg-row-reverse justify-content-center align-items-center text-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src={profile} class=" border-outline rounded-circle d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="450" height="500" loading="lazy"/>
                </div>
                <div class="col-lg-4">
                    <h1 class="display-5 fw-bold text-body-emphasis lh-2 mb-2">Mark Sianipar Full Stack Developer</h1>
                    <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-center">
                    <a href="https://github.com/MarkSian" target="_blank" rel="noopener noreferrer">
                    <button type="button" class="btn btn-dark btn-lg px-4 me-md-2">GitHub</button>
                    </a>
                    
                    </div>
                </div>
                </div>
        </div>
        </>
    );
}



export default HeroSection;