// SnippetCard.tsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
declare module 'react-syntax-highlighter';
declare module 'react-syntax-highlighter/dist/esm/styles/prism';


export interface Snippet {
    id: string;
    username: string;
    createdAgo: string;
    image: string;
    code: string;
    stars: number;
}

interface Props {
    snippet: Snippet;
}

const SnippetCard: React.FC<Props> = ({ snippet }) => {
    return (
        <div className="rounded-lg mb-[32px] text-slate400 font-[450] text-[14px]  w-full">
            <div className="flex items-center mb-[20px]">

                <div className="flex gap-[12px]">
                    <img
                        src={snippet.image}
                        alt="Profile"
                        className=" rounded-full mr-2"
                    />

                    <div>
                        <p className="mb-[4px]">@{snippet.username}</p>
                        <p className="">Created {snippet.createdAgo}</p>
                    </div>
                </div>

                <div className="ml-auto  flex items-center space-x-[16px]">
                    <div className="flex items-center gap-[8px]">
                        <img src="/images/details.svg" alt="star icon" className="" />
                        <p>details</p>
                    </div>
                    <div className="flex items-center gap-[7px] ">
                        {snippet.stars > 0 ? (
                            <img src="/images/starsolid.svg" alt="star icon" className="inline  mr-1" />
                        ) : (
                            <img src="/images/star.svg" alt="star icon" className="inline mr-1" />
                        )}

                        <p> {snippet.stars}  stars</p>
                    </div>
                </div>
            </div>
            <div className=" rounded-md  text-sm">
                <SyntaxHighlighter
                    language="typescript"
                    style={vscDarkPlus}
                    customStyle={{
                        margin: 0,
                        padding: "16px 25px",
                        borderRadius: "0.5rem",
                        backgroundColor: "#020618", // dark background
                        fontSize: "14px",
                        lineHeight: "19.6px",
                        border: "1px solid #314158", // subtle border
                        fontFamily: "Fira Code , monospace", // monospaced font
                    }}
                >                    {snippet.code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default SnippetCard;
