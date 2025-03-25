const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // Usando Gmail (puedes usar otro servicio)
    auth: {
        user: process.env.EMAIL_USER, // Utilizar la variable de entorno
        pass: process.env.EMAIL_PASS  // Utilizar la variable de entorno
    }
});

const contactForm = async (mensaje) => {
    try {
        // Crear el contenido del correo
        const mailOptions = {
            from: process.env.EMAIL_USER, // Correo desde donde se enviará
            to: `${process.env.EMAIL_USER}, ${process.env.EMAIL_USER2} `, // Correo al que se enviará
            subject: "Contacto desde plataforma",
            html: `
    <body>
  <div style="font-family: Arial, sans-serif; padding: 20px;">
    <h1 style="color: #333;">El cliente: <strong>${mensaje.nombre}</strong></h1>

    <h2 style="color: #555;">Tiene este mensaje para ustedes:</h2>
    <p style="font-size: 16px; color: #333;">${mensaje.message}</p>

    <p style="font-size: 18px; color: #333;"><strong>Datos de contacto:</strong></p>
    
    <ul style="font-size: 16px; color: #333; list-style-type: none; padding-left: 0;">
      <li><strong>Correo Electrónico:</strong> ${mensaje.email}</li>
      <li><strong>Teléfono:</strong> ${mensaje.celular}</li>
      <li><strong>Paquete:</strong> ${mensaje.pack}</li>
    </ul>
  </div>
</body>

`,

        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);
       
    } catch (error) {
        console.error("Error al enviar el correo:", error.message);
    }
};


module.exports={
    contactForm
}