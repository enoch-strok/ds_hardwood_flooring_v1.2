import React from "react";
import axios from "axios";


// const API_URI = process.env.REACT_APP_API_SERVER_QUOTE_ADD;


const submitForm = (event) => {
  event.preventDefault();
  console.log("form submitted!");
  
  let serviceType = event.target[0].value;
  let estimateSQFT = +event.target[1].value;
  let firstName = event.target[2].value;
  let lastName = event.target[3].value;
  let email = event.target[4].value;
  let phone = event.target[5].value;
  let jobDescription = event.target[6].value;
  
  // triggerCount();

  axios.post('https://ds-hardwood-flooring-server.herokuapp.com/quotes/add_quote', {
  // axios.post('http://localhost:9000/guest/add', {
    serviceType,
    estimateSQFT,
    jobDescription,
    firstName,
    lastName,
    email,
    phone
      })
      .then(res => {
          console.log("Server Response: ",res);
          // triggerCount();
          // setAlerts(res.status);
      })
      .catch(err => console.log("Server Error Message: ",err));
  
    document.getElementById("quoteForm").reset();

}


const component_quote = props => {
    return (
        <div>
            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>

            <div className="mt-10 sm:mt-0">
                {/* Top of Quote Details */}
                <div className="md:grid md:grid-cols-1 md:gap-6 ">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            {/* <h3 className="text-lg font-medium leading-6 text-gray-900">Quote Details</h3> */}
                            <p className="mt-1 text-sm text-gray-600">Please let us know some information that helps us give you the most accurate quote.</p>
                        </div>
                    </div>
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <form id="quoteForm" onSubmit={submitForm} method="POST" className="grid grid-cols-2 gap-4 gap-y-6">
                    <div className="row-start-1 col-start-1 sm: row-start-1 col-start-1 col-span-1">
                      <label htmlFor="service type" className="block text-sm font-medium text-warm-gray-900">
                        Service Type
                      </label>
                      <div className="mt-1">
                        <select
                          id="service type"
                          name="service type"
                          autoComplete="service type"
                          className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                        >
                          <option>Refresh</option>
                          <option>Refinish</option>
                          <option>New Install</option>
                        </select>
                      </div>
                    </div>
                    <div className="row-start-1 col-start-2 sm: row-start-1 col-start-2 col-span-1">
                      <label htmlFor="subject" className="block text-sm font-medium text-warm-gray-900">
                        Estimate SqFt
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="subject"
                          id="subject"
                          className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    
                    <div className='col-span-1 row-start-4'>
                      <label htmlFor="first-name" className="block text-sm font-medium text-warm-gray-900">
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className='col-span-1 row-start-4'>
                      <label htmlFor="last-name" className="block text-sm font-medium text-warm-gray-900">
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className='col-span-2 row-start-5'>
                      <label htmlFor="email" className="block text-sm font-medium text-warm-gray-900">
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className='row-start-6 sm: row-start-6 col-span-2'>
                        <label htmlFor="phone" className="block text-sm font-medium text-warm-gray-900">
                          Phone (Optional)
                        </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                          aria-describedby="phone-optional"
                        />
                      </div>
                    </div>
                    <div className="col-span-2 sm:col-span-2 row-start-2">
                        <label htmlFor="message" className="block text-sm font-medium text-warm-gray-900">
                          Job Description
                        </label>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md"
                          aria-describedby="message-max"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className="col-span-2 sm:col-span-2 row-start-7 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg text-base font-medium text-black bg-teal-800 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default component_quote;