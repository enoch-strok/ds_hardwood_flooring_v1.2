
import React, { useState, useEffect }  from "react";
import SubmitTestimonialsCard from "./components/SubmitTestimony";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
{/* <style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')</style> */ }

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function Example() {

  let [reviewData, setreviewData] = useState([{status: "loading..."},]);
   
  useEffect(async () => {

    const result = await axios.get(
      'https://ds-hardwood-flooring-server.herokuapp.com/reviews/show_reviews'
      // 'http://localhost:9009/reviews/show_reviews'
      );

    setreviewData(result.data);
  },[]);

  console.log("start of reviews: ", reviewData);

 

  return (
    <div>
      <div>
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800 ">
          <div className="w-full max-w-6xl mx-auto ">
            <div className="text-center max-w-xl mx-auto ">
              <h1 className="text-6xl md:text-5xl font-bold mb-5 text-gray-600">What people are saying.</h1>
              <h3 className="text-xl mb-5 font-light">Here are some of our clients' feedback.</h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            {/* <div className="-mx-3 grid-cols-3 md:grid-cols-3 flex items-start"> */}
            {/* <div className=" grid-cols-3"> */}
            <div>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={false} // means to render carousel on server-side.
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={10000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {reviewData.map((review) => 
                  review.status === 'Approved'
                  ? (
                      (
                        <div className="col-span-1 mx-3">
                          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div className="w-full flex mb-4 items-center">
                              <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                              </div>
                              <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">{review.firstName}.</h6>
                              </div>
                            </div>
                            <div className="w-full">
                              <p className="text-sm leading-tight">
                                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                  {review.comment}
                                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    )
                  : null
              )}
            </Carousel>

            {/* {reviewData.map((review) => (
              // <div className="col-span-1 px-3 md:w-1/3">
              <div className="col-span-1">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">{review.firstName}.</h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                        {review.comment}
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                    </p>
                  </div>
                </div>
              </div>
            ))} */}
            </div>
            <div className="grid justify-items-center">
              <div className="mt-12 mb-80">
                <SubmitTestimonialsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
