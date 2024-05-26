import { FcGoogle } from "react-icons/fc";
import { MdLockOutline, MdOutlineMailOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import sidebar_logo from "../assets/icons/sidebar_logo.png";
import Frame_1 from "../assets/icons/frame_1.png";
import Frame_2 from "../assets/icons/frame_2.png";
import Frame_3 from "../assets/icons/frame_3.png";
import Slider from "../components/Slider";
import { API_URL } from "../api/api";

function SignIn() {
  const navigate = useNavigate();

  const handleSignIn = async (
    values: { userName: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const response = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const responseData = await response.json();
     
      console.log("responseData", responseData.adminData);
      localStorage.setItem("token", responseData.adminData.userName);
      navigate("/");
      
      
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="flex items-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-2xl max-w-8xl">
          <div className="mb-6 flex justify-start">
            <img src={sidebar_logo}
              className="w-30 h-10"
              alt="" />
          </div>
          <h2 className="text-3xl font-semibold leading-tight text-zinc-950 capitalize">
            Login into your account
          </h2>
          <div className="mt-2 text-gray-600">
          <p className="text-sm text-red-800 font-semibold"> USERNAME- admin</p>
           <p className="text-sm text-red-800 font-semibold">PASSOWORD-admin@123</p>
          </div>

          <div className="mt-8 sm:w-[500px] w-full">
            <Formik
              initialValues={{ userName: "", password: "" }}
              validate={(values) => {
                const errors: { userName?: string; password?: string } = {};
                if (!values.userName) {
                  errors.userName = "userName is required";
                }
                if (!values.password) {
                  errors.password = "Password is required";
                }
                return errors;
              }}
              onSubmit={handleSignIn}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-5">
                  <div>
                    <label
                      htmlFor="userName"
                      className="text-base font-medium text-gray-900 "
                    >
                      UserName
                    </label>
                    <div className="relative">
                      <Field
                        type="text"
                        name="userName"
                        className="peer py-3 mt-2 px-4 ps-11 outline-none block w-full bg-blue-50 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="Enter userName"
                      />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                        <MdOutlineMailOutline />
                      </div>
                    </div>
                    <ErrorMessage
                      name="userName"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Field
                        type="password"
                        name="password"
                        className="peer py-3 mt-2 px-4 ps-11 block outline-none w-full bg-blue-50 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter password"
                      />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                        <MdLockOutline />
                      </div>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-black"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <Link
                        to="/forgot-password"
                        className="font-medium text-blue-600 hover:text-blue-500"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-5 items-center justify-center rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging In..." : "Log In"}
                  </button>
                </Form>
              )}
            </Formik>

            <div className="flex items-center justify-center space-x-2 my-9">
              <span className="h-px bg-gray-300 w-full"></span>
              <span className="text-gray-800 text-lg px-4 font-normal">or</span>
              <span className="h-px bg-gray-300 w-full"></span>
            </div>

            <div className="my-3 space-y-3">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <FcGoogle />
                </span>
                Sign up with Google
              </button>
            </div>

            <p className="text-center mt-6">
              Don't have an account?
              <Link to="/signup" className="text-blue-600">
                Create New Account
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="h-full bg-blue-500 ">
        <div className="flex flex-col justify-center items-end mt-[10%]">
          <div className="w-[300px] mb-[-4rem] z-20">
            <img src={Frame_1} alt="image1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" w-[37vw] ">
            <img src={Frame_3} alt="image1" className="w-full h-full object-cover" />
          </div>
          <div className="flex w-full justify-center items-center mt-[-8rem]">
            <div className="w-[300px]">
              <img src={Frame_2} alt="image1" className="w-full h-full object-cover" />

            </div>
          </div>
        </div>

        <Slider />

      </div>
    </div>
  );
}

export default SignIn;
