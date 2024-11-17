import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function section1() {
  return (
    <div className="ml-6 w-[500px] border">
      <h2>Discover the Perfect Coffee</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit atque
        repudiandae sapiente aspernatur enim tempora vitae autem, perferendis a
        ipsa, sed molestiae voluptates laboriosam ratione, incidunt delectus.
        Quia, doloribus laudantium.
      </p>
      <div>
        <button className="bg-[#695212] rounded-xl px-4 py-1 my-5">
          <a href="#" className="flex items-center">
            Order Now <IoIosArrowForward />
          </a>
        </button>
        <div className="flex justify-center gap-6 text-xs">
          <div className="grid grid-cols-1 text-center">
            <p>20+</p>
            <p>Coffee are available</p>
          </div>
          <div className="grid grid-cols-1 text-center">
            <p>20+</p>
            <p>Coffee are available</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default section1;
