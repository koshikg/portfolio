export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-light dark:bg-dark py-8 text-center transition-colors duration-300">
      <div className="container mx-auto px-4">
        <p className="text-gray-600 dark:text-text-secondary text-sm">
          Designed & Built by Kaushik Gayal
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
          &copy; {currentYear} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
