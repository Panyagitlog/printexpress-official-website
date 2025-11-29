
export const Aboutus = () => {
  return (
	<>
	<div>
<div className="mt-60 flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-800 to-purple-900 p-10 rounded-lg shadow-lg">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          className="h-108 w-1000 rounded-lg object-cover"
          src="https://cdn.dribbble.com/userupload/2841289/file/original-448f55d969c7c1c90ba657a638121f3f.png?resize=752x" // Replace with your image path
          alt="Client"
        />
      </div>

      {/* Text Section */}
      <div className="mt-6 md:mt-0 md:ml-10 text-white">
        <svg
          className="absolute top-0 left-0 h-10 w-10 text-purple-300 opacity-40"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9.53 6.8c.35-1.32.98-2.4 1.91-3.27 1.03-.96 2.31-1.43 3.81-1.43 1.68 0 3.03.56 4.05 1.7 1.02 1.12 1.53 2.49 1.53 4.11 0 1.71-.6 3.15-1.81 4.33-1.22 1.18-2.73 1.77-4.52 1.77-.53 0-.98-.04-1.34-.12l-.3-3.12c.51.09 1.08.13 1.7.13 1.09 0 1.96-.37 2.61-1.1.64-.74.97-1.66.97-2.75 0-.85-.26-1.53-.78-2.04-.5-.52-1.15-.77-1.96-.77-.67 0-1.26.24-1.76.7-.49.48-.84 1.18-1.03 2.1L9.53 6.8zm8.61 0c.35-1.32.98-2.4 1.91-3.27" />
        </svg>
        <blockquote className="relative">
          <p className="text-lg font-medium">
            Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc.
            Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.
          </p>
        </blockquote>
        <div className="mt-4">
          <p className="text-base font-semibold">Judith Black</p>
          <p className="text-sm font-light">CEO of Tuple</p>
        </div>
      </div>
    </div>

{/* ---------------------------------------------------------------------------------------------------------------------------------------- */}
        <section>
			{/* Container */}
			<div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
				{/* Component */}
				<div className="flex flex-col items-center">
					{/* Item */}
					<div className="relative">
						<div className="absolute w-1 md:w-2 bg-red-500 h-full left-1/2 transform -translate-x-1/2"></div>
						{/* Static Event Entry */}
						<div className="mb-20 mt-20 flex items-center w-full">
							<div className="w-1/2 text-right pr-5 md:pr-12">
								<h5 className="text-lg md:text-2xl font-semibold">
									August 2014
								</h5>
							</div>
							<div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-red-500"></div>
							<div className="w-1/2 pl-5 md:pl-12">
								<h6 className="text-md md:text-xl font-semibold mb-3">
									Started the company
								</h6>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
									aliquam, purus sit amet luctus.
								</p>
							</div>
						</div>
						{/* Another Static Event Entry */}
						<div className="mb-20 mt-20 flex items-center w-full">
							<div className="w-1/2 text-right pr-5 md:pr-12">
								<h5 className="text-lg md:text-2xl font-semibold">
									September 2016
								</h5>
							</div>
							<div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-red-500"></div>
							<div className="w-1/2 pl-5 md:pl-12">
								<h6 className="text-md md:text-xl font-semibold mb-3">
									First Client
								</h6>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
									aliquam, purus sit amet luctus.
								</p>
							</div>
						</div>
					</div>
					{/* Item */}
					<div className="relative">
						<div className="absolute w-1 md:w-2 bg-red-300 h-full left-1/2 transform -translate-x-1/2"></div>
						{/* More Static Entries */}
						<div className="mb-20 mt-20 flex items-center w-full">
							<div className="w-1/2 text-right pr-5 md:pr-12">
								<h5 className="text-lg md:text-2xl font-semibold text-gray-600">
									January 2017
								</h5>
							</div>
							<div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-red-300"></div>
							<div className="w-1/2 pl-5 md:pl-12">
								<h6 className="text-md md:text-xl font-semibold text-gray-600 mb-3">
									Hired our first Dev
								</h6>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
									aliquam, purus sit amet luctus.
								</p>
							</div>
						</div>
						{/* And another one */}
						<div className="mb-20 mt-20 flex items-center w-full">
							<div className="w-1/2 text-right pr-5 md:pr-12">
								<h5 className="text-lg md:text-2xl font-semibold text-gray-600">
									May 2017
								</h5>
							</div>
							<div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-300"></div>
							<div className="w-1/2 pl-5 md:pl-12">
								<h6 className="text-md md:text-xl font-semibold text-gray-600 mb-3">
									Raised $5M
								</h6>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
									aliquam, purus sit amet luctus.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>

	</>
  )
}
