import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import { IScrollData, IScrollObject } from "react-scrollsy/dist/types";

import { useRef } from "react";
import { SourceCodeReference } from "../SourceCodeReference";

function ElementExternalReferenceExample() {
  const refElem = useRef(null);

  return (
    <>
      <SourceCodeReference name='ElementExternalReferenceExample' filePath='trackers/ElementExternalReferenceExample.tsx' />

      <div className='elem-elem3-progress' ref={refElem}>
        <p>Something else tracks my scroll progress (the fixed element to the right).</p>
      </div>

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
                  basedOn: "elem",
                },
              }}>
              {({ scrollObject }: IScrollObject) => (
                <div className='elem-side'>
                  <div
                    className='progress-bar'
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
