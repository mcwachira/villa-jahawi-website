import nodemailer from "nodemailer";

const SendMail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
      pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `${req.body.email}`,
      subject: `${req.body.subject}`,
      to: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #fff;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .email-details{
          display:flex;
          flex-direction:row;

        }
        .header {
          background-color: #041835;
          color: #fff;
          padding: 10px;
          text-align: center;
          border-radius: 5px 5px 0 0;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .email-content {
          padding: 20px;
        }
        .sender-info {
          font-weight: bold;
          margin-bottom: 10px;
        }
        .email-body {
          line-height: 1.6;
        }
        .footer {
          background-color: #041835;
          color: #fff;
          text-align: center;
          padding: 10px;
          border-radius: 0 0 5px 5px;
        }
      </style>
    </head>
      
      <body>
        <div class="email-container">
              <div class="header">
              <h1>${req.body.subject}</h1>
              </div>
              <div class='email-content'>
              <p class="sender-info">From: ${req.body.name} &lt;${req.body.email}&gt;</p>
              <p class="sender-info">To: You &lt;${process.env.NEXT_PUBLIC_GMAIL_EMAIL}&gt;</p>
              <hr>
        

              <div class="email-content">
              <p>Message:</p>
              <p>${req.body.message}</p>

              <div className="email-details">
              <p>PhoneNumber: ${req.body.phoneNumber}</p>
            
              </div>
              <br/>
              <div className="email-details">
              <p>Adults: ${req.body.adults}</p>

              <p>Children: ${req.body.children}</p>

              <p>Booking Date: ${req.body.bookingDate}</p>
            
              <p>Nights: ${req.body.nights}</p>

              </div>
              <br>
              </div>
              </div>
              <div class="footer">
        
              <img src="/public/assets/images/jahawi-images/logos/web/png/color-logo-background.png"
              style="height: 100px;width: 100px;/>
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #FFF;">Regards<br>Villa Jahawi <br> +254703496926<br>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://www.villajahawi.com/" style="text-decoration: none;margin: 8px;color: #ffF;">Website</a>
                
                </div>
            
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json(info);
};

export default SendMail;
