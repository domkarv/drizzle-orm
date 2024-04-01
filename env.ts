import { z } from "zod";

export const envVariables = z.object({
  NODE_ENV: z.string(),
  DB_URL: z.string(),
});

/**
 * parse: Throws an error if validation fails. Use this when you have high
 *        confidence in the data’s structure and want to catch potential errors early.
 *
 * safeParse: Returns a result object containing either the parsed data on
 *            success or an error object on failure. This is ideal when dealing with less
 *            predictable data, allowing you to gracefully handle validation issues.
 */
envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
