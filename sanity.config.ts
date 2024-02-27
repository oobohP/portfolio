import schemas from "./sanity/schemas";
import { defineConfig } from "sanity";
import { table } from '@sanity/table';
import { codeInput } from '@sanity/code-input'
import { structureTool } from "sanity/structure";


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export const config = defineConfig({
  projectId,
  dataset,
  title: "Portfolio",
  apiVersion: "2024-02-21",
  basePath: "/admin",
  plugins: [structureTool(), codeInput(), table()],
  schema: { types: schemas }
})