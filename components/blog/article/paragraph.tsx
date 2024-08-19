"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"]
});

export default function Paragraph({ content }: { content: string }) {
  const [processedContent, setProcessedContent] = useState<(JSX.Element | null)[]>([]);
  const [summary, setSummary] = useState<JSX.Element>()
  const [introduction, setIntroduction] = useState<(JSX.Element | null)[]>([]);

  useEffect(() => {
    const lines = content.split("\n");
    const newContent: (JSX.Element | null)[] = [];
    const introductionContent: (JSX.Element | null)[] = [];
    const titles: { title: string; formattedTitle: string }[] = [];

    let codeBlockContent: string[] = [];
    let isInCodeBlock = false;
    let isFirstTitleFound = false;

    lines.forEach((line, index) => {
      const isQuote = line.startsWith("<blockquote>");
      const isList = line.startsWith("-");
      const isTitle = line.startsWith("<title>");
      const isLink = line.includes("<link>") && line.includes("</link>");
      const isImage = line.includes("<image>") && line.includes("</image>");
      const isVideo = line.includes("<video>") && line.includes("</video>");
      const isCodeStart = line.startsWith("<code>");
      const isCodeEnd = line.endsWith("</code>");
      const isBold = line.includes("<bold>") && line.includes("</bold>")

      if (isTitle) {
        isFirstTitleFound = true;

        const title = line.replace(/<title>/, "");
        const formattedTitle = title.trim().replace(/\s+/g, '-');

        titles.push({ title, formattedTitle });

        newContent.push(
          <Fragment key={index}>
            <h2 id={formattedTitle} className="text-3xl font-bold text-primary tracking-tighter leading-[1]">
              {title}
            </h2>
          </Fragment>
        );
        return;
      }

      if (!isFirstTitleFound) {
        if (isImage) {
          introductionContent.push(
            <Fragment key={index}>
              <Image className="w-full" src={line.replace(/<image>/, "").replace(/<\/image>/, "")} alt="Imagem do Artigo do Tiago Silverio Programador" width={500} height={300} />
            </Fragment>
          );
          return;
        }

        if (isVideo) {
          introductionContent.push(
            <Fragment key={index}>
              <iframe
                className="w-[95%] rounded-md"
                width="560"
                height="315"
                src={line.replace(/<video>/, "").replace(/<\/video>/, "")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Fragment>
          );
          return;
        }

        introductionContent.push(
          <Fragment key={index}>
            <p className="">{line}</p>
            <br />
          </Fragment>
        );
        return;
      }


      if (isCodeStart) {
        isInCodeBlock = true;
        codeBlockContent.push(line.replace(/<code>/, ""));
        return;
      }

      if (isInCodeBlock) {
        if (isCodeEnd) {
          isInCodeBlock = false;
          codeBlockContent.push(line.replace(/<\/code>/, ""));
          const finalContent = codeBlockContent.join("\n");
          newContent.push(
            <Fragment key={index}>
              <div className="border border-primary p-4 rounded-lg">
                <code className="break-all whitespace-pre-wrap">{finalContent}</code>
              </div>
            </Fragment>
          );
          codeBlockContent = [];
        } else {
          codeBlockContent.push(line);
        }
        return;
      }

      if (isImage) {
        newContent.push(
          <Fragment key={index}>
            <div className="flex justify-center">
              <Image className="rounded-md" src={line.replace(/<image>/, "").replace(/<\/image>/, "")} alt="Imagem do Artigo do Tiago Silverio Programador" width={800} height={800} />
            </div>
          </Fragment>
        );
        return;
      }

      if (isVideo) {
        newContent.push(
          <Fragment key={index}>
            <iframe
              className="w-[95%] rounded-md"
              width="560"
              height="315"
              src={line.replace(/<video>/, "").replace(/<\/video>/, "")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Fragment>
        )
      }

      if (isLink) {
        const linkContent = line.match(/<link>(.*?)<\/link>/);
        if (linkContent) {
          const parts = line.split(/<link>|<\/link>/);

          newContent.push(
            <Fragment key={index}>
              {parts.map((part, partIndex) => {
                if (partIndex % 2 !== 0) {
                  const [linkText, url] = part.split(",").map(p => p.trim());
                  return (
                    <Link key={partIndex} href={url} target="_blank" className="text-goldColor hover:opacity-80 cursor-pointer">
                      <strong>{linkText}</strong>
                    </Link>
                  );
                }
                return <span key={partIndex}>{part}</span>;
              })}
              <br />
            </Fragment>
          );
        }
        return;
      }


      if (isQuote) {
        newContent.push(
          <Fragment key={index}>
            <blockquote className="border-l-4 border-primary p-4 italic">
              {line.replace(/<blockquote>/, "")}
            </blockquote>
          </Fragment>
        );
        return;
      }

      if (isList) {
        const listItem = line.slice(1).trim();
        const parts = listItem.split(/<bold>|<\/bold>/);

        const formattedListItem = parts.map((part, partIndex) => {
          if (partIndex % 2 !== 0) {
            return <strong key={partIndex}>{part}</strong>;
          }
          return <span key={partIndex}>{part}</span>;
        });

        newContent.push(
          <Fragment key={index}>
            <li className="ml-6">{formattedListItem}</li>
          </Fragment>
        );
        return;
      }

      if (isBold) {
        const parts = line.split(/<bold>|<\/bold>/);
        const formattedLine = parts.map((part, partIndex) => {
          if (partIndex % 2 !== 0) {
            return <strong key={partIndex}>{part}</strong>;
          }
          return <span key={partIndex}>{part}</span>;
        });

        newContent.push(
          <Fragment key={index}>
            {formattedLine}
            <br />
          </Fragment>
        );
        return;
      }

      newContent.push(
        <Fragment key={index}>
          <p className="">{line}</p>
          <br />
        </Fragment>
      );

    });

    setIntroduction(introductionContent);
    setProcessedContent(newContent);

    const summaryContent = (
      <ul className="flex flex-col gap-4 mb-4 list-disc list-insise">
        {titles.map((item, index) => (
          <li key={index}>
            <Link className={`${righteous.className} text-xl text-goldColor hover:opacity-80 tracking-wide my-8 list-disc`} href={`/article/1/#${item.formattedTitle}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    );

    setSummary(summaryContent);
  }, [content]);

  return (
    <div className="text-lg tracking-tighter leading-6">
      {introduction}
      {summary}
      {processedContent}
    </div>
  );
}
