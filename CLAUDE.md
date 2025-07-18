# CLAUDE.md - AI Assistant Instructions for Writer's Portfolio Project

## 🚨 CRITICAL: Start of Every Session

**ALWAYS perform these actions at the beginning of EVERY conversation:**

1. **Read PLANNING.md** - Contains project roadmap, architecture decisions, and current sprint goals
2. **Check TASKS.md** - Review pending tasks, completed items, and priority order
3. **Scan recent commits** - Understand what has changed since last session
4. **Verify environment** - Ensure you understand the current state of the project

## 📋 Project Overview

This is **SimplyWriting** - a modern writer's portfolio and services website built with:
- **Framework**: Next.js 15 (App Router)
- **CMS**: Sanity v3 with Page Builder Architecture
- **UI Components**: shadcn/ui (extensively implemented)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Vercel

**Current Branch**: `refresh-components`

The primary goal is to create a high-performance, SEO-optimized website with a flexible page builder system that showcases copywriting services and converts visitors into clients.

## 🏗️ Project Structure

```
simplywriting/
├── app/                       # Next.js 15 App Router
│   ├── (site)/               # Public-facing routes
│   │   ├── components/       # React components
│   │   │   ├── ui/          # shadcn/ui components (extensive)
│   │   │   ├── sections/    # Page builder sections
│   │   │   └── navigation/  # Nav and footer components
│   │   ├── [...path]/       # Dynamic page routes
│   │   ├── blog/            # Blog section
│   │   ├── writing/         # Writing portfolio
│   │   └── api/             # API routes
│   ├── (studio)/            # Sanity Studio route
│   └── actions/             # Server actions
├── lib/                      # Utilities and helpers
├── sanity/                   # Sanity configuration
│   ├── schemas/             # Content schemas
│   │   ├── documents/       # Page, post, work
│   │   ├── sections/        # Page builder sections
│   │   ├── objects/         # Reusable objects (SEO, CTA)
│   │   └── navigation/      # Navigation schemas
│   └── queries.ts           # GROQ queries
├── types/                    # TypeScript types
├── components.json           # shadcn/ui config
├── config.ts                 # Main config file
├── PLANNING.md              # Project roadmap
├── NOTES.md                 # Development notes & todos
└── CLAUDE.md                # This file
```

## 📝 Task Management Protocol

### Before Starting Work
1. **Always check TASKS.md first**
2. Identify the highest priority incomplete task
3. Announce which task you're starting
4. Review any related code or documentation

### During Work
1. Follow the existing code patterns and conventions
2. Write comprehensive comments for complex logic
3. Include proper TypeScript types
4. Test your implementation approach
5. Consider SEO implications for all changes

### After Completing a Task
1. **Immediately mark the task as completed in TASKS.md**
   ```markdown
   - [x] Task description (COMPLETED: YYYY-MM-DD)
   ```
2. Add any newly discovered tasks to TASKS.md
3. Update documentation if needed
4. Commit with descriptive message following conventional commits

### Discovering New Tasks
When you identify new tasks during development:
1. Add them to TASKS.md immediately
2. Assign appropriate priority (High/Medium/Low)
3. Include clear description and acceptance criteria
4. Note any dependencies

## 🎯 Key Development Principles

### 1. SEO-First Development
- Every page must have proper meta tags
- Implement structured data (JSON-LD) for all content types
- Ensure proper heading hierarchy (h1, h2, h3)
- Use semantic HTML elements
- Generate dynamic sitemaps
- Implement Open Graph and Twitter Cards

### 2. Performance Optimization
- Use Next.js Image component for all images
- Implement lazy loading for below-fold content
- Minimize client-side JavaScript
- Use Server Components by default
- Implement proper caching strategies
- Optimize fonts and assets

### 3. Sanity CMS Best Practices
- Implement modular page builder architecture
- Create reusable block schemas
- Use array-based page sections
- Include SEO fields in all document types
- Use references instead of embedded data
- Implement proper validation rules
- Create intuitive desk structure for page building
- Use GROQ queries efficiently
- Implement visual block previews

### 4. Tailwind CSS & shadcn/ui Guidelines
- Use shadcn/ui components as the foundation
- Extend components with custom variants when needed
- Follow shadcn/ui naming conventions
- Use CSS variables for theming (--background, --foreground, etc.)
- Maintain consistent use of cn() utility for className merging
- Avoid arbitrary values when possible
- Extend theme in tailwind.config.ts properly
- Keep component styling within component files

