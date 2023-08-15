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
        <Route path='/' element={<Layout />} />
        <Route path='basic-example' element={<BasicExample />} />
        <Route path='track-document-scroll' element={<DocumentScrollExample />} />
        <Route path='custom-element' element={<CustomElementExample />} />
        <Route path='element-offsets-svg' element={<ElementWithOffsetsExample />} />
        <Route path='element-events-viewport' element={<ElementEventsViewportExample />} />
        <Route path='element-external-reference' element={<ElementExternalReferenceExample />} />
        <Route path='*' element={<NoMatch />} />
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
            <Link to='/basic-example'>Basic example (no react-spring, "BasicExample")</Link>
          </li>
          <li>
            <Link to='/track-document-scroll'>Track document scroll (<span className="color-blush">react-spring</span>, "DocumentScrollExample")</Link>
          </li>
          <li>
            <Link to='/custom-element'>Track scrolling inside a custom element (overlay, no react-spring, "CustomElementExample")</Link>
          </li>
          <li>
            <Link to='/element-offsets-svg'>
              Track element with offsets and SVG transformation (<span className="color-blush">react-spring</span> + <span className="color-blush">flubber</span>, "ElementWithOffsetsExample")
            </Link>
          </li>
          <li>
            <Link to='/element-events-viewport'>
              Track element with events, and viewport tracking (no react-spring, "ElementEventsViewportExample")
            </Link>
          </li>
          <li>
            <Link to='/element-external-reference'>Track element outside of ScrollTracker (no react-spring, "ElementExternalReferenceExample")</Link>
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
