interface TestimonialsCardProps {
  name: string;
  image?: string;
  description: string;
}

function TestimonialsCard(props: TestimonialsCardProps) {
  return (
    <div className="bg-white rounded-lg p-0 overflow-hidden border shadow-md flex flex-col">
      {props.image && (
        <img src={props.image} alt={props.name} className="w-full h-full object-center object-cover" />
      )}

      <div className="p-6 space-y-3 grow">
        <p className="text-xl font-semibold">{props.name}</p>
        <hr />
        <p className="text-justify">{props.description}</p>
      </div>
    </div>
  );
}

export default TestimonialsCard;