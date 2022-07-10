import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreLoader from "../Components/PreLoader";

const Home = lazy(() => import("src/Views/Home"));
const Error404 = lazy(() => import("src/Views/Error404"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
