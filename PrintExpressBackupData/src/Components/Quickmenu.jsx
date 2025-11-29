import { useState } from 'react';
import Brochured from "../Components/Services/Brochured";
import Businesscards from "../Components/Services/Businesscards";
import Paperinsert from "../Components/Services/Paperinsert";
import Paperbags from "../Components/Services/Paperbags";
import Sidebranding from "../Components/Services/Sidebranding";
import Postersandbanners from "../Components/Services/Postersandbanners";
import Leaflets from "../Components/Services/Leaflets";
import Eventinvitations from "../Components/Services/Eventinvitations";
import Corporatestationery from "../Components/Services/Corporatestationery";
import Promotionalmaterials from "../Components/Services/Promotionalmaterials";
import Menuprinting from "../Components/Services/Menuprinting";
import Folders from "../Components/Services/Folders";
import Filefolders from "../Components/Services/Filefolders";
import Stickersandlabels from "../Components/Services/Stickersandlabels";
import Custompackaging from "../Components/Services/Custompackaging";

const services = [
  "Paper Inserts", "Side Branding", "Brochures", "Posters and Banners",
 "Corporate Stationery", "Event Invitations", "Leaflets", 
  "Promotional Materials", "Folders", "Menu Printing", "Paper Bags", 
  "File Folders", "Stickers and Labels", "Business Cards", "Custom Packaging"
];

const componentMap = {
  "Paper Inserts": <Paperinsert />,
  "Side Branding": <Sidebranding />,
  "Brochures": <Brochured />,
  "Posters and Banners": <Postersandbanners />,
  "Corporate Stationery": <Corporatestationery />,
  "Event Invitations": <Eventinvitations />,
  "Leaflets": <Leaflets />,
  "Promotional Materials": <Promotionalmaterials />,
  "Folders": <Folders />,
  "Menu Printing": <Menuprinting />,
  "Paper Bags": <Paperbags />,
  "File Folders": <Filefolders />,
  "Stickers and Labels": <Stickersandlabels />,
  "Business Cards": <Businesscards />,
  "Custom Packaging": <Custompackaging />,
};

const Quickmenu = () => {
  const [activeService, setActiveService] = useState("Paper Inserts");

  return (
    <div className="mt-20 container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-8">
        The <span className="text-red-500">Services</span> We Provide
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {services.map(service => (
          <button
            key={service}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              activeService === service ? "bg-red-500 text-white" : "bg-white text-gray-800 border"
            } hover:bg-red-500 hover:text-white transition-all`}
            onClick={() => setActiveService(service)}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Render the selected service component */}
      <div className="service-content">
        {componentMap[activeService] || <div>Select a service to view its content.</div>}
      </div>
    </div>
  );
};

export default Quickmenu;
