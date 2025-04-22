import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'content', 'posts');
  const files = fs.readdirSync(postsDir);

  return files.map(filename => ({
    slug: filename.replace('.md', '')
  }));
}


export default async function BlogPost({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content', 'posts', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const htmlContent = marked(content);

  return (
    <article className="prose mx-auto px-4 py-8">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">
        By {data.author} on {data.date}
      </p>
      {data.image && <img src={data.image} alt={data.title} className="my-4" />}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  );
}