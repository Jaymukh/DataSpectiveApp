import React, { Suspense, useMemo } from "react";
import { Routes, Route } from 'react-router-dom';
import { RouteConstants } from "./constants";

const Router = () => {
    
    const Home = useMemo(() => React.lazy(() => import("./pages/Home")), []);
    // const Questionnaire = useMemo(() => React.lazy(() => import("./pages/Questionnaire")), []);
    // const RiskAssessment = useMemo(() => React.lazy(() => import("./pages/RiskAssessment")), []);
    // const Products = useMemo(() => React.lazy(() => import("./pages/Products")), []);
    // const Solutions = useMemo(() => React.lazy(() => import("./pages/Solutions")), []);
    // const Pricing = useMemo(() => React.lazy(() => import("./pages/Pricing")), []);
    // const Company = useMemo(() => React.lazy(() => import("./pages/Company")), []);

    return (
        <Suspense fallback={<div className=""></div>}>
            <Routes>                
                <Route path={RouteConstants.home} element={<Home />} />
                {/* <Route path={RouteConstants.login} element={<Login />} />
                <Route path={RouteConstants.questionnaire} element={<Questionnaire />} />
                <Route path={RouteConstants.riskassessment} element={<RiskAssessment />} />
                <Route path={RouteConstants.products} element={<Products />} />
                <Route path={RouteConstants.solutions} element={<Solutions />} />
                <Route path={RouteConstants.pricing} element={<Pricing />} />
                <Route path={RouteConstants.company} element={<Company />} /> */}
            </Routes>
        </Suspense >
    );
};

export default Router;
