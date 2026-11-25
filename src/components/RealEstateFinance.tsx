import React from "react";
import { FileText, ShieldAlert, Building2, Scale, ArrowRight } from "lucide-react";

export default function RealEstateFinance() {
  const operations = [
    {
      title: "Industrial Real Estate Financing",
      scope: "Manufacturing Units, Warehouses & Industrial Plots",
      points: [
        "Project term loans for greenfield and brownfield manufacturing setups",
        "Industrial mortgage debt syndication with public and private banking consortia",
        "Financing for industrial land allotment in government & state industrial estates",
        "Working capital and term loan restructuring against industrial collateral",
      ],
    },
    {
      title: "Commercial Asset Advisory & Mortgages",
      scope: "Commercial Complexes, Retail Hubs & Corporate Spaces",
      points: [
        "Lease Rental Discounting (LRD) against long-term commercial lease agreements",
        "Structured debt underwriting for commercial property acquisition and construction",
        "Commercial loan balance transfers with top-up capital arrangements",
        "Cash flow and rental yield feasibility assessment before acquisition",
      ],
    },
    {
      title: "Government Tender & E-Auction Properties",
      scope: "State Tenders, Bank E-Auctions & PSU Asset Divestments",
      points: [
        "Due diligence and technical title verification of properties listed under government tenders",
        "Assistance with bid preparation, earnest money deposit (EMD) formalities, and post-bid execution",
        "Settlement of statutory encumbrances and clearance of municipal or state utility dues",
        "Sub-registrar sale certificate documentation and physical handover execution",
      ],
    },
    {
      title: "Possession Matters & Distress Asset Resolution",
      scope: "SARFAESI Proceedings & Disputed Physical Handover",
      points: [
        "Advisory on Section 13(2) and Section 13(4) notices under the SARFAESI Act",
        "Coordination for District Magistrate / Chief Metropolitan Magistrate (DM/CMM) physical possession orders",
        "Assistance in resolving third-party tenancy claims and unencumbered handover",
        "Compromise and One-Time Settlement (OTS) advisory between borrowers and financial institutions",
      ],
    },
  ];

  return (
    <section id="property-finance" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/60 inline-block px-2.5 py-1 rounded border border-amber-300 mb-3">
            Real Estate Division
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight">
            Commercial real estate finance, possession resolution & government tender advisory
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Guru International assists business owners, developers, and investors in structuring multi-crore property credit lines and resolving encumbered or disputed possession matters with full statutory compliance.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {operations.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-400 transition-colors"
            >
              <div className="flex items-start justify-between border-b border-slate-100 pb-4 mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{item.scope}</div>
                </div>
                <span className="text-xs font-mono text-slate-400 font-bold">0{idx + 1}</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold mt-1 text-xs">&mdash;</span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Government Tender & Possession Special Focus Box */}
        <div id="possession-tender" className="mt-10 bg-slate-900 text-white rounded-lg p-6 sm:p-8 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>Specialized Execution Wing</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">
                Dealing with government tender properties or complex possession delays?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Purchasing properties through government e-auctions or resolving physical possession under SARFAESI requires ground-level liaising with competent authorities, revenue departments, and institutional legal panels. We coordinate the complete verification and handover lifecycle.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="#inquiry"
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded text-center transition-colors"
              >
                Request Property Case Review
              </a>
              <a
                href="tel:+919428111775"
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded text-center border border-slate-700 transition-colors"
              >
                Call: +91 94281 11775
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
