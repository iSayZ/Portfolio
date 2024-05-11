import { useState } from "react";

function Gallery({ project }) {
  const [active, setActive] = useState(project.img[0]);

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-50 p-8 h-full w-full overflow-y-scroll flex justify-center items-center backdrop-blur-sm">
      <div className="grid gap-4 p-0">
        <div className="m-auto">
          <img
            className="h-auto max-w-full object-cover object-center md:h-[480px]"
            src={active}
            alt=""
          />
        </div>
        <div className="w-full flex justify-center space-x-6">
          {project.img.map((img, index) => (
            <div key={index}>
              <img
                onClick={() => setActive(img)}
                src={img}
                className="h-20 max-w-full cursor-pointer object-center object-contain"
                alt="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
