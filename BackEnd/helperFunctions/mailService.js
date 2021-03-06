const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "login",
    user: "",
    pass: "",
  },
});

function mailConfig(obj) {

    let mailDetails = {
        from: "",
        to: obj.to,
        subject: obj.subject,
        html: obj.html,
      };

    return mailDetails;
}

function sendMail(data,nodemailerTransporter,res) {

    nodemailerTransporter.sendMail(data, function (err, data) {
        if (err) {
          console.log("Error Occurs", err.message);
          return res.status(500).send({message : "Something Went Worng! Please try Again"})
        } else {
          console.log("Email sent successfully : ",);
          console.log(data);

          return res.status(200).send({message : `Please Check your mail, we sent a mail regarding your query`})
        }
      });
}


exports.sendMail = sendMail;
exports.mailConfig = mailConfig;
exports.mailTransporter = mailTransporter;