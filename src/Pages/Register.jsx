import { Link, useNavigate } from "react-router-dom";
import bgImg from "../assets/register.jpg";
import UseAuth from "../Hooks/UseAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUser, setUser } = UseAuth();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    try {
      const result = await createUser(email, password);
      await updateUser(name, photo);

      setUser({ ...result?.user, photoURL: photo, displayName: name, email: email });

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: result?.user?.email },
        { withCredentials: true }
      );
      console.log(data);
      navigate("/");
      toast.success("Sign up successful");
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };
  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden border mt-5 rounded-xl shadow-lg  lg:max-w-4xl">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register - Stay Sphere</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-full px-6 py-6 md:px-8 lg:w-1/2">
        <p className=" text-xl text-center text-black ">Welcome!</p>

        <form onSubmit={handleRegister}>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-blackdark:text-gray-200"
              htmlFor="LoggingEmailAddress"
            >
              Name
            </label>
            <input
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2  bg-white border border-gray-700 rounded-lg  text-black  focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              name="name"
            />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-blackdark:text-gray-200"
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2  bg-white border border-gray-700 rounded-lg  text-black  focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              name="email"
            />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-blackdark:text-gray-200"
              htmlFor="LoggingEmailAddress"
            >
              Photo URL
            </label>
            <input
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2  bg-white border border-gray-700 rounded-lg  text-black  focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              name="photo"
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-blackdark:text-gray-200"
                htmlFor="loggingPassword"
              >
                Password
              </label>
              {/* <a
              href="#"
              className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
            >
              Forget Password?
            </a> */}
            </div>

            <input
              id="loggingPassword"
              className="block w-full px-4 py-2  bg-white border border-gray-700 rounded-lg  text-black  focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              name="password"
            />
          </div>

          <div className="mt-4">
            <input
              type="submit"
              value="Sign Up"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#CC9933] rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            />
          </div>
        </form>
        <div className="flex items-center justify-between mt-2">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

          <Link
            to="/login"
            href="#"
            className="btn bg-white text-xs font-semibold uppercase text-[#CC9933] hover:underline"
          >
            sign In
          </Link>

          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
      <div
        className="hidden bg-cover bg-bottom lg:block lg:w-1/2"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      ></div>
    </div>
  );
};

export default Register;
