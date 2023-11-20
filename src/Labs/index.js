import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import store from "./store";
import Nav from "src/Nav";
import { Provider } from "react-redux";
import Quiz from "./Quiz";

function Labs() {
  return (
    <Provider store={store}>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="a3" />} />
          <Route path="a3" element={<Assignment3 />} />
          <Route path="a4" element={<Assignment4 />} />
          <Route path="a5" element={<Assignment5 />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default Labs;
