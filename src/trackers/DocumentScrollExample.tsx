import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import { IScrollData, IScrollObject } from "react-scrollsy/dist/types";

import { BasicProgress } from "../spring-components/BasicProgress";

import { useRef } from "react";

function DocumentScrollExample() {
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
                basedOn: "doc",
              },
            }}>
            {({ scrollObject }: IScrollObject) => {
              return <BasicProgress progress={scrollObject.progress} ref={refPageProgress} />;
            }}
          </ScrollTracker>
        );
      }}
    </ScrollTrackerDocument>
  );
}

export default DocumentScrollExample;
