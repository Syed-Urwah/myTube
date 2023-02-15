import React from "react";

export default function ModalCreateVideo() {


  function handleModal(e){
    e.preventDefault()
    document.getElementById('modal-video').classList.remove('modalAnimationDown')
    document.getElementById('modal-video').classList.add('modalAnimationUp')
    document.getElementById('main').classList.remove('opacity-70')
    document.getElementById('header').classList.remove('opacity-70')
    document.getElementById('body').classList.remove('overflow-y-hidden')
    document.getElementById('modal-video').classList.remove('flex')
    document.getElementById('modal-video').classList.add('hidden')
  }
  

  return (
    <section
      id="modal-video"
      className="absolute hidden text-white w-1/4 justify-center items-start mx-auto  flex-col top-[-120vh] left-0 right-0 z-10 bg-bg-main rounded-2xl py-10 px-5"
    >
      <h2 className="text-2xl">Add a Video</h2>
      <form className="flex flex-col gap-5 w-full">
        <div className="first-row flex gap-5">
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              className="bg-transparent border-gray-600 border rounded-md"
              type="text"
              id="title"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="title">Tag</label>
            <select
              className="bg-slate-800 px-4 py-1 rounded-md"
              name="tags"
              id="tags"
            >
              <option value="">Select</option>
              <option value="games">Game</option>
              <option value="movie">Movie</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <textarea
            className="bg-transparent border-gray-600 border rounded-md h-40"
            type="text"
            id="description"
          />
        </div>

        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>

        <div className="buttons flex justify-end gap-2">
          <button className="border-blue-600 border border-solid rounded-md px-4 py-2 hover:bg-blue-700 hover:text-black">Create</button>
          <button onClick={handleModal} className="border-blue-600 border border-solid rounded-md px-4 py-2 hover:bg-blue-700 hover:text-black">Cancel</button>
        </div>
       
      </form>
    </section>
  );
}
