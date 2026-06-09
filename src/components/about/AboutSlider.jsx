import { useEffect, useState } from "react";
import { aboutImages } from "@/data/about";

export default function AboutSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === aboutImages.length - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[550px] overflow-hidden">
      {aboutImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            current === index
              ? "opacity-100"
              : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}