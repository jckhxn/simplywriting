import {
  DefaultDocumentNodeContext,
  DefaultDocumentNodeResolver,
  StructureBuilder,
  View,
  ViewBuilder,
} from "sanity/structure";
import { LuPencilLine } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import React from "react";
import SeoPane from "./SeoPane";

// Define the SEO Preview Pane component directly within this file
interface SeoPreviewPaneProps {
  document: {
    displayed: any & {
      _type: string;
      pathname?: { current: string };
    };
  };
}

// Define the function to create the SEO Preview Pane view
function seoPreviewPane(S: StructureBuilder) {
  return S.view.component(SeoPane).title("SEO Preview").icon(BiSearch);
}

// Define the default document node resolver
export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  context
) => {
  return S.document().views(defaultViews(S, context));
};

// Define the function to create the default views
export function defaultViews(
  S: StructureBuilder,
  context: DefaultDocumentNodeContext
): Array<View | ViewBuilder> {
  const views: Array<View | ViewBuilder> = [S.view.form().icon(LuPencilLine)];

  views.push(seoPreviewPane(S));

  return views;
}
