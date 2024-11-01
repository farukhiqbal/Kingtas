import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import marketing from '../../assets/images/marketing.jpeg'
import graphic from '../../assets/images/graphic designing.jpeg'
import officemanagement  from '../../assets/images/office mangement.jpeg'
import appdevelopment from '../../assets/images/app development.jpeg'
import multimedia from  '../../assets/images/multimedia.jpeg'



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const OfferProgram = ({ deviceType }) => {
  const Healthimage = [
   
    {
      title: "office management  ",
      imagesrc: officemanagement,
      link: "#",
    },

    {
        title: "Graphic Designing  ",
        imagesrc: graphic,
        link: "#",
      },
      {
        title: "Office Management  ",
        imagesrc: officemanagement,
        link: "#",
      },

      {
        title: "  Android  App Development  ",
        imagesrc:appdevelopment ,
        link: "#",
      },   {
        title: "  Digital Marketing ",
        imagesrc: marketing,
        link: "#",
      },
      {
        title: " MULTIMEDIA  ",
        imagesrc: multimedia,
        link: "#",
      },
    
   
  ];

  return (
    <div className="w-full py-2 md:py-[3rem]    lg:mt-[3rem]">
      <div className="w-full mx-auto md:w-[85vw] lg:w-[85vw] xl:w-[85vw] 2xl:w-[85vw] md:mx-auto">
        <h2 className="text-center font-bold    text-3xl  lg:text-5xl mb-[2rem]">
          OUR OFFERS PROGRAMS 
        </h2>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={deviceType !== "mobile" ? true : false}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          removeArrowOnDeviceType={[""]} // Remove arrow buttons on all device types
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          renderButtonGroupOutside={true} // Render button group outside of carousel
          //   customLeftArrow={
          //     <div className="absolute  transform -translate-y-1/2 left-[-7px]">
          //       <button className="bg-gray-300 text-black  p-3   hover:bg-[#2e3092] hover:text-white rounded-md ml-2">
          //         <FaChevronLeft />
          //       </button>
          //     </div>
          //   } // Custom left arrow
          //   customRightArrow={
          //     <div className="absolute  transform -translate-y-1/2 right-0">
          //       <button className="bg-gray-300 text-black  p-3   hover:bg-[#2e3092] hover:text-white rounded-md ml-2">
          //         <FaChevronRight />
          //       </button>
          //     </div>
          //   } // Custom right arrow
        >
          {Healthimage.map((image) => (
            <div
              key={image.id}
              className=" relative w-[400px]  rounded-lg   mx-auto md:w-[300px]  lg:w-[300px] h-[50vh]"
            >
              <div className="w-full md:w-[298px]  h-[250px]">
                <img
                  src={image.imagesrc}
                  className="mx-auto w-full h-full rounded-md"
                  alt=""
                />
              </div>

              <div 
  className="py-2 rounded-md mt-[1.5rem] border-2 border-black hover:bg-black hover:text-white  transition duration-200 ease-in-out"
>
  <p 
    className="ml-1 text-lg py-2 text-center text-capitalize  mt-[1px] font-semibold "
  >
    {image.title}
  </p>
</div>
            </div>
          ))}
        </Carousel>
      </div>

    </div>
  );
};

export default OfferProgram;
