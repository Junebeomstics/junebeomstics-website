import Image from 'next/image';

interface ProfileImageProps {
  className?: string;
}

/**
 * The source photo is a tall portrait (792x1055) with the face in the upper
 * third. The image is scaled around the face and shifted so the face sits at
 * the centre of the round crop.
 */
export default function ProfileImage({ className = '' }: ProfileImageProps) {
  return (
    <div className={`relative h-28 w-28 overflow-hidden rounded-full border border-line bg-surface ${className}`}>
      <Image
        src="/profile_image.png"
        alt="Portrait of Junbeom Kwon"
        fill
        priority
        sizes="112px"
        className="object-cover"
        style={{ transform: 'translate(-12%, 7%) scale(2.2)', transformOrigin: '63% 32%' }}
      />
    </div>
  );
}
