import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import { IScrollData, IScrollObject } from "react-scrollsy/dist/types";

import { SvgAnimation } from "../spring-components/SvgAnimation";

import { useRef } from "react";

function ElementWithOffsetsExample() {
  const refSvgAnimation = useRef(null);

  return (
    <ScrollTrackerDocument resizeThrottle={150}>
      {({ scrollData }: IScrollData) => {
        return (
          <ScrollTracker
            scrollData={scrollData}
            elem={refSvgAnimation}
            settings={{
              duration: {
                distance: 100,
                unit: "%",
                basedOn: "elem",
              },
              offsetTop: {
                distance: 25,
                unit: "%",
                basedOn: "vp",
              },
              offsetBottom: {
                distance: -200,
                unit: "px",
                basedOn: "",
              },
            }}>
            {({ scrollObject }: IScrollObject) => {
              return <SvgAnimation progress={scrollObject.progress} ref={refSvgAnimation} />;
            }}
          </ScrollTracker>
        );
      }}
    </ScrollTrackerDocument>
  );
}

export default ElementWithOffsetsExample;
