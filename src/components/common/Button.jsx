export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition duration-300 px-6 py-2 shadow-md"
    >
      {children}
    </button>
  );
}
