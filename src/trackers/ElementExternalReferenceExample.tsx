import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import { IScrollData, IScrollObject } from "react-scrollsy/dist/types";

import { useRef } from "react";

function ElementExternalReferenceExample() {
  const refSideElementConnection = useRef(null);

  return (
    <>
      <div className='elem-elem3-progress' ref={refSideElementConnection}>
        <p>Something else tracks my scroll progress (the fixed element to the right).</p>
      </div>

      <ScrollTrackerDocument resizeThrottle={150}>
        {({ scrollData }: IScrollData) => {
          return (
            <ScrollTracker
              scrollData={scrollData}
              elem={refSideElementConnection}
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
                  <strong>I do NOT use react-spring</strong>
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
