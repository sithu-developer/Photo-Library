import theme from "@/general/themes";
import { store } from "@/store";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </Provider>
  )
  
}
