import React from 'react';
import { ClipboardList, CalendarDays, Scale, EyeOff, UtensilsCrossed, Trash, LineChart } from 'lucide-react';

export const ShoppingHabitsArticle: React.FC = () => {
  const habits = [
    {
      num: '01',
      title: 'Make a Shopping List',
      icon: ClipboardList,
      desc: 'Never enter a grocery store without a dedicated, written list. A comprehensive checklist acts as your spending anchor, keeping you focused on necessary kitchen replenishments and steering you away from costly impulse buys.',
    },
    {
      num: '02',
      title: 'Plan Meals in Advance',
      icon: CalendarDays,
      desc: 'Draft a realistic weekly menu considering busy weeknight schedules, leftovers, and batch cooking. Aligning your menu with multi-use ingredients reduces overall basket size while eliminating dinner-time guesswork.',
    },
    {
      num: '03',
      title: 'Compare Unit Prices',
      icon: Scale,
      desc: 'Check the price per ounce, pound, or standard unit shown on store shelf tags. Packaging sizes and marketing slogans can disguise actual value; standardized metrics reveal true bargains across brands.',
    },
    {
      num: '04',
      title: 'Watch for Unnecessary Impulse Purchases',
      icon: EyeOff,
      desc: 'Retail endcaps and checkout aisles are engineered to provoke spontaneous additions to your cart. Implement a 24-hour pause on high-cost gourmet items that are not part of your weekly meal blueprint.',
    },
    {
      num: '05',
      title: 'Use What You Already Have',
      icon: UtensilsCrossed,
      desc: 'Before visiting the supermarket, design at least one or two meals around dry grains, freezer meats, or canned legumes already sitting in your kitchen cupboards to avoid purchasing duplicate inventory.',
    },
    {
      num: '06',
      title: 'Reduce Food Waste',
      icon: Trash,
      desc: 'Store delicate produce appropriately—keeping apples separate from greens, trimming celery bases, and sealing opened herbs—to preserve shelf-life and ensure every item you purchase is consumed.',
    },
    {
      num: '07',
      title: 'Review Your Spending Regularly',
      icon: LineChart,
      desc: 'Examine itemized grocery receipts at the end of every week to identify recurring high-cost categories, monitor grocery price fluctuations, and adjust monthly household allocations accurately.',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 bg-[#faf8f5] border-b border-[#ede8de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b48c36] block mb-2">
            CONSUMER BEST PRACTICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d3b2e] tracking-tight font-serif sm:font-sans">
            Smart Grocery Shopping: 7 Practical Habits
          </h2>
          <p className="text-base sm:text-lg text-[#4b5563] mt-3 leading-relaxed">
            Consistent grocery discipline is built on small, repeatable routines that compound into substantial annual household savings.
          </p>
        </div>

        {/* 7 Habits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {habits.map((habit) => {
            const Icon = habit.icon;
            return (
              <div
                key={habit.num}
                className="bg-white rounded-2xl p-6 border border-[#e5dfd3] shadow-2xs hover:border-[#c5d8ce] hover:shadow-xs transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-[#0d3b2e] bg-[#eaf4ef] px-3 py-1 rounded-full border border-[#c4e3d3] font-mono">
                      HABIT {habit.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#faf8f5] border border-[#e2dcce] flex items-center justify-center text-[#165a45]">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#111827] mb-2 leading-snug">
                    {habit.title}
                  </h3>

                  <p className="text-sm text-[#4b5563] leading-relaxed">
                    {habit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
