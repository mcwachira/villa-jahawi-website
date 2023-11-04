import nodemailer from "nodemailer";

const SendMail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
      pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
    },
  });

  //   console.log(req.body);
  try {
    const info = await transporter.sendMail({
      from: `${req.body.email}`,
      subject: `${req.body.message}`,
      to: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">

              <p>Email:</p>
              <p>${req.body.email}</p>
              <p>PhoneNumber:</p>
              <p>${req.body.phoneNumber}</p>
    
              <div className="flex">
              <p>Adults:</p>
              <p>${req.body.adults}</p>
              <p>Children:</p>
              <p>${req.body.children}</p>
              <p>Adults:</p>
           </div>
              <p>Booking Date:</p>
              <p>${req.body.bookingDate}</p>
            
              <p>Nights:</p>
              <p>${req.body.nights}</p>
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <img src="../../images/logos/web/png/color-logo-background.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Villa Jahawi <br> +254703496926<br>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://wWw.villajahawi.com/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                

              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
};

export default SendMail;
