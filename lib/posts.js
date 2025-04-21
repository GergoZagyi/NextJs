import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Path to your markdown posts
const postsDirectory = path.join(process.cwd(), 'content');

// Get all posts
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      image: data.image,
      content,
    };
  });
}