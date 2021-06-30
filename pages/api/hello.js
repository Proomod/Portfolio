// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
var data = fs.readFileSync("./pramodcv.pdf");
export default function handler(req, res) {
  // res.setHeader(
  //   'Content-Disposition: attachment; filename="../assets/pramodcv.pdf"'
  // );
  res.contentType("application/pdf");
  res.status(200).send(data);
}
