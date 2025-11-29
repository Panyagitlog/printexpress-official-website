// Components/Homepage.js
import { TypeAnimation } from 'react-type-animation';
// import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <header className="mt-20 sm:mt-10 bg-white dark:bg-white-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <div className="lg:max-w-lg">
                <TypeAnimation
                  sequence={[
                    'Fast, Reliable,',
                    1000,
                    'High Quality',
                    2000,
                    'Printing',
                    () => {
                      console.log('Sequence completed');
                    },
                  ]}
                  wrapper="h1"
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    fontSize: "2em",
                    display: "inline-block",
                    fontweight: "bold",
                  }}     />
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-400">
                  At PrintXpress, we specialize in delivering top-notch printing solutions that cater to all your business needs. 
                  From vibrant brochures to custom packaging, our technology ensures high-quality results every time.
                </p>
                <button className="w-full px-5 py-3 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-red-500 rounded-lg lg:w-auto hover:bg-red-400 focus:outline-none focus:bg-red-400">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2">
              <img
                className="mt-10 w-full lg:max-w-3xl transition-all duration-300 hover:scale-105"
                src="https://i.ibb.co/r4hFVqp/Untitled-design-4.png"
                alt="Catalogue"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
