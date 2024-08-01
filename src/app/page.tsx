import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

const mockURLs = [
  "https://utfs.io/f/d7620bef-5b4e-49ef-a04e-77344f183f5d-he2k7k.png",
  "https://utfs.io/f/e84e8f6f-5168-4d49-9616-3d5fe6283ba2-hz7pha.jpg",
  "https://utfs.io/f/c7dfc923-4ba8-4b50-8147-fc413b29df74-huke0e.jpg",
  "https://utfs.io/f/7dc3215c-ec44-42b8-b6ff-64a44dc805e6-dciyhw.png",
  "https://utfs.io/f/5268686c-d662-465f-a215-1051c63a5fa2-op40bs.png",
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
