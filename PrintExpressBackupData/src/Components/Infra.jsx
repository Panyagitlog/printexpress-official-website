import { TypeAnimation } from "react-type-animation";

const Infra = () => {
    return (
      <div className="mt-80 mb-80 flex flex-col items-center justify-center">
        <h2 className=" text-center text-yellow-600 font-bold">Infrastructure Section in Progress: Our New Website is Coming Soon!</h2>
        <TypeAnimation
           className="text-4xl font-bold mb-4 text-center text-blue-600"
              sequence={[
                "Printing simplified,",
                1000,
                "Customized, and executed",
                2000,
                "Perfection for you.",
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "2em",
                display: "inline-block",
                fontweight: "bold",
              }}
            />
      </div>
    );
  };
  
  export default Infra;
  