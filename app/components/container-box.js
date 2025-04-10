import ContainerContent from "./container-content";

export default function ContainerBox() {
  return (
    <div className="w-4/5 h-auto mx-auto flex items-center justify-center border-2 border-blue-500">
      <ContainerContent />
    </div>
  );
}