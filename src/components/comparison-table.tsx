import { RichText } from "./rich-text";

export function ComparisonTable({
  caption,
  columns,
  rows,
}: {
  caption: string;
  columns: string[];
  rows: string[][];
}) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
      <table className="w-full border-collapse text-left text-sm md:min-w-[40rem]">
        <caption className="border-b border-border px-4 py-3 text-left text-sm leading-relaxed text-text-secondary">
          {caption}
        </caption>
        <thead className="max-md:sr-only">
          <tr className="border-b border-border">
            {columns.map((column, index) => (
              <th
                key={column}
                scope="col"
                className={`bg-card px-4 py-3 align-bottom font-semibold text-text ${
                  index === 0 ? "md:sticky md:left-0 md:z-10 md:border-r md:border-border" : ""
                }`}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={row[0]}
              className="border-b border-border last:border-b-0 max-md:block max-md:px-4 max-md:py-4"
            >
              {row.map((cell, index) =>
                index === 0 ? (
                  <th
                    key={`${rowIndex}-${index}`}
                    scope="row"
                    className="px-4 py-3 align-top font-medium text-text max-md:block max-md:px-0 max-md:pt-0 max-md:pb-1 md:sticky md:left-0 md:z-10 md:border-r md:border-border md:bg-background"
                  >
                    {cell}
                  </th>
                ) : (
                  <td
                    key={`${rowIndex}-${index}`}
                    className="px-4 py-3 align-top leading-relaxed text-text-secondary max-md:block max-md:px-0 max-md:py-1 max-md:text-sm"
                  >
                    <span className="font-medium text-text md:hidden">
                      {columns[index]}.{" "}
                    </span>
                    <RichText text={cell} />
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
