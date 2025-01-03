import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const labelsSnapshot = await getDocs(collection(db, "mainLabels"));
      const labels = labelsSnapshot.docs.map((doc) => ({
        id: doc.id,
        label: doc.data().label
      }));
      
      console.log("Labels from Firestore:", labels);
      res.status(200).json(labels);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch labels" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
