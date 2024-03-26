import React from "react";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import "animate.css";
import { router } from "./Components/router/router";
import { UserDataProvider } from "./Components/context/Context";

function App() {
  return (
    <div className="App">
      <UserDataProvider>
        <RouterProvider router={router}>
          {/* Your App content goes here */}
        </RouterProvider>
      </UserDataProvider>
    </div>
  );
}

export default App;
