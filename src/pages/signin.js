import { useRouter } from "next/router";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { disableButton } from "../features/user/isActive";
import { useDispatch, useSelector } from "react-redux";

export default function Example() {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === "email") setemail(e.target.value);
    if (e.target.name === "password") setpassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_MY_URL}/api/user/signin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await res.json();
    if (data !== null) {
      console.log(data);
      localStorage.setItem("isActive", data.success);
      router.replace("/");
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-pink-500">
        <div className="w-full max-w-md space-y-8 border-2 p-4 rounded-md">
          <div>
            {/* <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={handleChange}
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  value={password}
                  onChange={handleChange}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="show-password"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="show-password" className="ml-2 block text-sm text-gray-900">
                  Show Password
                </label>
              </div>
              {/* TODO ADD A REMEMBER ME BUTTON */}

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
