import React from "react";
import Navigbar from "./components/utils/Navigbar.js";
import Footer from "./components/utils/Footer.js";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AdminComp from "./components/admin/AdminComp.js";
import Landing from "./Animations/Landing.js";
import Gallery from "./components/Pages/Gallery.js";
import Alumni from "./components/Pages/Alumni.js";
import Featuredproject from "./components/utils/featured-proj";
import Testimonials from "./components/utils/Testimonials";
import Login from "./components/Pages/Login";
import Projects from "./components/Pages/Project";
import SingleProject from "./components/Pages/SingleProject";
import Blogs from "./components/Pages/Blogs";
import SingleBlog from "./components/Pages/SingleBlog";
import Signup from "./components/Pages/Signup";
import EventHome from "./Animations/EventsHome";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ForgetPassword from "./components/Pages/ForgetPassword";
import PasswordReset from "./components/Pages/PasswordReset.js";
import Dashboard from "./components/Pages/Dashboard";
import Confirmation from "./components/Pages/Confirmation.js";
import NotFound from "./components/Pages/NotFound.js";
import News from "./components/Pages/News.js";
import CreateBlog from "./components/Pages/Dashboard/Blogs/CreateBlog.js";
import Avishkar from "./components/Pages/Avishkar";
import Prosang from "./components/Pages/Prosang";
import Workshop from "./components/Pages/Workshop";
import About from "./components/utils/About";
import ContactUs from "./components/utils/ContactUs.js";
import Faculty from "./components/Pages/Faculty.js";
import Coordinators from "./components/Pages/Coordinators.js";
import Nontech from "./components/Pages/Nontech.js";
import ResearchThemes from "./components/utils/ResearchThemes.js";
import Sponsors from "./components/Pages/Sponsor";
import Achievements from "./components/Pages/Achievements.js";
import Collaboration from "./components/Pages/Collaboration.js";
import Spinoff from "./components/Pages/Spinoff.js";

function App() {
  document.title = "Aero Club";

  return (

    <div className="App">
      <ToastContainer
        autoClose={4000}
        hideProgressBar={true}
        pauseOnHover
        closeOnClick
      />
      <Switch>
        <Route path="/admin" exact>
          {localStorage.getItem("jwtToken") ? (
            <AdminComp />) : (
            <Redirect to="/404" />
          )
          }
        </Route>

        <Route path="/user/login" exact>
          {!localStorage.getItem("jwtToken") ? (
            <Login />
          ) : (
            <Redirect to="/404" />
          )}
        </Route>
        <Route path="/user/signup" exact>
          {!localStorage.getItem("jwtToken") ? (
            <Signup />
          ) : (
            <Redirect to="/404" />
          )}
        </Route>
        <Route path="/user/confirm/:token" exact>
          {!localStorage.getItem("jwtToken") ? (
            <Confirmation />
          ) : (
            <Redirect to="/404" />
          )}
        </Route>
        <Route path="/user/resetpassword/:token" exact>
          {!localStorage.getItem("jwtToken") ? (
            <PasswordReset />
          ) : (
            <Redirect to="/404" />
          )}
        </Route>
        <Route path="/user/forgotpassword" exact>
          {!localStorage.getItem("jwtToken") ? (
            <ForgetPassword />
          ) : (
            <Redirect to="/404" />
          )}
        </Route>
        <Route path="/404" exact component={NotFound} />
        <Route>
          <Navigbar />
          <Switch>
            <Route path="/" exact>
              <Landing />
              <About />

              <Featuredproject />
              <ResearchThemes />
              <Testimonials />
              <EventHome />
              <ContactUs />
            </Route>
            <Route path="/gallery" exact>
              <Gallery />
            </Route>
            <Route path="/spinoff" exact>
              <Spinoff />
            </Route>
            <Route path="/user/createblog" exact>
              <CreateBlog />
            </Route>
            <Route path="/user/dashboard" exact>
              <Dashboard />
            </Route>
            <Route path="/alumni" exact>
              <Alumni />
            </Route>
            <Route path="/achievements" exact>
              <Achievements />
            </Route>
            <Route path="/faculty" exact>
              <Faculty />
            </Route>
            <Route path="/coordinators" exact>
              <Coordinators />
            </Route>
            <Route path="/non-tech" exact>
              <Nontech />
            </Route>
            <Route path="/collaborate" exact>
              <Collaboration />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/projects/:projectId" exact>
              <SingleProject />
            </Route>
            <Route path="/blogs" exact>
              <Blogs />
            </Route>
            <Route path="/blogs/:blogId" exact>
              <SingleBlog />
            </Route>
            <Route path="/news" exact>
              <News />
            </Route>
            <Route path="/avishkar" exact>
              <Avishkar />
            </Route>
            <Route path="/prosang" exact>
              <Prosang />
            </Route>
            <Route path="/workshop" exact>
              <Workshop />
            </Route>
            <Route path="/sponsor" exact>
              <Sponsors />
            </Route>
            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
