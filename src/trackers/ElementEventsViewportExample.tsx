import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import { IScrollData, IScrollObject } from "react-scrollsy/dist/types";

import { useRef } from "react";

function ElementEventsViewportExample() {
  const refElemProgress = useRef(null);

  return (
    <ScrollTrackerDocument resizeThrottle={150}>
      {({ scrollData }: IScrollData) => {
        return (
          <ScrollTracker
            scrollData={scrollData}
            elem={refElemProgress}
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
            {({ scrollObject }: IScrollObject) => (
              <div className='elem-elem1-progress' ref={refElemProgress}>
                <div
                  className='progress-bar'
                  style={{
                    width: `${scrollObject.progress * 100}%`,
                  }}></div>
                <strong>I do NOT use react-spring</strong>
                <p>I track the scroll progress of this element in relation to the viewport.</p>
                <p>Open the console to see the "onStart" and "onEnd" events being triggered.</p>
                <h2>progress: {scrollObject.progress}</h2>
              </div>
            )}
          </ScrollTracker>
        );
      }}
    </ScrollTrackerDocument>
  );
}

export default ElementEventsViewportExample;
