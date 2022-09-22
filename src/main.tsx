import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import PokemonPage from "./PokemonPage";
import Home from "./Home";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path=":pokemonName" element={<PokemonPage />} />
                </Route>
            </Routes>
        </QueryClientProvider>
    </BrowserRouter>
);

// TODO Juntar styled components repetidos e fazer um geral para adicionar os que se repetem com variaveis diferentes
