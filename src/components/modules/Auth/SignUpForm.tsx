//

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { register } from "@/actions/auth";
import AvatarUpload from "@/components/avatar-upload";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingSpinner from "@/components/ui/loadingSpinner";
import { iNotification, Notifications } from "@/components/ui/notifications";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "Full name must be at least 2 characters.",
    })
    .max(50, {
      message: "Full name must not exceed 50 characters.",
    }),
  email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
    message: "Please enter a valid email address.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();
  const toastRef = useRef<iNotification>(null);

  // Define form.
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  // Define submit handler.
  async function onSubmit({ fullName, email, password }: FormValues) {
    setLoading(true);

    const data: {
      name: string;
      email: string;
      password: string;
      provider: "credentials";
    } = {
      name: fullName,
      email,
      password,
      provider: "credentials",
    };

    const formData = new FormData();

    if (file) formData.append("file", file);
    formData.append("data", JSON.stringify(data));

    try {
      const newUser = await register(data);

      if (newUser.success) {
        toastRef.current?.createNotification(
          "success",
          `Successfully register ${newUser.name}`,
          "Would you like an adventure now, or would you like to have your tea first?"
        );
        if (newUser?.data.provider === "credentials") router.push("/signin");
        else router.push("/");
      } else
        toastRef.current?.createNotification(
          "error",
          "Failed to register user",
          "We are sorry for unnecaccery problem, try again later or contact to admin"
        );
    } catch (error) {
      console.log({ error });
      toastRef.current?.createNotification(
        "error",
        `Failed to register user`,
        "We are sorry for unnecaccery problem, try again later or contact to admin"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AvatarUpload setFile={setFile} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium uppercase">Full Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      className="w-full rounded-lg py-5 pl-10"
                      placeholder="John Doe"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormDescription className="sr-only">Full Name Field</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium uppercase">
                  Email address
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="email"
                      className="w-full rounded-lg py-5 pl-10"
                      placeholder="john@example.com"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormDescription className="sr-only">Login Email Field</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium uppercase">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="w-full rounded-lg py-5 pl-10"
                      placeholder="Enter your password"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormDescription className="sr-only">
                  Login password field
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            className="login-btn relative flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium text-white transition-all duration-300"
            disabled={loading}
          >
            <LoadingSpinner
              defaultText="Create your account"
              loadingText="Creating..."
              isLoading={loading}
            />
          </button>
        </form>
      </Form>
      <Notifications
        ref={toastRef}
        timerColor="rgba(255,255,255,0.8)"
        timerBgColor="rgba(255,255,255,0.3)"
      />
    </>
  );
}
