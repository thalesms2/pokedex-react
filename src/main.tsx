import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import PokemonPage from "./PokemonPage";

import { GlobalStyles } from "./style/globalstyles";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path=":pokemonName" element={<PokemonPage />}/>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
);