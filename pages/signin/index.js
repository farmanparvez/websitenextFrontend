import { Input, Form } from "antd";
import { CsButton } from "../../components";
// import Google from "../../assets/google.svg";
// import facebook from "../../assets/facebook.svg";
import { login } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.authSlice)
  const onFinish = (values) => {
    console.log(values)
    dispatch(login(values));
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="min-h-[92vh] w-4/5 max-xl:w-[95%] mx-auto flex flex-wrap justify-center items-center">
        <div className="basis-1/3	h-full flex justify-center flex-col grow ">
          <div className="md:min-h-[70vh] min-h-[150px] pt-10 w-[80%] min-w-[300px] mx-auto flex grow flex-col">
            <div className="text-[36px] font-semibold text-black">
              Welcome Back!
            </div>
            <div className="text-16 text-black">
              Save on prescription while earning cryptocurrency
            </div>
          </div>
        </div>
        <div className="basis-1/3	 h-full flex justify-center items-center grow flex-col ">
          <div className="max-sm:mb-10 py-10 sm:p-10 bg-csBG w-[100%] md:w-[90%] min-h-[70vh] rounded-[4px] sm:min-w-[450px]  shadow-sigin-card-boxShadow flex grow justify-center items-center flex-col">
            <div className="w-3/4">
              <div
                className="bg-white p-3 my-4 h-10 rounded-sm  text-center flex justify-center items-center cursor-pointer"
              >
                {/* <img className="w-6 h-6 mr-2" src={Google} alt="" /> */}
                Continue with Google
              </div>
              <div
                className="bg-white  p-3 h-10 my-2 rounded-sm text-center flex justify-center items-center cursor-pointer"
              >
                {/* <img className="w-6 h-6 mr-2" src={facebook} alt="" /> */}
                Continue with Facebook
              </div>
              <div className="flex items-center my-4">
                <div className="border-b border-[#DADADA] w-3/4"></div>
                <div className="text-[#DADADA] px-2">or</div>
                <div className="border-b border-[#DADADA] w-3/4"></div>
              </div>
              <Form
                className="signup-and-signin-for-container"
                name="basic"
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  className="my-4"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input
                    className="h-10 w-full rounded-[4px]"
                    placeholder="Email"
                  />
                </Form.Item>
                <Form.Item
                  className="mb-2"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input
                    className="h-10 w-full rounded-[4px]"
                    placeholder='Password'
                  />
                </Form.Item>
                <div
                  className="text-[#F8F8F8] font-semibold text-14 mb-6 cursor-pointer "
                >
                  Forgot password?
                </div>
                <Form.Item className="my-4">
                  <CsButton
                    className="w-full text-center flex justify-center h-10"
                    type="pr"
                    htmlType="submit"
                    loading={isLoading}
                  >
                    <span className="text-[14] font-semibold text-black">
                      Sign In
                    </span>
                  </CsButton>
                </Form.Item>
              </Form>
              <div className="text-[#F8F8F8] py-2 flex justify-center items-center ">
                {/* {t("New to NiHowdy?")} */}
                <span className="font-semibold ml-2">
                  {/* <Link to="/signup">{t("Join now")}</Link> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
