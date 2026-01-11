import Image from 'next/image';

interface ProfileImageProps {
  className?: string;
}

export default function ProfileImage({ className = '' }: ProfileImageProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 blur-xl opacity-50 -z-10"></div>
      <Image
        src="/profile_image.png"
        alt="Junbeom Kwon"
        width={200}
        height={200}
        className="rounded-full object-cover border-4 border-white shadow-2xl ring-4 ring-white/50"
        priority
      />
    </div>
  );
}
