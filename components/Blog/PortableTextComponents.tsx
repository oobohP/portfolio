import { buildSanityURL } from "@/sanity/sanity-utils";
import { CodeHighLighter } from "@/lib/interfaces/CodeHighLighter";
import { SanityBlockImage } from "@/lib/interfaces/SanityBlockImage";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import ruby from 'react-syntax-highlighter/dist/esm/languages/hljs/ruby';
import { docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('ruby', ruby);
SyntaxHighlighter.registerLanguage('javascript', js);

const PortableTextComponents = {
  list: {
    bullet: ({children}: any) => {
      return (
        <ul className="list-disc list-inside ml-4">{children}</ul>
      )
    }
  },
  marks: {
    link: ({ children, value }: any) => {
      const { href } = value;
      return (
        <a
          href={href}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="mt-2 text-3xl font-semibold">{children}</h1>,
    h2: ({ children }: any) => <h2 className="mt-2 text-2xl font-medium">{children}</h2>,
    h3: ({ children }: any) => <h2 className="mt-2 text-xl font-normal">{children}</h2>,
    normal: ({ children }: any) => {
      if (children.length === 1 && children[0] === "") {
        return (
          <div>
            <br />
          </div>
        );
      }
      return <p>{children}</p>;
    },
  },
  types: {
    code: ({ value: { language, code, _key, filename } }: CodeHighLighter) => (
      <div key={_key} className="mt-2">
        <p className="font-semibold">{filename}</p>
        <SyntaxHighlighter language={language} style={docco}>{code}</SyntaxHighlighter>
      </div>
    ),

    image: ({ value }: { value: SanityBlockImage }) => {
      if (!value || !value.asset || !value.asset._ref) {
        return null;
      }

      const imageUrl = buildSanityURL(value.asset._ref).url();

      return (
        <div className="my-4 border">
          <img src={imageUrl} />
        </div>
      );
    },

    table: ({ value: { rows, _key } }: any) => (
      <Table>
        <TableHeader>
          <TableRow>
            {rows[0].cells.map((headerCell: any, index: number) => (
              <TableHead key={index}>{headerCell}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.slice(1).map((row: any, rowIndex: number) => (
            <TableRow key={rowIndex}>
              {row.cells.map((cell: any, cellIndex: number) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ),
  },
};

export default PortableTextComponents;
