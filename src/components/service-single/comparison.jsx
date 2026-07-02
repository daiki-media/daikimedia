import React from "react";
import { Check, X } from "lucide-react";

export const Comparison = ({ data, serviceTitle }) => {
  // Dynamic bottom section content
  const bottomSectionTitle = data?.bottomSection?.title || (serviceTitle ? `Dedicated ${serviceTitle} Specialists` : "Why Choose Daiki Media?");
  const bottomSectionDescription = data?.bottomSection?.description || "With Daiki Media, you get comprehensive, customizable services backed by a team of 500+ experts who are committed to delivering measurable results for your business.";

  return (
    <section className="py-16 px-4 mb-[100px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{data.title}</h2>

        {/* Desktop Table */}
        <div className="hidden md:block relative overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <table className="w-full text-left">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <th className="px-6 py-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Features
                </th>
                <th className="px-6 py-4 text-lg font-semibold text-center text-gray-900 dark:text-gray-100">
                  Daiki Media
                </th>
                <th className="px-6 py-4 text-lg font-semibold text-center text-gray-900 dark:text-gray-100">
                  Other Companies
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {data.rows.map((row, index) => (
                <tr
                  key={index}
                  className="bg-white dark:bg-gray-800 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-base font-medium text-gray-900 dark:text-gray-100">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center">
                      <div className="flex items-center space-x-2 px-4 py-1.5 bg-green-50 dark:bg-green-900/30 rounded-full">
                        <Check className="w-5 h-5 text-green-500 dark:text-green-400" />
                        <span className="text-green-700 dark:text-green-400 font-medium">
                          {row.daikiMedia}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center">
                      <div className="flex items-center space-x-2 px-4 py-1.5 bg-red-50 dark:bg-red-900/30 rounded-full">
                        <X className="w-5 h-5 text-red-500 dark:text-red-400" />
                        <span className="text-red-700 dark:text-red-400 font-medium">
                          {row.competitors}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Bottom Section - Desktop */}
          <div className="px-6 py-8 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                {bottomSectionTitle}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {bottomSectionDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="block md:hidden">
          <div className="space-y-4 mb-8">
            {data.rows.map((row, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg leading-6">
                    {row.feature}
                  </h3>

                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Daiki Media
                      </span>
                      <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/30 rounded-full">
                        <Check className="w-4 h-4 text-green-500 dark:text-green-400" />
                        <span className="text-green-700 dark:text-green-400 font-medium text-sm">
                          {row.daikiMedia}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Other Companies
                      </span>
                      <div className="flex items-center space-x-2 px-3 py-1.5 bg-red-50 dark:bg-red-900/30 rounded-full">
                        <X className="w-4 h-4 text-red-500 dark:text-red-400" />
                        <span className="text-red-700 dark:text-red-400 font-medium text-sm">
                          {row.competitors}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="px-6 py-8 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                {bottomSectionTitle}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {bottomSectionDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};