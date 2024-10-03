import React, { useEffect, useState } from "react";
import { useFormValue, set, unset } from "sanity";
import { client } from "@/sanity/client";
import { SECTIONS_QUERY } from "@/sanity/queries";

export default function MyCustomComponent(props) {
  const docId = useFormValue(["_id"]); // Get the document ID from Sanity
  const { onChange, value } = props;
  const [data, setData] = useState(null);
  const [selectedKey, setSelectedKey] = useState(props.value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (docId) {
          const result = await client.fetch(SECTIONS_QUERY, {
            docId: docId,
          });
          setData(result);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [docId]);

  const handleSelect = (key) => {
    // Here we use the `set` function provided by Sanity
    onChange(set(key));
  };

  const handleClear = () => {
    // To clear the value, we use `unset`
    onChange(unset());
  };

  return (
    <div>
      <h3>Select a section:</h3>
      {data &&
        data.sectionsBody.map((section) => (
          <div
            key={section._key}
            onClick={() => handleSelect(section._key)}
            style={{
              cursor: "pointer",
              backgroundColor:
                selectedKey === section._key ? "#e0e0e0" : "transparent",
              padding: "10px",
              margin: "5px 0",
              borderRadius: "4px",
            }}
          >
            <h4>{section.title}</h4>
            <p>Key: {section._key}</p>
          </div>
        ))}
      {selectedKey && (
        <div>
          <p>Selected section key: {selectedKey}</p>
          <button onClick={handleClear}>Clear Selection</button>
        </div>
      )}
    </div>
  );
}
