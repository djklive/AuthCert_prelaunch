import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ className = '', size = 'default', showText = true }) => {
  const sizeClasses = {
    small: 'h-8 w-8',
    default: 'h-10 w-10',
    large: 'h-12 w-12',
    xlarge: 'h-16 w-16'
  };

  const textSizes = {
    small: 'text-lg',
    default: 'text-xl',
    large: 'text-2xl',
    xlarge: 'text-3xl'
  };

  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        <Image
          src="/Logo.svg"
          alt="AuthCert Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span className={`font-bold text-gray-900 ${textSizes[size]}`}>
          AuthCert
        </span>
      )}
    </Link>
  );
};

export default Logo; 