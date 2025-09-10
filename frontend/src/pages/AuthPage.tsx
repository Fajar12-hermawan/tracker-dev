"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, {useState, useEffect, useRef} from"react"
import { AiOutlineEyeInvisible, AiOutlineEye  } from "react-icons/ai"
import {login, register} from"@/services/auth"
import LoadingSpinnerButton from "@/ui/LoadingSpinnerButton";
import Modal from"@/ui/Modal";



const AuthPage = () => {
    const [type, setType] = useState<"login" |"register">("login")
    const [showPassword, setShowPassword] = useState(false)
    const termsCheckBoxRef = useRef<HTMLInputElement>(null)
    const [errors, setErrors] = useState<Record<string,string>> ({})
    const [loading,setLoading] = useState(false)
    const router = useRouter()
    const [showModal, setShowModal]= useState(false)

    const [formData,setFormData] = useState({
        name:"",
        number: "",
        email: "",
        password: "",
    })
const isLogin = type === "login";

const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true)

    try{
        let response;

        if (isLogin) {
            response = await login({
                email:formData.email,
                password: formData.password
            })
        }else {
            if(!termsCheckBoxRef.current?.checked) {
                setErrors({terms: "kamu harus menyutujui term dan privacy"})
                return
            }
            response = await register ({
                ...formData,
                number:`+62${formData.number}`
            });
        }
        
        const token = response.token;
        if (!token) throw new Error("Token tidak ditemukan");
        localStorage.setItem("token", token);
        router.push("/dashboard") 
        
    }catch(error) {
        if(error instanceof Error) {
            setErrors({general: error.message})
        }
    }finally{
        setLoading(false)
    }
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="p-8 sm:p-12 min-h-[750px] flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 ">
            {isLogin ? "SIgn In" : "Sign Up"}
          </h2>
          <p className="text-sm text-gray-600 mb-4 ">
            {isLogin ? "welcome back" : "lets go t sign up"}
          </p>
          {/* ini adalah form login */}
          <form onSubmit={handleSumbit} className="space-y-4">
            {/* kondisi mau login atau sign up */}
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    fullname
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="john doe"
                    className="w-full mt-1 px-4 py-2 border rounded-md border-gray-400"
                  ></input>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    phone number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3 pt-1 text-gray-500 text-sm">
                      +62
                    </div>
                    <input
                      type="text"
                      value={formData.number}
                      onChange={(e) =>
                        setFormData({ ...formData, number: e.target.value })
                      }
                      placeholder="8xxxxxxx"
                      className="w-full mt-1 px-4 py-2 border rounded-md  pl-12 border-gray-400"
                    ></input>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="johndoe@gmail.com"
                className="w-full mt-1 px-4 py-2 border rounded-md border-gray-400"
              ></input>
            </div>
            {/* password */}
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700"
              >
                password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="********"
                  className="w-full mt-1 px-4 py-2 border rounded-md border-gray-400"
                ></input>
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform-translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
            </div>

                  {errors.general && (
                    <div className="text-red-500 text-sm ">{errors.general}</div>
                  )}

            {!isLogin && (
              <div>
                <input
                  id="terms"
                  ref={termsCheckBoxRef}
                  type="checkbox"
                  className="h-4 w-4 text-indigo-500 border-gray-300 rounded"
                ></input>
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  i aggree to the{" "}
                  <button
                    type="button"
                    className="text text-indigo-600 hover:underline "
                    onClick={() => setShowModal (!showModal)}
                  >
                    terms & privacy policy
                  </button>
                </label>
              </div>
            )}
            {errors.terms && (
              <p className="text-red-500 text-xs mt-1">{errors.terms}</p>
            )}

            {/*  submit form */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded flex items-center justify-center gap-2 ${
                loading
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-indigo-400 cursor-not-allowed hover:bg-indigo-700 text-white"
              }`}
            >
              {loading ? (
                <>
                  <LoadingSpinnerButton />
                  processing.......
                </>
              ) : isLogin ? (
                "let's explore"
              ) : (
                "get started"
              )}
            </button>
            <p className="mt-6 text-sm text-center text-gray-500">
              {isLogin ? (
                <>
                  dont have an account?{" "}
                  <button
                    type="button"
                    className="text-indigo-500 hover:underline "
                    onClick={() => {
                      setType("register");
                    }}
                  >
                    {" "}
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  allready has account{" "}
                  <button
                    type="button"
                    className="text-indigo-500 hover:underline "
                    onClick={() => {
                      setType("login");
                    }}
                  >
                    {" "}
                    Sign In
                  </button>
                </>
              )}
            </p>
          </form>
        </div>
        <div className="hidden md:block bg-indigo-600 relative min-h-[750px] w-full">
          <Image
            src="/images/auth-img.png"
            alt="banner"
            fill
            className="object-cover"
          />
        </div>
      </div>
      {showModal && (
        <Modal
            type="information"
            message="By using this application, you agree to our Terms and Privacy Policy. We may collect usage data to improve your experience. We do not share your data with third parties without your consent. For full details, visit our legal page." 
            onOk={() => {
                setShowModal(false);
                if(termsCheckBoxRef.current) termsCheckBoxRef.current.checked = true;
            }}
            onCancel={() => setShowModal(false)}
            />
        )}
    </div>
  );
};

export default AuthPage;
