"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      question: " اینجا چه چیزی وجود دارد؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. این متن به عنوان یک متن نمونه در صنعت چاپ و طراحی گرافیک استفاده می‌شود. هدف از استفاده از این متن، پر کردن فضا و نمایش نحوه‌ی نمایش متن در طراحی نهایی است.",
    },
    {
      question: " چگونه می‌توانم ثبت‌نام کنم؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. برای ثبت‌نام، کافی است فرم مربوطه را پر کنید و اطلاعات خود را وارد کنید. پس از ارسال فرم، شما یک ایمیل تأیید دریافت خواهید کرد.",
    },
    {
      question: "  آیا پشتیبانی وجود دارد؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. بله، ما تیم پشتیبانی داریم که در هر زمان آماده پاسخگویی به سوالات شما هستند. می‌توانید از طریق ایمیل یا چت آنلاین با ما تماس بگیرید.",
    },
    {
      question: " چگونه می‌توانم با شما تماس بگیرم؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. برای تماس با ما، می‌توانید از طریق فرم تماس در وب‌سایت یا از طریق ایمیل با ما ارتباط برقرار کنید.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 my-36">
      <h2 className="lg:text-3xl text-2xl text-teal-500 font-bold mb-8 text-right">
        سوالات متداول
      </h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition-colors"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-medium ">{item.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="w-5 h-5 text-teal-500" />
              ) : (
                <FaChevronDown className="w-5 h-5 text-teal-500" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white p-4 border-t border-gray-200">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
