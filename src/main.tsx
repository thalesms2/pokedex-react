import React from "react";
import ReactDOM from "react-dom/client";
import { queryClient } from "./services/queryClient";
import { QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Pokemon from "./Pokemon";

import { GlobalStyles } from "./style/globalstyles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="pokemon" element={<Pokemon />}/>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
