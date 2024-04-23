"use server";
import { error } from "console";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/util";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
  //this will run in the server. Server actions feature in nextjs
  const message = formData.get("message"); //parameter is the name attribute of the input
  const senderEmail = formData.get("senderEmail");

  // simple server-side validation
  if(!validateString(senderEmail, 100)){
    return {
      error: "Invalid sender email"
    }
  }
  if(!validateString(message, 500)){
    return {
      error: "Invalid sender message"
    }
  }
  //error handling
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "valeriarubioh@gmail.com",
      subject: "message from contact form",
      reply_to: senderEmail as string, //at this point is known that is gonna be a string
      text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  
};
