const avatarStyles = [
  "from-rose-300 to-orange-300 text-rose-950",
  "from-sky-300 to-indigo-300 text-sky-950",
  "from-emerald-300 to-teal-300 text-emerald-950",
  "from-violet-300 to-fuchsia-300 text-violet-950",
  "from-amber-300 to-lime-300 text-amber-950",
];

type AvatarProps = {
  initials: string;
  index?: number;
  size?: "sm" | "md" | "lg";
};

export function Avatar({ initials, index = 0, size = "md" }: AvatarProps) {
  const sizes = {
    sm: "h-9 w-9 text-xs",
    md: "h-12 w-12 text-sm",
    lg: "h-20 w-20 text-xl",
  };

  return (
    <div
      className={`grid shrink-0 place-items-center rounded-full bg-gradient-to-br ${avatarStyles[index % avatarStyles.length]} ${sizes[size]} font-bold shadow-sm`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
