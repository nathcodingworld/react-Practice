import { lazy, Suspense } from "react";

const OtherComponent = lazy(() => import("./Components/ToFetch"));
const ImageHandler = lazy(() => import("./Components/FetchImage"));

function SuspenceHandlerPractice() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
        <ImageHandler />
      </Suspense>
    </div>
  );
}
export default SuspenceHandlerPractice;
