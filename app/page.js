import ContainerBox from "./components/container-box";


export default function Home() {
  return (
    <div className="w-full h-auto">
      <div className="bg-blue-500 p-4 text-white">
        <h1 className="text-2xl font-bold">Full Width, Auto Height Layout</h1>
      </div>
      <div className="p-4">
        <ContainerBox />
      </div>
    </div>
  );
}
