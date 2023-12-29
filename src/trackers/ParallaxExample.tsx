import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import { ScrollData, ScrollObject, ScrollTrackerSettings } from "react-scrollsy/dist/types";

import { useRef } from "react";
import { SourceCodeReference } from "../SourceCodeReference";
import { ParallaxHorizontalSpring } from "../spring-components/ParallaxHorizontalSpring";
import { ParallaxVerticalSpringA } from "../spring-components/ParallaxVerticalSpringA";
import { ParallaxVerticalSpringB } from "../spring-components/ParallaxVerticalSpringB";

function ParallaxExample() {
  const refElem1 = useRef(null);
  const refElem2 = useRef(null);
  const refElem3 = useRef(null);

  const parallaxSettings: ScrollTrackerSettings = {
    duration: {
      distance: 100,
      unit: "%",
      basedOn: "vp",
    },
    offsetBottom: {
      distance: -100,
      unit: "%",
      basedOn: "elem",
    },
  };

  return (
    <>
      <SourceCodeReference name='ParallaxExample' filePath='trackers/ParallaxExample.tsx' />

      <ScrollTrackerDocument>
        {({ scrollData }: ScrollData) => {
          return (
            <>
              <ScrollTracker scrollData={scrollData} elem={refElem1} settings={parallaxSettings}>
                {({ scrollObject }: ScrollObject) => {
                  return <ParallaxHorizontalSpring progress={scrollObject.progress} ref={refElem1} />;
                }}
              </ScrollTracker>

              <ScrollTracker scrollData={scrollData} elem={refElem2} settings={parallaxSettings}>
                {({ scrollObject }: ScrollObject) => {
                  return <ParallaxVerticalSpringA progress={scrollObject.progress} ref={refElem2} />;
                }}
              </ScrollTracker>

              <ScrollTracker scrollData={scrollData} elem={refElem3} settings={parallaxSettings}>
                {({ scrollObject }: ScrollObject) => {
                  return <ParallaxVerticalSpringB progress={scrollObject.progress} ref={refElem3} />;
                }}
              </ScrollTracker>
            </>
          );
        }}
      </ScrollTrackerDocument>
    </>
  );
}

export default ParallaxExample;
