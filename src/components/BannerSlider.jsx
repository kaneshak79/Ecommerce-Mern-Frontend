import React, { useEffect, useState } from "react";

const BannerSlider = () => {
  const banners = [
    "/images/banner1.jpeg",
    "/images/banner2.webp",
    "/images/banner3.jpg",
    "/images/banner4.webp",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  // 🔥 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden">

      {/* IMAGE */}
      <img
        src={banners[current]}
        alt="banner"
        className="w-full h-full object-cover transition duration-500"
      />

      {/* LEFT ARROW */}
      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ⬅
      </button> */}

      {/* RIGHT ARROW */}
      {/* <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ➡
      </button> */}

      {/* LEFT ARROW */}
<button
  onClick={prevSlide}
  className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow flex items-center justify-center transition"
>
  ‹
</button>

{/* RIGHT ARROW */}
<button
  onClick={nextSlide}
  className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow flex items-center justify-center transition"
>
  ›
</button>

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;