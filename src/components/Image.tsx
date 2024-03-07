interface PropType {
  desc: string;
  id: string;
}

export default function Image({ desc, id }: PropType) {
  return (
    <div>
      <img src="" id={id} />
      <p>{desc}</p>
    </div>
  );
}
