import { resendCLient, sender } from "../lib/resend.js";
import createWelcomeEmailTemplate from "../emails/emailsTemplates.js";


export const sendWelcommeEmail = async (email, name, clientURL) => {
  const { data, error } = await resendCLient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "welcome to chatgram",
    html: createWelcomeEmailTemplate(name, clientURL),
  });
  if (error) {
    console.log("Error sendgin welcome email: ", error);
    throw new Error("Failed to send welcome email");
  }
  console.log("welcome Email sent successfully ", data);
};
