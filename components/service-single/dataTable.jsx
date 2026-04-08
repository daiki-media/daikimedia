import Link from "next/link";

export const DataTable = ({ data, title, description, rows, columns, ctaButton, ctaLink, closingContent }) => {
  if (!data && !rows) return null;
  
  const tableData = data || { rows, columns };
  const tableRows = tableData.rows || [];
  const tableColumns = tableData.columns || [];
  
  if (tableRows.length === 0) return null;

  const autoColumns = !tableColumns.length && tableRows[0] ? Object.keys(tableRows[0]) : tableColumns;
  
  const formatHeader = (header) => {
    let formatted = header.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ').trim();
    return formatted.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <section className="relative py-16 px-4 bg-white dark:bg-dark-300 overflow-hidden max-w-5xl mx-auto text-center">
      <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-sm:hidden">
        <div className="rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
        <div className="rounded-full bg-primary-200/25 blur-[145px] lg:-ml-[170px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
        <div className="rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {(data?.title || title) && (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              {data?.title || title}
            </h2>
          </>
        )}
        
        {(data?.description || description) && (
          <p className="text-center text-paragraph dark:text-gray-300 mb-12 max-w-4xl mx-auto text-base md:text-lg">
            {data?.description || description}
          </p>
        )}
        
        {/* Desktop Table View - Hidden on Mobile */}
        <div className="hidden md:block relative overflow-x-auto rounded-xl border border-gray-100 dark:border-borderColor-dark shadow-lg">
          <table className="w-full text-left">
            <thead className="bg-red-50 dark:bg-dark-200">
              <tr>
                {autoColumns.map((col, idx) => (
                  <th key={idx} className="px-6 py-4 text-base font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-borderColor-dark">
                    {formatHeader(typeof col === 'string' ? col : col)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-borderColor-dark">
              {tableRows.map((row, rowIdx) => (
                <tr key={rowIdx} className="bg-white dark:bg-dark-300 hover:bg-red-50/50 dark:hover:bg-dark-200 transition-colors duration-200">
                  {autoColumns.map((col, colIdx) => (
                    <td key={colIdx} className="px-6 py-4 text-sm text-paragraph dark:text-gray-300 border-b border-gray-100 dark:border-borderColor-dark">
                      {row[typeof col === 'string' ? col : Object.keys(row)[colIdx]]}
                    </td>
                  ))}
                 </tr>
              ))}
            </tbody>
           </table>
        </div>

        <div className="block md:hidden space-y-4">
          {tableRows.map((row, rowIdx) => (
            <div 
              key={rowIdx} 
              className="bg-white dark:bg-dark-200 rounded-xl border border-gray-100 dark:border-borderColor-dark shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-5 space-y-3">
                {autoColumns.map((col, colIdx) => {
                  const value = row[typeof col === 'string' ? col : Object.keys(row)[colIdx]];
                  if (!value) return null;
                  return (
                    <div key={colIdx} className="flex flex-col">
                      <span className="text-xs font-semibold text-primary dark:text-primary-200 uppercase tracking-wider mb-1">
                        {formatHeader(typeof col === 'string' ? col : col)}
                      </span>
                      <span className="text-sm text-paragraph dark:text-gray-300 font-medium break-words">
                        {value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        {(data?.closingContent || closingContent) && (
          <div className="mt-10 p-6 md:p-8 bg-red-50 dark:bg-dark-200 rounded-xl border border-gray-100 dark:border-borderColor-dark">
            <p className="text-paragraph dark:text-gray-300 leading-relaxed text-base md:text-lg">
              {data?.closingContent || closingContent}
            </p>
          </div>
        )}
        
        {/* CTA Button */}
        {(data?.ctaButton || ctaButton) && (data?.ctaLink || ctaLink) && (
          <div className="text-center mt-12">
            <Link 
              href={data?.ctaLink || ctaLink} 
              className="btn"
            >
              {data?.ctaButton || ctaButton}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};