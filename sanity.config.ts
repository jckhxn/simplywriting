import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { pages } from "@tinloof/sanity-studio";

import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schemas } from "@/sanity/schemas";
import config from "@/config";
import { media, mediaAssetSource } from "sanity-plugin-media";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

import StudioLogo from "@/app/(site)/components/StudioLogo";
import structure from "@/sanity/structure";

// Custom CSS for the studio
import "@/sanity/custom.css";
import { defaultDocumentNode } from "./lib/defaultDocumentNode";

import { resolve } from "@/sanity/lib/resolve";

export default defineConfig({
  basePath: config.sanity.studioUrl,
  projectId,
  dataset,
  schema: schemas,
  title: config.siteName,
  icon: StudioLogo,

  plugins: [
    unsplashImageAsset(),
    pages({
      resolve,
      previewUrl: {
        previewMode: {
          enable: "/api/enable-draft",
        },
      },

      creatablePages: ["page"],
    }),

    structureTool({
      title: "Content",
      structure,
      defaultDocumentNode,
    }),
    media(),

    visionTool({ defaultApiVersion: apiVersion }),
  ],
  // Hide the media asset source from form builder.
  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource !== mediaAssetSource
        );
      },
    },
  },
});
