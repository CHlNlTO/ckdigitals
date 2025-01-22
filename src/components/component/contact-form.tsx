"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { useToast } from "@/hooks/use-toast";
import { ContactFormData } from "@/lib/types";

const email = "mailto:clark.wayne023@gmail.com";
const phone = "tel:09177212114";
const facebook = "https://www.facebook.com/itswaynetoomuch";
const instagram = "https://www.instagram.com/itswaynetoomuch";
const tiktok = "https://www.tiktok.com";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    console.log("FormData:", data);

    try {
      const result = await submitContactForm(data);

      if (result.success) {
        toast({
          title: "Success",
          description: "Your message has been sent successfully!",
          variant: "success",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Error",
          description: result.message,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl w-full mx-4 md:mx-auto rounded-xl sm:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-[#121212] border">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Contact Us
      </h2>
      <p className="text-neutral-600 text-sm mt-2 dark:text-neutral-300">
        Have a question? Send us a message and we will get back to you as soon
        as possible.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="juandelacruz@gmail.com"
            type="email"
            name="email"
          />
        </LabelInputContainer>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="I would like to avail your service. How do I get started?"
              name="message"
            />
          </LabelInputContainer>
        </div>
        <button
          className={cn(
            "inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] h-10 px-8 whitespace-pre md:flex group relative w-full gap-1 rounded-xl text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 dark:bg-white dark:text-white hover:ring-blue-500 hover:ring-offset-2 hover:dark:ring-offset-zinc-900 dark:hover:ring-blue-500",
            loading && "opacity-50 cursor-not-allowed"
          )}
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"} &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <p className="text-neutral-600 text-sm max-w-md mt-2 dark:text-neutral-300">
          Also, feel free to get in touch with us using the platforms below.
        </p>

        <div className="flex flex-col space-y-4 mt-8">
          <Link href={email} passHref>
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconMail className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                clark.wayne023@gmail.com
              </span>
              <BottomGradient />
            </button>
          </Link>
          <Link href={phone} passHref>
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconPhone className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                0917-721-2114
              </span>
              <BottomGradient />
            </button>
          </Link>
          <Link href={facebook} target="_blank" passHref>
            <span className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
              <IconBrandFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Facebook
              </span>
              <BottomGradient />
            </span>
          </Link>
          <Link href={instagram} target="_blank" passHref>
            <span className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
              <IconBrandInstagram className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Instagram
              </span>
              <BottomGradient />
            </span>
          </Link>
          <Link href={tiktok} target="_blank" passHref>
            <span className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
              <IconBrandTiktok className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Tiktok
              </span>
              <BottomGradient />
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
