"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Tag,
  Star,
  MapPin,
  Users,
  Clock,
  Briefcase,
  Search,
  ChevronDown,
  ArrowUpRight,
  ChevronsLeftRightEllipsis,
} from "lucide-react";
import Link from "next/link";

import LazyClients from "@/components/lazy/LazyClients";

const CompanyCard = ({ company }) => {
  const imgRef = useRef(null);
  const [bgColor, setBgColor] = useState("#f8f9fa");

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const detectBackgroundColor = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = 100;
      canvas.height = 100;

      try {
        ctx.drawImage(img, 0, 0, 100, 100);
        const samplePoints = [
          [10, 10],
          [90, 10],
          [10, 90],
          [90, 90],
          [50, 10],
          [50, 90],
          [10, 50],
          [90, 50],
          [25, 25],
          [75, 75],
          [25, 75],
          [75, 25],
        ];

        let totalR = 0,
          totalG = 0,
          totalB = 0;
        let validSamples = 0;

        samplePoints.forEach(([x, y]) => {
          try {
            const pixel = ctx.getImageData(x, y, 1, 1).data;
            if (pixel[3] > 128) {
              totalR += pixel[0];
              totalG += pixel[1];
              totalB += pixel[2];
              validSamples++;
            }
          } catch (e) {
            console.warn("Error getting pixel data at", x, y, e);
          }
        });

        if (validSamples > 0) {
          const avgR = totalR / validSamples;
          const avgG = totalG / validSamples;
          const avgB = totalB / validSamples;

          const brightness = (0.299 * avgR + 0.587 * avgG + 0.114 * avgB) / 255;
          if (brightness > 0.7) {
            setBgColor("#1f2937");
          } else if (brightness < 0.3) {
            setBgColor("#ffffff");
          } else {
            setBgColor("#f3f4f6");
          }
        } else {
          setBgColor("#f8f9fa");
        }
      } catch (err) {
        console.error("Background detection failed:", err);
        setBgColor("#f8f9fa");
      }
    };

    if (img.complete && img.naturalHeight !== 0) {
      detectBackgroundColor();
    } else {
      img.onload = detectBackgroundColor;
      img.onerror = () => setBgColor("#f8f9fa");
    }

    if (!img.src.includes(window.location.origin)) {
      img.crossOrigin = "anonymous";
    }
  }, [company.logo]);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <div
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center p-2 transition-colors duration-300 flex-shrink-0"
            style={{ backgroundColor: bgColor }}
          >
            <img
              ref={imgRef}
              src={company.logo}
              alt={`${company.name} logo`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 truncate">
                {company.name}
              </h2>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              {company.rating > 0 ? (
                <div className="flex items-center">
                  <span className="text-lg sm:text-xl font-bold text-gray-900">
                    {company.rating}
                  </span>
                  <div className="flex ml-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <span className="text-gray-500 text-sm">No reviews yet</span>
              )}
            </div>
          </div>
        </div>

        <div className="w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3">
            <Link href={company?.websiteUrl} passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-sm whitespace-nowrap w-full sm:w-auto"
                title="Visit Website"
              >
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Visit Website</span>
              </a>
            </Link>

            <Link
              href="https://api.whatsapp.com/send?phone=601114850067"
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navbar btn-sm flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-sm whitespace-nowrap w-full sm:w-auto"
                title="Free Website Audit on WhatsApp"
              >
                <ChevronsLeftRightEllipsis className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Free Website Audit</span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center space-x-2 text-gray-600 text-sm sm:text-base">
            <Tag className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{company.priceRange}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 text-sm sm:text-base">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{company.hourlyRate}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 text-sm sm:text-base">
            <Users className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{company.employeeCount}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 text-sm sm:text-base">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{company.location}</span>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 flex items-center">
            <Briefcase className="w-4 h-4 mr-2" />
            Services
          </h3>
          <div className="space-y-3">
            {company.services.map((service, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    {service.percentage}% {service.name}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${service.percentage}%`,
                      backgroundColor: service.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            About Company
          </h3>
          <p className="text-gray-700 text-justify text-sm sm:text-base leading-relaxed">
            {company.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const FilterDropdown = ({
  label,
  icon,
  options,
  value,
  onChange,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
      >
        <div className="flex items-center space-x-2 min-w-0 flex-1">
          {icon}
          <span className="text-gray-700 text-sm sm:text-base truncate">
            {value || placeholder || label}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 flex-shrink-0 ml-2 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left hover:bg-gray-50 text-gray-700 border-b border-gray-100 last:border-b-0 text-sm sm:text-base transition-colors duration-150"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const DynamicCompanyListing = ({
  data,
  title = "Best Companies",
  subtitle = "Driving Results with Expertise",
  description = "Explore our curated list of top companies.",
  dataKey = "companies", // key to access data array
  showClients = true,
  whatsappNumber = "601114850067",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedTeamSize, setSelectedTeamSize] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  // Get companies data from the provided data object.
  // Memoised so the `|| []` fallback doesn't return a new array reference on
  // every render — which would re-fire the useEffect below in a loop.
  const companiesData = useMemo(
    () => data?.[dataKey] || [],
    [data, dataKey]
  );

  // Initialize filtered companies
  useEffect(() => {
    setFilteredCompanies(companiesData);
  }, [companiesData]);

  // Filter options
  const ratingOptions = [
    { label: "Ratings", value: "" },
    { label: "5 Stars", value: "5" },
    { label: "4+ Stars", value: "4+" },
    { label: "3+ Stars", value: "3+" },
    { label: "2+ Stars", value: "2+" },
    { label: "1+ Stars", value: "1+" },
  ];

  const teamSizeOptions = [
    { label: "Team Sizes", value: "" },
    { label: "2-9 employees", value: "2-9" },
    { label: "10-49 employees", value: "10-49" },
    { label: "50-249 employees", value: "50-249" },
    { label: "250-999 employees", value: "250-999" },
    { label: "1000+ employees", value: "1000+" },
  ];

  const priceRangeOptions = [
    { label: "Budget", value: "" },
    { label: "Under $1,000", value: "<$1,000" },
    { label: "$1,000 - $3,000", value: "$1,000-$3,000" },
    { label: "$3,000 - $5,000", value: "$3,000-$5,000" },
    { label: "$5,000 - $10,000", value: "$5,000-$10,000" },
    { label: "$10,000 - $50,000", value: "$10,000-$50,000" },
    { label: "$50,000+", value: "$50,000+" },
  ];

  // Filter logic
  useEffect(() => {
    let filtered = companiesData;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (company) =>
          company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          company.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          company.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          company.services.some((service) =>
            service.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Rating filter
    if (selectedRating) {
      filtered = filtered.filter((company) => {
        if (selectedRating === "5") return company.rating === 5;
        if (selectedRating === "4+") return company.rating >= 4;
        if (selectedRating === "3+") return company.rating >= 3;
        if (selectedRating === "2+") return company.rating >= 2;
        if (selectedRating === "1+") return company.rating >= 1;
        return true;
      });
    }

    // Team size filter
    if (selectedTeamSize) {
      filtered = filtered.filter((company) => {
        const count = company.employeeCount;
        const match = count.match(/(\d+)(?:\D+)?(\d+)?/);
        if (!match) return false;

        const min = parseInt(match[1]);
        const max = match[2] ? parseInt(match[2]) : Infinity;

        switch (selectedTeamSize) {
          case "2-9":
            return min <= 9 && max >= 2;
          case "10-49":
            return min <= 49 && max >= 10;
          case "50-249":
            return min <= 249 && max >= 50;
          case "250-999":
            return min <= 999 && max >= 250;
          case "1000+":
            return min >= 1000;
          default:
            return true;
        }
      });
    }

    // Price range filter
    if (selectedPriceRange) {
      filtered = filtered.filter((company) => {
        const priceRange = company.priceRange.toLowerCase();
        if (selectedPriceRange === "<$1,000")
          return priceRange.includes("1,000") && priceRange.includes("<");
        if (selectedPriceRange === "$1,000-$3,000")
          return priceRange.includes("1,000");
        if (selectedPriceRange === "$3,000-$5,000")
          return priceRange.includes("3,000") || priceRange.includes("5,000");
        if (selectedPriceRange === "$5,000-$10,000")
          return priceRange.includes("5,000");
        if (selectedPriceRange === "$10,000-$50,000")
          return priceRange.includes("10,000");
        if (selectedPriceRange === "$50,000+")
          return priceRange.includes("50,000");
        return true;
      });
    }

    setFilteredCompanies(filtered);
  }, [
    searchTerm,
    selectedRating,
    selectedTeamSize,
    selectedPriceRange,
    companiesData,
  ]);

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 py-32">
        <div className="h-96 flex items-center justify-center px-4">
          <div className="max-w-5xl mx-auto text-center py-12">
            <div className="mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                {title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">
                {subtitle}
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                {description}
              </p>

              <a
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn col-span-4 max-lg:!px-3 max-lg:!text-sm xs:col-span-4"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative sm:col-span-2 lg:col-span-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search companies, services, locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            {/* Rating Filter */}
            <div className="w-full">
              <FilterDropdown
                label="Ratings"
                icon={<Star className="w-4 h-4 text-gray-500" />}
                options={ratingOptions}
                value={
                  selectedRating
                    ? ratingOptions.find((opt) => opt.value === selectedRating)
                        ?.label
                    : ""
                }
                onChange={setSelectedRating}
                placeholder="Ratings"
              />
            </div>

            {/* Team Size Filter */}
            <div className="w-full">
              <FilterDropdown
                label="Team Size"
                icon={<Users className="w-4 h-4 text-gray-500" />}
                options={teamSizeOptions}
                value={
                  selectedTeamSize
                    ? teamSizeOptions.find(
                        (opt) => opt.value === selectedTeamSize
                      )?.label
                    : ""
                }
                onChange={setSelectedTeamSize}
                placeholder="Team Sizes"
              />
            </div>

            {/* Price Range Filter */}
            <div className="w-full">
              <FilterDropdown
                label="Budget"
                icon={<Tag className="w-4 h-4 text-gray-500" />}
                options={priceRangeOptions}
                value={
                  selectedPriceRange
                    ? priceRangeOptions.find(
                        (opt) => opt.value === selectedPriceRange
                      )?.label
                    : ""
                }
                onChange={setSelectedPriceRange}
                placeholder="Budget"
              />
            </div>
          </div>
        </div>

        {/* Companies List */}
        <div className="space-y-6">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((company, index) => (
              <CompanyCard key={index} company={company} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No companies found matching your criteria.
              </p>
              <p className="text-gray-400 mt-2">
                Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </div>

        {showClients && <LazyClients />}
      </div>
    </div>
  );
};

export default DynamicCompanyListing;
