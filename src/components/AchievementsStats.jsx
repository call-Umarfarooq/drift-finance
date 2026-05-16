import React from 'react';

const AchievementsStats = () => {
  const stats = [
    { value: '$2.5B+', label: 'Closed Like\nYou Have It.' },
    { value: 'Over 9000', label: 'Families Helped\nIn 2025' },
    { value: 'Top 10%', label: 'National Ranking\n6 Consecutive Years' },
    { value: '40+', label: 'Years Of Combined\nPrincipal Experience' }
  ];

  return (
    <section className="w-full py-4 lg:py-20 bg-neutral-100 -mt-10 lg:-mt-40 flex justify-center items-center">
      <div className="w-full max-w-[1360px] mx-auto px-4 lg:px-10 pt-10 lg:pt-40 flex justify-center items-center gap-3 lg:gap-16">
        
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            {/* Stat Item */}
            <div className="flex flex-col items-center justify-center text-center flex-1 lg:flex-none">
              <span className="text-P1-Navy text-[10px] lg:text-5xl font-bold font-inter capitalize leading-tight lg:leading-[60px]">
                {stat.value}
              </span>
              <span className="text-P1-Navy text-[8px] lg:text-2xl font-medium font-inter capitalize leading-tight lg:leading-8 whitespace-pre-line">
                {stat.label}
              </span>
            </div>

            {/* Divider */}
            {index < stats.length - 1 && (
              <div className="w-[1px] h-8 lg:h-28 bg-teal-950/25 shrink-0"></div>
            )}
          </React.Fragment>
        ))}

      </div>
    </section>
  );
};

export default AchievementsStats;
