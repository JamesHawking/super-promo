import Head from "next/head";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="h-screen rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-36 justify-around flex flex-col content-center w-full max-w-sm mx-auto space-y-3"
          >
            <input
              className="appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="email"
              placeholder="Your email"
              name="Email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.Email && "Email is required"}
            <input
              className="appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="password"
              placeholder="Password"
              name="Password"
              ref={register({ required: true, max: 64, min: 8 })}
            />
            <p className="italic">
              {" "}
              {errors.Password?.type === "min" && "Password is too short"}
              {errors.Password?.type === "required" && "Password is required"}

            </p>
            <button
              className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              Sign up
            </button>
          </form>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
