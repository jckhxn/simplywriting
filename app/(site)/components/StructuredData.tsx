import React from "react";

type Props = { data: JSON };

// For JSON-LD strutctured data, "rich snippets" in search results
const StructuredData = ({ data }: Props) => {
  return (
    <script
      type="application/ld+json"
      key="jsonld-data"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default StructuredData;
