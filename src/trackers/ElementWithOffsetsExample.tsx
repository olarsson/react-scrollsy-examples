import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import { ScrollData, ScrollObject } from "react-scrollsy/dist/types";

import { SvgAnimation } from "../spring-components/SvgAnimation";

import { useRef } from "react";
import { SourceCodeReference } from "../SourceCodeReference";

function ElementWithOffsetsExample() {
  const refElem = useRef(null);

  return (
    <>
      <SourceCodeReference name='ElementWithOffsetsExample' filePath='trackers/ElementWithOffsetsExample.tsx' />

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
                  basedOn: "elem",
                },
                offsetTop: {
                  distance: 50,
                  unit: "%",
                  basedOn: "vp",
                },
                offsetBottom: {
                  distance: -200,
                  unit: "px",
                  basedOn: "",
                },
              }}>
              {({ scrollObject }: ScrollObject) => {
                return <SvgAnimation progress={scrollObject.progress} ref={refElem} />;
              }}
            </ScrollTracker>
          );
        }}
      </ScrollTrackerDocument>
    </>
  );
}

export default ElementWithOffsetsExample;
