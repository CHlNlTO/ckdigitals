import React from "react";

interface AnimatedStatsCardProps {
  title?: string;
  description?: string;
}

export default function AnimatedStatsCard({
  title,
  description,
}: AnimatedStatsCardProps) {
  return (
    <div className="relative rounded-xl p-[1px] bg-gradient-to-br dark:from-white dark:to-[#0c0d0d] from-white to-neutral-200">
      <div className="absolute w-[5px] aspect-square right-[10%] top-[10%] dark:bg-white bg-blue-700 rounded-full z-10 dark:shadow-[0_0_10px_#ffffff] shadow-[0_0_10px_#3b82f6] animate-[moveDot_6s_linear_infinite]" />

      <div className="relative z-[1] p-10 w-full h-full rounded-[9px] border dark:border-[#202222] border-blue-300 bg-gradient-to-br dark:from-[#444444] dark:to-[#0c0d0d] from-white to-neutral-100 flex items-center justify-center flex-col dark:text-white text-blue-900">
        <div className="absolute w-[220px] h-[45px] rounded-[100px] dark:bg-[#c7c7c7] bg-blue-200 opacity-40 dark:shadow-[0_0_50px_#fff] shadow-[0_0_50px_#3b82f6] blur-[10px] origin-[10%] top-0 left-0 rotate-[40deg]" />

        <div className="font-bold text-2xl mb-4 dark:bg-gradient-to-r dark:from-neutral-500 dark:via-white dark:to-black bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 bg-clip-text text-transparent">
          {title ?? title}
        </div>
        <p className="text-sm">{description ?? description}</p>

        {/* Lines */}
        <div className="absolute top-[10%] w-full h-[1px] bg-gradient-to-r dark:from-[#888888] dark:via-[#888888] dark:to-[#1d1f1f] from-blue-300 via-blue-400 to-blue-500" />
        <div className="absolute bottom-[10%] w-full h-[1px] dark:bg-[#2c2c2c] bg-blue-200" />
        <div className="absolute left-[10%] w-[1px] h-full bg-gradient-to-b dark:from-[#747474] dark:via-[#747474] dark:to-[#222424] from-blue-300 via-blue-400 to-blue-500" />
        <div className="absolute right-[10%] w-[1px] h-full dark:bg-[#2c2c2c] bg-blue-200" />
      </div>
    </div>
  );
}
