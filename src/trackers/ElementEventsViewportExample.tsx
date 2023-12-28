import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import type { ScrollData, ScrollObject } from "react-scrollsy/dist/types";

import { useRef } from "react";
import { SourceCodeReference } from "../SourceCodeReference";

function ElementEventsViewportExample() {
  const refElem = useRef(null);

  return (
    <>
      <SourceCodeReference name='ElementEventsViewportExample' filePath='trackers/ElementEventsViewportExample.tsx' />

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
              }}
              onStart={() => {
                console.log("scroll progress begins for this element (offset affects this)");
              }}
              onEnd={() => {
                console.log("scroll progress ends for this element (offset affects this)");
              }}>
              {({ scrollObject }: ScrollObject) => (
                <div className='elem elem--events' ref={refElem}>
                  <div
                    className='elem__progress-bar'
                    style={{
                      width: `${scrollObject.progress * 100}%`,
                    }}></div>
                  <p>I track the scroll progress of this element in relation to the viewport.</p>
                  <p>Open the console to see the "onStart" and "onEnd" events being triggered.</p>
                  <h2>progress: {scrollObject.progress}</h2>
                </div>
              )}
            </ScrollTracker>
          );
        }}
      </ScrollTrackerDocument>
    </>
  );
}

export default ElementEventsViewportExample;
