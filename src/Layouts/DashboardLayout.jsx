import "../App.css";
import React, { Suspense, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Main from "../views/Main";
import Banner from "../Components/Banner";
import Loader from "../Components/Loaders/Loader";
import { setIsLoading } from "../features/general";
import { useDispatch, useSelector } from "react-redux";
function DashboardLayout() {
  const { isLoading } = useSelector((state) => state.general);
  const dispatch = useDispatch();
  return (
    <Suspense fallback={<Loader />}>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Header />
          <Main />
          <Banner />
          <Footer />
        </>
      )}
    </Suspense>
  );
}

export default DashboardLayout;
