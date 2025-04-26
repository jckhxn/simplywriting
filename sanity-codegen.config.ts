import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
  // Path to your Sanity schema files
  schemaPath: './sanity/schemas',
  
  // Output path for generated types
  outputPath: './types/generated/schema.ts',

  // Customize how certain types are generated
  customTemplates: {
    // If you need to handle specific types differently
  },
  
  // Specify which documents you want to generate types for
  includeTypes: [
    // Site document including header/footer
    'site',
    // Blog post types for metadata
    'post',
    'category',
    'author',
    // Navigation components
    'nav.2',
    'block.footer',
    // Other document types used in your project
    'page',
    // Add any other types you need
  ],

  // Exclude large or unnecessary types
  excludeTypes: ['sanity.fileAsset', 'sanity.imageAsset'],

  // Additional options
  customTypeOptions: {
    // Special handling for specific types if needed
  }
};

export default config;