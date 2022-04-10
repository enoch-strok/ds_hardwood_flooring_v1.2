
import { React, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import axios from 'axios';
{/* <style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')</style> */ }

const submitForm = (event) => {
  event.preventDefault();
  console.log("form submitted!");
  console.log(event.target[0].value);
  console.log(event.target[1].value);
  
  let firstName = event.target[0].value;
  let comment = event.target[1].value;
  
  // triggerCount();

  axios.post('https://ds-hardwood-flooring-server.herokuapp.com/reviews/add_review', {
  // axios.post('http://localhost:9009/reviews/add_review', {
    firstName,
    comment
      })
      .then(res => {
          console.log("Server Response: ",res);
          // triggerCount();
          // setAlerts(res.status);
      })
      .catch(err => console.log("Server Error Message: ",err));
  
    document.getElementById("reviewForm").reset();

}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Example() {
  return (
    <div className="isolate -space-y-px rounded-md shadow-sm">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              )}
            >
              <span>Add Review</span>
              <ChevronDownIcon
                className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">

                    <form  id="reviewForm" onSubmit={submitForm} method="POST">
                      <div className="w-60">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="w-60 mt-5">
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                          Add your comment
                        </label>
                        <div className="mt-1">
                          <textarea
                            rows={4}
                            name="comment"
                            id="comment"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            defaultValue={''}
                          />
                        </div>
                      </div >
                      <div className="w-60 mt-5">
                        <button
                          type="submit"
                          className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Submit Review
                        </button>
                      </div>
                    </form>

                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

    </div>
  )
}
