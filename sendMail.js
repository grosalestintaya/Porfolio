const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true para el puerto 465, false para otros puertos
  auth: {
    user: "grosalestintaya@gmail.com",
    pass: "mlbs cshr uvyf exfu", // Maneja tus credenciales de manera segura
  },
});

async function doSendmail(user, email) {
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <grosalestintaya@gmail.com>',
    to: email,
    subject: `Hello ${user} ✔`,
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });

  console.log("Message sent: %s", info.messageId);
}

app.post("/sendmail", async (req, res) => {
  const { user, email } = req.body;
  try {
    await doSendmail(user, email);
    res.status(200).send("Email enviado con éxito");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).send("Error al enviar el email");
  }
});

app.listen(3001, () => {
  console.log("Servidor ejecutándose en el puerto 3001");
});
