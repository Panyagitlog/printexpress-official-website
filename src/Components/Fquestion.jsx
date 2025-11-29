// import React from "react";

const faqsList = [
  {
    q: "What types of printing services do you offer?",
    a: "We offer a wide range of printing services, including digital printing, offset printing, large format printing, and specialty printing for materials like brochures, business cards, banners, and more.",
  },
  {
    q: "What is the turnaround time for printing orders?",
    a: "Our standard turnaround time is typically 3-5 business days, but we also offer rush services for urgent projects. Please contact us for specific timelines based on your order.",
  },
  {
    q: "Can I see a proof before my order is printed?",
    a: "Yes! We provide digital proofs for approval before printing. This ensures that you can review and make any necessary changes to your design.",
  },
  {
    q: "Do you offer custom sizes for printed materials?",
    a: "Absolutely! We can accommodate custom sizes for most printed products. Just let us know your requirements, and we’ll work with you to create the perfect solution.",
  },
  {
    q: "What file formats do you accept for printing?",
    a: "We accept a variety of file formats, including PDF, JPG, PNG, and TIFF. For the best results, we recommend providing print-ready PDFs with all fonts embedded.",
  },
];


export const Fquestion = () => {
  return (
    <>
      <section className=" bg-[#fffff0] py-14 bg-white-900 py-24 sm:py-32  justify-items-center	 ">
        <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
          <div className="flex-1">
            <div className="max-w-lg">
              <h3 className="font-semibold text-black-400">
                Frequently asked questions
              </h3>
              <p className="mt-3 text-black text-3xl font-extrabold sm:text-4xl">
                All information you need to know
              </p>
      {/* <div className="mt-8 min-h-[530px] overflow-hidden rounded-md bg-white">
        <img
          src="https://i.ibb.co/zPdf7Wg/Untitled-design-15.png"
          alt=""
          className="inline-block"
        />
      </div> */}
            </div>
          </div>
          <div className="flex-1 mt-12 md:mt-0">
            <ul className="space-y-4 divide-y divide-gray-900">
              {faqsList.map((item, idx) => (
                <li className="py-5" key={idx}>
                  <summary className="flex items-center justify-between font-semibold text-gray-900">
                    {item.q}
                  </summary>
                  <p
                    dangerouslySetInnerHTML={{ __html: item.a }}
                    className="mt-3 text-gray-900 leading-relaxed"
                  ></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white">
        </div>
      </section>
    </>
  );
};
