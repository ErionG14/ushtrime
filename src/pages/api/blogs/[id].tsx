// pages/api/blogs/[id].tsx
import { deleteBlog, getBlog, updateBlog } from "@/api/services/Blog";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;
      const blog = await getBlog(id as string);
      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (req.method === "PUT") {
    // <--- Changed to `else if`
    try {
      const { id } = req.query;
      const newBlog = req.body;
      const result = await updateBlog(id as string, newBlog);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (req.method === "DELETE") {
    // <--- Changed to `else if`
    try {
      const { id } = req.query;
      const blog = await deleteBlog(id as string);
      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    // This `else` now correctly applies if the method is neither GET, PUT, nor DELETE
    res
      .status(405)
      .json({
        message: "Metoda e kërkesës nuk është e mbështetur Method Not Allowed",
      });
  }
}
