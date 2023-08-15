import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import { IScrollData, IScrollObject } from "react-scrollsy/dist/types";

import { useRef } from "react";

function BasicExample() {
  const refPageProgress = useRef(null);

  return (
    <ScrollTrackerDocument resizeThrottle={150}>
      {({ scrollData }: IScrollData) => {
        return (
          <ScrollTracker
            scrollData={scrollData}
            elem={refPageProgress}
            settings={{
              duration: {
                distance: 100,
                unit: "%",
                basedOn: "elem",
              },
            }}>
            {({ scrollObject }: IScrollObject) => {
              return (
                <div className='elem-elem4-progress' ref={refPageProgress}>
                  <strong>I do not use react-spring</strong>
                  <p>I track the scroll progress of this element.</p>
                  <h2>progress: {scrollObject.progress}</h2>
                </div>
              );
            }}
          </ScrollTracker>
        );
      }}
    </ScrollTrackerDocument>
  );
}

export default BasicExample;
