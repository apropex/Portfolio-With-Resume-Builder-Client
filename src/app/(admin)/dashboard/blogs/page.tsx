//

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { iResponse } from "@/types";
import { iBlog } from "@/types/blog";
import { _fetch } from "@/utils/_fetch";
import apiLink from "@/utils/apiLink";
import { format } from "date-fns";
import { CheckIcon, EditIcon, XIcon } from "lucide-react";

export default async function DashboardBlog() {
  const { data: blogs } = await _fetch<iResponse<iBlog[]>>(apiLink("/blog"), {
    cache: "no-store",
  });

  return (
    <div className="">
      <h3 className="text-3xl text-center font-bold my-10">All Blogs</h3>

      <div className="border rounded-2xl overflow-hidden py-2">
        <Table>
          <TableCaption>The blogs you have created</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-7 text-left">#</TableHead>
              <TableHead>Creator</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-center">Published</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs?.map((blog, index) => (
              <TableRow key={blog.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{blog.author.name}</TableCell>
                <TableCell className="line-clamp-1">{blog.title}</TableCell>
                <TableCell>{blog.category}</TableCell>
                <TableCell>{format(new Date(blog.createdAt), "Pp")}</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    {blog.published ? <CheckIcon /> : <XIcon />}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <EditIcon />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total Blogs</TableCell>
              <TableCell colSpan={3} className="text-right">
                120
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
