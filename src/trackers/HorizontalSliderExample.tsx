import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import type { ScrollData, ScrollObject } from "react-scrollsy/dist/types";

import { useRef } from "react";
import { SourceCodeReference } from "../SourceCodeReference";
import { HorizontalSliderSpring } from "../spring-components/HorizontalSliderSpring";

function HorizontalSliderExample() {
  const refElem = useRef(null);

  return (
    <>
      <SourceCodeReference name='HorizontalSliderExample' filePath='trackers/HorizontalSliderExample.tsx' />

      <ScrollTrackerDocument>
        {({ scrollData }: ScrollData) => {
          return (
            <ScrollTracker
              scrollData={scrollData}
              elem={refElem}
              settings={{
                duration: {
                  distance: 100,
                  unit: "%",
                  basedOn: "vp",
                },
                offsetTop: {
                  distance: 100,
                  unit: "%",
                  basedOn: "elem",
                },
              }}>
              {({ scrollObject }: ScrollObject) => {
                return <HorizontalSliderSpring progress={scrollObject.progress} ref={refElem} />;
              }}
            </ScrollTracker>
          );
        }}
      </ScrollTrackerDocument>
    </>
  );
}

export default HorizontalSliderExample;
