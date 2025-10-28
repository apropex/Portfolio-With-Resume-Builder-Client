"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import ButtonSpinner from "@/components/ui/button-spinner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SelectTags from "@/components/ui/select-tags";
import { Textarea } from "@/components/ui/textarea";
import { Tag } from "emblor";
import { useState } from "react";

const blogCategories = [
  {
    title: "Core Web Development",
    categories: [
      "Frontend Development",
      "Backend Development",
      "Full Stack",
      "JavaScript Frameworks (React, Vue, Angular)",
      "CSS & Styling (Tailwind, Sass)",
      "Headless CMS",
    ],
  },
  {
    title: "Emerging Technologies",
    categories: [
      "Artificial Intelligence (AI)",
      "Machine Learning (ML)",
      "Blockchain & Web3",
      "Quantum Computing",
      "Augmented & Virtual Reality (AR/VR)",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    categories: [
      "Cloud Computing (AWS, Azure, GCP)",
      "DevOps & CI/CD",
      "Containerization (Docker, Kubernetes)",
      "Serverless Architecture",
    ],
  },
  {
    title: "Data & Security",
    categories: [
      "Data Science & Analytics",
      "Databases (SQL, NoSQL)",
      "Big Data",
      "Cybersecurity",
      "Privacy & Ethics in Tech",
    ],
  },
  {
    title: "Mobile & Software",
    categories: [
      "Mobile Development (iOS, Android, React Native)",
      "Software Engineering Principles",
      "Programming Languages (Python, Java, Go, Rust)",
      "APIs & Microservices",
    ],
  },
  {
    title: "Design & Productivity",
    categories: [
      "UI/UX Design",
      "Productivity & Tools",
      "Remote Work & Tech Lifestyle",
      "Tech Reviews & Gadgets",
    ],
  },
  {
    title: "Career & Learning",
    categories: [
      "Career & Interview Prep",
      "Tech Education & Bootcamps",
      "Open Source Projects",
    ],
  },
];

/*
{
    "title": "The Future of AI: What's Coming in the Next 5 Years?",
    "content": "",
    "excerpt": "Explore the next five years of AI advancements, from generative models to ethical challenges and quantum integration.",
    "slug": "future-of-ai-2025",
    "authorId": "123e4567-e89b-12d3-a456-426614174000",
    "category": "Artificial Intelligence",
    "tags": [
        "AI",
        "Technology",
        "Future Trends"
    ],
    "images": ["https://i.ibb.co.com/SwN6DBpG/01-ai1.png"],
    "publishedAt": "2025-10-02T01:00:00.000Z",    
}
*/

const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  content: z.string().min(20, { message: "Content must be at least 20 characters." }),
  excerpt: z.string().min(1, { message: "Excerpt is required" }),
  category: z.string().min(1, { message: "Category is required" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function CreateBlogForm() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagError, setTagError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);

  //

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      excerpt: "",
      category: "",
    },
  });

  async function onSubmit(values: FormValues) {
    if (tags.length < 3) {
      setTagError("Select Minimum 3 tags");
      return;
    }
    setTagError(null);
    setCreating(true);

    try {
    } catch (error) {
      console.log(error);
    } finally {
      setCreating(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 border rounded-2xl p-5"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter a title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="excerpt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Excerpt</FormLabel>
              <FormControl>
                <Input placeholder="Enter a excerpt" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter a content" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {blogCategories.map((group, index) => (
                        <SelectGroup key={index}>
                          <SelectLabel className="mt-2">{group.title}</SelectLabel>
                          {group.categories.map((category, catIndex) => (
                            <SelectItem key={catIndex} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <SelectTags
            tags={tags}
            setTags={setTags}
            className="flex-1"
            error={tags.length < 3 ? tagError : null}
          />
        </div>

        <div className="grid place-content-center">
          <Button type="submit" className="rounded ">
            <ButtonSpinner
              isLoading={creating}
              defaultText="Create Blog"
              loadingText="Creating..."
            />
          </Button>
        </div>
      </form>
    </Form>
  );
}
