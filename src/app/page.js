import Image from "next/image";

export default function Home() {
  return (
    <div>
      Home Page
      <Image src="/landscape.avif" alt="" width={500} height={333} />
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, dolor!
      </div>
      <Image
        src="https://images.unsplash.com/photo-1706059924488-29e13a25b07b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
        alt=""
        width={800}
        height={400}
      />
    </div>
  );
}
