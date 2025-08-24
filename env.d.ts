// src/env.d.ts
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {}
}

declare global {
  namespace Astro {
    interface Props {
      post: {
        id: string;
        slug: string;
        body: string;
        collection: "blog";
        data: {
          title: string;
          description: string;
          pubDate: Date;
          updatedDate?: Date;
          author: string;
          tags: string[];
          image?: string;
        };
        render: () => Promise<{
          Content: any;
          headings: any[];
          remarkPluginFrontmatter: Record<string, any>;
        }>;
      };
    }
  }
}