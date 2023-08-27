import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import { IScrollData, IScrollObject } from "react-scrollsy/dist/types";

import { useRef } from "react";
import { LogoSpring } from "../spring-components/LogoSpring";

function LogoExample() {
  const refPageProgress = useRef(null);

  return (
    <ScrollTrackerDocument resizeThrottle={150}>
      {({ scrollData }: IScrollData) => {
        return (
          <ScrollTracker
            scrollData={scrollData}
            elem={refPageProgress}
            settings={{
              duration: {
                distance: 100,
                unit: "%",
                basedOn: "doc",
              },
            }}>
            {({ scrollObject }: IScrollObject) => {
              return <LogoSpring progress={scrollObject.progress} ref={refPageProgress} />;
            }}
          </ScrollTracker>
        );
      }}
    </ScrollTrackerDocument>
  );
}

export default LogoExample;
