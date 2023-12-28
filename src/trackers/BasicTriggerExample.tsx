import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import type { ScrollData, ScrollObject } from "react-scrollsy/dist/types";

import { useRef } from "react";
import { SourceCodeReference } from "../SourceCodeReference";

function BasicTriggerExample() {
  const refElem1 = useRef(null);
  const refElem2 = useRef(null);

  return (
    <>
      <SourceCodeReference name='BasicTriggerExample' filePath='trackers/BasicTriggerExample.tsx' />
      
      <ScrollTrackerDocument>
        {({ scrollData }: ScrollData) => {
          return (
            <>
              <ScrollTracker
                scrollData={scrollData}
                elem={refElem1}
                settings={{
                  trigger: "onLeave",
                  duration: {
                    distance: 100,
                    unit: "%",
                    basedOn: "elem",
                  },
                }}>
                {({ scrollObject }: ScrollObject) => {
                  return (
                    <div className='elem elem--basic-trigger' ref={refElem1}>
                      <div
                        className='elem__progress-bar'
                        style={{
                          width: `${scrollObject.progress * 100}%`,
                        }}
                      />
                      <p>I track the scroll progress of this element.</p>
                      <p>
                        I use the trigger <strong>"onLeave"</strong> to start calculations when i leave rather than enter.
                      </p>
                      <h2>progress: {scrollObject.progress}</h2>
                    </div>
                  );
                }}
              </ScrollTracker>

              <ScrollTracker
                scrollData={scrollData}
                elem={refElem2}
                settings={{
                  trigger: "onEnter",
                  duration: {
                    distance: 100,
                    unit: "%",
                    basedOn: "elem",
                  },
                }}>
                {({ scrollObject }: ScrollObject) => {
                  return (
                    <div className='elem elem--basic-trigger' ref={refElem2}>
                      <div
                        className='elem__progress-bar'
                        style={{
                          width: `${scrollObject.progress * 100}%`,
                        }}
                      />
                      <p>I track the scroll progress of this element.</p>
                      <p>
                        I use the trigger <strong>"onEnter"</strong> to start calculations when i enter, this is the default behavior.
                      </p>
                      <h2>progress: {scrollObject.progress}</h2>
                    </div>
                  );
                }}
              </ScrollTracker>
            </>
          );
        }}
      </ScrollTrackerDocument>
    </>
  );
}

export default BasicTriggerExample;
