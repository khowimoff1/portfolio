"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import PhoneIcon from "../../../public/phone.png";
import Telegram from "../../../public/telegram.png";
import Instagram from "../../../public/instagram.png";

import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="flex justify-center text-center  my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex items-center justify-center gap-5">
          <Link href="https://github.com/khowimoff1">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.instagram.com/khowimovvs?igsh=bjQ3NnRhenlqbjg0&utm_source=qr">
            <Image src={Instagram} alt="Instagram Icon" className=" w-11 h-11" />
          </Link>
          <Link href="https://t.me/+998770770403">
            <Image src={Telegram} alt="Telegram Icon" className=" w-11 h-11" />
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default EmailSection;
