import Image from 'next/image';

interface ProfileImageProps {
  className?: string;
}

export default function ProfileImage({ className = '' }: ProfileImageProps) {
  // 프로필 사진이 있으면 사용하고, 없으면 placeholder 사용
  const hasProfileImage = false; // 실제 프로필 사진이 있으면 true로 변경
  
  if (hasProfileImage) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src="/profile.jpg"
          alt="Junbeom Kwon"
          width={200}
          height={200}
          className="rounded-full object-cover border-4 border-white shadow-lg"
          priority
        />
      </div>
    );
  }
  
  // Placeholder: 이니셜을 표시하는 원형 아바타
  return (
    <div className={`flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold shadow-lg ${className}`}>
      <span className="text-4xl md:text-5xl">JK</span>
    </div>
  );
}
