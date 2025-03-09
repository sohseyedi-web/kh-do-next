"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";
import AuthForm from "./AuthForm";

const AuthContainer = () => {
  const [isRegister, setIsRegister] = useState(false);
  const router = useRouter();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="border border-zinc-100 bg-gray-100 shadow-xl rounded-2xl md:p-6 p-4 lg:w-[35%] md:w-[60%] w-[90%]"
      >
        <h2 className="md:text-3xl text-2xl mb-4 font-semibold text-teal-500 text-center">
          {isRegister ? "به ما بپیوندید" : "خوش اومدی"}
        </h2>
        <AuthForm isRegister={isRegister} />
        <p className="md:text-lg text-sm text-center mt-4 text-zinc-800">
          {isRegister ? "قبلا ثبت نام کردی؟" : "حساب کاربری نداری؟"}
          <motion.button
            onClick={() => setIsRegister((prev) => !prev)}
            className="text-teal-500 font-semibold hover:underline mr-1"
            whileHover={{ scale: 1.1 }}
          >
            {isRegister ? "ورود" : "ثبت نام"}
          </motion.button>
        </p>
      </motion.div>

      <motion.div
        onClick={() => router.push("/")}
        initial={{ opacity: 0, y: 0.9 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.3 }}
        className="text-zinc-100 absolute right-4 size-10 rounded-2xl cursor-pointer bg-teal-400 flex items-center justify-center top-4"
      >
        <FaHome size={25} />
      </motion.div>
    </>
  );
};

export default AuthContainer;
