import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: 'sirwagya7@gmail.com', 
      pass: 'ybtl biyk rxnc kdmp', 
    },
  });

  const mailOptions = {
    from: 'sirwagya7@gmail.com',
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

export { sendEmail };
export default sendEmail;