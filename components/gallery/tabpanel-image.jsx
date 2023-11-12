import { Tab } from "@headlessui/react";
import NextImage from "next/image";

const TabPanelImage = ({ image }) => {
  return (
    <>
      {image.attributes.infoimg.data.map((item) => (
        <Tab.Panel key={item.id}>
          <div className="relative">
            {image?.attributes?.stock === 1 && (
              <div className="absolute flex items-center justify-center w-full h-full z-10 font-semibold bg-soldout">
                <span className="bg-black rounded-md px-4 py-2 uppercase text-sm text-white">
                  Jashtë Stokut
                </span>
              </div>
            )}
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <NextImage
                fill
                src={process.env.NEXT_PUBLIC_IMAGES_URL + item.attributes.url}
                alt="Image"
                className="object-contain object-center"
              />
            </div>
          </div>
        </Tab.Panel>
      ))}
    </>
  );
};

export default TabPanelImage;
