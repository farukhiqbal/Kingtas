import React from 'react'
import { Link } from 'react-router-dom'

const Contactus = () => {
  return (
    <div>
     <main className="clearfix w-full  mt-[6rem]">
      <div className="flex flex-wrap">
        <section id="content" className="w-full">
          <div id="post-9" className="post-9 page type-page status-publish hentry">
            <div className="post-content">
              <div className="w-full bg-transparent border-t-0 border-r-0 border-b-0 border-l-0 border-solid border-gray-200">
                <div className="flex flex-wrap items-flex-start">
                  <div className="w-full md:w-1/2 p-4">
                    <div className="bg-cover h-full aspect-w-16 aspect-h-12">



                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.986129014199!2d72.69184807545714!3d31.165660064581377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39230183d8e6fb91%3A0x23db602042f340a2!2sKing%20TAS%20college%20of%20nursing%20%26%20Allied%20health%20sciences%20Gojra!5e0!3m2!1sen!2s!4v1706007387385!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full"
                    />

                      {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.759199999573!2d73.08243602506526!3d31.420759902057675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a02d85cd61%3A0xeb87b3502f8da7fa!2sHilal-e-Ahmar%20Maternity%20Hospital%2C%20University%20Rd%2C%20Faisalabad%2C%20Punjab%2038850%2C%20Pakistan!5e0!3m2!1sen!2s!4v1703923308849!5m2!1sen!2s"
                        width={600}
                        height={700}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                  
                        className="w-full h-full"
                      /> */}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-4">
                    <div className="footer-links lg:text-left">
                      <h2 className="text-4xl font-semibold lg:ml-6">CONTACT US</h2>
                      <ul className="space-y-2 mt-5">
                        <li className="uannum">
                          <Link className="text-black hover:text-red no-underline hover:underline" to="tel:021-111-174-174">
                            <i className="fa fa-phone mr-3 text-[1.5rem]" aria-hidden="true" />
                            <span className="spa      text-[1.5rem] pl-1">Phone Number: +92302-8098542</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="text-black hover:text-red no-underline hover:underline" to="mailto:info@patel-hospital.com">
                            <i className="fa fa-envelope mr-3 text-[1.5rem]" aria-hidden="true" />
                            <span className="spa text-[1.5rem] pl-1">kingtascolg@gmail.com</span>
                          </Link>
                        </li>
                        <li>
                          <i className="fa fa-map-marker mr-2 text-[1.5rem]" style={{ color: "black" }} aria-hidden="true" />
                          <span className="spa text-black text-[1.5rem] pl-1">College Road main Painsera road Gojra. Distt Toba Tek Singh</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>


    </div>
  )
}

export default Contactus





