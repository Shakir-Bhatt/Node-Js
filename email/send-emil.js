let nodeMailer = require('nodemailer');

let transporter = nodeMailer.createTransport({
	service: 	'gmail',
	auth: {
	    user: 'abcedf@gmail.com',
	    pass: 'somepassword'
	}
});

var mailOptions = {
  	from: 'sender@gmail.com',
  	to: 'receiver@gmail.com',
  	subject: 'Sending Email using Node.js',
  	text: 'That was easy!'
};

transporter.sendMail(mailOptions,function(error, info){
	if (error) {
	    console.log(error);
	} else {
	    console.log('Email sent: ' + info.response);
	}
});