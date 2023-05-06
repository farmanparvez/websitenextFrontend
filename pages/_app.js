// import "../styles/globals.css";
// import { wrapper } from "../store";
// import { Provider } from "react-redux";

// function MyApp({ Component, pageProps }) {
//   const { store, props } = wrapper.useWrappedStore(pageProps);
//   return (
//     <Component {...pageProps} />
//   )
// }

// export default wrapper.withRedux(MyApp);
import "../styles/globals.css";
import { wrapper } from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  )
}

export default MyApp