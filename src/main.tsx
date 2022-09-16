import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import PokemonPage from "./PokemonPage";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<PokemonPage />} />
                    <Route path=":pokemonName" element={<PokemonPage />} />
                </Route>
            </Routes>
        </QueryClientProvider>
    </BrowserRouter>
);
