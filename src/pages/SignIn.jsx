import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

export default function SignIn() {
  const signInOptions = [
      {
          element: <FcGoogle size={32} />,
          text: "Sign In with Google",
          signInHandle: () => {
            window.open("https://react-oauth-demo.herokuapp.com/auth/google", "_self")
          }
      },
      {
          element: <FaFacebook size={32} className="text-[#4267B2]" />,
          text: "Sign In with Facebook",
          signInHandle: () => {
            window.open("https://react-oauth-demo.herokuapp.com/auth/facebook", "_self")
          }
      },
      {
          element: <AiOutlineTwitter size={32} className="text-[#1DA1F2]" />,
          text: "Sign In with Twitter",
          signInHandle: () => {
            window.open("https://react-oauth-demo.herokuapp.com/auth/twitter", "_self")
          }
      },
      {
          element: <FaGithub size={32} className="text-[#171515]" />,
          text: "Sign In with Github",
          signInHandle: () => {
            window.open("https://react-oauth-demo.herokuapp.com/auth/github", "_self")
          }
      },
  ]
  return (
    <section className="flex flex-col space-y-6 items-stretch">
        <h1 className="text-[#171515] font-bold text-3xl text-center">Sign In Options:</h1>
        {
            signInOptions.map((option, index) => {
                return (
                    <button onClick={option.signInHandle} key={index} type="button" className="flex items-center gap-4 border-2 border-gray-300 py-2 px-4 rounded-md shadow-md">
                        {option.element}
                        <h1 className="text-xl">{option.text}</h1>
                    </button>
                )
            })
        }
    </section>
  )
}
