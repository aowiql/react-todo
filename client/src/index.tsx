import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./MainPage";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

let queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  </React.StrictMode>
);
