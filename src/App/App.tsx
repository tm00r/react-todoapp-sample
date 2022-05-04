import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "../components/Layout";
import { TodosPage } from "../pages/TodosPage";
import { NoPage } from "../pages/NoPage";
import { TodoDetailsPage } from "../pages/TodoDetailsPage";


export const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout /> } >
        <Route path="todo/*" element={<TodosPage />} />
          <Route path="todo/details/:id" element={<TodoDetailsPage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};
