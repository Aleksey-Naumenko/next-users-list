import { articles } from "../../../data"; // this data could be get from enywhere: sql, rest

export default function handler(req, res) {
  res.status(200).json(articles);
}
