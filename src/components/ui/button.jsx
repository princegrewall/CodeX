export const Button = ({ children, className, ...props }) => (
    <button className={`w-full p-2 bg-blue-600 text-white rounded ${className}`} {...props}>
      {children}
    </button>
  );
  