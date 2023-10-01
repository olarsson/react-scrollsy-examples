import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import { IScrollData, IScrollObject } from "react-scrollsy/dist/types";

import { useRef } from "react";
import { SourceCodeReference } from "../SourceCodeReference";

function BasicExample() {
  const refElem = useRef(null);

  return (
    <>
      <SourceCodeReference name='BasicExample' filePath='trackers/BasicExample.tsx' />

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
              {({ scrollObject }: IScrollObject) => {
                return (
                  <div className='elem-elem4-progress' ref={refElem}>
                    <div
                      className='progress-bar'
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
