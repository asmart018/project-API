import query from "../db/index";

export const logHandler = (req, res, next) => {
  const method = req.method;
  const url = req._parsedUrl.pathname;

  //Finish event emitted when the last segment of the respeonse headers and body
  //have been handed off to the OS for transmission over the network. At which point
  //the status code can be accessed and assigned to the status variable.
  res.on("finish", () => {
    const status = res.statusCode;
    let request = { method, url, status };

    query("INSERT INTO requests SET ?", [request]);
  });
  next();
};
