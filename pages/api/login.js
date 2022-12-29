import cookie from "cookie";
const handler = (req, res) => {
  console.log("req came form forntend");
  console.log("req came", req.body.password);
  console.log("req came", req.body.username);
  if (req.method === "POST") {
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      console.log("test pass");
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          maxAge: 60 * 60 * 1,
          sameSite: "strict",
          path: "/",
        })
      );
      console.log("cookoie set", process.env.TOKEN);
      res.status(200).json("successfull");
    } else {
      console.log("req failed");
      res.status(404).json("wrong credentials");
    }
  }
};
export default handler;
