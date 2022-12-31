import dbConnect from "../../../utils/dbConnect";
import Photo from "../../../models/photo";

export default async function addPhoto(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const photos = await Photo.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: photos });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const photo = await Photo.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: photo });
      } catch (error) {
        res.status(400).json({ success: false });
        console.error(error);
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
