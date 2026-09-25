"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

const projectTypes = [
  "Full-Stack Web App",
  "Mobile App (iOS/Android)",
  "AI-Powered SEO",
  "DevOps & CI/CD",
  "Workflow Automation",
  "Other / Custom Scope",
];

const budgetRanges = ["$5k - $15k", "$15k - $30k", "$30k - $60k", "$60k+"];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "Full-Stack Web App",
    budget: "$15k - $30k",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary-50/70 via-white to-emerald-50/50 border border-emerald-200 text-center shadow-lg animate-fade-in-up">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-xs">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-ink-900 mb-3">
          Message Received, {formData.name.split(" ")[0]}!
        </h3>
        <p className="text-sm sm:text-base text-ink-600 max-w-lg mx-auto mb-6 leading-relaxed">
          A Senior Solution Architect will review your requirements and reach out within 2 hours with our preliminary technical feasibility notes.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs mb-8">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Mutual NDA Protection Activated</span>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                projectType: "Full-Stack Web App",
                budget: "$15k - $30k",
                message: "",
              });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 hover:text-primary-700 underline underline-offset-4 cursor-pointer"
          >
            <span>Submit another inquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-primary-950/5"
    >
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100">
        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink-900">
            Tell Us About Your Project
          </h2>
          <p className="text-xs sm:text-sm text-ink-500 mt-1">
            Fill out the details below and we'll reply with an architectural breakdown.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
          <Clock className="w-3.5 h-3.5" />
          <span>&lt; 2hr Response Time</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Name & Email Row */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-ink-800 uppercase tracking-wider mb-2">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. David Smith"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-ink-800 uppercase tracking-wider mb-2">
              Work Email <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="david@company.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Company & Phone Row */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-ink-800 uppercase tracking-wider mb-2">
              Company / Product Name
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Acme Corp"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-ink-800 uppercase tracking-wider mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Project Type Selector */}
        <div>
          <label className="block text-xs font-bold text-ink-800 uppercase tracking-wider mb-3">
            Primary Area of Focus
          </label>
          <div className="flex flex-wrap gap-2">
            {projectTypes.map((type) => {
              const isSelected = formData.projectType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormData({ ...formData, projectType: type })}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-primary-600 text-white shadow-xs"
                      : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Budget Selector */}
        <div>
          <label className="block text-xs font-bold text-ink-800 uppercase tracking-wider mb-3">
            Estimated Budget Range
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {budgetRanges.map((range) => {
              const isSelected = formData.budget === range;
              return (
                <button
                  key={range}
                  type="button"
                  onClick={() => setFormData({ ...formData, budget: range })}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                    isSelected
                      ? "bg-primary-600 text-white shadow-xs"
                      : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {range}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Details */}
        <div>
          <label className="block text-xs font-bold text-ink-800 uppercase tracking-wider mb-2">
            Project Overview & Goals <span className="text-rose-500">*</span>
          </label>
          <textarea
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us what you're building, key challenges, target launch date, and desired stack..."
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold text-base shadow-lg shadow-primary-600/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
          >
            {loading ? (
              <span>Preparing Blueprint...</span>
            ) : (
              <>
                <span>Send Request & Claim Free Tech Audit</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        <p className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5 pt-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>We respect your privacy. 100% confidential. No spam ever.</span>
        </p>
      </div>
    </form>
  );
}
