import SyntaxHighlighter from "react-syntax-highlighter";
import { CodeHighLighter } from "@/lib/interfaces/CodeHighLighter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PortableTextComponents = {
  block: {
    h1: ({ children }: any) => <h1 className="my-4 text-3xl font-semibold">{children}</h1>,
    h2: ({ children }: any) => <h2 className="my-4 text-2xl font-semibold">{children}</h2>,
  },
  types: {
    code: ({ value: { language, code, _key, filename } }: CodeHighLighter) => (
      <div key={_key} className="my-4">
        <p className="font-semibold">{filename}</p>
        <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>
      </div>
    ),

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
          {rows.slice(1).map(
            (
              row: any,
              rowIndex: number,
            ) => (
              <TableRow key={rowIndex}>
                {row.cells.map((cell: any, cellIndex: number) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const { href } = value;
      return (
        <a href={href} className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
};

export default PortableTextComponents;