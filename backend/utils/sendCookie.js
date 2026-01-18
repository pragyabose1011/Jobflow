const sendCookie = ({ res, token }) => {
  const oneDay = 1000 * 60 * 60 * 24
  const options = {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  }
  if (process.env.NODE_ENV === "production") {
    options.domain = "job-tracking-web-appication.netlify.app"  // Note: Use lowercase 'domain'
  }
  res.cookie("token", token, options)
}

export default sendCookie