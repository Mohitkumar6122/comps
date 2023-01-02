import React from "react";
import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      {/* <div className="text-3xl font-bold underline">ButtonPage</div> */}
      <div>
        <Button primary rounded>
          <GoBell />
          Click Me
        </Button>
      </div>
      <div>
        <Button secondary outline rounded>
          {" "}
          Buy Now{" "}
        </Button>
      </div>
      <div>
        <Button success> See Deal! </Button>
      </div>
      <div>
        <Button warning outline>
          <GoCloudDownload /> Hide Ads{" "}
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GoDatabase /> Share{" "}
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
