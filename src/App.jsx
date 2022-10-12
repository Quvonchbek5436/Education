import { Route, Routes } from "react-router-dom";
import Card4 from "./Components/Card4";
import ContactUs from "./Components/ContactUs";
import Statistics from "./Components/Statistics";
import DirectionsWrapper from "./Containers/DirectionsWrapper";
import EducationsWrapper from "./Containers/EducationsWrapper";
import Edu from "./landingPage/Edu";
import LandingPageLayout from "./layout/LandingPageLayout";
import Layout from "./layout/Layout";
import Layout2 from "./layout/Layout2";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout> <Home /> </Layout>}></Route>
      <Route path="/:regId" element={<Layout> <EducationsWrapper /> </Layout>}></Route>
      <Route path="/:regId/:eduId" element={<Layout> <DirectionsWrapper /> </Layout>}></Route>
      <Route path="/:regId/:eduId/:directId" element={<Layout> <Card4 /> </Layout>}></Route>
      <Route path="/contact" element={<Layout2> <ContactUs /> </Layout2>}></Route>
      <Route path="/statistics" element={<Layout2> <Statistics /> </Layout2>}></Route>
      <Route path="/markaz/:regId/:eduId" element={<LandingPageLayout><Edu /></LandingPageLayout>}></Route>
    </Routes>
  );
}

export default App;
