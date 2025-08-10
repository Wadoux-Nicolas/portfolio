import Image from 'next/image';

export default function WelcomeBlobsBackground() {
  return (
    <>
      {/* Blobs on right */}
      <Image
        src="/blobs/blob-1.svg"
        alt=""
        width={426}
        height={1018}
        className="absolute top-0 right-0 bottom-0 h-full w-1/3 object-cover object-left"
      />

      {/* Blobs on left */}
      <Image
        src="/blobs/blob-5.svg"
        alt=""
        width={237}
        height={224}
        className="absolute top-0 left-0 size-1/5 object-cover object-bottom-right"
      />

      {/* Blobs on bottom */}
      <Image
        src="/blobs/blob-3.svg"
        alt=""
        width={1440}
        height={140}
        className="absolute bottom-0 left-0 w-full h-auto object-cover"
      />
      <Image
        src="/blobs/blob-4.svg"
        alt=""
        width={1440}
        height={198}
        className="absolute bottom-0 left-0 w-full h-auto object-cover"
      />
      <Image
        src="/blobs/blob-2.svg"
        alt=""
        width={1440}
        height={131}
        className="absolute bottom-0 left-0 w-full h-auto object-cover"
      />
    </>
  );
}
