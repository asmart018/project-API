import { join } from "path";

export const errorHandler = (err, req, res, next) => {
  return res
    .status(err.status)
    .sendFile(join(__dirname, "../public/notFound.html"));
    
};
