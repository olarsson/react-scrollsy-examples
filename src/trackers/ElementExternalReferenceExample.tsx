import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import type { ScrollData, ScrollObject } from "react-scrollsy/dist/types";

import { useRef } from "react";
import { SourceCodeReference } from "../SourceCodeReference";

function ElementExternalReferenceExample() {
  const refElem = useRef(null);

  return (
    <>
      <SourceCodeReference name='ElementExternalReferenceExample' filePath='trackers/ElementExternalReferenceExample.tsx' />

      <div className='elem elem--external-reference' ref={refElem}>
        <p>Something else tracks my scroll progress (the fixed element to the right).</p>
      </div>

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
              {({ scrollObject }: ScrollObject) => (
                <div className='elem elem--side elem--fixed-bottom-right'>
                  <div
                    className='elem__progress-bar'
                    style={{
                      width: `${scrollObject.progress * 100}%`,
                    }}
                  />
                  <p>I reflect the scroll progress of another element (the big one), not my own.</p>
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

export default ElementExternalReferenceExample;
