import React from "react";

export default function Contact() {
  return (
    <div className="pt-20 mb-20">
      <h2 className="xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">
        Contact
      </h2>
      <div className="bg-gray-300 text-center flex-col justify-centered rounded-md shadow-xl px-4 py-4 mx-auto mt-20 xs:w-4/5 sm:w-3/5">
        <div className="bg-white rounded-md shadow xs:px-0 px-6 py-14 mx-auto">
          <section className="text-gray-700 body-font relative">
            <div className="container px-5 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Send me a message!
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  If you like the work I've done or just want to chat, lets
                  start talking!
                </p>
              </div>
              <div className="lg:w-3/4 md:w-3/4 mx-auto">
                <form
                  action="https://formspree.io/f/mjvdrbjr"
                  target="_blank"
                  method="POST"
                >
                  <div className="flex xms:flex-col sm:flex-wrap -m-2">
                    <div className="p-2 md:w-1/2">
                      <div className="relative">
                        <label
                          for="name"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 md:w-1/2">
                      <div className="relative">
                        <label
                          for="email"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label
                          for="message"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <button
                        type="submit"
                        className="submit-button py-3 px-8 rounded-full"
                      >
                        Send message
                      </button>
                    </div>
                  </div>
                </form>
                <div className="p-2 w-full pt-8 mt-4 border-t border-gray-200 text-center">
                  <a className="text-indigo-500">kschmelter13@gmail.com</a>
                  <p className="leading-normal my-5">Ellington, CT 06029</p>
                  <span className="inline-flex">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/kevin-schmelter-3b84291b5/"
                      className="text-gray-500"
                    >
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-8 h-8"
                        viewBox="0 0 44 44"
                      >
                        <path d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
