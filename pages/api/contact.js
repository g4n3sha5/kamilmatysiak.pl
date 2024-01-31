import { mailOptions, transporter } from "@/config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: data.message,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return res.send(200);
};

export default handler;
