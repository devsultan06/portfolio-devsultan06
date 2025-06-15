// SnippetList.tsx

import React from "react";
import SnippetCard, { type Snippet } from "./SnippetCard";

const snippets: Snippet[] = [
    {
        id: "1",
        username: "username",
        createdAgo: "5 months ago",
        image: "/images/user1.svg",
        stars: 3,
        code: `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`,
    },
    {
        id: "2",
        username: "username",
        createdAgo: "9 months ago",
        image: "/images/user2.svg",

        stars: 0,
        code: `export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);
}`,
    },

    {
        id: "2",
        username: "username",
        createdAgo: "9 months ago",
        image: "/images/user2.svg",

        stars: 0,
        code: `export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);
}`,
    },
    {
        id: "2",
        username: "username",
        createdAgo: "9 months ago",
        image: "/images/user2.svg",

        stars: 0,
        code: `export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);
}`,
    },
];

const SnippetList: React.FC = () => {
    return (
        <div className=" mt-[64px] ">
            {snippets.map((snippet) => (
                <SnippetCard key={snippet.id} snippet={snippet} />
            ))}
        </div>
    );
};

export default SnippetList;
