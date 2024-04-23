"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <div>
      <motion.section
        id="contact"
        ref={ref}
        className="scroll-mt-28 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <SectionHeading>Contact me</SectionHeading>
        <p className="text-gray-700 -mt-6">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:valeriarubioh@gmail.com">
            valeriarubioh@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          className="mt-10 flex flex-col"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent succesfully");
            /* Proof that is the same data in the server. nextjs do the fetch petition
            console.log("Running on the client");
            console.log(formData.get("senderEmail"));
            console.log(formData.get("message"));*/
          }}
        >
          <input
            className="h-14 px-4 rounded-lg border border-black/10"
            type="email"
            name="senderEmail"
            required
            maxLength={100}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 rounded-lg border border-black/10 p-4
          "
            placeholder="Your message"
            name="message"
            required
            maxLength={500}
          />
          <SubmitBtn />
        </form>
      </motion.section>
    </div>
  );
}
