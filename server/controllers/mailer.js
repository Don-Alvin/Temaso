const nodemailer = require("nodemailer");
const mailGen = require("mailgen");
const dotenv = require("dotenv").config({ path: "./.env" });

let nodeConfig = {
	host: "smtp.ethereal.email",
	port: 587,
	secure: false, // true for 465, false for other ports
	auth: {
		user: process.env.EMAIL, // generated ethereal user
		pass: process.env.PASSWORD, // generated ethereal password
	},
};

let transporter = nodemailer.createTransport(nodeConfig);
let MailGenerator = new mailGen({
	theme: "default",
	product: {
		name: "mailGen",
		link: "https://mailgen.js",
	},
});

async function registerMail(req, res) {
	const { username, userEmail, text, subject } = req.body;

	var email = {
		body: {
			name: username,
			intro:
				text || "Welcome to Proma! We are very excited to have you on board.",
			outro:
				"Need help, or have questions? Just reply to this email, we'd love to help",
		},
	};

	var emailBody = MailGenerator.generate(email);

	let message = {
		from: process.env.EMAIL,
		to: userEmail,
		subject: subject || "Sign up successful",
		html: emailBody,
	};

	transporter
		.sendMail(message)
		.then(() => {
			res.status(200).send({ message: "You should recieve an wmail from us" });
		})
		.catch((error) => res.status(500).send({ error }));
}

module.exports = { registerMail };
