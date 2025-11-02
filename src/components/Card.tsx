interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Card(props: CardProps) {
  return (
    <div className="bg-white rounded-lg p-8 space-y-4 border shadow-md">
      <div className="bg-white w-[50px] h-[50px] flex justify-center items-center rounded-lg border shadow">
        {props.icon}
      </div>

      <p className="text-lg font-semibold">{props.title}</p>
      <p className="text-justify">{props.description}</p>
    </div>
  );
}

export default Card;