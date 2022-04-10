import React, { useState, useEffect }  from "react";
import axios from "axios";

const approveReview = (event) => {
  // event.preventDefault();
  console.log("review approved!");
  console.log(event.target.id);

  let review_id = event.target.id;
  // let test_id = "6195eb5d544c9609b4748e57";

  axios.post('https://ds-hardwood-flooring-server.herokuapp.com/reviews/approve_review/', {
  // axios.post('http://localhost:9009/reviews/approve_review/', { 
    review_id
      })
      .then(res => {
          console.log("Server Response: ",res);
      })
      .catch(err => console.log("Server Error Message: ",err));
  
    // document.getElementById("contactForm").reset();

};

const deleteReview = (event) => {
  // event.preventDefault();
  console.log("review deleted!");
  console.log(event.target.id);

  let review_id = event.target.id;
  // let test_id = "6195eb5d544c9609b4748e57";

  axios.delete('https://ds-hardwood-flooring-server.herokuapp.com/reviews/delete_review', { data: {review_id}})
  // axios.delete('http://localhost:9009/reviews/delete_review', { data: {review_id}})
      .then(res => {
          console.log("Server Response: ",res);
      })
      .catch(err => console.log("Server Error Message: ",err));
  
    // document.getElementById("contactForm").reset();

};

const Testimonials = (props) => {


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
    <div className="max-w-xl  mx-auto rounded-lg bg-white overflow-hidden shadow">
      <h1 className="mt-20 mb-5 font-black text-5xl">Testimonials</h1>
      <div className="">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block  sm:px-6 lg:px-8">
            <div className=" ">
              {/* <table className="table-auto ">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th
 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      First Name
                    </th>
                    <th
 
                      className=" "
                    >
                      Review
                    </th>
                    <th
 
                      className=" px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                  {reviewData.map((review) => (
                    <tr key={review.firstName}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{review.firstName}</div>
                          </div>
                        </div>
                      </td>
                      <td className="bg-emerald-200 px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className=" bg-emerald-200 text-sm max-w-prose text-sm font-medium text-gray-900 ">{review.comment}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className=" text-sm font-medium text-gray-900">{review.createdAt}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
              {/* This works but want to make it in a different layout for mobile... */}
              {/* <table className="table-fixed">
                <thead className=" ">
                  <tr>
                    <th
 
                      className=" px-6 py-3 "
                    >
                      First Name
                    </th>
                    <th
 
                      className="w-1/2 px-6 py-3 "
                    >
                      Review
                    </th>
                    <th
 
                      className=" px-6 py-3 "
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {reviewData.map((review) => (
                    <tr key={review.id} className="mb-40">
                      <td className=" ">
                        <div className=" ">
                          <div className=" ">
                            <div className=" mb-10 px-6 py-6 ">{review.firstName}</div>
                          </div>
                        </div>
                      </td>
                      <td className=" ">
                        <div className="">
                          <div className="">
                            <div className="">{review.comment}</div>
                          </div>
                        </div>
                      </td>
                      <td className="">
                        <div className="">
                          <div className="">
                            <div className="mb-10">{review.createdAt}</div>
                          </div>
                        </div>
                      </td>
                      <td className="">
                        <a href="#" className=" ">
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
              <table className="table-fixed">
                <tbody className="bg-white divide-y divide-gray-500">
                  {reviewData.map((review) => (
                    <tr key={review.id} className=" ">
                      <tr className="bg-white divide-y divide-gray-300">
                        <h1 className="text-gray-500 uppercase bg-gray-200">
                          First Name
                        </h1>
                        <div className=" ">
                          <div className=" ">
                            <div className="  pb-4">{review.firstName}</div>
                          </div>
                        </div>
                      </tr>
                      <tr className="bg-white divide-y divide-gray-300">
                        <h1 className="text-gray-500 uppercase bg-gray-200">
                          Review
                        </h1>
                        <div className="">
                          <div className="">
                            <div className=" pb-4">{review.comment}</div>
                          </div>
                        </div>
                      </tr>
                      <tr className="bg-white divide-y divide-gray-300">
                        <h1 className="text-gray-500 uppercase bg-gray-200">
                          Status
                        </h1>
                        <div className="">
                          <div className="">
                            <div className=" pb-4">{review.status}</div>
                          </div>
                        </div>
                      </tr>
                      <tr className="bg-white">
                        <h1 className="text-gray-500 uppercase bg-gray-200">
                          Date
                        </h1>
                        <div className="">
                          <div className="">
                            <div className="  pb-4">{review.createdAt}</div>
                          </div>
                        </div>
                        <div className="pt-10 pb-10">
                          <span className="relative z-0 inline-flex shadow-sm rounded-md">
                            <button
                              id={review._id}
                              type="button"
                              className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                              onClick={approveReview}
                            >
                              Approve
                            </button>
                          
                            <button
                              id={review._id}
                              type="button"
                              className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                              onClick={deleteReview}
                            >
                              Delete
                            </button>
                          </span>
                        </div>
                      </tr>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;