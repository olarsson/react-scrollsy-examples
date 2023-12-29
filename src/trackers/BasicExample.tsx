import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import { ScrollData, ScrollObject } from "react-scrollsy/dist/types";

import { useRef } from "react";
import { SourceCodeReference } from "../SourceCodeReference";

function BasicExample() {
  const refElem = useRef(null);

  return (
    <>
      <SourceCodeReference name='BasicExample' filePath='trackers/BasicExample.tsx' />

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
              }}>
              {({ scrollObject }: ScrollObject) => {
                return (
                  <div className='elem elem--basic' ref={refElem}>
                    <div
                      className='elem__progress-bar'
                      style={{
                        width: `${scrollObject.progress * 100}%`,
                      }}
                    />
                    <p>I track the scroll progress of this element.</p>
                    <h2>progress: {scrollObject.progress}</h2>
                  </div>
                );
              }}
            </ScrollTracker>
          );
        }}
      </ScrollTrackerDocument>
    </>
  );
}

export default BasicExample;
