import React from 'react';
import { Calendar, Clock, DollarSign, Scale, Trash2, Sun, Refrigerator, Wallet, BookmarkCheck } from 'lucide-react';

export const GrocerySavingsArticle: React.FC = () => {
  const sections = [
    {
      id: 'plan-before-you-shop',
      title: '1. Plan Before You Shop',
      icon: Calendar,
      summary: 'Map out weekly meals and construct a targeted list before setting foot in the supermarket.',
      body: 'One of the most effective methods for controlling household grocery expenditure is proactive meal planning. When shoppers visit supermarkets without an intentional menu for the week, impulse purchases frequently drive grocery totals up by 20% to 30%. By choosing recipes ahead of time, checking which ingredients overlap across meals, and building a disciplined shopping list organized by store department, you ensure that every dollar spent directly serves your household dinner table.',
      tip: 'Consumer Insight: Organizing your list by store aisles (produce, pantry, dairy, refrigerated) minimizes wandering and reduces exposure to eye-level impulse displays.',
    },
    {
      id: 'compare-unit-prices',
      title: '2. Compare Unit Prices',
      icon: Scale,
      summary: 'Evaluate the price per ounce, pound, or liter rather than looking solely at the shelf sticker price.',
      body: 'Packaging dimensions and decorative branding can be deceptive. A larger box or family-size container does not automatically guarantee superior value per unit. Shelf tags in modern grocery stores prominently display the unit price—such as cost per ounce ($/oz) or cost per pound ($/lb). Comparing these standardized metrics allows you to instantly determine whether the store brand, the mid-size package, or the bulk pack provides the genuine financial advantage.',
      tip: 'Calculation Rule: Divide total item price by net weight in ounces. A 16 oz box at $3.20 is $0.20/oz, whereas a 24 oz box at $5.28 is $0.22/oz. The smaller box is actually cheaper per ounce.',
    },
    {
      id: 'buy-what-you-will-actually-use',
      title: '3. Buy What You Will Actually Use',
      icon: Trash2,
      summary: 'Curtail food waste by resisting oversized bulk quantities of perishable ingredients.',
      body: 'While bulk warehouse clubs offer attractive volume discounts, savings vanish the moment unused produce, greens, or dairy spoil in your refrigerator drawer. National consumer studies suggest average households discard up to 30% of perishable items purchased. Restrict bulk purchasing to non-perishable pantry staples—such as whole grains, dried beans, rolled oats, and canned tomatoes—while buying delicate greens and soft fruits in realistic single-week quantities.',
      tip: 'Freshness Tip: If leafy greens or fresh herbs begin to wilt before you can cook them, puree and freeze them in olive oil inside silicone ice cube trays for future pasta or soup bases.',
    },
    {
      id: 'shop-seasonal-produce',
      title: '4. Shop Seasonal Produce',
      icon: Sun,
      summary: 'Capitalize on peak agricultural harvests to secure peak nutritional density at lower costs.',
      body: 'Produce that is currently in-season locally requires lower transportation, cold-storage, and logistics overhead, meaning growers and grocers pass savings directly down to retail consumers. In autumn, squash, sweet potatoes, and apples reach peak pricing value; during summer, stone fruits, berries, and field tomatoes dominate. When out-of-season recipes call for specific vegetables, consider frozen varieties—they are flash-frozen at harvest, locking in nutrition at an economical price point.',
      tip: 'Seasonal Guide: Frozen fruits and vegetables often match or exceed the nutrient profile of imported out-of-season fresh options while remaining shelf-stable for months.',
    },
    {
      id: 'review-your-pantry-first',
      title: '5. Review Your Pantry First',
      icon: Refrigerator,
      summary: 'Audit cupboards, freezers, and dry storage bins prior to finalizing your weekly shopping list.',
      body: 'Duplicate buying is a subtle but persistent drain on grocery funds. Many shoppers regularly purchase items like soy sauce, baking soda, spices, broths, and pasta that already sit untouched in back corners of kitchen cabinets. Establishing a routine "pantry audit" before finalizing your weekly grocery run prevents overstocking and encourages creative meal prep around existing inventories.',
      tip: 'Try a "Use-First Shelf": Dedicate one visible refrigerator shelf to foods nearing their expiration dates so family members consume them before opening new packages.',
    },
    {
      id: 'set-a-weekly-grocery-budget',
      title: '6. Set a Weekly Grocery Budget',
      icon: Wallet,
      summary: 'Establish a concrete, realistic financial limit and track running totals as you navigate the aisles.',
      body: 'A budget only works when it reflects honest household needs. Calculate your grocery average over the past 60 days, establish a reasonable target reduction (such as 10% to 15%), and track spending in real time. Using a calculator app on your phone to tally items before reaching the cash register prevents checkout counter surprise and gives you the autonomy to swap out non-essential goods.',
      tip: 'Payment Strategy: Designating a specific grocery-only payment card or envelope makes tracking exact monthly grocery expenditures effortless.',
    },
  ];

  return (
    <article id="grocery-tips" className="w-full py-16 sm:py-24 bg-white border-b border-[#ede8de]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Header */}
        <header className="mb-12 border-b border-[#f0ece1] pb-10">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#b48c36] mb-4">
            <span>CONSUMER EDITORIAL</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#526359] font-normal">
              <Clock className="w-3.5 h-3.5" /> 6 Min Read
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d3b2e] tracking-tight font-serif sm:font-sans leading-[1.15] mb-5">
            Simple Ways to Make Your Grocery Budget Go Further
          </h2>

          <p className="text-lg sm:text-xl text-[#4b5563] leading-relaxed max-w-3xl">
            Practical strategies, unit price mechanics, and sensible planning habits to stretch household grocery funds in any market environment.
          </p>
        </header>

        {/* Article Subsections */}
        <div className="space-y-12">
          {sections.map((sec) => {
            const Icon = sec.icon;
            return (
              <section key={sec.id} className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#eaf3ee] text-[#14532d] flex items-center justify-center shrink-0 border border-[#cce0d4]">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight">
                    {sec.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base font-semibold text-[#166534] bg-[#f7faf8] p-3 rounded-lg border-l-4 border-[#166534]">
                  {sec.summary}
                </p>

                <p className="text-base text-[#374151] leading-relaxed">
                  {sec.body}
                </p>

                {/* Practical Tip Callout */}
                <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e5dfd3] flex items-start gap-3 text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                  <BookmarkCheck className="w-4 h-4 text-[#b48c36] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>{sec.tip}</div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
};
