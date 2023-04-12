import { propsProps } from "@/types";
import Image from "next/image";
import React from "react";

function Card({
  firstName,
  lastName,
  email,
  city,
  country,
  imgSrc,
  width = 128,
  height = 128,
}: propsProps) {
  return (
    <div className="py-3 pl-2 pr-[70px] m-5 rounded-md flex gap-5 items-center border text-md md:p-3">
      <Image
        src={imgSrc}
        alt={`${firstName}'s avatar`}
        width={width}
        height={height}
        className="rounded-md"
      />
      <div>
        <p>
          <strong>
            {firstName} {lastName}
          </strong>
        </p>
        <p>{email}</p>
        <p>
          {city}, {country}
        </p>
      </div>
    </div>
  );
}

export default Card;
