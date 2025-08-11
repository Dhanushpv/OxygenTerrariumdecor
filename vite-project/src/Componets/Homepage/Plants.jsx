import React, { useState } from "react";
import TPIMG1 from "../../assets/images/homepageImages/TPIMG1.png";
import TPIMG2 from "../../assets/images/homepageImages/TPIMG2.png";
import TPIMG3 from "../../assets/images/homepageImages/TPIMG3.png";
import TPIMG4 from "../../assets/images/homepageImages/TPIMG4.png";
import TPIMG5 from "../../assets/images/homepageImages/TPIMG7.png";
import TPIMG6 from "../../assets/images/homepageImages/TPIMG6.png";



export default function Plant() {
  const [items, setItems] = useState([
    { id: 0, url: TPIMG1 },
    { id: 1, url: TPIMG2 },
    { id: 2, url: TPIMG3 },
    { id: 3, url: TPIMG4 },
    { id: 4, url: TPIMG5 },
    { id: 5, url: TPIMG6 },
    // { id: 6, url: "https://tinyurl.com/3cksf5nf" },
    // { id: 7, url: "https://tinyurl.com/4e6sb4eu" },
    // { id: 8, url: "https://tinyurl.com/4e6sb4eu" },
  ]);

  const total = items.length;
  const centerIndex = Math.floor(total / 2);

  const shuffle = (clickedIndex) => {
    setItems((prev) =>
      prev.map((item, index) => {
        let newPos = (index - clickedIndex + total) % total;
        return { ...item, pos: newPos };
      })
    );
  };

  return (
<div className="flex items-center justify-center w-full gap-8 px-8">

  <div className="max-w-md">
    <h1 className="text-7xl font-medium">The Beauty of Every Leaf</h1>
    <p className="mt-4 text-lg">
      Each leaf is nature’s masterpiece — capturing light, purifying air, and adding living beauty to your space, telling a quiet story of growth and renewal.
    </p>
  </div>


  <div className="flex justify-center">
    <div id="app">
      <ul
        className="gallery"
        style={{
          "--center": centerIndex,
          "--total": total,
        }}
      >
        {items.map((item, index) => (
          <li
            key={item.id}
            data-pos={item.pos ?? index}
            style={{
              "--pos": item.pos ?? index,
              backgroundImage: `url(${item.url})`,
            }}
            onClick={() => shuffle(index)}
          ></li>
        ))}
      </ul>
    </div>
  </div>
</div>

  );
}
