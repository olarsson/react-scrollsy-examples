import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import { ScrollData, ScrollObject } from "react-scrollsy/dist/types";

import { useRef } from "react";
import { LogoSpring } from "../spring-components/LogoSpring";
import { SourceCodeReference } from "../SourceCodeReference";

function LogoExample() {
  const refElem = useRef(null);

  return (
    <>
      <SourceCodeReference name='LogoExample' filePath='trackers/LogoExample.tsx' />

      <ScrollTrackerDocument
        scrollThrottle={33} // 1000 ms/30 fps = 33ms, limits the triggered events to 30 fps, optional
      >
        {({ scrollData }: ScrollData) => {
          return (
            <ScrollTracker
              scrollData={scrollData}
              elem={refElem}
              settings={{
                duration: {
                  distance: 100,
                  unit: "%",
                  basedOn: "doc",
                },
              }}>
              {({ scrollObject }: ScrollObject) => {
                return <LogoSpring progress={scrollObject.progress} ref={refElem} />;
              }}
            </ScrollTracker>
          );
        }}
      </ScrollTrackerDocument>
    </>
  );
}

export default LogoExample;
