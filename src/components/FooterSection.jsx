function FooterSection () {
  return (
        <>
        <footer class="d-flex sticky-bottom flex-wrap bg-body-secondary justify-content-between align-items-center py-3 my-4 border-top">
            <p class="col-md-4 mb-0 text-body-primary fw-bold">© Mark Sianipar. All Rights Reserved</p>

            <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
            </a>

            <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><a href="#home" class="nav-link px-2 text-body-secondary fw-bold">Home</a></li>
            <li class="nav-item"><a href="https://github.com/MarkSian" class="nav-link px-2 text-body-secondary fw-bold">Github</a></li>
            <li class="nav-item"><a href="https://www.linkedin.com/feed/?nis=true" class="nav-link px-2 text-body-secondary fw-bold">LinkedIn</a></li>
            </ul>
        </footer>
        </> 
    );
}

export default FooterSection;