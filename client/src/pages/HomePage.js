import React from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";
function HomePage() {
    const [auth, setAuth] = useAuth();
  return (
    <Layout>
     
    </Layout>
  );
}

export default HomePage;
