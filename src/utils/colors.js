export const COLORS = [
  'bg-pink-500',
  'bg-purple-500',
  'bg-indigo-500',
  'bg-blue-500',
  'bg-cyan-500'
];

export const getRandomColor = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};