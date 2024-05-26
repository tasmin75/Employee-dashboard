import React from "react";

type CardProps = {
  title: string;
  total: number;
  icon: React.ReactNode;
};

const Card = ({ title, total, icon }: CardProps) => {
  return (
    <div className="border-2 rounded-lg px-3 py-5 flex flex-col gap-3">
      <p className="font-semibold text-lg">{title}</p>
      <div className="flex justify-between items-baseline">
        <span className="text-4xl font-semibold">{total}</span>
        <div className="">{icon}</div>
      </div>
    </div>
  );
};

export default Card;
