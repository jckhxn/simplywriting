import { defineField, defineType } from "sanity";
import { MediaEditor } from "@/sanity/plugins/og-img/src/";
import { mediaAssetSource } from "sanity-plugin-media";
import brandLayout from "@/sanity/plugins/og-img/src/layouts/brandLayout";
import { GenerateIcon } from "@sanity/icons";

// Navigation and footer are now singleton objects in this schema
export default defineType({
  name: "site",
  title: "Site",
  type: "document",
  groups: [
    { name: "general", title: "General" },
    { name: "navigation", title: "Navigation" },
    { name: "company", title: "Company Info" },
    { name: "social", title: "Social Media" },
  ],
  preview: {
    select: {
      title: "title",
      date: "releaseDate",
    },
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
  fields: [
    // Site Information
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      group: "general",
      description: "The name of your website",
    }),
    defineField({
      name: "description",
      title: "Site Description", 
      type: "text",
      rows: 3,
      group: "general",
      description: "A brief description of your business/services",
    }),
    defineField({
      name: "url",
      title: "Site URL",
      type: "url",
      group: "general",
      description: "The main URL of your website",
    }),

    // Company Information
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      group: "company",
      description: "Legal company name",
    }),
    defineField({
      name: "tagline",
      title: "Company Tagline",
      type: "string",
      group: "company",
      description: "Short catchphrase or slogan",
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "email",
      group: "company",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      group: "company",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      group: "company",
      fields: [
        { name: "street", type: "string", title: "Street Address" },
        { name: "city", type: "string", title: "City" },
        { name: "state", type: "string", title: "State/Province" },
        { name: "zipCode", type: "string", title: "ZIP/Postal Code" },
        { name: "country", type: "string", title: "Country" },
      ],
    }),

    // Social Media
    defineField({
      name: "socialMedia",
      title: "Social Media Links",
      type: "object",
      group: "social",
      fields: [
        { name: "twitter", type: "url", title: "Twitter/X" },
        { name: "linkedin", type: "url", title: "LinkedIn" },
        { name: "facebook", type: "url", title: "Facebook" },
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "youtube", type: "url", title: "YouTube" },
        { name: "github", type: "url", title: "GitHub" },
      ],
    }),

    // Navigation
    defineField({
      name: "navigation",
      title: "Site Navigation",
      group: "navigation",
      description: "Configure the main navigation for your site",
      type: "object",
      fields: [
        defineField({
          name: "brandName",
          title: "Brand Name",
          type: "string",
          description: "Your brand/company name that appears in the navigation",
        }),
        defineField({
          name: "logo",
          title: "Logo",
          type: "image",
          description: "Optional logo image to display in navigation",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "mainLinks",
          title: "Main Navigation Links",
          type: "array",
          of: [{ type: "links" }],
          description: "Primary navigation links that appear in the header",
        }),
        defineField({
          name: "ctaButtons",
          title: "Call-to-Action Buttons",
          type: "array",
          of: [{ type: "cta" }],
          description: "Action buttons that appear in the navigation",
        }),
        defineField({
          name: "showBrandName",
          title: "Show Brand Name",
          type: "boolean",
          description: "Whether to show the brand name in navigation",
          initialValue: true,
        }),
        defineField({
          name: "stickyNavigation",
          title: "Sticky Navigation",
          type: "boolean",
          description: "Whether the navigation should stick to the top when scrolling",
          initialValue: true,
        }),
        defineField({
          name: "transparentOnTop",
          title: "Transparent on Top",
          type: "boolean",
          description: "Whether the navigation should be transparent at the top of the page",
          initialValue: false,
        }),
      ],
    }),

    // Footer
    defineField({
      name: "footer",
      title: "Site Footer",
      group: "navigation",
      description: "Configure the site footer",
      type: "object",
      fields: [
        defineField({
          name: "companyDescription",
          title: "Company Description",
          type: "text",
          rows: 3,
          description: "Brief description of your company/services for the footer",
        }),
        defineField({
          name: "quickLinks",
          title: "Quick Links",
          type: "array",
          of: [{ type: "links" }],
          description: "Quick navigation links to display in footer",
        }),
        defineField({
          name: "serviceLinks",
          title: "Service Links",
          type: "array",
          of: [{ type: "links" }],
          description: "Links to your services to display in footer",
        }),
        defineField({
          name: "legalLinks",
          title: "Legal Links",
          type: "array",
          of: [{ type: "links" }],
          description: "Legal pages like Privacy Policy, Terms of Service",
        }),
        defineField({
          name: "showContactInfo",
          title: "Show Contact Info",
          type: "boolean",
          description: "Whether to show contact information in footer",
          initialValue: true,
        }),
        defineField({
          name: "showSocialMedia",
          title: "Show Social Media",
          type: "boolean",
          description: "Whether to show social media links in footer",
          initialValue: true,
        }),
        defineField({
          name: "copyrightText",
          title: "Copyright Text",
          type: "string",
          description: "Custom copyright text (optional - defaults to company name)",
        }),
        defineField({
          name: "footerColumns",
          title: "Footer Layout",
          type: "string",
          options: {
            list: [
              { title: "Three Columns", value: "three-columns" },
              { title: "Four Columns", value: "four-columns" },
              { title: "Centered", value: "centered" },
            ],
          },
          initialValue: "three-columns",
        }),
      ],
    }),
    defineField({
      name: "ogimage",
      title: "Open Graph Image (global)",
      description:
        "Used as default for social sharing previews when one is not set on a page",
      type: "image",
      group: "general",
      options: {
        sources: [
          // Select from Media
          mediaAssetSource,
          {
            // Gewnerate OG Image
            name: "image",
            title: "Generate image",
            icon: GenerateIcon,

            component: (props) => (
              <MediaEditor {...props} darkMode={true} layouts={[brandLayout]} />
            ),
          },
        ],
      },
    }),
  ],
});
