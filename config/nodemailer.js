import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const receivemail = "kmatysiak-it@outlook.com";
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: receivemail,
};
