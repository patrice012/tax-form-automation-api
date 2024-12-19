import mongoose from "mongoose";

export interface IScrapedData extends mongoose.Document {
  url: string;
  data: string[];
  scrapedAt: Date;
}

const ScrapedDataSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true,
  },
  data: [
    {
      type: String,
    },
  ],
  scrapedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IScrapedData>("ScrapedData", ScrapedDataSchema);
