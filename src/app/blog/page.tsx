import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog() {
  const blogDir = path.join(process.cwd(), "src", "blogs");
  const files = fs.readdirSync(blogDir);

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
  return (
    <main className="flex flex-col">
      <h1 className="text-3xl font-bold">My Next.Js Blog Site</h1>

      <section className="py-10">
        <h2 className="text-2xl font-bold">Latest Blogs</h2>

        <div className="py-2">
          {blogs.map((blog) => (
            <Link href={"/blogs/" + blog.slug} passHref key={blog.slug}>
              <div className="py-2 flex justify-between align-middle gap-2">
                <div>
                  <h3 className="text-lg font-bold">{blog.meta.title}</h3>
                  <div>
                    <p className="">{blog.meta.description}</p>
                  </div>
                  <div className="my-auto ">
                    <p>{blog.meta.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