### 5. TypeScript Standards
- No `any` types - always define proper interfaces
- Export types from a central location
- Use type inference where appropriate
- Document complex types
- Validate external data (Zod for forms/API)

## 🔧 Common Tasks and Solutions

### Adding a New Page
1. Create route in `app/(site)/[page-name]/page.tsx`
2. Add metadata generation function
3. Implement structured data
4. Create Sanity schema if content-managed
5. Add to navigation components
6. Update sitemap generation
7. Test SEO implementation

### Adding a New Page Builder Block
1. Create block schema in `sanity/schemas/blocks/`
2. Add to page builder array schema
3. Create corresponding component in `components/blocks/`
4. Map block type to component in page renderer
5. Add TypeScript types
6. Test in Sanity Studio
7. Style with Tailwind and shadcn/ui patterns

### Creating a Sanity Schema
1. Define schema in appropriate directory:
   - `sanity/schemas/documents/` for pages
   - `sanity/schemas/blocks/` for page builder blocks
   - `sanity/schemas/objects/` for reusable objects
2. Include preview configuration
3. Add to schema index
4. Create corresponding TypeScript types
5. Write GROQ queries in `lib/sanity/queries/`
6. Test in Sanity Studio

### Implementing a New Component
1. Check if shadcn/ui has the component:
   ```bash
   npx shadcn-ui@latest add [component-name]
   ```
2. If custom, create in appropriate directory
3. Use TypeScript interfaces for props
4. Implement with cn() utility for styling
5. Follow shadcn/ui patterns for variants
6. Add proper ARIA labels for accessibility
7. Document usage with comments
8. Export from index file

### SEO Implementation Checklist
- [ ] Meta title (under 60 chars)
- [ ] Meta description (under 160 chars)
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Canonical URL
- [ ] Structured data (JSON-LD)
- [ ] Alt text for images
- [ ] Proper heading structure

## 🐛 Debugging Guidelines

### Common Issues
1. **Sanity data not updating**: Check revalidation webhook
2. **TypeScript errors**: Run `npm run type-check`
3. **Build failures**: Check environment variables
4. **SEO not working**: Validate with Google's tools
5. **Performance issues**: Use Next.js 15 analytics
6. **Page builder blocks not rendering**: Check block mapping
7. **shadcn/ui component issues**: Verify installation and imports

### Tools to Use
- Chrome DevTools for performance
- React Developer Tools
- Sanity Vision for GROQ queries
- Google Search Console for SEO
- Lighthouse for audits

## 📊 Code Quality Standards

### Before Committing
1. Run `npm run lint` and fix issues
2. Run `npm run type-check` for TypeScript
3. Test responsive design
4. Verify SEO implementation
5. Check accessibility (keyboard navigation, screen readers)
6. Review performance impact

### Commit Message Format
```
type(scope): description

- Detailed change 1
- Detailed change 2

Closes #issue-number
```

Types: feat, fix, docs, style, refactor, test, chore

## 🚀 Deployment Checklist

Before deploying to production:
1. All tasks marked complete in TASKS.md
2. Environment variables configured
3. SEO meta tags verified
4. Performance audit passed
5. Accessibility audit passed
6. Cross-browser testing done
7. Mobile responsiveness verified
8. Forms tested
9. Analytics configured
10. Error tracking enabled

## 📚 Important Resources

### Documentation
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Web.dev SEO Guide](https://web.dev/learn-web-vitals)

### Project-Specific
- Design system in Figma: [Link]
- Sanity Studio: `/studio`
- Deployment URL: [Production URL]
- Analytics Dashboard: [Link]

## 🔄 Session Handoff Protocol

At the end of each session:
1. Update TASKS.md with progress
2. Commit all changes with clear messages
3. Note any blockers or decisions needed
4. Update documentation if needed
5. Leave clear notes for the next session

## ⚠️ Critical Reminders

1. **ALWAYS read PLANNING.md and TASKS.md at session start**
2. **Mark tasks complete immediately after finishing**
3. **Add new tasks as soon as they're discovered**
4. **Prioritize SEO in every implementation**
5. **Follow TypeScript types strictly**
6. **Test responsive design for all changes**
7. **Consider performance impact**
8. **Document complex implementations**

---

Remember: This project prioritizes SEO, performance, and conversion. Every decision should support these goals while maintaining code quality and developer experience.