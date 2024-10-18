import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layouts";
import DetailPage from "./pages/detail-page/DetailPage";
import LandingPage from "./pages/landing-page/LandingPage";
import PayingPage from "./pages/paying-page/PayingPage";
import ReceiptPage from "./pages/receipt-page/ReceiptPage";

const LoginPage = lazy(() => import("./pages/login-page/LoginPage"));
const ListVipPage = lazy(() => import("./pages/list-vip-page/ListVipPage"));

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Suspense>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/landing",
    element: (
      <Suspense>
        <LandingPage />
      </Suspense>
    ),
  },
  {
    path: "/receipt",
    element: (
      <Suspense>
        <ReceiptPage />
      </Suspense>
    ),
  },
  {
    path: "/payment",
    element: (
      <Suspense>
        <PayingPage />
      </Suspense>
    ),
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/listvip",
        element: (
          <Suspense>
            <ListVipPage />
          </Suspense>
        ),
      },
      {
        path: "/detail",
        element: (
          <Suspense>
            <DetailPage />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

{
  /* <Router>
<Routes>
  <Route path="/" element={<LoginPage />} />
  <Route path="/landing" element={<LandingPage />} />
  <Route path="/payment" element={<PaymentPage />} />
  <Route path="/paying" element={<PayingPage  />} />
  <Route path="/receipt" element={<ReceiptPage />} />
  <Route path="/detail" element={<DetailPage />} />
  <Route path="/listvip" element={<ListVipPage />} />
</Routes>
</Router> */
}
