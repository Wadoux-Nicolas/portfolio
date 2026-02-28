import Image from 'next/image';

export default function LanguagesHobbiesBlobsBackground() {
  return (
    <>
      <Image
        src="/blobs/blob-6.svg"
        alt=""
        width={432}
        height={228}
        className="absolute left-0 bottom-0 object-cover object-left"
      />
      <Image
        src="/blobs/blob-7.svg"
        alt=""
        width={409}
        height={228}
        className="absolute top-0 right-0 object-cover object-left"
      />
      <Image
        src="/blobs/blob-8.svg"
        alt=""
        width={207}
        height={55}
        className="absolute right-0 bottom-0 object-cover object-left"
      /></>
  );
}