import React from 'react';

const Footer = () => {
  return (
   <>


<div className="mt-5">

  
<footer className="bg-dark text-center text-white">
  <div className="container p-4">

    <section className="mb-4">
     
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>
      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i
      ></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-instagram"></i
      ></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>
    <section className="">
      <form action="">
        
        <div className="row d-flex justify-content-center">
         
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up to appreciate us</strong>
            </p>
          </div>

          <div className="col-md-5 col-12">
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example2" className="form-control" />
              <label className="form-label mt-2" htmlFor="form5Example2">Email address</label>
            </div>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        </div>

      </form>
    </section>

    <section className="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>
    
  </div>
  <div className="text-center p-3 mt-5" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright :
    <a className="text-white" href="https://mdbootstrap.com/" style={{textDecoration:"none"}}> TextUtils</a>
  </div>
</footer>
</div>

   </>
)}

export default Footer;
