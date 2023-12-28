import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import type { ScrollData, ScrollObject } from "react-scrollsy/dist/types";

import { BasicProgress } from "../spring-components/BasicProgress";

import { useRef } from "react";
import { SourceCodeReference } from "../SourceCodeReference";

function DocumentScrollExample() {
  const refElem = useRef(null);

  return (
    <>
      <SourceCodeReference name='DocumentScrollExample' filePath='trackers/DocumentScrollExample.tsx' />

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
                  basedOn: "doc",
                },
              }}>
              {({ scrollObject }: ScrollObject) => {
                return <BasicProgress progress={scrollObject.progress} ref={refElem} />;
              }}
            </ScrollTracker>
          );
        }}
      </ScrollTrackerDocument>
    </>
  );
}

export default DocumentScrollExample;
