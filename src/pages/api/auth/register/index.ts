import { User } from "@/api/models/User";
import { createUser, getUser } from "@/api/services/User";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { name, email, password } = req.body as User;
        if (!name || !email || !password) {
            return res
            .status(400)
            .json({ error: "Ju lutem plotësoni të gjitha fushat" });
        }

        try {
           const existingUser = await getUser(email);
            if (existingUser) {
                return res
                .status(400)
                .json({ error: "Ky email është i regjistruar tashmë" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser: User = {
                name,
                email,
                password: hashedPassword,
                createdAt: new Date(),
            }; 

            const result = await createUser(newUser);
            return res.status(201).json({
                 message: "Përdoruesi u regjistrua me sukses", 
                 userId: result.insertedId,
                });
        } catch (error) {
            console.error("Error creating user:", error);
            return res.status(500).json({ error: "Gabim gjatë regjistrimit" });
        }
    } else {
        return res
            .status(405)
            .json({ error: "Metoda e kërkesës nuk është e mbështetur" });
    }
}