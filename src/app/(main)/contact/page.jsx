import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
<div>
  <div className="hero-wrap" style={{backgroundImage: 'url("images/bg_1.jpg")'}}>
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
        <div className="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          <div className="text">
            <p className="breadcrumbs mb-2"><span className="mr-2"><Link href="/">Home</Link></span> <span>Contact</span></p>
            <h1 className="mb-4 bread">Contact Us</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="ftco-section contact-section bg-light">
    <div className="container">
      <div className="row d-flex mb-5 contact-info">
        <div className="col-md-12 mb-4">
          <h2 className="h3">Contact Information</h2>
        </div>
        <div className="w-100" />
        <div className="col-md-3 d-flex">
          <div className="info bg-white p-4">
            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
        </div>
        <div className="col-md-3 d-flex">
          <div className="info bg-white p-4">
            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
          </div>
        </div>
        <div className="col-md-3 d-flex">
          <div className="info bg-white p-4">
            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
          </div>
        </div>
        <div className="col-md-3 d-flex">
          <div className="info bg-white p-4">
            <p><span>Website</span> <a href="#">yoursite.com</a></p>
          </div>
        </div>
      </div>
      <div className="row block-9">
        <div className="col-md-6 order-md-last d-flex">
          <form action="#" className="bg-white p-5 contact-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea name id cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
            </div>
            <div className="form-group">
              <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
            </div>
          </form>
        </div>
        <div className="col-md-6 d-flex">
          <div id="map" className="bg-white" />
        </div>
      </div>
    </div>
  </section>
</div>


    </>
  )
}

export default page