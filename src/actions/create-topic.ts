"use server";

import { z } from "zod";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-zA-Z0-9 ]+$/, {
      message: "Name must only contain alphanumeric characters and spaces",
    }),
  description: z.string().min(10),
});

export async function createTopic(formState: number, formData: FormData) {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
  } else {
    console.log(`result: ${JSON.stringify(result)}`);
  }

  return 10;
}
