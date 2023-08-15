import { Routes, Route, Outlet, Link } from "react-router-dom";

import DocumentScrollExample from "./trackers/DocumentScrollExample";
import CustomElementExample from "./trackers/CustomElementExample";
import ElementWithOffsetsExample from "./trackers/ElementWithOffsetsExample";
import ElementEventsViewportExample from "./trackers/ElementEventsViewportExample";
import ElementExternalReferenceExample from "./trackers/ElementExternalReferenceExample";
import BasicExample from "./trackers/BasicExample";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/react-scrollsy-examples' element={<Layout />} />
        <Route path='/react-scrollsy-examples/basic-example' element={<BasicExample />} />
        <Route path='/react-scrollsy-examples/track-document-scroll' element={<DocumentScrollExample />} />
        <Route path='/react-scrollsy-examples/custom-element' element={<CustomElementExample />} />
        <Route path='/react-scrollsy-examples/element-offsets-svg' element={<ElementWithOffsetsExample />} />
        <Route path='/react-scrollsy-examples/element-events-viewport' element={<ElementEventsViewportExample />} />
        <Route path='/react-scrollsy-examples/element-external-reference' element={<ElementExternalReferenceExample />} />
        {/* <Route path='*' element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/react-scrollsy-examples/basic-example'>Basic example (no react-spring, "BasicExample")</Link>
          </li>
          <li>
            <Link to='/react-scrollsy-examples/track-document-scroll'>Track document scroll (<span className="color-blush">react-spring</span>, "DocumentScrollExample")</Link>
          </li>
          <li>
            <Link to='/react-scrollsy-examples/custom-element'>Track scrolling inside a custom element (overlay, no react-spring, "CustomElementExample")</Link>
          </li>
          <li>
            <Link to='/react-scrollsy-examples/element-offsets-svg'>
              Track element with offsets and SVG transformation (<span className="color-blush">react-spring</span> + <span className="color-blush">flubber</span>, "ElementWithOffsetsExample")
            </Link>
          </li>
          <li>
            <Link to='/react-scrollsy-examples/element-events-viewport'>
              Track element with events, and viewport tracking (no react-spring, "ElementEventsViewportExample")
            </Link>
          </li>
          <li>
            <Link to='/react-scrollsy-examples/element-external-reference'>Track element outside of ScrollTracker (no react-spring, "ElementExternalReferenceExample")</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  );
}
