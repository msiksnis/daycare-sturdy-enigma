"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

import {
  UpdateProfileValues,
  updateProfileSchema,
} from "../lib/profileValidation";

export async function updateProfile(values: UpdateProfileValues) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    throw Error("User not found");
  }

  const { name } = updateProfileSchema.parse(values);

  await prisma?.user.update({
    where: { id: userId },
    data: { name },
  });

  revalidatePath("/");
}
