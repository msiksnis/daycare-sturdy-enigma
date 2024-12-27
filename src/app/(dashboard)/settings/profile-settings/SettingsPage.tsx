"use client";

import Container from "@/components/Container";
import { FloatingInput, FloatingLabel } from "@/components/FloatingInput";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { updateProfile } from "./actions/updateProfileAction";
import {
  UpdateProfileValues,
  updateProfileSchema,
} from "./lib/profileValidation";
import { User } from "next-auth";

interface SettingsPageProps {
  user: User;
}

export default function SettingsPage({ user }: SettingsPageProps) {
  const { toast } = useToast();

  const form = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: { name: user?.name || "" },
  });

  async function onSubmit(data: UpdateProfileValues) {
    try {
      await updateProfile(data);
      toast({ description: "Profile updated." });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        description: "An error occurred. Please try again.",
      });
    }
  }

  return (
    <Container heading="Profile settings">
      <section className="mx-auto max-w-7xl space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-sm space-y-2.5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div id="name" className="relative">
                      <FloatingInput className="bg-card" {...field} />
                      <FloatingLabel htmlFor="name" className="bg-card">
                        Name
                      </FloatingLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              effect={"shineHover"}
              disabled={form.formState.isSubmitting}
            >
              Submit
            </Button>
          </form>
        </Form>
      </section>
    </Container>
  );
}
