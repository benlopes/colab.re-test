import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="relative flex place-items-center">
      <Image
        className="relative"
        src="/colab-logo.png"
        alt="Colab.re Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  );
}

export default Header;
