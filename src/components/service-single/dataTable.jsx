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

  // Helper to get icon based on column name
  const getIconForColumn = (columnName) => {
    const name = columnName.toLowerCase();
    if (name.includes('vertical') || name.includes('segment')) return '🎰';
    if (name.includes('casino') || name.includes('game')) return '🎲';
    if (name.includes('sports') || name.includes('bet')) return '⚽';
    if (name.includes('market') || name.includes('size')) return '📊';
    if (name.includes('audience')) return '👥';
    if (name.includes('revenue') || name.includes('model')) return '💰';
    if (name.includes('growth')) return '📈';
    if (name.includes('regulator') || name.includes('regulation')) return '⚖️';
    if (name.includes('tool')) return '🛠️';
    if (name.includes('factor') || name.includes('pillar')) return '⭐';
    return '📌';
  };

  return (
    <section className="relative py-12 md:py-16 px-4 dark:bg-dark-300 overflow-hidden">
      {/* Background blur effect - hidden on mobile for better performance */}
      <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden">
        <div className="rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
        <div className="rounded-full bg-primary-200/25 blur-[145px] lg:-ml-[170px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
        <div className="rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {(data?.title || title) && (
          <>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6 text-gray-900 dark:text-white">
              {data?.title || title}
            </h2>
          </>
        )}
        
        {(data?.description || description) && (
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto text-sm md:text-base lg:text-lg px-2">
            {data?.description || description}
          </p>
        )}
        
        {/* Desktop Table View */}
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
                    <td key={colIdx} className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-borderColor-dark">
                      {row[typeof col === 'string' ? col : Object.keys(row)[colIdx]]}
                    </td>
                  ))}
                 </tr>
              ))}
            </tbody>
           </table>
        </div>

        {/* Mobile Card View - Improved Design */}
        <div className="block md:hidden space-y-5">
          {tableRows.map((row, rowIdx) => (
            <div 
              key={rowIdx} 
              className="bg-gradient-to-br from-white to-red-50/30 dark:from-dark-200 dark:to-dark-300 rounded-2xl border border-gray-100 dark:border-borderColor-dark shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Header with subtle accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-red-500 to-red-300 w-full"></div>
              
              <div className="p-5 space-y-4">
                {autoColumns.map((col, colIdx) => {
                  const value = row[typeof col === 'string' ? col : Object.keys(row)[colIdx]];
                  if (!value) return null;
                  
                  const columnName = typeof col === 'string' ? col : Object.keys(row)[colIdx];
                  const formattedLabel = formatHeader(columnName);
                  const icon = getIconForColumn(columnName);
                  
                  return (
                    <div key={colIdx} className="flex items-start gap-3">
                      {/* Icon column */}
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center text-base">
                        {icon}
                      </div>
                      
                      {/* Content column */}
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider mb-1">
                          {formattedLabel}
                        </div>
                        <div className="text-sm md:text-base text-gray-800 dark:text-gray-200 font-medium break-words leading-relaxed">
                          {value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        {(data?.closingContent || closingContent) && (
          <div className="mt-10 p-5 md:p-8 bg-gradient-to-r from-red-50 to-red-100/50 dark:bg-dark-200 rounded-xl border-l-4 border-red-500 shadow-md">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
              {data?.closingContent || closingContent}
            </p>
          </div>
        )}
        
        {/* CTA Button - Enhanced mobile styling */}
        {(data?.ctaButton || ctaButton) && (data?.ctaLink || ctaLink) && (
          <div className="text-center mt-10 md:mt-12">
            <Link 
              href={data?.ctaLink || ctaLink} 
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base w-full md:w-auto transform hover:-translate-y-0.5"
            >
              <span>{data?.ctaButton || ctaButton}</span>
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};