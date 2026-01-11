import { posts } from "@/data/writing";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// In a real app, this would be async fetching content
// For mock, we'll assume content is passed or just use a placeholder text if not present in mock.
const MOCK_CONTENT_TEMPLATE = `
## The Shift to Conversational UI

The graphical user interface (GUI) has dominated computing for forty years. We drag files, click icons, and navigate nested menus. These abstractions were necessary when computers couldn't understand our natural language.

But today, with the rise of Large Language Models (LLMs), we are witnessing a paradigm shift towards **Language User Interfaces (LUI)**.

### Why Text is the Universal Interface

> "The most efficient interface is the one you already know how to use: your own language."

When we move from clicking to chatting, the learning curve flattens. We no longer need to memorize where a setting is buried in a sub-menu; we simply ask for it.

- **Intent-driven**: Users express *what* they want, not *how* to do it.
- **Adaptive**: The interface can change based on context.
- **Personal**: The tone and complexity can match the user.

### Designing for Uncertainty

The challenge for designers is no longer just layout and hierarchy, but *uncertainty*. 

1. How do we handle hallucinations?
2. How do we guide users without restrictive menus?
3. What is the feedback loop for a wrong answer?

Code snippet example:

\`\`\`typescript
interface Message {
  role: 'user' | 'system';
  content: string;
}
\`\`\`

We are just getting started.
`;

// Generate Static Params for SSG
export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Use the mock content or proper content if added to the mock data
    const content = post.content || MOCK_CONTENT_TEMPLATE;

    return (
        <article className="max-w-2xl mx-auto py-12 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Link
                href="/writing"
                className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8 text-sm group"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Writing
            </Link>

            <header className="mb-10 space-y-4">
                <div className="flex gap-3 text-sm font-mono text-secondary mb-4">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-serif text-primary leading-tight">
                    {post.title}
                </h1>
                <div className="flex gap-2 pt-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="text-xs border border-border px-2 py-0.5 rounded-full text-secondary">
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none prose-headings:font-serif prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:text-accent prose-code:bg-surface-hover prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                </ReactMarkdown>
            </div>

            <hr className="my-12 border-border" />

            <div className="flex justify-between items-center">
                <p className="font-serif italic text-lg text-primary">Thanks for reading.</p>
                <Link href="/contact" className="text-secondary hover:text-primary underline decoration-border hover:decoration-primary underline-offset-4 transition-all">
                    Discuss this post
                </Link>
            </div>
        </article>
    );
}
