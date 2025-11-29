export const Howwedoit = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white-100 py-10">
      <h2 className="mb-8 text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-red-400  dark:text-black">
         HOW WE DO IT
      </h2>

      <div className="relative w-full max-w-4xl">
        {/* Glass effect background behind the video */}
        <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg z-0"></div>

        {/* Video element remains unblurred */}
        <video
          src="https://videos.pexels.com/video-files/3936483/3936483-hd_1920_1080_30fps.mp4"
          type="video/mp4"
          loop
          autoPlay
          muted
          controls
          className="relative rounded-lg shadow-lg w-full z-10"
        />
      </div>
    </div>
  );
};
