// src/components/VaricoseVeinHeroSection.jsx
import React, { useState } from 'react';
import { Globe } from 'lucide-react';

// Use relative base in dev (Vite proxy), or set VITE_API_BASE_URL in prod.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v1';

const getPageName = () => {
  // Prefer the <title>, else fall back to the last path segment
  if (typeof document !== 'undefined' && document.title) return document.title;
  if (typeof window !== 'undefined') {
    const seg = window.location.pathname.split('/').filter(Boolean).pop() || 'Home';
    return decodeURIComponent(seg).replace(/[-_]/g, ' ') || 'Home';
  }
  return 'Website';
};

const VaricoseVeinHeroSection = () => {
  const pageName = getPageName();

  const [formData, setFormData] = useState({
    concern: '',
    name: '',
    phone: '',
    _hp: '', // honeypot (must remain empty)
  });

  const [submitting, setSubmitting] = useState(false);
  const [okMsg, setOkMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const setConcern = (txt) =>
    setFormData(prev => ({ ...prev, concern: txt }));

  const validate = () => {
    if (!formData.name.trim()) return 'Please enter your full name.';
    const digits = (formData.phone || '').replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15)
      return 'Please enter a valid phone number (7–15 digits).';
    if (formData._hp) return 'Bot detected.'; // honeypot triggered
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOkMsg('');
    setErrMsg('');

    const v = validate();
    if (v) {
      setErrMsg(v);
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        concern: formData.concern?.trim() || '',
        source: 'website',           // ⬅️ NEW
        pageName,                    // ⬅️ NEW
        metadata: {
          page_component: 'VaricoseVeinHeroSection',
          url: typeof window !== 'undefined' ? window.location.href : '',
          ua: typeof navigator !== 'undefined' ? navigator.userAgent : ''
        },
        _hp: formData._hp
      };

      const res = await fetch(`${API_BASE_URL}/leads/intake`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || 'Failed to submit. Please try again.');
      }

      setOkMsg('Thanks! Our experts will contact you shortly.');
      setFormData({ concern: '', name: '', phone: '', _hp: '' });
    } catch (err) {
      setErrMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="relative bg-cover bg-center text-white py-20 md:py-32"
      style={{ backgroundImage: "url('/vv_bg_image.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#2d2552] opacity-35"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Endovenous Ablation For Varicose Veins
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white">
              Minimally invasive treatment to close problematic veins and relieve symptoms
            </p>
            <div className="mt-6 flex items-center gap-2 text-white">
              <Globe className="h-6 w-6" />
              <span className="font-semibold">Trusted by 14,000+ patients.</span>
            </div>
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-[#2d2552]">Get Expert Consultation</h3>

            {/* messages */}
            {okMsg && (
              <div className="mb-4 text-green-700 bg-green-100 border border-green-200 px-4 py-2 rounded">
                {okMsg}
              </div>
            )}
            {errMsg && (
              <div className="mb-4 text-red-700 bg-red-100 border border-red-200 px-4 py-2 rounded">
                {errMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Honeypot (keep hidden) */}
              <input
                type="text"
                name="_hp"
                value={formData._hp}
                onChange={handleInputChange}
                autoComplete="off"
                tabIndex={-1}
                className="hidden"
              />

              {/* NEW: Visible Source field (read-only) */}
              <div>
                <input
                  type="text"
                  value={`Website`}
                  readOnly
                  hidden
                  aria-readonly="true"
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 cursor-not-allowed"
                />
              </div>

              <input
                type="text"
                name="concern"
                value={formData.concern}
                onChange={handleInputChange}
                placeholder="Describe Your Health Concern"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff3576]"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name *"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff3576]"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number *"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff3576]"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#ff3576] text-white font-bold py-3 rounded-md hover:bg-pink-700 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting…' : 'Speak To Experts'}
              </button>
            </form>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => setConcern('I was worried about side effects.')}
                className="bg-gray-200 text-gray-600 text-sm px-3 py-1 rounded-full hover:bg-gray-300"
              >
                I was worried about side effects.
              </button>
              <button
                type="button"
                onClick={() => setConcern("I didn't want surgery")}
                className="bg-gray-200 text-gray-600 text-sm px-3 py-1 rounded-full hover:bg-gray-300"
              >
                I didn't want surgery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaricoseVeinHeroSection;
