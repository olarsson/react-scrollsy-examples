import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import { IScrollData, IScrollObject } from "react-scrollsy/dist/types";

import { useRef } from "react";
import { SimpleSpring } from "../spring-components/SimpleSpring";
import { SourceCodeReference } from "../SourceCodeReference";

function MultipleAndNestedTrackersExample() {
  const refElem1 = useRef(null);
  const refElem2 = useRef(null);

  return (
    <>
      <SourceCodeReference name='MultipleAndNestedTrackersExample' filePath='trackers/MultipleAndNestedTrackersExample.tsx' />

      <ScrollTrackerDocument>
        {({ scrollData }: IScrollData) => {
          return (
            <ScrollTracker
              scrollData={scrollData}
              elem={refElem1}
              settings={{
                duration: {
                  distance: 100,
                  unit: "%",
                  basedOn: "vp",
                },
              }}>
              {({ scrollObject }: IScrollObject) => {
                return (
                  <div className='elem-mulitple-trackers-1' ref={refElem1}>
                    <div
                      className='progress-bar'
                      style={{
                        width: `${scrollObject.progress * 100}%`,
                      }}
                    />
                    <strong>I do not use react-spring</strong>
                    <p>I track the scroll progress of the viewport.</p>
                    <h2>progress: {scrollObject.progress}</h2>

                    <ScrollTracker
                      scrollData={scrollData}
                      elem={refElem2}
                      settings={{
                        duration: {
                          distance: 100,
                          unit: "%",
                          basedOn: "elem",
                        },
                      }}>
                      {({ scrollObject: scrollObjectNested }: IScrollObject) => {
                        return <SimpleSpring progress={scrollObjectNested.progress} ref={refElem2} />;
                      }}
                    </ScrollTracker>
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

export default MultipleAndNestedTrackersExample;
