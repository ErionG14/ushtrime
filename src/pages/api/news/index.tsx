import { NextApiRequest, NextApiResponse } from "next";
import { getNews, createNews } from "@/api/services/News";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const newNews = req.body;
      const result = await createNews(newNews);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: "Gabim gjatë krijimit të lajmit " + error });
    }
  } else if (req.method === "GET") {
    try {
      const news = await getNews();
      res.status(200).json(news);
    } catch (error) {
      res.status(500).json({ message: "Gabim gjatë marrjes së lajmeve " + error });
    }
  } else {
    res.status(405).json({ message: "Metoda e kërkesës nuk është e mbështetur Method Not Allowed" });
  }
}