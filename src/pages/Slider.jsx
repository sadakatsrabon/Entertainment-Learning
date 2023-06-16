import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const Slider = () => {
  const carouselItems = [
    "https://drive.google.com/uc?id=1M0z3xlY-CfJw-VZ1PeDaeqwNsqHxYlTZ",
    "https://drive.google.com/uc?id=1s742No4JEflBi9pGxqDKTq5UqHL3Crp2",
    "https://drive.google.com/uc?id=1M0z3xlY-CfJw-VZ1PeDaeqwNsqHxYlTZ",
    "https://drive.google.com/uc?id=1E8Rth6HlwZFXFYON7hte48Bs_bfgfIMd",
    "https://drive.google.com/uc?id=1zTuKbXncQdLV4E-ogjGc4z7uvYt69VJr",
    "https://drive.google.com/uc?id=1Lt9joWGRRQIiNtRip1YVDT27EVBXq5KZ",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageLoaded = false
    

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className="container mx-auto m-5">
      <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
          <h1 className="py-4 text-4xl font-bold text-green-500">
            Let's learn with Entertainment
          </h1>
          <p className="text-green-900 p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum porro, officiis eaque assumenda quasi atque ullaatis officia, illo minima amet similique, et quod eos totam? Labore voluptas nobis laudantium vel facilis minima, eius molestias ea, consequatur quidem minus eaque earum ducimus ut ab odit suscipit harum eligendi aliquam blanditiis nam tenetur illo magni maiores? Expedita, tempore? Sint rerum at optio laudantium eum nulla? Perferendis praesentium magnam aliquam, id maxime expedita omnis odit distinctio soluta harum aspernatur culpa illo explicabo delectus fuga facilis iusto, asperiores enim commodi? Quibusdam tempoutem. Ea voluptate ratione excepturi eveniet accusamus facilis dicta quibusdam dolor! Voluptate, fuga, veritatis id voluptates animi itaque autem voluptas exercitationem tempore vero porro magni reiciendis fugiat, at iste voluptatum illum suscipit provident accusamus eaque ut eveniet assumenda. Sed est deserunt consequuntur reiciendis.
          </p>
          <Link to="/classes">
            <button className="text-green-900 hover:bg-orange-600 text-green-500 font-bold py-2 px-4 rounded ">
              Enroll Now
            </button>
          </Link>
        </div>
        <div className="carousel w-full md:w-1/2 rounded-lg overflow-hidden">
          <div
            className="flex"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className="carousel-item flex-shrink-0 w-full h-96"
              >
                {!imageLoaded[index] && (
                  <div className="flex items-center justify-center">
                    <iframe src="https://embed.lottiefiles.com/animation/96684"></iframe>
                  </div>
                )}
                <LazyLoad height={762}>
                  <img
                    src={item}
                    className={`w-full h-full object-fill ${
                      imageLoaded[index] ? "opacity-100" : "opacity-0"
                    }`}
                    alt={`Toy ${index + 1}`}
                    onLoad={() => handleImageLoad(index)}
                  />
                </LazyLoad>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <div className="bg-black rounded my-12 h-1 w-full"></div>
    </div>
  );
};

export default Slider;
