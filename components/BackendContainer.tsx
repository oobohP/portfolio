
type BackendContainerProps = {
  header: string;
  children: React.ReactNode;
};

export const BackendContainer = ({ header, children }: BackendContainerProps) => {
  return (
    <div className="mb-2 mt-2">
      <h1 className="text-lg font-semibold">{header}</h1>
      <p className="ml-2">{children}</p>
    </div>
  );
};
