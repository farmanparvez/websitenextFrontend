import { selectAuthState, setAuthState } from "../redux/slice/slice";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../store";

const Home = (props) => {
  console.log(props);
  const authState = useSelector(selectAuthState);
  // console.log(authState);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{authState ? "Logged in" : "Not Logged In"}</div>
      <button
        onClick={() =>
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {authState ? "Logout" : "LogIn"}
      </button>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      const res = await store.dispatch(setAuthState(false)); 
      console.log("res: ",res);
      console.log("State on server", store.getState());
      return {
        props: {
          authState: false,
        },
      };
    }
);

export default Home;