export const Input = ({ className, ...props }) => (
    <input
      className={`w-full p-2 bg-gray-800 text-white border border-gray-700 rounded ${className}`}
      {...props}
    />
  );
  