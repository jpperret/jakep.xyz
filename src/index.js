import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";

import NotFound from "./pages/NotFound";
import { allPages } from "./PageList";

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        pb: "10px",
      },
    },
    Heading: {
      baseStyle: {
        pb: "5px",
      },
    },
    UnorderedList: {
      baseStyle: {
        pb: "50px",
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Container maxW="2xl">
          <Routes>
            {allPages.map((page, i) => (
              <Route key={i} path={page.path} element={page.element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
