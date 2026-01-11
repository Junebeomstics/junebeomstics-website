import Image from 'next/image';

interface ProfileImageProps {
  className?: string;
}

export default function ProfileImage({ className = '' }: ProfileImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/profile_image.png"
        alt="Junbeom Kwon"
        width={200}
        height={200}
        className="rounded-full object-cover border-4 border-white shadow-lg"
        priority
      />
    </div>
  );
}
