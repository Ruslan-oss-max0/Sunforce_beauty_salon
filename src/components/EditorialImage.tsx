import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  fallbackTitle?: string;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  fallbackTitle = 'Sunforce Beauty',
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#193C32] via-[#23493E] to-[#315347] p-8 text-center text-[#F4F0E8] ${className}`}
        role="img"
        aria-label={alt}
      >
        <Sparkles className="mb-3 h-6 w-6 text-[#D8CB8E]" aria-hidden="true" />
        <span className="font-editorial text-xl tracking-wide text-[#F4F0E8]">
          {fallbackTitle}
        </span>
        <span className="mt-1 text-xs text-[#D8CB8E]/80">Редакційна візуалізація</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#EAE4D7] ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
