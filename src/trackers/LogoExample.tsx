import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import { IScrollData, IScrollObject } from "react-scrollsy/dist/types";

import { useRef } from "react";
import { LogoSpring } from "../spring-components/LogoSpring";
import { SourceCodeReference } from "../SourceCodeReference";

function LogoExample() {
  const refElem = useRef(null);

  return (
    <>
      <SourceCodeReference name='LogoExample' filePath='trackers/LogoExample.tsx' />

      <ScrollTrackerDocument>
        {({ scrollData }: IScrollData) => {
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
              {({ scrollObject }: IScrollObject) => {
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
